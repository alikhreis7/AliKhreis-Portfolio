import { NextResponse } from 'next/server';
import { Client } from '@notionhq/client';
import type { 
  DatabaseObjectResponse,
  PageObjectResponse, 
  QueryDatabaseResponse 
} from '@notionhq/client/build/src/api-endpoints';

// Try both possible environment variable names for backwards compatibility
const NOTION_TOKEN = process.env.NOTION_INTEGRATION_TOKEN || process.env.NOTION_OAUTH_CLIENT_SECRET || process.env.NOTION_API_KEY;
const DATABASE_ID = process.env.NOTION_DATABASE_ID;

// Add console log to check environment variables
console.log('Notion Token available:', !!NOTION_TOKEN);
console.log('Notion Token first 10 chars:', NOTION_TOKEN?.substring(0, 10));
console.log('Notion Database ID available:', !!DATABASE_ID);
console.log('Notion Database ID:', DATABASE_ID);

// Initialize the Notion client
const notion = new Client({
  auth: NOTION_TOKEN,
});

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    console.log('API route called with id:', id);
    
    // If ID is provided, fetch specific post
    if (id) {
      return getPageContent(id);
    }
    
    // Otherwise, fetch all posts
    return getAllPosts();
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error in main GET handler:', error);
    return NextResponse.json(
      { error: 'Error processing request', message: errorMessage },
      { status: 500 }
    );
  }
}

async function getAllPosts() {
  try {
    if (!NOTION_TOKEN || !DATABASE_ID) {
      console.error('Missing Notion credentials:', {
        token: !!NOTION_TOKEN,
        databaseId: !!DATABASE_ID
      });
      return NextResponse.json(
        { error: 'Notion API configuration missing' }, 
        { status: 500 }
      );
    }
    
    const databaseId = DATABASE_ID;
    
    console.log('Querying Notion database with ID:', databaseId);
    
    try {
      // First try to retrieve the database to check if we can access it
      try {
        const database = await notion.databases.retrieve({
          database_id: databaseId
        }) as DatabaseObjectResponse;
        
        console.log('Successfully retrieved database info');
        const dbTitle = 'title' in database && Array.isArray(database.title) && database.title.length > 0
          ? database.title[0].plain_text
          : 'No title';
        console.log('Database title:', dbTitle);
        console.log('Database properties:', Object.keys(database.properties));
      } catch (dbError) {
        const dbErrorMsg = dbError instanceof Error ? dbError.message : 'Unknown error';
        console.error('Failed to retrieve database:', dbErrorMsg);
      }
      
      // Continue with original query
      const response: QueryDatabaseResponse = await notion.databases.query({
        database_id: databaseId,
        sorts: [
          {
            property: 'Date',
            direction: 'descending',
          },
        ],
      });

      console.log('Notion query successful, results:', response.results.length);
      
      if (!response.results || response.results.length === 0) {
        console.log('No results found in Notion database');
        return NextResponse.json([]);
      }
      
      // Check the first result to debug
      const firstResult = response.results[0];
      if ('properties' in firstResult) {
        console.log('First result properties:', Object.keys(firstResult.properties));
      }
      
      const posts = await Promise.all(
        response.results.map(async (page) => {
          try {
            // Type guard to ensure we're working with a PageObjectResponse
            if (!('properties' in page)) {
              throw new Error('Invalid page object');
            }

            const pageObj = page as PageObjectResponse;
            
            // Extract title
            const titleProp = pageObj.properties.Name;
            const title = titleProp && 'title' in titleProp && titleProp.title.length > 0
              ? titleProp.title[0].plain_text
              : 'Untitled';
            
            // Extract date
            let date = new Date().toISOString();
            try {
              const dateProp = pageObj.properties.Date;
              if (dateProp && 'date' in dateProp && dateProp.date) {
                date = dateProp.date.start;
              } else if ('created_time' in pageObj) {
                date = pageObj.created_time;
              }
            } catch (e) {
              const msg = e instanceof Error ? e.message : 'Unknown error';
              console.log('Error extracting date:', msg);
            }
            
            // Extract description
            let description = '';
            try {
              const summaryProp = pageObj.properties['Content Summary'];
              if (summaryProp && 'rich_text' in summaryProp && summaryProp.rich_text.length > 0) {
                description = summaryProp.rich_text[0].plain_text;
              } else {
                const descProp = pageObj.properties.Description;
                if (descProp && 'rich_text' in descProp && descProp.rich_text.length > 0) {
                  description = descProp.rich_text[0].plain_text;
                }
              }
            } catch (e) {
              const msg = e instanceof Error ? e.message : 'Unknown error';
              console.log('Error extracting description:', msg);
            }
            
            // Get cover image if available
            let cover: string | null = null;
            try {
              if ('cover' in pageObj && pageObj.cover) {
                if (pageObj.cover.type === 'external') {
                  cover = pageObj.cover.external.url;
                } else if (pageObj.cover.type === 'file') {
                  cover = pageObj.cover.file.url;
                }
              } else {
                const featuredProp = pageObj.properties['Featured Image'];
                if (featuredProp && 'files' in featuredProp && featuredProp.files.length > 0) {
                  const file = featuredProp.files[0];
                  if ('file' in file) {
                    cover = file.file.url;
                  } else if ('external' in file) {
                    cover = file.external.url;
                  }
                }
              }
            } catch (e) {
              const msg = e instanceof Error ? e.message : 'Unknown error';
              console.log('Error extracting cover:', msg);
            }

            return {
              id: pageObj.id,
              title,
              date,
              description,
              cover,
              slug: title.toLowerCase().replace(/\s+/g, '-'),
            };
          } catch (err) {
            console.error('Error processing page:', err);
            return {
              id: 'id' in page ? page.id : 'unknown',
              title: 'Error loading post',
              date: new Date().toISOString(),
              description: 'There was an error loading this post',
              cover: null,
              slug: 'error',
            };
          }
        })
      );

      return NextResponse.json(posts);
    } catch (queryError) {
      const qerrMsg = queryError instanceof Error ? queryError.message : 'Unknown error';
      console.error('Notion query error:', queryError);
      
      // Return more detailed error info
      return NextResponse.json(
        { 
          error: 'Failed to query Notion database',
          message: qerrMsg
        }, 
        { status: 500 }
      );
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error in getAllPosts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch posts', message: errorMessage }, 
      { status: 500 }
    );
  }
}

async function getPageContent(id: string) {
  if (!id) {
    return NextResponse.json(
      { error: 'Post ID is required' }, 
      { status: 400 }
    );
  }

  try {
    console.log('Fetching Notion page with ID:', id);
    
    // Use the official Notion API to get the page and its blocks
    const page = await notion.pages.retrieve({ page_id: id });
    
    // Get all blocks (content) of the page
    const blocks = await notion.blocks.children.list({ 
      block_id: id,
      page_size: 100 
    });
    
    console.log('Successfully fetched page and blocks');
    
    // Return the page data and blocks
    return NextResponse.json({
      page,
      blocks: blocks.results
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error fetching page content:', error);
    return NextResponse.json(
      { error: 'Failed to fetch post content', message: errorMessage }, 
      { status: 500 }
    );
  }
}

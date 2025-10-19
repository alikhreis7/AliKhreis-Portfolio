import { Client } from '@notionhq/client'
import { NotionAPI } from 'notion-client'

// Try multiple possible environment variable names for backwards compatibility
const NOTION_TOKEN = process.env.NOTION_INTEGRATION_TOKEN || process.env.NOTION_OAUTH_CLIENT_SECRET || process.env.NOTION_API_KEY
const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID

// Check if environment variables are set
if (!NOTION_TOKEN) {
  console.error('NOTION_INTEGRATION_TOKEN (or NOTION_OAUTH_CLIENT_SECRET/NOTION_API_KEY) is not set in environment variables')
}

if (!NOTION_DATABASE_ID) {
  console.error('NOTION_DATABASE_ID is not set in environment variables')
}

const notion = new Client({
  auth: NOTION_TOKEN,
})

const notionX = new NotionAPI()

export async function getNotionData() {
  try {
    // Log for debugging
    console.log('Fetching Notion data with database ID:', NOTION_DATABASE_ID)
    
    const response = await notion.databases.query({
      database_id: NOTION_DATABASE_ID,
      sorts: [
        {
          property: 'Date',
          direction: 'descending',
        },
      ],
    })

    console.log('Notion API response received:', response.results.length, 'results')

    return Promise.all(
      response.results.map(async (page) => {
        try {
          // Get page properties
          const title = page.properties.Name?.title[0]?.plain_text || 'Untitled'
          const date = page.properties.Date?.date?.start || page.created_time
          const description = page.properties['Content Summary']?.rich_text[0]?.plain_text || ''
          
          // Get cover image if available
          let cover = null
          if (page.cover) {
            cover = page.cover.type === 'external' 
              ? page.cover.external.url
              : page.cover.file.url
          } else if (page.properties['Featured Image']?.files?.length > 0) {
            const file = page.properties['Featured Image'].files[0]
            cover = file.type === 'external' ? file.external.url : file.file.url
          }

          return {
            id: page.id,
            title,
            date,
            description,
            cover,
            slug: title.toLowerCase().replace(/\s+/g, '-'),
          }
        } catch (err) {
          console.error('Error processing page:', err)
          return {
            id: page.id,
            title: 'Error loading post',
            date: new Date().toISOString(),
            description: 'There was an error loading this post',
            cover: null,
            slug: 'error',
          }
        }
      })
    )
  } catch (error) {
    console.error('Error fetching Notion data:', error)
    console.error('Error details:', error.message, error.code)
    return []
  }
}

export async function getPageContent(pageId) {
  try {
    console.log('Fetching page content for ID:', pageId)
    const recordMap = await notionX.getPage(pageId)
    return recordMap
  } catch (error) {
    console.error('Error fetching page content:', error)
    return null
  }
} 
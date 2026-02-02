'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { BookOpen, Github, Linkedin, Mail, Download } from 'lucide-react'
import { Navigation } from '../../components/Navigation'
import { useLanguage } from '../../components/LanguageProvider'

type RichText = {
  plain_text: string;
}

type NotionBlock = {
  type: string;
  id: string;
  paragraph?: { rich_text: RichText[] };
  heading_1?: { rich_text: RichText[] };
  heading_2?: { rich_text: RichText[] };
  heading_3?: { rich_text: RichText[] };
  bulleted_list_item?: { rich_text: RichText[] };
  numbered_list_item?: { rich_text: RichText[] };
  quote?: { rich_text: RichText[] };
  code?: { rich_text: RichText[] };
  callout?: { rich_text: RichText[] };
  image?: { file?: { url: string }, external?: { url: string } };
  divider?: Record<string, never>;
  [key: string]: unknown;
}

type BlogData = {
  page: {
    id: string;
    properties: Record<string, unknown>;
  };
  blocks: NotionBlock[];
}

export default function BlogPost() {
  const { t } = useLanguage()
  const { id } = useParams()
  const [blogData, setBlogData] = useState<BlogData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPageContent() {
      try {
        console.log('Fetching page content for ID:', id)
        const response = await fetch(`/api/notion?id=${id}`)
        
        if (!response.ok) {
          throw new Error(`API returned ${response.status}: ${response.statusText}`)
        }
        
        const data = await response.json()
        
        if (data.error) {
          throw new Error(data.error)
        }
        
        setBlogData(data)
        setError(null)
      } catch (error) {
        console.error('Error fetching page content:', error)
        setError('Failed to load blog post. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchPageContent()
    }
  }, [id])

  // Function to render different Notion block types
  const renderBlock = (block: NotionBlock) => {
    const { type } = block;
    
    switch (type) {
      case 'paragraph':
        return <p className="text-gray-800 dark:text-gray-200">{block.paragraph?.rich_text?.map((t) => t.plain_text).join('') || ''}</p>;

      case 'heading_1':
        return <h1 className="text-4xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">{block.heading_1?.rich_text?.map((t) => t.plain_text).join('') || ''}</h1>;

      case 'heading_2':
        return <h2 className="text-3xl font-bold mt-6 mb-3 text-gray-900 dark:text-white">{block.heading_2?.rich_text?.map((t) => t.plain_text).join('') || ''}</h2>;

      case 'heading_3':
        return <h3 className="text-2xl font-bold mt-4 mb-2 text-gray-900 dark:text-white">{block.heading_3?.rich_text?.map((t) => t.plain_text).join('') || ''}</h3>;

      case 'bulleted_list_item':
        return <li className="ml-6 list-disc text-gray-800 dark:text-gray-200">{block.bulleted_list_item?.rich_text?.map((t) => t.plain_text).join('') || ''}</li>;

      case 'numbered_list_item':
        return <li className="ml-6 list-decimal text-gray-800 dark:text-gray-200">{block.numbered_list_item?.rich_text?.map((t) => t.plain_text).join('') || ''}</li>;

      case 'quote':
        return <blockquote className="border-l-4 border-yellow-400 dark:border-yellow-500 pl-4 italic text-gray-700 dark:text-gray-300">{block.quote?.rich_text?.map((t) => t.plain_text).join('') || ''}</blockquote>;

      case 'code':
        return <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto"><code className="text-gray-800 dark:text-gray-200">{block.code?.rich_text?.map((t) => t.plain_text).join('') || ''}</code></pre>;

      case 'callout':
        return <div className="bg-gray-50 dark:bg-gray-800 border-l-4 border-blue-400 dark:border-blue-500 p-4 rounded text-gray-800 dark:text-gray-200">{block.callout?.rich_text?.map((t) => t.plain_text).join('') || ''}</div>;

      case 'image':
        // Handle Notion image blocks
        const imageData = block.image as { file?: { url: string }, external?: { url: string } };
        const imageUrl = imageData?.file?.url || imageData?.external?.url;
        if (imageUrl) {
          return (
            <div className="my-6 flex justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={imageUrl} alt="Content" className="max-w-2xl w-full rounded-lg shadow-lg dark:shadow-xl dark:shadow-black/30" />
            </div>
          );
        }
        return null;

      case 'divider':
        return <hr className="my-8 border-t-2 border-gray-200 dark:border-gray-700" />;
      
      default:
        return null; // Don't show unsupported block types
    }
  };

  return (
    <div className="min-h-screen w-full bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-900 dark:to-slate-900 transition-colors duration-300">
      {/* Header */}
      <div className="container mx-auto px-4 py-8 flex justify-between items-center">
        <Link href="/blog" className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
          <span className="text-lg">{t('blogPost.backToResearch')}</span>
        </Link>
        <div className="flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-blue-500" />
          <span className="font-semibold text-gray-800 dark:text-white">{t('blogPost.research')}</span>
        </div>
      </div>

      {/* Blog Post Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {loading ? (
            <div className="text-center py-20">
              <p className="text-gray-600 dark:text-gray-400">{t('blogPost.loadingPost')}</p>
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <h1 className="text-2xl font-bold mb-4 text-red-600 dark:text-red-400">{t('common.error')}</h1>
              <p className="text-gray-600 dark:text-gray-400">{error}</p>
              <p className="mt-4">
                <button 
                  onClick={() => window.location.reload()} 
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                >
                  {t('common.tryAgain')}
                </button>
              </p>
            </div>
          ) : blogData ? (
            <div className="prose prose-lg max-w-none dark:prose-invert">
              {blogData.blocks.map((block, index) => (
                <div key={block.id || index} className="mb-4">
                  {renderBlock(block)}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">{t('blogPost.postNotFound')}</h1>
              <p className="text-gray-600 dark:text-gray-400">
                {t('blogPost.postNotFoundDesc')}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Get in touch */}
      <div className="relative z-10 container mx-auto px-4 pb-24 mt-16">
        <div className="flex flex-wrap justify-center items-center gap-4">
          <span className="font-medium text-gray-600 dark:text-gray-300">{t('common.getInTouch')}</span>
          <Link 
            href="https://github.com/alikhreis7" 
            target="_blank"
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <Github className="w-6 h-6 text-gray-700 dark:text-white" />
          </Link>
          <Link 
            href="https://www.linkedin.com/in/alikhreis/" 
            target="_blank"
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <Linkedin className="w-6 h-6 text-gray-700 dark:text-white" />
          </Link>
          <Link 
            href="mailto:alikhreis12@gmail.com"
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <Mail className="w-6 h-6 text-gray-700 dark:text-white" />
          </Link>
          <Link 
            href="/Ali-K-Resume.pdf"
            target="_blank"
            download
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium transition-all hover:scale-105"
          >
            <Download className="w-5 h-5" />
            {t('common.downloadResume')}
          </Link>
        </div>
      </div>

      <Navigation currentPath="/blog" />
    </div>
  )
}

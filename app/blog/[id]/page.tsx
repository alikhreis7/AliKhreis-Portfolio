'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { BookOpen, Github, Linkedin, Mail, Download } from 'lucide-react'

type NotionBlock = {
  type: string;
  [key: string]: any;
}

type BlogData = {
  page: any;
  blocks: NotionBlock[];
}

export default function BlogPost() {
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
  const renderBlock = (block: any) => {
    const { type } = block;
    
    switch (type) {
      case 'paragraph':
        return <p className="text-gray-800">{block.paragraph?.rich_text?.map((t: any) => t.plain_text).join('') || ''}</p>;
      
      case 'heading_1':
        return <h1 className="text-4xl font-bold mt-8 mb-4">{block.heading_1?.rich_text?.map((t: any) => t.plain_text).join('') || ''}</h1>;
      
      case 'heading_2':
        return <h2 className="text-3xl font-bold mt-6 mb-3">{block.heading_2?.rich_text?.map((t: any) => t.plain_text).join('') || ''}</h2>;
      
      case 'heading_3':
        return <h3 className="text-2xl font-bold mt-4 mb-2">{block.heading_3?.rich_text?.map((t: any) => t.plain_text).join('') || ''}</h3>;
      
      case 'bulleted_list_item':
        return <li className="ml-6 list-disc">{block.bulleted_list_item?.rich_text?.map((t: any) => t.plain_text).join('') || ''}</li>;
      
      case 'numbered_list_item':
        return <li className="ml-6 list-decimal">{block.numbered_list_item?.rich_text?.map((t: any) => t.plain_text).join('') || ''}</li>;
      
      case 'quote':
        return <blockquote className="border-l-4 border-yellow-400 pl-4 italic">{block.quote?.rich_text?.map((t: any) => t.plain_text).join('') || ''}</blockquote>;
      
      case 'code':
        return <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto"><code>{block.code?.rich_text?.map((t: any) => t.plain_text).join('') || ''}</code></pre>;
      
      case 'callout':
        return <div className="bg-gray-50 border-l-4 border-blue-400 p-4 rounded">{block.callout?.rich_text?.map((t: any) => t.plain_text).join('') || ''}</div>;
      
      default:
        return <p className="text-gray-400 text-sm">Unsupported block type: {type}</p>;
    }
  };

  return (
    <div className="min-h-screen w-full bg-white">
      {/* Header */}
      <div className="container mx-auto px-4 py-8 flex justify-between items-center">
        <Link href="/blog" className="flex items-center gap-2 text-black hover:text-gray-600">
          <span>← Back to blog</span>
        </Link>
        <div className="flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-yellow-400" />
          <span className="font-medium">My Blog</span>
        </div>
      </div>

      {/* Blog Post Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {loading ? (
            <div className="text-center py-20">
              <p>Loading post...</p>
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <h1 className="text-2xl font-bold mb-4 text-red-600">Error</h1>
              <p className="text-gray-600">{error}</p>
              <p className="mt-4">
                <button 
                  onClick={() => window.location.reload()} 
                  className="px-4 py-2 bg-yellow-400 text-white rounded-md hover:bg-yellow-500"
                >
                  Try Again
                </button>
              </p>
            </div>
          ) : blogData ? (
            <div className="prose prose-lg max-w-none">
              {blogData.blocks.map((block: any, index: number) => (
                <div key={block.id || index} className="mb-4">
                  {renderBlock(block)}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
              <p className="text-gray-600">
                The post you're looking for doesn't exist or has been removed.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Get in touch */}
      <div className="relative z-10 container mx-auto px-4 mb-20">
        <div className="flex justify-center items-center gap-6">
          <span className="font-medium text-gray-800">Get in touch:</span>
          <Link 
            href="https://github.com/alikhreis7" 
            target="_blank"
            className="p-3 rounded-full hover:bg-gray-100 transition-colors"
          >
            <Github className="w-6 h-6" />
          </Link>
          <Link 
            href="https://www.linkedin.com/in/alikhreis/" 
            target="_blank"
            className="p-3 rounded-full hover:bg-gray-100 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </Link>
          <Link 
            href="mailto:alikhreis12@gmail.com"
            className="p-3 rounded-full hover:bg-gray-100 transition-colors"
          >
            <Mail className="w-6 h-6" />
          </Link>
          <Link 
            href="/Ali-K-Resume.pdf" 
            target="_blank" 
            download
            className="p-3 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Download Resume"
          >
            <Download className="w-6 h-6" />
          </Link>
        </div>
      </div>

      {/* Sticky Navigation */}
      <div className="fixed bottom-4 left-0 right-0 flex justify-center z-50">
        <div className="max-w-2xl w-full mx-4">
          <nav className="bg-gradient-to-b from-white/60 to-white/30 backdrop-blur-md rounded-full p-2 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.1)] border border-white/20">
            <ul className="flex items-center justify-center w-full gap-2 md:gap-6">
              <Image
                src="/portfolio.JPG"
                alt="Ali Khries"
                width={32}
                height={32}
                className="w-6 h-6 md:w-8 md:h-8 rounded-full object-cover"
              />
              <li>
                <Link href="/" className="px-2 md:px-4 py-2 rounded-full hover:bg-gray-100/80 text-gray-800 transition-colors text-sm md:text-base font-medium">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="px-2 md:px-4 py-2 rounded-full hover:bg-gray-100/80 text-gray-800 transition-colors text-sm md:text-base font-medium">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="px-2 md:px-4 py-2 rounded-full hover:bg-gray-100/80 text-gray-800 transition-colors text-sm md:text-base font-medium">
                  Research & Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="px-2 md:px-4 py-2 rounded-full hover:bg-gray-100/80 text-gray-800 transition-colors text-sm md:text-base font-medium">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
} 
'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Github, Linkedin, Mail, BookOpen, Download, FileText, FlaskConical } from 'lucide-react'
import { motion } from 'framer-motion'

// Define the Post type to fix type errors
type Post = {
  id: string;
  title: string;
  date: string;
  description: string;
  cover: string | null;
  slug: string;
}

type ErrorResponse = {
  error: string;
  message?: string;
  code?: string;
  status?: number;
}

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [errorDetails, setErrorDetails] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<'blogs' | 'research'>('blogs')

  // Categorize posts - default to Blogs, only mark as Research if explicitly research-focused
  // Notion posts are integrated and default to Blogs unless clearly research-oriented
  const isResearchPost = (post: Post) => {
    // Only categorize as research if title explicitly contains research-focused terms
    const researchKeywords = ['research paper', 'research study', 'academic research', 'scientific study', 'peer-reviewed']
    const text = `${post.title} ${post.description}`.toLowerCase()
    // Be more conservative - require explicit research terminology
    return researchKeywords.some(keyword => text.includes(keyword))
  }

  // Default all Notion posts to Blogs unless explicitly research-focused
  const blogPosts = posts.filter(post => !isResearchPost(post))
  const researchPosts = posts.filter(post => isResearchPost(post))

  useEffect(() => {
    async function fetchPosts() {
      try {
        console.log('Fetching posts from API...')
        const response = await fetch('/api/notion')
        
        console.log('Response status:', response.status, response.statusText)
        
        if (!response.ok) {
          const errorData = await response.json().catch(() => null) as ErrorResponse | null
          console.error('Error response:', errorData)
          
          if (errorData) {
            throw new Error(`${errorData.error}${errorData.message ? ': ' + errorData.message : ''}`)
          } else {
            throw new Error(`API returned ${response.status}: ${response.statusText}`)
          }
        }
        
        const data = await response.json()
        
        console.log('Data type:', typeof data)
        console.log('Is array:', Array.isArray(data))
        console.log('Data preview:', data && Array.isArray(data) ? data.slice(0, 2) : data)
        
        if (data.error) {
          throw new Error(data.error)
        }
        
        if (!Array.isArray(data)) {
          console.error('Expected array but got:', data)
          throw new Error('Invalid response format from API')
        }
        
        setPosts(data as Post[])
        setError(null)
        setErrorDetails(null)
      } catch (error) {
        const errorMsg = error instanceof Error ? error.message : 'Unknown error';
        console.error('Error fetching blog posts:', error)
        setError('Failed to load blog posts. Please try again later.')
        setErrorDetails(errorMsg)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  const renderPosts = (postsToRender: Post[]) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {postsToRender.map((post, index) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Link 
            href={`/blog/${post.id}`} 
            className="group block"
          >
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl border border-gray-100 hover:border-gray-200 transition-all duration-300">
              {post.cover && (
                <div className="aspect-video w-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={post.cover} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-6">
                <p className="text-xs text-gray-500 mb-3 font-medium">
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 line-clamp-3 text-sm leading-relaxed">
                  {post.description}
                </p>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  )

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Header */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
            <span className="text-lg">← Back to home</span>
          </Link>
          <div className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-blue-500" />
            <span className="font-semibold text-xl">Blogs & Research</span>
          </div>
        </div>

        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blogs & Research</h1>
          <p className="text-gray-600 text-lg">Explore my thoughts, insights, and research findings</p>
        </motion.div>

        {/* Tabs */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => setActiveTab('blogs')}
              className={`px-8 py-4 rounded-full font-semibold transition-all flex items-center gap-3 ${
                activeTab === 'blogs'
                  ? 'bg-blue-500 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
              }`}
            >
              <FileText className="w-5 h-5" />
              Blogs ({blogPosts.length})
            </button>
            <button
              onClick={() => setActiveTab('research')}
              className={`px-8 py-4 rounded-full font-semibold transition-all flex items-center gap-3 ${
                activeTab === 'research'
                  ? 'bg-purple-500 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
              }`}
            >
              <FlaskConical className="w-5 h-5" />
              Research ({researchPosts.length})
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 pb-12">
          <div className="max-w-4xl mx-auto">
            {loading ? (
              <div className="text-center py-20">
                <p className="text-gray-600">Loading posts...</p>
              </div>
            ) : error ? (
              <div className="text-center py-20">
                <h1 className="text-2xl font-bold mb-4 text-red-600">Error</h1>
                <p className="text-gray-700 mb-2">{error}</p>
                {errorDetails && (
                  <p className="text-sm text-gray-500 mb-4 max-w-md mx-auto">
                    Details: {errorDetails}
                  </p>
                )}
                <button 
                  onClick={() => window.location.reload()} 
                  className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors mt-4"
                >
                  Try Again
                </button>
              </div>
            ) : activeTab === 'blogs' ? (
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
                    <FileText className="w-8 h-8 text-blue-500" />
                    Blog Posts
                  </h2>
                  <p className="text-gray-600 mb-2">Personal insights, tutorials, and thoughts</p>
                  <p className="text-xs text-gray-500 italic">
                    Content synced from Notion workspace
                  </p>
                </div>
                {blogPosts.length > 0 ? (
                  renderPosts(blogPosts)
                ) : (
                  <div className="text-center py-20 bg-white rounded-2xl border border-gray-200">
                    <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2 text-gray-700">No Blog Posts Yet</h3>
                    <p className="text-gray-500">Check back soon for new blog content!</p>
                  </div>
                )}
              </div>
            ) : (
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
                    <FlaskConical className="w-8 h-8 text-purple-500" />
                    Research Papers & Studies
                  </h2>
                  <p className="text-gray-600">Academic research, analysis, and findings</p>
                </div>
                {researchPosts.length > 0 ? (
                  renderPosts(researchPosts)
                ) : (
                  <div className="text-center py-20 bg-white rounded-2xl border border-gray-200">
                    <FlaskConical className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2 text-gray-700">No Research Posts Yet</h3>
                    <p className="text-gray-500">Check back soon for new research content!</p>
                  </div>
                )}
              </div>
            )}
          </div>
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
                src="/profile-pic.png"
                alt="Ali Khreis"
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
                  Blogs & Research
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
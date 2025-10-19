'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Github, Linkedin, Mail, BookOpen, Download } from 'lucide-react'

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

  return (
    <div className="min-h-screen w-full bg-white">
      {/* Header */}
      <div className="container mx-auto px-4 py-8 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-black hover:text-gray-600">
          <span>← Back to home</span>
        </Link>
        <div className="flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-yellow-400" />
          <span className="font-medium">My Blog</span>
        </div>
      </div>

      {/* Blog Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {loading ? (
            <div className="text-center py-20">
              <p>Loading blog posts...</p>
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
              <p className="mt-4">
                <button 
                  onClick={() => window.location.reload()} 
                  className="px-4 py-2 bg-yellow-400 text-white rounded-md hover:bg-yellow-500"
                >
                  Try Again
                </button>
              </p>
            </div>
          ) : posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map((post) => (
                <Link 
                  href={`/blog/${post.id}`} 
                  key={post.id}
                  className="group"
                >
                  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    {post.cover && (
                      <div className="aspect-video w-full overflow-hidden">
                        <img 
                          src={post.cover} 
                          alt={post.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <p className="text-sm text-gray-500 mb-2">
                        {new Date(post.date).toLocaleDateString()}
                      </p>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 line-clamp-3">
                        {post.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h1 className="text-4xl font-bold mb-4">No Blog Posts Found</h1>
              <p className="text-gray-600">
                Check back soon for new content!
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
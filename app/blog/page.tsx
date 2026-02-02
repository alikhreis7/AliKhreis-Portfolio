'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Github, Linkedin, Mail, BookOpen, Download, FileText, FlaskConical, ExternalLink, Award, GraduationCap } from 'lucide-react'
import { motion } from 'framer-motion'
import { Navigation } from '../components/Navigation'
import { useLanguage } from '../components/LanguageProvider'

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
  const { t } = useLanguage()
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

  // Published Research Papers (arXiv)
  const publishedPapers = [
    {
      id: 'arxiv-2601-15539',
      titleKey: 'papers.skinLesion.title',
      authors: 'Ali Khreis, Ro\'Yah Radaideh, Quinn McGill',
      date: 'January 21, 2026',
      abstractKey: 'papers.skinLesion.abstract',
      arxivId: '2601.15539',
      arxivUrl: 'https://arxiv.org/abs/2601.15539',
      pdfUrl: 'https://arxiv.org/pdf/2601.15539',
      subjects: ['Image and Video Processing', 'Computer Vision', 'Machine Learning'],
      venue: 'arXiv (eess.IV)'
    },
    {
      id: 'arxiv-2601-11427',
      titleKey: 'papers.courseRecommend.title',
      authors: 'Ali Khreis, Anthony Nasr, Yusuf Hilal',
      date: 'January 16, 2026',
      abstractKey: 'papers.courseRecommend.abstract',
      arxivId: '2601.11427',
      arxivUrl: 'https://arxiv.org/abs/2601.11427',
      pdfUrl: 'https://arxiv.org/pdf/2601.11427',
      subjects: ['Information Retrieval', 'Computation and Language'],
      venue: 'arXiv (cs.IR)'
    }
  ]

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
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden hover:shadow-xl dark:shadow-gray-900/30 border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 transition-all duration-300">
              {post.cover && (
                <div className="aspect-video w-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={post.cover} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-6">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 font-medium">
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
                <h3 className="text-xl font-bold mb-3 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 line-clamp-3 text-sm leading-relaxed">
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
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Header */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <Link href="/" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
            <span className="text-lg">{t('research.backToHome')}</span>
          </Link>
          <div className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-blue-500" />
            <span className="font-semibold text-xl dark:text-white">{t('research.title')}</span>
          </div>
        </div>

        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">{t('research.title')}</h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">{t('research.subtitle')}</p>
        </motion.div>

        {/* Google Scholar Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <a
            href="https://scholar.google.com/citations?user=GG73TBgAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
              
                <div className="relative flex flex-col md:flex-row items-center gap-6">
                {/* Icon */}
                <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <GraduationCap className="w-10 h-10 md:w-12 md:h-12 text-white" />
                </div>
                
                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {t('research.googleScholar')}
                  </h3>
                  <p className="text-blue-100 text-sm md:text-base mb-3">
                    {t('research.scholarDesc')}
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                      {t('scholar.machineLearning')}
                    </span>
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                      {t('scholar.artificialIntelligence')}
                    </span>
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                      {t('scholar.uottawa')}
                    </span>
                  </div>
                </div>
                
                {/* Arrow */}
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <ExternalLink className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                </div>
              </div>
            </div>
          </a>
        </motion.div>

        {/* Tabs */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => setActiveTab('blogs')}
              className={`px-8 py-4 rounded-full font-semibold transition-all flex items-center gap-3 ${
                activeTab === 'blogs'
                  ? 'bg-blue-500 text-white shadow-lg scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-sm'
              }`}
            >
              <FileText className="w-5 h-5" />
              {t('research.blogs')} ({blogPosts.length})
            </button>
            <button
              onClick={() => setActiveTab('research')}
              className={`px-8 py-4 rounded-full font-semibold transition-all flex items-center gap-3 ${
                activeTab === 'research'
                  ? 'bg-purple-500 text-white shadow-lg scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-sm'
              }`}
            >
              <FlaskConical className="w-5 h-5" />
              {t('research.researchTab')} ({publishedPapers.length + researchPosts.length})
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 pb-12">
          <div className="max-w-4xl mx-auto">
            {loading ? (
              <div className="text-center py-20">
                <p className="text-gray-600 dark:text-gray-400">{t('common.loading')}</p>
              </div>
            ) : error ? (
              <div className="text-center py-20">
                <h1 className="text-2xl font-bold mb-4 text-red-600 dark:text-red-400">Error</h1>
                <p className="text-gray-700 dark:text-gray-300 mb-2">{error}</p>
                {errorDetails && (
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 max-w-md mx-auto">
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
                  <h2 className="text-3xl font-bold mb-2 flex items-center gap-3 dark:text-white">
                    <FileText className="w-8 h-8 text-blue-500" />
                    {t('research.blogPosts')}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">{t('research.blogDescription')}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 italic">
                    {t('research.notionIntegrated')}
                  </p>
                </div>
                {blogPosts.length > 0 ? (
                  renderPosts(blogPosts)
                ) : (
                  <div className="text-center py-20 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
                    <FileText className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2 text-gray-700 dark:text-gray-200">{t('research.noBlogPosts')}</h3>
                    <p className="text-gray-500 dark:text-gray-400">{t('research.stayTuned')}</p>
                  </div>
                )}
              </div>
            ) : (
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-2 flex items-center gap-3 dark:text-white">
                    <FlaskConical className="w-8 h-8 text-purple-500" />
                    {t('research.publishedPapers')}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">{t('research.peerReviewed')}</p>
                </div>

                {/* Published Papers Section */}
                <div className="space-y-6 mb-12">
                  {publishedPapers.map((paper, index) => (
                    <motion.div
                      key={paper.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gradient-to-br from-purple-50 to-white dark:from-purple-900/20 dark:to-gray-800 rounded-2xl border border-purple-100 dark:border-purple-900/30 overflow-hidden hover:shadow-xl dark:shadow-gray-900/30 transition-all duration-300"
                    >
                      <div className="p-6 md:p-8">
                        {/* Header with arXiv badge */}
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <span className="px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full flex items-center gap-1">
                            <Award className="w-3 h-3" />
                            {t('research.published')}
                          </span>
                          <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 text-xs font-semibold rounded-full">
                            {paper.venue}
                          </span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">{paper.date}</span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
                          {t(paper.titleKey)}
                        </h3>

                        {/* Authors */}
                        <p className="text-sm text-purple-600 dark:text-purple-400 font-medium mb-4">
                          {paper.authors}
                        </p>

                        {/* Abstract */}
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                          {t(paper.abstractKey)}
                        </p>

                        {/* Subjects/Tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {paper.subjects.map((subject) => (
                            <span key={subject} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full">
                              {subject}
                            </span>
                          ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-3">
                          <a
                            href={paper.arxivUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-purple-600 text-white rounded-full text-sm font-semibold hover:bg-purple-700 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                            {t('research.viewOnArxiv')}
                          </a>
                          <a
                            href={paper.pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-gray-800 border border-purple-200 dark:border-purple-700 text-purple-700 dark:text-purple-300 rounded-full text-sm font-semibold hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors"
                          >
                            <Download className="w-4 h-4" />
                            {t('research.downloadPdf')}
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Other Research Posts from Notion */}
                {researchPosts.length > 0 && (
                  <div>
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 dark:text-white">
                      <FileText className="w-6 h-6 text-purple-500" />
                      {t('research.otherResearch')}
                    </h3>
                    {renderPosts(researchPosts)}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Get in touch */}
      <div className="relative z-10 container mx-auto px-4 pb-24">
        <div className="flex flex-wrap justify-center items-center gap-4">
          <span className="font-medium text-gray-800 dark:text-gray-300">{t('common.getInTouch')}</span>
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
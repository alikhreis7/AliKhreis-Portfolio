'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useSearchParams, useRouter } from 'next/navigation'
import { Github, Linkedin, Mail, Folder, Download, ArrowRight, Code, Briefcase, Brain, Eye, Bot } from 'lucide-react'
import { motion } from 'framer-motion'
import { Navigation } from '../components/Navigation'

type Project = {
  slug: string
  title: string
  shortDescription: string
  category: string
  developmentType: string
  image: string
  company?: string
  projectType: 'personal' | 'company' | 'ml' | 'mv' | 'genai'
  isPinned?: boolean
}

const allProjects: Project[] = [
  // PINNED: Personal Portfolio - Always First
  {
    slug: 'portfolio',
    title: 'Personal Portfolio 💼',
    shortDescription: 'Personal website built to showcase my work and projects',
    category: 'Frontend Development',
    developmentType: 'Frontend Development',
    image: '/portfoliopic.jpg',
    projectType: 'personal',
    isPinned: true
  },
  // January 2026 - GenAI & Agents Projects (Newest)
  {
    slug: 'sra-intelligence',
    title: 'SRA Intelligence Agent',
    shortDescription: 'AI-powered Security Risk Assessment agent built at Kinaxis Hackathon 2025',
    category: 'GenAI & Agents',
    developmentType: 'GenAI & Agents',
    image: '/sra-intelligence.jpg',
    company: 'Kinaxis',
    projectType: 'genai'
  },
  {
    slug: 'code-review-agent',
    title: 'AI Code Review Agent',
    shortDescription: 'Multi-agent GenAI system using GPT-4o and LangGraph for automated PR analysis',
    category: 'GenAI & Agents',
    developmentType: 'GenAI & Agents',
    image: '/code-review-agent.jpg',
    projectType: 'genai'
  },
  {
    slug: 'genai-policy-agents',
    title: 'Enterprise Policy Intelligence Agent',
    shortDescription: 'Multi-agent GenAI system using RAG and LangGraph for policy decision support',
    category: 'GenAI & Agents',
    developmentType: 'GenAI & Agents',
    image: '/genai-policy-agents.jpg',
    projectType: 'genai'
  },
  {
    slug: 'fair-ai-data',
    title: 'Fair AI Data Preprocessing Toolkit',
    shortDescription: 'Bias mitigation techniques for fair machine learning - ELG 5195 Research Project',
    category: 'GenAI & Agents',
    developmentType: 'GenAI & Agents',
    image: '/fair-ai-data.jpg',
    projectType: 'genai'
  },
  // January 2026 - Machine Learning Projects (Newest)
  {
    slug: 'unsupervisedlearning',
    title: 'Neural Networks & Unsupervised Learning',
    shortDescription: 'Project built during Masters in Applied AI/ML at uOttawa',
    category: 'Machine Learning',
    developmentType: 'Machine Learning',
    image: '/unsupervisedlearning.jpg',
    projectType: 'ml'
  },
  {
    slug: 'neuralnetworks',
    title: 'Neural Networks & Power Forecasting',
    shortDescription: 'Project built during Masters in Applied AI/ML at uOttawa',
    category: 'Machine Learning',
    developmentType: 'Machine Learning',
    image: '/neuralnetworks.jpg',
    projectType: 'ml'
  },
  {
    slug: 'logisticregression',
    title: 'Logistic Regression Classification',
    shortDescription: 'Project built during Masters in Applied AI/ML at uOttawa',
    category: 'Machine Learning',
    developmentType: 'Machine Learning',
    image: '/logisticregression.jpg',
    projectType: 'ml'
  },
  {
    slug: 'linearregression',
    title: 'Linear Regression Machine Learning Model',
    shortDescription: 'Project built during Masters in Applied AI/ML at uOttawa',
    category: 'Machine Learning',
    developmentType: 'Machine Learning',
    image: '/linearregression.jpg',
    projectType: 'ml'
  },
  // January 2026 - Machine Vision Projects (Newest)
  {
    slug: 'mvchallenge',
    title: 'Machine Vision Challenge',
    shortDescription: 'Project built during Masters in Applied AI/ML at uOttawa',
    category: 'Machine Vision',
    developmentType: 'Machine Vision',
    image: '/mvchallenge.jpg',
    projectType: 'mv'
  },
  {
    slug: 'motiondetection',
    title: 'Motion Detection in Image Sequences',
    shortDescription: 'Project built during Masters in Applied AI/ML at uOttawa',
    category: 'Machine Vision',
    developmentType: 'Machine Vision',
    image: '/motiondetection.jpg',
    projectType: 'mv'
  },
  {
    slug: 'edgedetection',
    title: 'Image Filtering & Edge Detection Study',
    shortDescription: 'Project built during Masters in Applied AI/ML at uOttawa',
    category: 'Machine Vision',
    developmentType: 'Machine Vision',
    image: '/edgedetection.jpg',
    projectType: 'mv'
  },
  {
    slug: 'pinholecamera',
    title: 'Color Pinhole Camera Simulator',
    shortDescription: 'Project built during Masters in Applied AI/ML at uOttawa',
    category: 'Machine Vision',
    developmentType: 'Machine Vision',
    image: '/pinholecamera.jpg',
    projectType: 'mv'
  },
  // December 2025
  {
    slug: 'syllabussync',
    title: 'SyllabusSync',
    shortDescription: 'Capstone project built final year during Bachelors in Software Engineering',
    category: 'Full Stack Development',
    developmentType: 'Full Stack Development',
    image: '/project1.jpg',
    projectType: 'personal'
  },
  // May-November 2024
  {
    slug: 'agroclimate',
    title: 'Agroclimate Impact Reporter',
    shortDescription: 'Built during CO-OP at Agriculture and Agri-Food Canada',
    category: 'Full Stack Development',
    developmentType: 'Full Stack Development',
    image: '/agroclimate.jpg',
    company: 'Agriculture and Agri-Food Canada',
    projectType: 'company'
  },
  // October 2023
  {
    slug: 'calculator',
    title: 'Calculator App',
    shortDescription: 'App built second year during Bachelors in Software Engineering',
    category: 'Backend Development',
    developmentType: 'Backend Development',
    image: '/calculator.jpg',
    projectType: 'personal'
  },
  // May-September 2023
  {
    slug: 'cira',
    title: 'Internet Performance Test',
    shortDescription: 'Built during CO-OP at CIRA (Canadian Internet Registration Authority)',
    category: 'Frontend Development',
    developmentType: 'Frontend Development',
    image: '/cira.jpg',
    company: 'CIRA',
    projectType: 'company'
  },
  // June 2023
  {
    slug: 'salon',
    title: 'Elegance Salon',
    shortDescription: 'Project built third year during Bachelors in Software Engineering',
    category: 'Frontend Development',
    developmentType: 'Frontend Development',
    image: '/salon.jpg',
    projectType: 'personal'
  },
  // September 2022 - April 2023
  {
    slug: 'fishingbc',
    title: 'FishingBC App',
    shortDescription: 'Built during CO-OP at Fisheries and Oceans Canada',
    category: 'Full Stack Development',
    developmentType: 'Full Stack Development',
    image: '/fishingbc.jpg',
    company: 'Fisheries and Oceans Canada',
    projectType: 'company'
  }
]

export default function Projects() {
  const searchParams = useSearchParams()
  const router = useRouter()
  
  // Initialize filter directly from URL params (no delay)
  const getInitialFilter = () => {
    const filterParam = searchParams.get('filter')
    if (filterParam && ['all', 'personal', 'company', 'ml', 'mv', 'genai'].includes(filterParam)) {
      return filterParam
    }
    return 'all'
  }
  
  const [projectTypeFilter, setProjectTypeFilter] = useState<string>(getInitialFilter)

  // Sync state when URL changes (for browser back/forward)
  useEffect(() => {
    const filterParam = searchParams.get('filter')
    const newFilter = filterParam && ['all', 'personal', 'company', 'ml', 'mv', 'genai'].includes(filterParam) 
      ? filterParam 
      : 'all'
    if (newFilter !== projectTypeFilter) {
      setProjectTypeFilter(newFilter)
    }
  }, [searchParams, projectTypeFilter])

  // Update URL when filter changes
  const handleFilterChange = (filter: string) => {
    setProjectTypeFilter(filter)
    const newUrl = filter === 'all' ? '/projects' : `/projects?filter=${filter}`
    router.replace(newUrl, { scroll: false })
  }

  // Filter projects but keep pinned portfolio at top
  const filteredProjects = allProjects.filter(project => {
    // Always include pinned projects when showing 'all' or their category
    if (project.isPinned) {
      return projectTypeFilter === 'all' || project.projectType === projectTypeFilter
    }
    // Show projects with company field under both their projectType AND 'company' filter
    if (projectTypeFilter === 'company' && project.company) {
      return true
    }
    return projectTypeFilter === 'all' || project.projectType === projectTypeFilter
  }).sort((a, b) => {
    // Pinned projects always come first
    if (a.isPinned && !b.isPinned) return -1
    if (!a.isPinned && b.isPinned) return 1
    return 0
  })

  const getCategoryBadgeColor = (projectType: string) => {
    switch(projectType) {
      case 'personal':
        return 'bg-yellow-100 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-200'
      case 'company':
        return 'bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200'
      case 'ml':
        return 'bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-200'
      case 'mv':
        return 'bg-teal-100 dark:bg-teal-900/40 text-teal-800 dark:text-teal-200'
      case 'genai':
        return 'bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-200'
      default:
        return 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
    }
  }

  const getProjectIcon = (projectType: string) => {
    switch(projectType) {
      case 'personal':
        return <Code className="w-5 h-5" />
      case 'company':
        return <Briefcase className="w-5 h-5" />
      case 'ml':
        return <Brain className="w-5 h-5" />
      case 'mv':
        return <Eye className="w-5 h-5" />
      case 'genai':
        return <Bot className="w-5 h-5" />
      default:
        return <Folder className="w-5 h-5" />
    }
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Header */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <Link href="/" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
            <span className="text-lg">← Back to home</span>
          </Link>
          <div className="flex items-center gap-2">
            <Folder className="w-6 h-6 text-blue-500" />
            <span className="font-semibold text-xl dark:text-white">My Projects</span>
          </div>
        </div>

        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">Projects</h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Explore my work across different domains and technologies</p>
        </motion.div>

        {/* Filters Section */}
        <div className="mb-12">
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4">Filter by Project Type</h3>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => handleFilterChange('all')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                projectTypeFilter === 'all'
                  ? 'bg-black dark:bg-white text-white dark:text-black shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-sm'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => handleFilterChange('personal')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                projectTypeFilter === 'personal'
                  ? 'bg-yellow-400 text-black shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-yellow-50 dark:hover:bg-yellow-900/30 shadow-sm'
              }`}
            >
              <Code className="w-4 h-4" />
              Academic
            </button>
            <button
              onClick={() => handleFilterChange('company')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                projectTypeFilter === 'company'
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 shadow-sm'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              Company Projects
            </button>
            <button
              onClick={() => handleFilterChange('ml')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                projectTypeFilter === 'ml'
                  ? 'bg-purple-500 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/30 shadow-sm'
              }`}
            >
              <Brain className="w-4 h-4" />
              Machine Learning
            </button>
            <button
              onClick={() => handleFilterChange('mv')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                projectTypeFilter === 'mv'
                  ? 'bg-teal-500 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-teal-50 dark:hover:bg-teal-900/30 shadow-sm'
              }`}
            >
              <Eye className="w-4 h-4" />
              Machine Vision
            </button>
            <button
              onClick={() => handleFilterChange('genai')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                projectTypeFilter === 'genai'
                  ? 'bg-red-500 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-900/30 shadow-sm'
              }`}
            >
              <Bot className="w-4 h-4" />
              GenAI & Agents
            </button>
          </div>
        </div>

        {/* Projects List */}
        <div className="max-w-4xl">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 dark:text-gray-400 text-lg">No projects match your filters</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link 
                    href={`/projects/${project.slug}${projectTypeFilter !== 'all' ? `?from=${projectTypeFilter}` : ''}`} 
                    className="block group"
                  >
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg dark:shadow-gray-900/30 border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 transition-all duration-300">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <div className={`p-2 rounded-lg ${getCategoryBadgeColor(project.projectType)}`}>
                              {getProjectIcon(project.projectType)}
                            </div>
                            <span className={`px-3 py-1 ${getCategoryBadgeColor(project.projectType)} rounded-full text-xs font-semibold`}>
                              {project.category}
                            </span>
                            {project.company && (
                              <span className="text-sm text-gray-500 dark:text-gray-400">
                                • {project.company}
                              </span>
                            )}
                          </div>
                          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-1">
                            {project.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base mb-2">
                            {project.shortDescription}
                          </p>
                          <p className="text-gray-400 dark:text-gray-500 text-xs md:text-sm">
                            Click to view details →
                          </p>
                        </div>
                        <div className="flex items-center justify-end">
                          <div className="p-4 rounded-full bg-gray-100 dark:bg-gray-700 group-hover:bg-blue-100 dark:group-hover:bg-blue-900 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all">
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Get in touch */}
      <div className="relative z-10 container mx-auto px-4 pb-24 mt-12">
        <div className="flex flex-wrap justify-center items-center gap-4">
          <span className="font-medium text-gray-800 dark:text-gray-300">Get in touch:</span>
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
            Download Resume
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

      <Navigation currentPath="/projects" />
    </div>
  )
}

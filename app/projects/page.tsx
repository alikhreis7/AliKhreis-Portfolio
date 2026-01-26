'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Github, Linkedin, Mail, Folder, Download, ArrowRight, Code, Briefcase, Brain, Eye } from 'lucide-react'
import { motion } from 'framer-motion'

type Project = {
  slug: string
  title: string
  shortDescription: string
  category: string
  developmentType: string
  image: string
  company?: string
  projectType: 'personal' | 'company' | 'ml' | 'mv'
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
  const [projectTypeFilter, setProjectTypeFilter] = useState<string>('all')

  // Filter projects but keep pinned portfolio at top
  const filteredProjects = allProjects.filter(project => {
    // Always include pinned projects when showing 'all' or their category
    if (project.isPinned) {
      return projectTypeFilter === 'all' || project.projectType === projectTypeFilter
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
        return 'bg-yellow-100'
      case 'company':
        return 'bg-blue-100'
      case 'ml':
        return 'bg-purple-100'
      case 'mv':
        return 'bg-teal-100'
      default:
        return 'bg-gray-100'
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
      default:
        return <Folder className="w-5 h-5" />
    }
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Header */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
            <span className="text-lg">← Back to home</span>
          </Link>
          <div className="flex items-center gap-2">
            <Folder className="w-6 h-6 text-blue-500" />
            <span className="font-semibold text-xl">My Projects</span>
          </div>
        </div>

        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
          <p className="text-gray-600 text-lg">Explore my work across different domains and technologies</p>
        </motion.div>

        {/* Filters Section */}
        <div className="mb-12">
          <h3 className="text-sm font-semibold text-gray-700 mb-4">Filter by Project Type</h3>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setProjectTypeFilter('all')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                projectTypeFilter === 'all'
                  ? 'bg-black text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setProjectTypeFilter('personal')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                projectTypeFilter === 'personal'
                  ? 'bg-yellow-400 text-black shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-yellow-50 shadow-sm'
              }`}
            >
              <Code className="w-4 h-4" />
              For Fun
            </button>
            <button
              onClick={() => setProjectTypeFilter('company')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                projectTypeFilter === 'company'
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-blue-50 shadow-sm'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              Company Projects
            </button>
            <button
              onClick={() => setProjectTypeFilter('ml')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                projectTypeFilter === 'ml'
                  ? 'bg-purple-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-purple-50 shadow-sm'
              }`}
            >
              <Brain className="w-4 h-4" />
              Machine Learning
            </button>
            <button
              onClick={() => setProjectTypeFilter('mv')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                projectTypeFilter === 'mv'
                  ? 'bg-teal-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-teal-50 shadow-sm'
              }`}
            >
              <Eye className="w-4 h-4" />
              Machine Vision
            </button>
          </div>
        </div>

        {/* Projects List */}
        <div className="max-w-4xl">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No projects match your filters</p>
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
                    href={`/projects/${project.slug}`} 
                    className="block group"
                  >
                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg border border-gray-100 hover:border-gray-200 transition-all duration-300">
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
                              <span className="text-sm text-gray-500">
                                • {project.company}
                              </span>
                            )}
                          </div>
                          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                            {project.title}
                          </h3>
                          <p className="text-gray-600 text-sm md:text-base mb-2">
                            {project.shortDescription}
                          </p>
                          <p className="text-gray-400 text-xs md:text-sm">
                            Click to view details →
                          </p>
                        </div>
                        <div className="flex items-center justify-end">
                          <div className="p-4 rounded-full bg-gray-100 group-hover:bg-blue-100 group-hover:text-blue-600 transition-all">
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
      <div className="relative z-10 container mx-auto px-4 mb-20 mt-12">
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
                  Research
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

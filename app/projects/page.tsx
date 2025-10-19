'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Github, Linkedin, Mail, Folder, Download } from 'lucide-react'

type Project = {
  slug: string
  title: string
  category: string
  developmentType: string
  image: string
  company?: string
  projectType: 'personal' | 'company' | 'ml'
}

const allProjects: Project[] = [
  // Personal & Academic Projects
  {
    slug: 'syllabussync',
    title: 'SyllabusSync',
    category: 'Full Stack Development',
    developmentType: 'Full Stack Development',
    image: '/project1.jpg',
    projectType: 'personal'
  },
  {
    slug: 'calculator',
    title: 'Calculator App',
    category: 'Backend Development',
    developmentType: 'Backend Development',
    image: '/calculator.jpg',
    projectType: 'personal'
  },
  {
    slug: 'salon',
    title: 'Elegance Salon',
    category: 'Frontend Development',
    developmentType: 'Frontend Development',
    image: '/salon.jpg',
    projectType: 'personal'
  },
  {
    slug: 'portfolio',
    title: 'Personal Portfolio',
    category: 'Frontend Development',
    developmentType: 'Frontend Development',
    image: '/portfoliopic.jpg',
    projectType: 'personal'
  },
  // Company Projects
  {
    slug: 'fishingbc',
    title: "FishingBC App - Fisheries and Oceans Canada",
    category: 'Full Stack Development',
    developmentType: 'Full Stack Development',
    image: '/fishingbc.jpg',
    company: 'Fisheries and Oceans Canada',
    projectType: 'company'
  },
  {
    slug: 'cira',
    title: 'Internet Performance Test App - CIRA',
    category: 'Frontend Development',
    developmentType: 'Frontend Development',
    image: '/cira.jpg',
    company: 'CIRA',
    projectType: 'company'
  },
  {
    slug: 'agroclimate',
    title: 'Agroclimate Impact Reporter App - Agriculture Canada',
    category: 'Full Stack Development',
    developmentType: 'Full Stack Development',
    image: '/agroclimate.jpg',
    company: 'Agriculture and Agri-Food Canada',
    projectType: 'company'
  },
  // Machine Learning Projects
  {
    slug: 'linearregression',
    title: 'Linear Regression Machine Learning Model',
    category: 'Machine Learning',
    developmentType: 'Machine Learning',
    image: '/linearregression.jpg',
    projectType: 'ml'
  }
]

export default function Projects() {
  const [projectTypeFilter, setProjectTypeFilter] = useState<string>('all')

  const filteredProjects = allProjects.filter(project => {
    return projectTypeFilter === 'all' || project.projectType === projectTypeFilter
  })

  const getCategoryBadgeColor = (projectType: string) => {
    switch(projectType) {
      case 'personal':
        return 'bg-yellow-100'
      case 'company':
        return 'bg-blue-100'
      case 'ml':
        return 'bg-purple-100'
      default:
        return 'bg-gray-100'
    }
  }

  return (
    <div className="min-h-screen w-full bg-white">
      {/* Header */}
      <div className="container mx-auto px-4 py-8 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-black hover:text-gray-600">
          <span>← Back to home</span>
        </Link>
        <div className="flex items-center gap-2">
          <Folder className="w-6 h-6 text-yellow-400" />
          <span className="font-medium">My Projects</span>
        </div>
      </div>

      {/* Filters Section */}
      <div className="container mx-auto px-4 pb-8">
        <div className="bg-gray-50 rounded-2xl p-6">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">Filter by Project Type</h3>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setProjectTypeFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                projectTypeFilter === 'all'
                  ? 'bg-black text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setProjectTypeFilter('personal')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                projectTypeFilter === 'personal'
                  ? 'bg-yellow-400 text-black'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Personal & Academic
            </button>
            <button
              onClick={() => setProjectTypeFilter('company')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                projectTypeFilter === 'company'
                  ? 'bg-blue-400 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Company Projects
            </button>
            <button
              onClick={() => setProjectTypeFilter('ml')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                projectTypeFilter === 'ml'
                  ? 'bg-purple-400 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Machine Learning
            </button>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-4 py-8">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No projects match your filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`} className="group cursor-pointer">
                <div className="aspect-square rounded-3xl overflow-hidden mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="space-y-2">
                  <span className={`inline-block px-3 py-1 ${getCategoryBadgeColor(project.projectType)} rounded-full text-sm font-medium`}>
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold">
                    {project.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        )}
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

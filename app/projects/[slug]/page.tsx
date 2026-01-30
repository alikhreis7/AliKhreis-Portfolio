'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Github, Linkedin, Mail, Folder, Calendar, MapPin, User, Tag, Download } from 'lucide-react'
import { projectsData } from '../projectsData'
import { useParams, useSearchParams } from 'next/navigation'
import { ThemeToggle } from '../../components/ThemeToggle'

export default function ProjectDetail() {
  const { slug } = useParams()
  const searchParams = useSearchParams()
  const fromFilter = searchParams.get('from')
  const project = projectsData[slug as keyof typeof projectsData]

  // Build back URL with filter preserved
  const backUrl = fromFilter ? `/projects?filter=${fromFilter}` : '/projects'

  if (!project) {
    return <div className="dark:bg-gray-900 dark:text-white min-h-screen flex items-center justify-center">Project not found</div>
  }

  return (
    <div className="min-h-screen w-full bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-900 dark:to-slate-900 transition-colors duration-300">
      {/* Header */}
      <div className="container mx-auto px-4 py-8 flex justify-between items-center">
        <Link href={backUrl} className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
          <span className="text-lg">← Back to projects</span>
        </Link>
        <div className="flex items-center gap-2">
          <Folder className="w-6 h-6 text-yellow-500" />
          <span className="font-semibold text-gray-800 dark:text-white">My Projects</span>
        </div>
      </div>

      {/* Project Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Image */}
          <div className="space-y-4">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-lg dark:shadow-2xl dark:shadow-black/30 ring-1 ring-gray-200 dark:ring-gray-700">
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Additional Images */}
            {project.additionalImages && project.additionalImages.length > 0 && (
              <div className="grid grid-cols-2 gap-4">
                {project.additionalImages.map((img, index) => (
                  <div key={index} className="aspect-square rounded-2xl overflow-hidden shadow-md dark:shadow-xl dark:shadow-black/20 ring-1 ring-gray-200 dark:ring-gray-700">
                    <Image
                      src={img}
                      alt={`${project.title} - Image ${index + 2}`}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column - Project Details */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                {project.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Project Info Grid - Creative colored cards for dark mode */}
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-gray-200 dark:border-blue-500/30 rounded-2xl p-4 bg-white dark:bg-gradient-to-br dark:from-blue-900/80 dark:to-blue-950/90">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                  <h3 className="font-medium text-gray-500 dark:text-blue-300 text-sm">Release date</h3>
                </div>
                <p className="font-semibold text-gray-900 dark:text-white">{project.releaseDate}</p>
              </div>
              <div className="border border-gray-200 dark:border-purple-500/30 rounded-2xl p-4 bg-white dark:bg-gradient-to-br dark:from-purple-900/80 dark:to-purple-950/90">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-purple-500 dark:text-purple-400" />
                  <h3 className="font-medium text-gray-500 dark:text-purple-300 text-sm">Location</h3>
                </div>
                <p className="font-semibold text-gray-900 dark:text-white">{project.location}</p>
              </div>
              <div className="border border-gray-200 dark:border-emerald-500/30 rounded-2xl p-4 bg-white dark:bg-gradient-to-br dark:from-emerald-900/80 dark:to-emerald-950/90">
                <div className="flex items-center gap-2 mb-2">
                  <User className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                  <h3 className="font-medium text-gray-500 dark:text-emerald-300 text-sm">Client</h3>
                </div>
                <p className="font-semibold text-gray-900 dark:text-white">{project.client}</p>
              </div>
              <div className="border border-gray-200 dark:border-orange-500/30 rounded-2xl p-4 bg-white dark:bg-gradient-to-br dark:from-orange-900/80 dark:to-orange-950/90">
                <div className="flex items-center gap-2 mb-2">
                  <Tag className="w-4 h-4 text-orange-500 dark:text-orange-400" />
                  <h3 className="font-medium text-gray-500 dark:text-orange-300 text-sm">Category</h3>
                </div>
                <p className="font-semibold text-gray-900 dark:text-white">{project.category}</p>
              </div>
            </div>

            {/* Project Description */}
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            {/* Project Features */}
            <div className="space-y-4">
              <h3 className="font-bold text-xl text-gray-900 dark:text-white flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Key Features
              </h3>
              <ul className="space-y-3">
                {project.features?.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                    <span className="mt-2 w-1.5 h-1.5 bg-blue-400 dark:bg-blue-500 rounded-full flex-shrink-0"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="space-y-4">
              <h3 className="font-bold text-xl text-gray-900 dark:text-white flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies?.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              {/* GitHub Link */}
              {project.githubUrl && (
                <Link 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-all font-semibold shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <Github className="w-5 h-5" />
                  View on GitHub
                </Link>
              )}

              {/* Website Link */}
              {project.websiteUrl && (
                <Link 
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-400 dark:from-yellow-500 dark:to-orange-500 text-gray-900 rounded-full hover:from-yellow-500 hover:to-orange-500 dark:hover:from-yellow-400 dark:hover:to-orange-400 transition-all font-semibold shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  Visit Live Website
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Get in touch */}
      <div className="relative z-10 container mx-auto px-4 mb-24 mt-16">
        <div className="flex flex-wrap justify-center items-center gap-4">
          <span className="font-medium text-gray-600 dark:text-gray-300">Get in touch:</span>
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
        </div>
      </div>

      {/* Sticky Navigation */}
      <div className="fixed bottom-4 left-0 right-0 flex justify-center z-50">
        <div className="max-w-2xl w-full mx-4">
          <nav className="bg-gradient-to-b from-white/60 to-white/30 dark:from-gray-800/60 dark:to-gray-900/30 backdrop-blur-md rounded-full p-2 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_20px_-2px_rgba(0,0,0,0.4)] border border-white/20 dark:border-gray-700/30">
            <ul className="flex items-center justify-center w-full gap-2 md:gap-4">
              <Image
                src="/profile-pic.png"
                alt="Ali Khreis"
                width={32}
                height={32}
                className="w-6 h-6 md:w-8 md:h-8 rounded-full object-cover"
              />
              <li>
                <Link href="/" className="px-2 md:px-4 py-2 rounded-full hover:bg-gray-100/80 dark:hover:bg-gray-700/80 text-gray-800 dark:text-gray-200 transition-colors text-sm md:text-base font-medium">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="px-2 md:px-4 py-2 rounded-full hover:bg-gray-100/80 dark:hover:bg-gray-700/80 text-gray-800 dark:text-gray-200 transition-colors text-sm md:text-base font-medium">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="px-2 md:px-4 py-2 rounded-full hover:bg-gray-100/80 dark:hover:bg-gray-700/80 text-gray-800 dark:text-gray-200 transition-colors text-sm md:text-base font-medium">
                  Research
                </Link>
              </li>
              <li>
                <Link href="/contact" className="px-2 md:px-4 py-2 rounded-full hover:bg-gray-100/80 dark:hover:bg-gray-700/80 text-gray-800 dark:text-gray-200 transition-colors text-sm md:text-base font-medium">
                  Contact
                </Link>
              </li>
              <li>
                <ThemeToggle />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

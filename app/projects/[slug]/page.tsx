'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Github, Linkedin, Mail, Folder } from 'lucide-react'
import { projectsData } from '../projectsData'
import { useParams } from 'next/navigation'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projectsData[slug as keyof typeof projectsData]

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div className="min-h-screen w-full bg-white">
      {/* Header */}
      <div className="container mx-auto px-4 py-8 flex justify-between items-center">
        <Link href="/projects" className="flex items-center gap-2 text-black hover:text-gray-600">
          <span>← Back to projects</span>
        </Link>
        <div className="flex items-center gap-2">
          <Folder className="w-6 h-6 text-yellow-400" />
          <span className="font-medium">My Projects</span>
        </div>
      </div>

      {/* Project Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Image */}
          <div className="aspect-square rounded-3xl overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              width={800}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Column - Project Details */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl font-bold mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-gray-600">
                {project.description}
              </p>
            </div>

            {/* Project Info Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="border rounded-2xl p-4">
                <h3 className="font-medium mb-2">Release date</h3>
                <p>{project.releaseDate}</p>
              </div>
              <div className="border rounded-2xl p-4">
                <h3 className="font-medium mb-2">Location</h3>
                <p>{project.location}</p>
              </div>
              <div className="border rounded-2xl p-4">
                <h3 className="font-medium mb-2">Client</h3>
                <p>{project.client}</p>
              </div>
              <div className="border rounded-2xl p-4">
                <h3 className="font-medium mb-2">Category</h3>
                <p>{project.category}</p>
              </div>
            </div>

            {/* Project Description */}
            <div className="space-y-4">
              <p className="text-gray-600">
                {project.longDescription}
              </p>
            </div>

            {/* Project Features */}
            <div className="space-y-4">
              <h3 className="font-semibold text-xl">Key Features</h3>
              <ul className="space-y-2">
                {project.features?.map((feature, index) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="space-y-4">
              <h3 className="font-semibold text-xl">Technologies Used</h3>
              <ul className="space-y-2">
                {project.technologies?.map((tech, index) => (
                  <li key={index}>• {tech}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Navigation */}
      <div className="fixed bottom-4 left-0 right-0 flex justify-center z-50">
        <div className="max-w-md w-full mx-4">
          <nav className="bg-gradient-to-b from-white/60 to-white/30 backdrop-blur-md rounded-full p-2 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.1)] border border-white/20">
            <ul className="flex items-center justify-center w-full gap-6">
              <li>
                <Link href="/" className="px-4 py-2 rounded-full hover:bg-gray-100/80 text-gray-800 transition-colors font-medium">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="px-4 py-2 rounded-full hover:bg-gray-100/80 text-gray-800 transition-colors font-medium">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="px-4 py-2 rounded-full hover:bg-gray-100/80 text-gray-800 transition-colors font-medium">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
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
        </div>
      </div>
    </div>
  )
} 
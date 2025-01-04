'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Github, Linkedin, Mail, Folder } from 'lucide-react'

export default function Projects() {
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

      {/* Projects Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <Link href="/projects/syllabussync" className="group cursor-pointer">
            <div className="aspect-square rounded-3xl overflow-hidden mb-4">
              <Image
                src="/project1.jpg"
                alt="Networking Project"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 bg-yellow-100 rounded-full text-sm font-medium">
                Full Stack Development
              </span>
              <h3 className="text-xl font-semibold">
                SyllabusSync
              </h3>
            </div>
          </Link>

          {/* Project 2 */}
          <Link href="/projects/calculator" className="group cursor-pointer">
            <div className="aspect-square rounded-3xl overflow-hidden mb-4">
              <Image
                src="/calculator.jpg"
                alt="Calculator Project"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 bg-yellow-100 rounded-full text-sm font-medium">
                Backend Development
              </span>
              <h3 className="text-xl font-semibold">
                Calculator App
              </h3>
            </div>
          </Link>

          {/* Project 3 */}
          <Link href="/projects/salon" className="group cursor-pointer">
            <div className="aspect-square rounded-3xl overflow-hidden mb-4">
              <Image
                src="/salon.jpg"
                alt="Salon Website"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 bg-yellow-100 rounded-full text-sm font-medium">
                Frontend Development
              </span>
              <h3 className="text-xl font-semibold">
                Elegance Salon
              </h3>
            </div>
          </Link>

          {/* Project 4 */}
          <Link href="/projects/portfolio" className="group cursor-pointer">
            <div className="aspect-square rounded-3xl overflow-hidden mb-4">
              <Image
                src="/portfoliopic.jpg"
                alt="Portfolio Website"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 bg-yellow-100 rounded-full text-sm font-medium">
                Frontend Development
              </span>
              <h3 className="text-xl font-semibold">
                Personal Portfolio
              </h3>
            </div>
          </Link>
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

      {/* Sticky Navigation */}
      <div className="fixed bottom-4 left-0 right-0 flex justify-center z-50">
        <div className="max-w-md w-full mx-4">
          <nav className="bg-gradient-to-b from-white/60 to-white/30 backdrop-blur-md rounded-full p-2 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.1)] border border-white/20">
            <ul className="flex items-center justify-center w-full gap-6">
              <Image
                src="/portfolio.JPG"
                alt="Ali Khries"
                width={32}
                height={32}
                className="w-8 h-8 rounded-full object-cover"
              />
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
    </div>
  )
} 
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Github, Linkedin, Mail, BookOpen, Download } from 'lucide-react'

export default function Blog() {
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Coming Soon Message */}
          <div className="col-span-full text-center py-20">
            <h1 className="text-4xl font-bold mb-4">Blog Coming Soon!</h1>
            <p className="text-gray-600">
              I&apos;m currently working on some interesting articles. Check back soon!
            </p>
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
                <Link href="/blog" className="px-4 py-2 rounded-full hover:bg-gray-100/80 text-gray-800 transition-colors font-medium">
                  Blog
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
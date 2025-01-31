'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Mail } from 'lucide-react'

export default function Portfolio() {
  return (
    <div className="min-h-screen w-full bg-white relative overflow-hidden pb-20">
      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-8 flex flex-col items-center">
        {/* Email pill */}
        <div className="bg-yellow-200 rounded-full px-4 py-1 text-sm mb-8 font-medium">
          alikhreis12@gmail.com
        </div>

        {/* Greeting */}
        <div className="text-center mb-6">
          <h1 className="flex items-center justify-center gap-2 text-4xl md:text-5xl font-bold mb-2">
            <span role="img" aria-label="waving hand">👋</span>
            Hi, I&apos;m Ali!
          </h1>
          <p className="text-xl text-gray-600 font-medium">
            New Grad Software Engineer
          </p>
          <p className="text-md text-gray-600 font-medium mt-2 max-w-2xl">
            Currently working towards a Master of Engineering in Electrical and Computer Engineering, specializing in Applied Artificial Intelligence.
          </p>
        </div>

        {/* Large background text */}
        <div className="relative w-full flex justify-center mb-8">
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.15]">
            <motion.div
              initial={{ x: -1000 }}
              animate={{ 
                x: 1000,
                transition: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
              className="whitespace-nowrap text-[200px] font-black text-black"
            >
              ALI KHRIES ALI KHRIES ALI KHRIES
            </motion.div>
          </div>

          {/* Profile Image */}
          <div className="relative z-10 w-72 h-72 md:w-96 md:h-96">
            <Image
              src="/portfolio.JPG"
              alt="Ali Khries"
              width={384}
              height={384}
              className="rounded-2xl object-cover"
              priority
            />
          </div>
        </div>

        {/* Download CV and Location */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:justify-between w-full max-w-[320px] md:max-w-[384px] mb-8">
          <Button 
            className="bg-black text-white hover:bg-black/90 rounded-lg px-4"
            asChild
          >
            <Link href="/Ali-K-Resume.pdf" target="_blank" download>
              <Download className="mr-2 h-5 w-5 text-yellow-300" /> 
              Download Resume
            </Link>
          </Button>
          <div className="text-base">Ottawa, ON, Canada</div>
        </div>

        {/* Introduction Text */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 mt-16">
          <p className="text-gray-700 leading-relaxed">
            I&apos;m a software engineer with a strong background in full-stack development, GIS solutions, and data-driven problem-solving. As a graduate in Software Engineering, I&apos;ve honed my skills in programming, web development, and project management. My academic journey has been enriched by practical experience and a passion for building innovative solutions that address real-world challenges.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Starting January 2025, I will begin my master&apos;s in Electrical and Computer Engineering (Applied Artificial Intelligence), with a focus on real-world applications to drive innovation and impact. I am passionate about leveraging AI, data, and technology to solve complex challenges and create meaningful solutions.
          </p>
        </div>

        {/* Social Links */}
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


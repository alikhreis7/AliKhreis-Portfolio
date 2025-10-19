'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Mail, ArrowDown } from 'lucide-react'

export default function Portfolio() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-pink-50 relative overflow-hidden">
      {/* Floating decorative elements */}
      <motion.div 
        className="absolute top-20 left-10 text-6xl"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        ⚙️
      </motion.div>
      <motion.div 
        className="absolute top-32 right-20 text-5xl"
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -10, 0]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        🚀
      </motion.div>
      <motion.div 
        className="absolute bottom-40 left-20 text-4xl"
        animate={{ 
          y: [0, -15, 0],
        }}
        transition={{ 
          duration: 3.5, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        💻
      </motion.div>
      <motion.div 
        className="absolute bottom-60 right-32 text-5xl"
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, 15, 0]
        }}
        transition={{ 
          duration: 4.5, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        🔥
      </motion.div>

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-32 flex flex-col items-center text-center">
        {/* Email and Alumni pills */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-yellow-300 rounded-full px-6 py-2 text-sm font-semibold shadow-md"
          >
            alikhreis12@gmail.com
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="relative group"
          >
            <button
              onClick={() => {
                const aboutSection = document.getElementById('about-me');
                aboutSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="block bg-red-600 text-white rounded-full px-6 py-2 text-sm font-semibold shadow-md hover:bg-red-700 transition-colors cursor-pointer"
            >
              🎓 uOttawa Alum | B.Eng
            </button>
            {/* Tooltip */}
            <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-64 bg-gray-900 text-white text-xs rounded-lg px-4 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 shadow-xl pointer-events-none">
              <div className="text-center">
                Click to view education details
              </div>
              {/* Arrow */}
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
            </div>
          </motion.div>
        </div>

        {/* Name with gradient */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-6"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 blur-3xl opacity-50 rounded-full"></div>
          <h1 className="relative text-6xl md:text-8xl font-black mb-4">
            Ali Khreis
          </h1>
        </motion.div>

        {/* Subtitle with decorative lines */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-400"></div>
          <p className="text-xl md:text-2xl text-blue-600 font-semibold">
            Software Engineer
          </p>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-blue-400"></div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-700 text-lg max-w-3xl mb-8 leading-relaxed"
        >
          Crafting innovative digital solutions with modern technologies and AI-driven insights
        </motion.p>

        {/* Tech Stack Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {['React', 'TypeScript', 'Next.js', 'Python', 'Java', 'TensorFlow', 'PyTorch', 'Scikit-learn'].map((tech) => (
            <span 
              key={tech}
              className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-800 hover:bg-gray-200 transition-colors"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 mb-12"
        >
          <Button 
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            asChild
          >
            <Link href="/projects">
              View My Work →
            </Link>
          </Button>
          <Button 
            variant="outline"
            className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white rounded-full px-8 py-6 text-lg font-semibold transition-all"
            asChild
          >
            <Link href="/contact">
              Get in Touch
            </Link>
          </Button>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="flex gap-4 mb-16"
        >
          <Link 
            href="https://github.com/alikhreis7" 
            target="_blank"
            className="p-4 rounded-full bg-white shadow-md hover:shadow-lg hover:scale-110 transition-all"
          >
            <Github className="w-6 h-6" />
          </Link>
          <Link 
            href="https://www.linkedin.com/in/alikhreis/" 
            target="_blank"
            className="p-4 rounded-full bg-white shadow-md hover:shadow-lg hover:scale-110 transition-all"
          >
            <Linkedin className="w-6 h-6" />
          </Link>
          <Link 
            href="mailto:alikhreis12@gmail.com"
            className="p-4 rounded-full bg-white shadow-md hover:shadow-lg hover:scale-110 transition-all"
          >
            <Mail className="w-6 h-6" />
          </Link>
          <Link 
            href="/Ali-K-Resume.pdf"
            target="_blank"
            download
            className="p-4 rounded-full bg-white shadow-md hover:shadow-lg hover:scale-110 transition-all"
          >
            <Download className="w-6 h-6" />
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-gray-500"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </div>

      {/* About Section */}
      <div id="about-me" className="relative z-10 bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-3xl blur-2xl opacity-30"></div>
                <Image
                  src="/portfolio.JPG"
                  alt="Ali Khries"
                  width={500}
                  height={500}
                  className="relative rounded-3xl shadow-2xl"
                  priority
                />
                <div className="absolute -bottom-6 -right-6 bg-yellow-300 rounded-2xl p-4 shadow-xl">
                  <p className="font-bold text-lg">📍 Ottawa, ON, Canada</p>
                </div>
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-4xl font-bold mb-6">About Me</h2>
                <p className="text-xl font-semibold text-gray-800">
                  Software Engineer - Software Developer Intern at Kinaxis
                </p>
                <p className="text-lg font-semibold text-blue-600">
                  Aspiring Machine Learning Engineer
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Currently balancing a full-time internship at Kinaxis while pursuing full-time graduate studies at the University of Ottawa. Working towards a Master of Engineering in Electrical and Computer Engineering, specializing in Applied Artificial Intelligence. Taking advanced courses in Applied Machine Learning and Machine Vision.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  I&apos;m a software engineer with a strong background in full-stack development, GIS solutions, and data-driven problem-solving. As a graduate in Software Engineering, I&apos;ve honed my skills in programming, web development, and project management. My academic journey has been enriched by practical experience and a passion for building innovative solutions that address real-world challenges.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  I am passionate about leveraging AI, data, and technology to solve complex challenges and create meaningful solutions. My focus is on real-world applications to drive innovation and impact through machine learning and artificial intelligence.
                </p>
                <Button 
                  className="bg-black text-white hover:bg-gray-800 rounded-full px-6 py-6 mt-4"
                  asChild
                >
                  <Link href="/Ali-K-Resume.pdf" target="_blank" download>
                    <Download className="mr-2 h-5 w-5 text-yellow-300" /> 
                    Download Resume
                  </Link>
                </Button>
              </motion.div>
            </div>

            {/* Technical Expertise Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-32"
            >
              <h2 className="text-4xl font-bold text-center mb-16">Technical Expertise</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {/* Frontend Development */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-4xl">🎨</span>
                    <h3 className="text-2xl font-bold">Frontend Development</h3>
                  </div>
                  <div className="space-y-4">
                    {[
                      { skill: 'React & Next.js', level: 95 },
                      { skill: 'TypeScript', level: 90 },
                      { skill: 'Modern CSS', level: 95 },
                      { skill: 'Web Animation', level: 85 }
                    ].map((item) => (
                      <div key={item.skill}>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">{item.skill}</span>
                          <span className="font-bold">{item.level}%</span>
                        </div>
                        <div className="h-2 bg-blue-200 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="h-full bg-blue-500 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Backend & APIs */}
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-4xl">⚡</span>
                    <h3 className="text-2xl font-bold">Backend & APIs</h3>
                  </div>
                  <div className="space-y-4">
                    {[
                      { skill: 'Node.js', level: 90 },
                      { skill: 'RESTful APIs', level: 95 },
                      { skill: 'GraphQL', level: 85 },
                      { skill: 'Database Design', level: 88 }
                    ].map((item) => (
                      <div key={item.skill}>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">{item.skill}</span>
                          <span className="font-bold">{item.level}%</span>
                        </div>
                        <div className="h-2 bg-green-200 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="h-full bg-green-500 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Performance & DevOps */}
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-4xl">🚀</span>
                    <h3 className="text-2xl font-bold">Performance & DevOps</h3>
                  </div>
                  <div className="space-y-4">
                    {[
                      { skill: 'Web Performance', level: 92 },
                      { skill: 'CI/CD', level: 88 },
                      { skill: 'Docker', level: 85 },
                      { skill: 'AWS', level: 82 }
                    ].map((item) => (
                      <div key={item.skill}>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">{item.skill}</span>
                          <span className="font-bold">{item.level}%</span>
                        </div>
                        <div className="h-2 bg-purple-200 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="h-full bg-purple-500 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Get in touch section */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-32 text-center"
            >
              <h3 className="text-2xl font-bold mb-6">Get in touch:</h3>
              <div className="flex justify-center gap-6">
                <Link 
                  href="https://github.com/alikhreis7" 
                  target="_blank"
                  className="p-4 rounded-full bg-gray-100 hover:bg-gray-200 transition-all hover:scale-110"
                >
                  <Github className="w-7 h-7" />
                </Link>
                <Link 
                  href="https://www.linkedin.com/in/alikhreis/" 
                  target="_blank"
                  className="p-4 rounded-full bg-gray-100 hover:bg-gray-200 transition-all hover:scale-110"
                >
                  <Linkedin className="w-7 h-7" />
                </Link>
                <Link 
                  href="mailto:alikhreis12@gmail.com"
                  className="p-4 rounded-full bg-gray-100 hover:bg-gray-200 transition-all hover:scale-110"
                >
                  <Mail className="w-7 h-7" />
                </Link>
              </div>
            </motion.div>
          </div>
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

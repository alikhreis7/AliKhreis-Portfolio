'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Mail, ArrowDown } from 'lucide-react'
import { Navigation } from './components/Navigation'
import { useLanguage } from './components/LanguageProvider'

export default function Portfolio() {
  const { t } = useLanguage()
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-32 flex flex-col items-center text-center">
        {/* Alumni pill */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative group"
          >
            <button
              onClick={() => {
                const aboutSection = document.getElementById('about-me');
                aboutSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="block bg-red-600 text-white rounded-full px-6 py-2 text-sm font-semibold shadow-md hover:bg-red-700 transition-colors cursor-pointer"
            >
              {t('hero.alumPill')}
            </button>
            {/* Tooltip */}
            <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-64 bg-gray-900 text-white text-xs rounded-lg px-4 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 shadow-xl pointer-events-none">
              <div className="text-center">
                {t('hero.clickToView')}
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
          <h1 className="relative text-6xl md:text-8xl font-black mb-4 text-gray-900 dark:text-white">
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
            {t('hero.subtitle')}
          </p>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-blue-400"></div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-700 dark:text-gray-300 text-lg max-w-3xl mb-8 leading-relaxed"
        >
          {t('hero.description')}
        </motion.p>

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
              {t('hero.viewWork')}
            </Link>
          </Button>
          <Button 
            variant="outline"
            className="border-2 border-gray-800 dark:border-gray-300 text-gray-800 dark:text-gray-200 hover:bg-gray-800 dark:hover:bg-gray-200 hover:text-white dark:hover:text-gray-900 rounded-full px-8 py-6 text-lg font-semibold transition-all"
            asChild
          >
            <Link href="/contact">
              {t('hero.getInTouch')}
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
            className="p-4 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg hover:scale-110 transition-all"
          >
            <Github className="w-6 h-6 dark:text-white" />
          </Link>
          <Link 
            href="https://www.linkedin.com/in/alikhreis/" 
            target="_blank"
            className="p-4 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg hover:scale-110 transition-all"
          >
            <Linkedin className="w-6 h-6 dark:text-white" />
          </Link>
          <Link 
            href="mailto:alikhreis12@gmail.com"
            className="p-4 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg hover:scale-110 transition-all"
          >
            <Mail className="w-6 h-6 dark:text-white" />
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-gray-500 dark:text-gray-400"
        >
          <span className="text-sm mb-2">{t('hero.scrollToExplore')}</span>
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </div>

      {/* About Section */}
      <div id="about-me" className="relative z-10 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold mb-4 dark:text-white">{t('about.title')}</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                {t('about.subtitle')}
              </p>
            </motion.div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Main Bio Card - Spans 2 columns */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="md:col-span-2 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 text-white relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-2xl font-bold">{t('about.roleTitle')}</h3>
                    <span className="text-xs bg-green-400/30 text-green-300 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                      {t('about.ongoing')}
                    </span>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {t('about.currentRole')}
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    {t('about.passion')}
                  </p>
                  <div className="mt-8">
                    <Link 
                      href="/Ali-K-Resume.pdf" 
                      target="_blank" 
                      download
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold transition-all hover:scale-105 shadow-lg"
                    >
                      <Download className="w-5 h-5" /> 
                      {t('about.downloadResume')}
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* Current Work Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-3xl p-6 text-white relative overflow-hidden group hover:scale-[1.02] transition-transform"
              >
                <div className="absolute -right-4 -bottom-4 text-8xl opacity-20">💼</div>
                <div className="relative z-10">
                  <span className="text-xs font-semibold bg-white/20 px-3 py-1 rounded-full">{t('about.currentRoleLabel')}</span>
                  <h3 className="text-xl font-bold mt-4 mb-1">Kinaxis</h3>
                  <p className="text-orange-100/80 text-sm leading-relaxed">{t('about.kinaxisDesc')}</p>
                </div>
              </motion.div>

              {/* Education Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-6 text-white relative overflow-hidden group hover:scale-[1.02] transition-transform"
              >
                <div className="absolute -right-4 -bottom-4 text-8xl opacity-20">🎓</div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold bg-white/20 px-3 py-1 rounded-full">{t('about.education')}</span>
                    <span className="text-xs bg-green-400/30 text-green-200 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                      {t('about.ongoing')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mt-4 mb-2">{t('about.mengECE')}</h3>
                  <p className="text-blue-100 text-sm">{t('about.uottawa')}</p>
                  <p className="text-blue-100/80 text-xs mt-3">{t('about.appliedAI')}</p>
                </div>
              </motion.div>

              {/* Advanced Courses Card - NEW */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-6 text-white relative overflow-hidden group hover:scale-[1.02] transition-transform"
              >
                <div className="absolute -right-4 -bottom-4 text-8xl opacity-20">🧠</div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold bg-white/20 px-3 py-1 rounded-full">{t('about.coursework')}</span>
                    <span className="text-xs bg-green-400/30 text-green-200 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                      {t('about.ongoing')}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mt-4 mb-2">{t('about.advancedCourses')}</h3>
                  <ul className="text-purple-100 text-xs space-y-1">
                    <li>• {t('about.deepLearning')}</li>
                    <li>• {t('about.reinforcementLearning')}</li>
                    <li>• {t('about.cybersecurityAI')}</li>
                  </ul>
                </div>
              </motion.div>

              {/* Portfolio Update Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-3xl p-6 text-white relative overflow-hidden group hover:scale-[1.02] transition-transform"
              >
                <div className="absolute -right-4 -bottom-4 text-8xl opacity-20">🚀</div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold bg-white/20 px-3 py-1 rounded-full">{t('about.project')}</span>
                    <span className="text-xs text-emerald-200">Jan 2026</span>
                  </div>
                  <h3 className="text-lg font-bold mt-4 mb-2">{t('about.portfolioRedesign')}</h3>
                  <p className="text-emerald-100 text-xs">{t('about.portfolioDesc')}</p>
                </div>
              </motion.div>

              {/* Skills Quick View - Auto-scrolling Tech Stack */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="md:col-span-2 lg:col-span-3 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 overflow-hidden"
              >
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">{t('about.workingWith')}</h3>
                  <p className="text-gray-400 text-sm">{t('about.techDescription')}</p>
                </div>
                
                {/* Row 1 - Languages & Frameworks - Scrolls Left */}
                <div className="relative mb-4 overflow-hidden">
                  <div className="flex gap-3 animate-scroll-left">
                    {[...['Python', 'TypeScript', 'JavaScript', 'Java', 'C++', 'SQL', 'MATLAB', 'R', 'Bash', 'HTML/CSS'], ...['Python', 'TypeScript', 'JavaScript', 'Java', 'C++', 'SQL', 'MATLAB', 'R', 'Bash', 'HTML/CSS']].map((skill, idx) => (
                      <span key={`${skill}-${idx}`} className="flex-shrink-0 px-4 py-2 bg-blue-500/20 border border-blue-500/30 text-blue-300 rounded-full text-sm font-medium whitespace-nowrap">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Row 2 - AI/ML & Data - Scrolls Right */}
                <div className="relative mb-4 overflow-hidden">
                  <div className="flex gap-3 animate-scroll-right">
                    {[...['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'NumPy', 'Pandas', 'OpenCV', 'Hugging Face', 'LangChain', 'OpenAI API'], ...['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'NumPy', 'Pandas', 'OpenCV', 'Hugging Face', 'LangChain', 'OpenAI API']].map((skill, idx) => (
                      <span key={`${skill}-${idx}`} className="flex-shrink-0 px-4 py-2 bg-purple-500/20 border border-purple-500/30 text-purple-300 rounded-full text-sm font-medium whitespace-nowrap">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Row 3 - Tools & Platforms - Scrolls Left */}
                <div className="relative overflow-hidden">
                  <div className="flex gap-3 animate-scroll-left-slow">
                    {[...['React', 'Next.js', 'Node.js', 'Spring Boot', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS', 'Git', 'Vercel', 'ServiceNow', 'Atlassian'], ...['React', 'Next.js', 'Node.js', 'Spring Boot', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS', 'Git', 'Vercel', 'ServiceNow', 'Atlassian']].map((skill, idx) => (
                      <span key={`${skill}-${idx}`} className="flex-shrink-0 px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 rounded-full text-sm font-medium whitespace-nowrap">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* View Projects CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="text-center mt-12"
            >
              <Link 
                href="/projects" 
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold group"
              >
                {t('about.viewAllProjects')}
                <ArrowDown className="w-4 h-4 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Technical Expertise Section */}
      <div className="relative z-10 bg-white dark:bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-center mb-16 dark:text-white">{t('expertise.title')}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
                {/* Frontend Development */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col min-w-0">
                  <div className="flex items-start gap-3 mb-6">
                    <span className="text-3xl lg:text-4xl flex-shrink-0">🎨</span>
                    <h3 className="text-xl lg:text-2xl font-bold leading-tight break-words dark:text-white">{t('expertise.frontend')}</h3>
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
                          <span className="font-medium dark:text-gray-200">{item.skill}</span>
                          <span className="font-bold dark:text-white">{item.level}%</span>
                        </div>
                        <div className="h-2 bg-blue-200 dark:bg-blue-900/50 rounded-full overflow-hidden">
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

                {/* Backend Development */}
                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/30 dark:to-indigo-800/30 rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col min-w-0">
                  <div className="flex items-start gap-3 mb-6">
                    <span className="text-3xl lg:text-4xl flex-shrink-0">⚙️</span>
                    <h3 className="text-xl lg:text-2xl font-bold leading-tight break-words dark:text-white">{t('expertise.backend')}</h3>
                  </div>
                  <div className="space-y-4">
                    {[
                      { skill: 'Java', level: 90 },
                      { skill: 'Python', level: 92 },
                      { skill: 'Node.js', level: 90 },
                      { skill: 'Server Architecture', level: 88 }
                    ].map((item) => (
                      <div key={item.skill}>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium dark:text-gray-200">{item.skill}</span>
                          <span className="font-bold dark:text-white">{item.level}%</span>
                        </div>
                        <div className="h-2 bg-indigo-200 dark:bg-indigo-900/50 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="h-full bg-indigo-500 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Backend & APIs */}
                <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col min-w-0">
                  <div className="flex items-start gap-3 mb-6">
                    <span className="text-3xl lg:text-4xl flex-shrink-0">⚡</span>
                    <h3 className="text-xl lg:text-2xl font-bold leading-tight break-words dark:text-white">{t('expertise.apis')}</h3>
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
                          <span className="font-medium dark:text-gray-200">{item.skill}</span>
                          <span className="font-bold dark:text-white">{item.level}%</span>
                        </div>
                        <div className="h-2 bg-green-200 dark:bg-green-900/50 rounded-full overflow-hidden">
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

                {/* Bottom row - Centered wrapper for last 2 cards */}
                <div className="lg:col-span-3 flex flex-col md:flex-row justify-center gap-6 lg:gap-8">
                  {/* Performance & DevOps */}
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col min-w-0 md:max-w-sm">
                    <div className="flex items-start gap-3 mb-6">
                      <span className="text-3xl lg:text-4xl flex-shrink-0">🚀</span>
                      <h3 className="text-xl lg:text-2xl font-bold leading-tight break-words dark:text-white">{t('expertise.devops')}</h3>
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
                            <span className="font-medium dark:text-gray-200">{item.skill}</span>
                            <span className="font-bold dark:text-white">{item.level}%</span>
                          </div>
                          <div className="h-2 bg-purple-200 dark:bg-purple-900/50 rounded-full overflow-hidden">
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

                  {/* Applied Machine Learning */}
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30 rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col min-w-0 md:max-w-sm">
                    <div className="flex items-start gap-3 mb-6">
                      <span className="text-3xl lg:text-4xl flex-shrink-0">🧠</span>
                      <h3 className="text-xl lg:text-2xl font-bold leading-tight break-words dark:text-white">{t('expertise.ml')}</h3>
                    </div>
                    <div className="space-y-4">
                      {[
                        { skill: 'TensorFlow & PyTorch', level: 88 },
                        { skill: 'Scikit-learn', level: 90 },
                        { skill: 'Data Science', level: 85 },
                        { skill: 'Model Training', level: 87 }
                      ].map((item) => (
                        <div key={item.skill}>
                          <div className="flex justify-between mb-2">
                            <span className="font-medium dark:text-gray-200">{item.skill}</span>
                            <span className="font-bold dark:text-white">{item.level}%</span>
                          </div>
                          <div className="h-2 bg-orange-200 dark:bg-orange-900/50 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${item.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.2 }}
                              className="h-full bg-orange-500 rounded-full"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Cybersecurity */}
                  <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/30 dark:to-red-800/30 rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col min-w-0 md:max-w-sm">
                    <div className="flex items-start gap-3 mb-6">
                      <span className="text-3xl lg:text-4xl flex-shrink-0">🔐</span>
                      <h3 className="text-xl lg:text-2xl font-bold leading-tight break-words dark:text-white">{t('expertise.cybersecurity')}</h3>
                    </div>
                    <div className="space-y-4">
                      {[
                        { skill: 'Network Security', level: 85 },
                        { skill: 'Encryption & Cryptography', level: 82 },
                        { skill: 'Vulnerability Assessment', level: 80 },
                        { skill: 'Security Protocols', level: 85 }
                      ].map((item) => (
                        <div key={item.skill}>
                          <div className="flex justify-between mb-2">
                            <span className="font-medium dark:text-gray-200">{item.skill}</span>
                            <span className="font-bold dark:text-white">{item.level}%</span>
                          </div>
                          <div className="h-2 bg-red-200 dark:bg-red-900/50 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${item.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.2 }}
                              className="h-full bg-red-500 rounded-full"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
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
              <h3 className="text-2xl font-bold mb-6 dark:text-white">{t('common.getInTouch')}</h3>
              <div className="flex justify-center gap-6">
                <Link 
                  href="https://github.com/alikhreis7" 
                  target="_blank"
                  className="p-4 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all hover:scale-110"
                >
                  <Github className="w-7 h-7 dark:text-white" />
                </Link>
                <Link 
                  href="https://www.linkedin.com/in/alikhreis/" 
                  target="_blank"
                  className="p-4 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all hover:scale-110"
                >
                  <Linkedin className="w-7 h-7 dark:text-white" />
                </Link>
                <Link 
                  href="mailto:alikhreis12@gmail.com"
                  className="p-4 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all hover:scale-110"
                >
                  <Mail className="w-7 h-7 dark:text-white" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Navigation currentPath="/" />
    </div>
  )
}

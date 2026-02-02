'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download, MapPin, Calendar, ExternalLink, Building2, Briefcase, ArrowRight, GraduationCap } from 'lucide-react'
import { Navigation } from '../components/Navigation'
import { useLanguage } from '../components/LanguageProvider'

type Experience = {
  id: string
  titleKey: string
  companyKey: string
  companyLogo?: string
  location: string
  startDate: string
  endDateKey: string
  isCurrent: boolean
  isCoop?: boolean
  isMEng?: boolean
  descriptionKey: string
  highlightKeys: string[]
  technologies: string[]
  linkedProject?: {
    slug: string
    titleKey: string
  }
}

const experiences: Experience[] = [
  {
    id: '1',
    titleKey: 'exp.kinaxis.title',
    companyKey: 'exp.kinaxis.company',
    companyLogo: '/kinaxis-logo.png',
    location: 'Ottawa, CA',
    startDate: 'May 2025',
    endDateKey: 'common.present',
    isCurrent: true,
    isMEng: true,
    descriptionKey: 'exp.kinaxis.description',
    highlightKeys: [
      'exp.kinaxis.highlight1',
      'exp.kinaxis.highlight2',
      'exp.kinaxis.highlight3',
      'exp.kinaxis.highlight4'
    ],
    technologies: ['ServiceNow', 'Atlassian', 'Azure', 'Python', 'LLM/AI', 'CI/CD'],
    linkedProject: {
      slug: 'sra-intelligence',
      titleKey: 'proj.sraIntelligence.title'
    }
  },
  {
    id: '2',
    titleKey: 'exp.aafc.title',
    companyKey: 'exp.aafc.company',
    companyLogo: '/aafc-logo.png',
    location: 'Ottawa, CA',
    startDate: 'May 2024',
    endDateKey: 'November 2024',
    isCurrent: false,
    isCoop: true,
    descriptionKey: 'exp.aafc.description',
    highlightKeys: [
      'exp.aafc.highlight1',
      'exp.aafc.highlight2',
      'exp.aafc.highlight3',
      'exp.aafc.highlight4'
    ],
    technologies: ['Python', 'SQL', 'JavaScript', 'React', 'ArcGIS', 'Survey123'],
    linkedProject: {
      slug: 'agroclimate',
      titleKey: 'proj.agroclimate.title'
    }
  },
  {
    id: '3',
    titleKey: 'exp.cira.title',
    companyKey: 'exp.cira.company',
    companyLogo: '/cira-logo.png',
    location: 'Ottawa, CA',
    startDate: 'May 2023',
    endDateKey: 'September 2023',
    isCurrent: false,
    isCoop: true,
    descriptionKey: 'exp.cira.description',
    highlightKeys: [
      'exp.cira.highlight1',
      'exp.cira.highlight2',
      'exp.cira.highlight3',
      'exp.cira.highlight4'
    ],
    technologies: ['React', 'TypeScript', 'Python', 'SQL', 'Agile', 'Browser Extensions'],
    linkedProject: {
      slug: 'cira',
      titleKey: 'proj.ciraProject.title'
    }
  },
  {
    id: '4',
    titleKey: 'exp.dfo.title',
    companyKey: 'exp.dfo.company',
    companyLogo: '/dfo-logo.png',
    location: 'Ottawa, CA',
    startDate: 'September 2022',
    endDateKey: 'April 2023',
    isCurrent: false,
    isCoop: true,
    descriptionKey: 'exp.dfo.description',
    highlightKeys: [
      'exp.dfo.highlight1',
      'exp.dfo.highlight2',
      'exp.dfo.highlight3',
      'exp.dfo.highlight4'
    ],
    technologies: ['Java', 'Spring Boot', 'TypeScript', 'JavaScript', 'SQL', 'Oracle'],
    linkedProject: {
      slug: 'fishingbc',
      titleKey: 'proj.fishingbc.title'
    }
  },
  {
    id: '5',
    titleKey: 'exp.esdc.title',
    companyKey: 'exp.esdc.company',
    companyLogo: '/esdc-logo.png',
    location: 'Gatineau, CA',
    startDate: 'January 2022',
    endDateKey: 'August 2022',
    isCurrent: false,
    isCoop: true,
    descriptionKey: 'exp.esdc.description',
    highlightKeys: [
      'exp.esdc.highlight1',
      'exp.esdc.highlight2',
      'exp.esdc.highlight3'
    ],
    technologies: ['Power BI', 'TeamMate', 'ITSG-33', 'NIST', 'Data Analysis', 'Auditing']
  }
]

export default function ExperiencePage() {
  const { t } = useLanguage()
  
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Header */}
      <div className="container mx-auto px-4 pt-8">
        <Link 
          href="/" 
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-8"
        >
          {t('experience.backToHome')}
        </Link>
      </div>

      {/* Page Title */}
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-6">
            <Briefcase className="w-4 h-4" />
            {t('experience.professionalJourney')}
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 dark:text-white">
            {t('experience.title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('experience.subtitle')}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-6xl mx-auto relative px-4">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform md:-translate-x-1/2 hidden md:block rounded-full" />
          
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transform -translate-x-1/2 mt-8 hidden md:block z-10 shadow-lg">
                {exp.isCurrent && (
                  <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-75" />
                )}
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />

              {/* Content Card */}
              <div className={`flex-1 relative z-20 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group">
                  {/* Company Logo and Title */}
                  <div className="mb-4">
                    <div className="flex items-start gap-3">
                      {exp.companyLogo ? (
                        <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-gray-700 flex items-center justify-center overflow-hidden flex-shrink-0">
                          <Image
                            src={exp.companyLogo}
                            alt={t(exp.companyKey)}
                            width={40}
                            height={40}
                            className="object-contain"
                          />
                        </div>
                      ) : (
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                          <Building2 className="w-6 h-6 text-white" />
                        </div>
                      )}
                      <div className="min-w-0">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{t(exp.titleKey)}</h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">{t(exp.companyKey)}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {exp.isCurrent && (
                        <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium rounded-full flex items-center gap-1.5">
                          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                          {t('experience.current')}
                        </span>
                      )}
                      {exp.isMEng && (
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-medium rounded-full flex items-center gap-1">
                          <GraduationCap className="w-3 h-3" />
                          MEng ECE (AI/ML)
                        </span>
                      )}
                      {exp.isCoop && (
                        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-xs font-medium rounded-full flex items-center gap-1">
                          <GraduationCap className="w-3 h-3" />
                          BASc SEG
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {exp.startDate} - {exp.isCurrent ? t(exp.endDateKey) : exp.endDateKey}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {t(exp.descriptionKey)}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-4">
                    {exp.highlightKeys.map((highlightKey, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                        {t(highlightKey)}
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Linked Project */}
                  {exp.linkedProject && (
                    <Link
                      href={`/projects/${exp.linkedProject.slug}?from=experience`}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 dark:from-blue-500/20 dark:to-purple-500/20 dark:hover:from-blue-500/30 dark:hover:to-purple-500/30 text-blue-600 dark:text-blue-400 rounded-lg font-medium text-sm transition-all group-hover:scale-[1.02]"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {t('experience.viewProject')} {t(exp.linkedProject.titleKey)}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Timeline End */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="absolute left-4 md:left-1/2 bottom-0 w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 transform -translate-x-1/2 flex items-center justify-center shadow-lg"
          >
            <span className="text-white text-sm">🎓</span>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mt-24 text-center"
        >
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">{t('experience.wantToSeeWork')}</h3>
              <p className="text-gray-300 mb-6">
                {t('experience.checkOutProjects')}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-full font-semibold transition-all hover:scale-105"
                >
                  {t('experience.viewProjects')}
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/Ali-K-Resume.pdf"
                  target="_blank"
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold transition-all"
                >
                  <Download className="w-5 h-5" />
                  {t('common.downloadResume')}
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Get in touch section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 text-center pb-32"
        >
          <h3 className="text-2xl font-bold mb-6 dark:text-white">{t('common.getInTouch')}</h3>
          <div className="flex justify-center gap-4 flex-wrap">
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
            <Link 
              href="/Ali-K-Resume.pdf" 
              target="_blank" 
              download
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium transition-all hover:scale-105"
            >
              <Download className="w-5 h-5" />
              {t('common.downloadResume')}
            </Link>
          </div>
        </motion.div>
      </div>

      <Navigation currentPath="/experience" />
    </div>
  )
}

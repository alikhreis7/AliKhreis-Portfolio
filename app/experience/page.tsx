'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download, MapPin, Calendar, ExternalLink, Building2, Briefcase, ArrowRight, GraduationCap } from 'lucide-react'
import { Navigation } from '../components/Navigation'

type Experience = {
  id: string
  title: string
  company: string
  companyLogo?: string
  location: string
  startDate: string
  endDate: string
  isCurrent: boolean
  isCoop?: boolean
  isMEng?: boolean
  description: string
  highlights: string[]
  technologies: string[]
  linkedProject?: {
    slug: string
    title: string
  }
}

const experiences: Experience[] = [
  {
    id: '1',
    title: 'Software Developer Intern',
    company: 'Kinaxis',
    companyLogo: '/kinaxis-logo.png',
    location: 'Ottawa, CA',
    startDate: 'May 2025',
    endDate: 'Present',
    isCurrent: true,
    isMEng: true,
    description: 'Building scalable enterprise solutions through working as part of the Application Excellence team at Kinaxis. Advanced Development on applications like ServiceNow, Atlassian, agentic applications, and ML platforms!',
    highlights: [
      'Developed secure integrations across ServiceNow, Atlassian tools, cloud services, and APIs',
      'Supported DEV→TEST→PROD deployments with global Product/Engineering/Security teams',
      'Improved access controls, reliability, and observability',
      'Built integration patterns and contributed to an AI hackathon prototype using LLM copilots'
    ],
    technologies: ['ServiceNow', 'Atlassian', 'Azure', 'Python', 'LLM/AI', 'CI/CD'],
    linkedProject: {
      slug: 'sra-intelligence',
      title: 'SRA Intelligence Agent'
    }
  },
  {
    id: '2',
    title: 'GIS Data Developer (CO-OP)',
    company: 'Agriculture and Agri-Food Canada (AAFC)',
    companyLogo: '/aafc-logo.png',
    location: 'Ottawa, CA',
    startDate: 'May 2024',
    endDate: 'November 2024',
    isCurrent: false,
    isCoop: true,
    description: 'Automated GIS data processing workflows and developed web-based mapping tools, significantly improving efficiency and user engagement for agricultural climate impact assessment.',
    highlights: [
      'Automated GIS data processing with Python, SQL, and JavaScript, improving efficiency by 35%',
      'Developed web-based mapping tools using JavaScript and React, increasing user engagement by 40%',
      'Enhanced data accuracy with ArcGIS/Survey123 and Python automation',
      'Integrated complex geospatial data with Python and SQL, driving a 25% growth in data-driven decisions'
    ],
    technologies: ['Python', 'SQL', 'JavaScript', 'React', 'ArcGIS', 'Survey123'],
    linkedProject: {
      slug: 'agroclimate',
      title: 'SQ - Agroclimate Impact Reporter'
    }
  },
  {
    id: '3',
    title: 'Software Developer (CO-OP)',
    company: 'Canadian Internet Registration Authority (CIRA)',
    companyLogo: '/cira-logo.png',
    location: 'Ottawa, CA',
    startDate: 'May 2023',
    endDate: 'September 2023',
    isCurrent: false,
    isCoop: true,
    description: 'Built an embeddable Internet Performance Test (IPT) tool with React and TypeScript, driving 35% user growth and improving data collection from millions of Canadian users.',
    highlights: [
      'Built an embeddable IPT tool with React (TypeScript), Python & SQL, driving 35% user growth',
      'Enhanced data collection, improving internet performance insights from millions of users',
      'Integrated the IPT tool into a security browser extension, expanding usability and reach',
      'Applied Agile principles by sharing ideas and providing daily updates during development'
    ],
    technologies: ['React', 'TypeScript', 'Python', 'SQL', 'Agile', 'Browser Extensions'],
    linkedProject: {
      slug: 'cira',
      title: 'Internet Performance Test Tool'
    }
  },
  {
    id: '4',
    title: 'Full Stack Software Developer (CO-OP)',
    company: 'Fisheries and Oceans Canada (DFO)',
    companyLogo: '/dfo-logo.png',
    location: 'Ottawa, CA',
    startDate: 'September 2022',
    endDate: 'April 2023',
    isCurrent: false,
    isCoop: true,
    description: 'Developed a full-stack fisheries app for BC\'s official tidal waters sport fishing, working with HTML, CSS, JavaScript, TypeScript, Java, SQL, and Spring Boot.',
    highlights: [
      'Developed a full-stack app using HTML, CSS, JavaScript, TypeScript, Java, SQL, and Spring',
      'Built Spring-based web applications with an Oracle database for various projects',
      'Designed 40% of server-side architecture using UML diagrams',
      'Outlined software engineering tasks using UML, frameworks, and APIs'
    ],
    technologies: ['Java', 'Spring Boot', 'TypeScript', 'JavaScript', 'SQL', 'Oracle'],
    linkedProject: {
      slug: 'fishingbc',
      title: "BC's Tidal/Saltwater Fishing App"
    }
  },
  {
    id: '5',
    title: 'IT Internal Auditor (CO-OP)',
    company: 'Employment Social Development Canada (ESDC)',
    companyLogo: '/esdc-logo.png',
    location: 'Gatineau, CA',
    startDate: 'January 2022',
    endDate: 'August 2022',
    isCurrent: false,
    isCoop: true,
    description: 'Conducted IT audits and built comprehensive data dashboards with Power BI, presenting findings to senior management and ensuring compliance with cybersecurity policies.',
    highlights: [
      'Built 50% of Power-BI dashboards with all gathered data to present to senior management',
      'Used TeamMate auditing software to store all sensitive information and recent documents',
      'Navigated the department\'s cyber-security policies and controls (ITSG-33, NIST) related to various audits'
    ],
    technologies: ['Power BI', 'TeamMate', 'ITSG-33', 'NIST', 'Data Analysis', 'Auditing']
  }
]

export default function ExperiencePage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Header */}
      <div className="container mx-auto px-4 pt-8">
        <Link 
          href="/" 
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-8"
        >
          <span className="mr-2">←</span> Back to Home
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
            Professional Journey
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 dark:text-white">
            Work Experience
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey through various roles in software development, data engineering, and IT
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform md:-translate-x-1/2 hidden md:block" />
          
          {/* Mobile Timeline Line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 md:hidden" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-white dark:border-gray-900 transform -translate-x-1/2 z-10 shadow-lg">
                {exp.isCurrent && (
                  <span className="absolute -inset-2 rounded-full bg-blue-400 animate-ping opacity-50" />
                )}
              </div>

              {/* Content */}
              <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700 group">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-white dark:bg-gray-700 flex items-center justify-center overflow-hidden shadow-sm border border-gray-100 dark:border-gray-600">
                        {exp.companyLogo ? (
                          <Image
                            src={exp.companyLogo}
                            alt={`${exp.company} logo`}
                            width={40}
                            height={40}
                            className="w-10 h-10 object-contain"
                          />
                        ) : (
                          <Building2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {exp.title}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.isCurrent && (
                        <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium rounded-full flex items-center gap-1.5">
                          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                          Current
                        </span>
                      )}
                      {exp.isCoop && (
                        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-xs font-medium rounded-full flex items-center gap-1">
                          <GraduationCap className="w-3 h-3" />
                          BASc SEG
                        </span>
                      )}
                      {exp.isMEng && (
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-medium rounded-full flex items-center gap-1">
                          <GraduationCap className="w-3 h-3" />
                          MEng ECE (AI/ML)
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {exp.startDate} - {exp.endDate}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                        {highlight}
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
                      View Project: {exp.linkedProject.title}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  )}
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
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
              <h3 className="text-2xl font-bold mb-4">Want to see my work?</h3>
              <p className="text-gray-300 mb-6">
                Check out my projects to see what I&apos;ve built during these experiences
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-full font-semibold transition-all hover:scale-105"
                >
                  View Projects
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/Ali-K-Resume.pdf"
                  target="_blank"
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold transition-all"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
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
          <h3 className="text-2xl font-bold mb-6 dark:text-white">Get in touch:</h3>
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
              Download Resume
            </Link>
          </div>
        </motion.div>
      </div>

      <Navigation currentPath="/experience" />
    </div>
  )
}

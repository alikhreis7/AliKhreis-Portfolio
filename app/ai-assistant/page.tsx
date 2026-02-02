'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Mail, Download, Sparkles, Bot, MessageSquare, Zap, Brain, Clock, ArrowRight } from 'lucide-react'
import { Navigation } from '../components/Navigation'
import { useLanguage } from '../components/LanguageProvider'

const demoMessages = [
  { role: 'user', messageKey: 'aiAssistant.demo.q1' },
  { role: 'assistant', messageKey: 'aiAssistant.demo.a1' },
  { role: 'user', messageKey: 'aiAssistant.demo.q2' },
  { role: 'assistant', messageKey: 'aiAssistant.demo.a2' },
  { role: 'user', messageKey: 'aiAssistant.demo.q3' },
  { role: 'assistant', messageKey: 'aiAssistant.demo.a3' },
]

export default function AIAssistantPage() {
  const { t } = useLanguage()
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const [displayedMessages, setDisplayedMessages] = useState<typeof demoMessages>([])
  const [inputValue, setInputValue] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530)
    return () => clearInterval(cursorInterval)
  }, [])

  // Auto-play demo conversation
  useEffect(() => {
    if (currentMessageIndex >= demoMessages.length) {
      // Reset after a pause
      const resetTimeout = setTimeout(() => {
        setDisplayedMessages([])
        setCurrentMessageIndex(0)
      }, 5000)
      return () => clearTimeout(resetTimeout)
    }

    const currentMessage = demoMessages[currentMessageIndex]
    
    if (currentMessage.role === 'assistant') {
      setIsTyping(true)
      const typingTimeout = setTimeout(() => {
        setIsTyping(false)
        setDisplayedMessages(prev => [...prev, currentMessage])
        setCurrentMessageIndex(prev => prev + 1)
      }, 1500)
      return () => clearTimeout(typingTimeout)
    } else {
      const messageTimeout = setTimeout(() => {
        setDisplayedMessages(prev => [...prev, currentMessage])
        setCurrentMessageIndex(prev => prev + 1)
      }, 1000)
      return () => clearTimeout(messageTimeout)
    }
  }, [currentMessageIndex])

  const features = [
    { icon: Brain, titleKey: 'aiAssistant.feature1Title', descKey: 'aiAssistant.feature1Desc' },
    { icon: Zap, titleKey: 'aiAssistant.feature2Title', descKey: 'aiAssistant.feature2Desc' },
    { icon: MessageSquare, titleKey: 'aiAssistant.feature3Title', descKey: 'aiAssistant.feature3Desc' },
  ]

  return (
    <div className="min-h-screen w-full bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-900 dark:to-slate-900 transition-colors duration-300">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Coming Soon Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 dark:from-purple-500/20 dark:to-blue-500/20 border border-purple-500/20 dark:border-purple-500/30 mb-6"
          >
            <Clock className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-medium text-purple-600 dark:text-purple-400">{t('aiAssistant.comingSoon')}</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white"
          >
            <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              {t('aiAssistant.title')}
            </span>
            <motion.span
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1 }}
              className="inline-block ml-3"
            >
              <Bot className="w-12 h-12 md:w-16 md:h-16 text-purple-500 inline" />
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            {t('aiAssistant.subtitle')}
          </motion.p>
        </div>
      </div>

      {/* Interactive Demo Chat */}
      <div className="container mx-auto px-4 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 rounded-3xl blur-lg opacity-30 dark:opacity-40 animate-pulse" />
            
            {/* Chat container */}
            <div className="relative bg-white dark:bg-gray-800/90 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden backdrop-blur-sm">
              {/* Chat header */}
              <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{t('aiAssistant.chatTitle')}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{t('aiAssistant.chatStatus')}</p>
                </div>
              </div>

              {/* Messages area */}
              <div className="h-80 overflow-y-auto p-6 space-y-4">
                <AnimatePresence mode="popLayout">
                  {displayedMessages.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                          message.role === 'user'
                            ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-br-md'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-md'
                        }`}
                      >
                        <p className="text-sm">{t(message.messageKey)}</p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Typing indicator */}
                <AnimatePresence>
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex justify-start"
                    >
                      <div className="bg-gray-100 dark:bg-gray-700 px-4 py-3 rounded-2xl rounded-bl-md">
                        <div className="flex gap-1">
                          <motion.span
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                            className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full"
                          />
                          <motion.span
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                            className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full"
                          />
                          <motion.span
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                            className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Input area (disabled) */}
              <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
                <div className="flex items-center gap-3">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder={t('aiAssistant.inputPlaceholder')}
                      disabled
                      className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 placeholder-gray-400 dark:placeholder-gray-500 border border-gray-200 dark:border-gray-600 cursor-not-allowed"
                    />
                    <span className={`absolute right-4 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-gray-400 ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
                  </div>
                  <button
                    disabled
                    className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white opacity-50 cursor-not-allowed"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Features Preview */}
      <div className="container mx-auto px-4 py-12">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white"
        >
          {t('aiAssistant.featuresTitle')}
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-300" />
              <div className="relative p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 h-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 dark:from-purple-500/20 dark:to-blue-500/20 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{t(feature.titleKey)}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t(feature.descKey)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Progress indicator */}
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto text-center"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{t('aiAssistant.progressLabel')}</p>
          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '35%' }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
            />
          </div>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">{t('aiAssistant.progressText')}</p>
        </motion.div>
      </div>

      {/* Get in touch */}
      <div className="relative z-10 container mx-auto px-4 pb-24 mt-8">
        <div className="flex flex-wrap justify-center items-center gap-4">
          <span className="font-medium text-gray-600 dark:text-gray-300">{t('common.getInTouch')}</span>
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
            {t('common.downloadResume')}
          </Link>
        </div>
      </div>

      <Navigation currentPath="/ai-assistant" />
    </div>
  )
}

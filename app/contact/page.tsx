'use client'

import Link from 'next/link'
import { Github, Linkedin, Mail, MapPin, MessageCircle, Download } from 'lucide-react'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Navigation } from '../components/Navigation'
import { useLanguage } from '../components/LanguageProvider'

export default function Contact() {
  const { t } = useLanguage()
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [emailError, setEmailError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const validateEmail = (value: string) => {
    if (!value) {
      setEmailError(t('contact.invalidEmail'))
      return false
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(value)) {
      setEmailError(t('contact.invalidEmail'))
      return false
    }
    setEmailError('')
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate all fields
    if (!name.trim()) {
      setSubmitError(t('contact.nameRequired'))
      return
    }
    if (!validateEmail(email)) return
    if (!message.trim()) {
      setSubmitError(t('contact.messageRequired'))
      return
    }

    setIsSubmitting(true)
    setSubmitError('')

    try {
      const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
        to_name: 'Ali Khries',
      }

      await emailjs.send(
        'service_pxm4vry',
        'template_zrzpglu',
        templateParams,
        'BW12oiGgE44xMbpFa'
      )
      
      // Clear form and show success
      setName('')
      setEmail('')
      setMessage('')
      setSubmitSuccess(true)
      
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitError(t('contact.failed'))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen w-full bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <div className="container mx-auto px-4 py-8 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300">
          <span>{t('contact.backToHome')}</span>
        </Link>
        <div className="flex items-center gap-2">
          <div className="flex text-yellow-400">
            <MessageCircle className="w-6 h-6" />
            <MessageCircle className="w-6 h-6 -ml-2" />
          </div>
          <span className="font-medium dark:text-white">{t('contact.title')}</span>
        </div>
      </div>

      {/* Contact Form */}
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2 dark:text-gray-300">
              {t('contact.name')}
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-200 dark:focus:ring-yellow-500/50"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2 dark:text-gray-300">
              {t('contact.email')}
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (emailError) validateEmail(e.target.value)
              }}
              onBlur={(e) => validateEmail(e.target.value)}
              className={`w-full px-4 py-3 rounded-xl border ${
                emailError ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
              } bg-white dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-200 dark:focus:ring-yellow-500/50`}
            />
            {emailError && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                {emailError}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2 dark:text-gray-300">
              {t('contact.message')}
            </label>
            <textarea
              id="message"
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-200 dark:focus:ring-yellow-500/50 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full transition-colors ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-black/90 dark:hover:bg-gray-200'
            }`}
          >
            {isSubmitting ? t('contact.sending') : t('contact.send')}
          </button>

          {submitSuccess && (
            <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-xl">
              {t('contact.thankYou')}
            </div>
          )}

          {submitError && (
            <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-xl">
              {submitError}
            </div>
          )}
        </form>

        {/* Contact Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <div className="flex items-center gap-3 dark:text-gray-300">
            <Mail className="w-5 h-5" />
            <span>alikhreis12@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 dark:text-gray-300">
            <MapPin className="w-5 h-5" />
            <span>{t('contact.location')}</span>
          </div>
        </div>
      </div>

      {/* Get in touch */}
      <div className="relative z-10 container mx-auto px-4 pb-24">
        <div className="flex flex-wrap justify-center items-center gap-4">
          <span className="font-medium text-gray-800 dark:text-gray-300">{t('common.getInTouch')}</span>
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

      <Navigation currentPath="/contact" />
    </div>
  )
} 
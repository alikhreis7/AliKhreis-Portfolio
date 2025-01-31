'use client'

import Link from 'next/link'
import { Github, Linkedin, Mail, Phone, MapPin, MessageCircle, Download } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [emailError, setEmailError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const validateEmail = (value: string) => {
    if (!value) {
      setEmailError('Email address is required')
      return false
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(value)) {
      setEmailError('Please enter a valid email address')
      return false
    }
    setEmailError('')
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate all fields
    if (!name.trim()) {
      setSubmitError('Please enter your name')
      return
    }
    if (!validateEmail(email)) return
    if (!message.trim()) {
      setSubmitError('Please enter a message')
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
      setSubmitError('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen w-full bg-white">
      {/* Header */}
      <div className="container mx-auto px-4 py-8 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-black hover:text-gray-600">
          <span>← Back to home</span>
        </Link>
        <div className="flex items-center gap-2">
          <div className="flex text-yellow-400">
            <MessageCircle className="w-6 h-6" />
            <MessageCircle className="w-6 h-6 -ml-2" />
          </div>
          <span className="font-medium">Contact me</span>
        </div>
      </div>

      {/* Contact Form */}
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-200"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email Address
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
                emailError ? 'border-red-500' : 'border-gray-200'
              } focus:outline-none focus:ring-2 focus:ring-yellow-200`}
            />
            {emailError && (
              <p className="mt-2 text-sm text-red-600">
                {emailError}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-200 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-black text-white px-6 py-3 rounded-full transition-colors ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-black/90'
            }`}
          >
            {isSubmitting ? 'Sending...' : 'Submit'}
          </button>

          {submitSuccess && (
            <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-xl">
              Thank you for your message! I&apos;ll get back to you soon.
            </div>
          )}

          {submitError && (
            <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-xl">
              {submitError}
            </div>
          )}
        </form>

        {/* Contact Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5" />
            <span>+1 (613) 400-0892</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5" />
            <span>alikhreis12@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5" />
            <span>Ottawa, ON, Canada</span>
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
                  Blog
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
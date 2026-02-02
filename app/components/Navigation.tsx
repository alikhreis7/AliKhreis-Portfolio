'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { ThemeToggle } from './ThemeToggle'
import { LanguageToggle } from './LanguageToggle'
import { useLanguage } from './LanguageProvider'

type NavItem = {
  href: string
  labelKey: string
}

const navItems: NavItem[] = [
  { href: '/', labelKey: 'nav.about' },
  { href: '/experience', labelKey: 'nav.experience' },
  { href: '/projects', labelKey: 'nav.projects' },
  { href: '/blog', labelKey: 'nav.research' },
  { href: '/contact', labelKey: 'nav.contact' },
  { href: '/ai-assistant', labelKey: 'nav.aiAssistant' },
]

type NavigationProps = {
  currentPath: string
}

export function Navigation({ currentPath }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()

  const isActive = (href: string) => {
    if (href === '/') return currentPath === '/'
    return currentPath.startsWith(href)
  }

  return (
    <>
      {/* Desktop Navigation */}
      <div className="fixed bottom-4 left-0 right-0 justify-center z-50 hidden lg:flex">
        <div className="max-w-5xl w-full mx-4">
          <nav className="bg-gradient-to-b from-white/70 to-white/40 dark:from-gray-800/70 dark:to-gray-900/40 backdrop-blur-md rounded-full px-6 py-3.5 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_20px_-2px_rgba(0,0,0,0.4)] border border-white/20 dark:border-gray-700/30">
            <ul className="flex items-center justify-center w-full gap-1 xl:gap-2">
              <li className="flex-shrink-0 mr-2">
                <Link href="/" className="block hover:opacity-80 transition-opacity">
                  <Image
                    src="/profile-pic.png"
                    alt="Ali Khreis"
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-white/50 dark:ring-gray-700/50 hover:ring-blue-400/50 transition-all"
                  />
                </Link>
              </li>
              {navItems.map((item) => (
                <li key={item.href} className="flex-shrink-0">
                  <Link
                    href={item.href}
                    className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                      isActive(item.href)
                        ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-md'
                        : 'hover:bg-gray-100/80 dark:hover:bg-gray-700/80 text-gray-700 dark:text-gray-200'
                    }`}
                  >
                    {t(item.labelKey)}
                  </Link>
                </li>
              ))}
              <li className="flex items-center gap-2 ml-2 pl-2 border-l border-gray-300/50 dark:border-gray-600/50 flex-shrink-0">
                <LanguageToggle />
                <ThemeToggle />
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Tablet Navigation */}
      <div className="fixed bottom-4 left-0 right-0 justify-center z-50 hidden md:flex lg:hidden">
        <div className="mx-4">
          <nav className="bg-gradient-to-b from-white/70 to-white/40 dark:from-gray-800/70 dark:to-gray-900/40 backdrop-blur-md rounded-full px-4 py-3 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_20px_-2px_rgba(0,0,0,0.4)] border border-white/20 dark:border-gray-700/30">
            <ul className="flex items-center justify-center gap-1">
              <li className="flex-shrink-0 mr-1">
                <Link href="/" className="block hover:opacity-80 transition-opacity">
                  <Image
                    src="/profile-pic.png"
                    alt="Ali Khreis"
                    width={36}
                    height={36}
                    className="w-9 h-9 rounded-full object-cover hover:ring-2 hover:ring-blue-400/50 transition-all"
                  />
                </Link>
              </li>
              {navItems.map((item) => (
                <li key={item.href} className="flex-shrink-0">
                  <Link
                    href={item.href}
                    className={`px-3 py-2 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
                      isActive(item.href)
                        ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                        : 'hover:bg-gray-100/80 dark:hover:bg-gray-700/80 text-gray-700 dark:text-gray-200'
                    }`}
                  >
                    {t(item.labelKey)}
                  </Link>
                </li>
              ))}
              <li className="flex items-center gap-1 ml-1 flex-shrink-0">
                <LanguageToggle />
                <ThemeToggle />
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="fixed bottom-4 left-0 right-0 flex justify-center z-50 md:hidden">
        <div className="mx-4">
          <nav className="bg-gradient-to-b from-white/80 to-white/60 dark:from-gray-800/80 dark:to-gray-900/60 backdrop-blur-md rounded-full p-2 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_20px_-2px_rgba(0,0,0,0.4)] border border-white/20 dark:border-gray-700/30">
            <div className="flex items-center gap-3 px-2">
              <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Image
                  src="/profile-pic.png"
                  alt="Ali Khreis"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                  Ali Khreis
                </span>
              </Link>
              <div className="flex items-center gap-2">
                <LanguageToggle />
                <ThemeToggle />
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 rounded-full hover:bg-gray-100/80 dark:hover:bg-gray-700/80 text-gray-800 dark:text-gray-200 transition-colors"
                  aria-label="Toggle menu"
                >
                  {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-20 left-4 right-4 z-50 md:hidden"
          >
            <nav className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-2xl p-4 shadow-[0_4px_30px_-2px_rgba(0,0,0,0.2)] dark:shadow-[0_4px_30px_-2px_rgba(0,0,0,0.5)] border border-white/20 dark:border-gray-700/30">
              <ul className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                        isActive(item.href)
                          ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                          : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200'
                      }`}
                    >
                      {t(item.labelKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop for mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/20 dark:bg-black/40 z-40 md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  )
}

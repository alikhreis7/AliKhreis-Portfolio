'use client'

import { useLanguage } from './LanguageProvider'
import { motion } from 'framer-motion'

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <motion.button
      onClick={toggleLanguage}
      className="px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center gap-1 text-sm font-medium"
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${language === 'en' ? 'French' : 'English'}`}
    >
      <motion.span
        key={language}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 10, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="text-gray-700 dark:text-gray-200"
      >
        {language === 'en' ? '🇬🇧 EN' : '🇫🇷 FR'}
      </motion.span>
    </motion.button>
  )
}

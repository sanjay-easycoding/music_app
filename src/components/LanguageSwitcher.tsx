'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const languages = [
  { code: 'de', name: 'Deutsch', flag: '🇩🇪', nativeName: 'Deutsch' },
  { code: 'en', name: 'English', flag: '🇺🇸', nativeName: 'English' }
]

export default function LanguageSwitcher() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  
  const getPathForLanguage = (langCode: string) => {
    const segments = pathname.split('/')
    
    // If we're at root and switching to German, stay at root
    if (langCode === 'de' && segments.length === 1) {
      return '/'
    }
    
    // If we're at root and switching to other languages, add locale
    if (segments.length === 1 && langCode !== 'de') {
      return `/${langCode}`
    }
    
    // If path already has a locale, replace it
    if (segments.length > 1 && languages.some(lang => lang.code === segments[1])) {
      segments[1] = langCode
      // If switching to German and we're at a locale root, go to actual root
      if (langCode === 'de' && segments.length === 2) {
        return '/'
      }
    } else {
      segments.splice(1, 0, langCode)
    }
    
    return segments.join('/')
  }

  // Get current language
  const currentLanguage = languages.find(lang => {
    const segments = pathname.split('/')
    return segments.length === 1 ? lang.code === 'de' : segments[1] === lang.code
  }) || languages[0]

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Current Language Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 border border-gray-200 dark:border-gray-600"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="text-lg">{currentLanguage.flag}</span>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 hidden sm:block">
          {currentLanguage.code.toUpperCase()}
        </span>
        <motion.svg
          className="w-4 h-4 text-gray-500 dark:text-gray-400"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </motion.button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-600 overflow-hidden z-50"
          >
            <div className="py-1">
              {languages.map((language, index) => (
                <motion.div
                  key={language.code}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                >
                  <Link
                    href={getPathForLanguage(language.code)}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 text-sm transition-all duration-200 ${
                      language.code === currentLanguage.code
                        ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                  >
                    <span className="text-lg">{language.flag}</span>
                    <div className="flex flex-col">
                      <span className="font-medium">{language.nativeName}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {language.name}
                      </span>
                    </div>
                    {language.code === currentLanguage.code && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="ml-auto w-2 h-2 bg-blue-500 rounded-full"
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 
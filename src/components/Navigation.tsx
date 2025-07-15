'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import LanguageSwitcher from './LanguageSwitcher'
import { translations, type Locale } from '@/lib/translations'

export default function Navigation() {
  const pathname = usePathname()
  
  // Extract locale from pathname, default to 'de' for root
  const pathSegments = pathname.split('/')
  const locale = pathSegments[1] && ['en', 'de'].includes(pathSegments[1]) 
    ? pathSegments[1] as Locale 
    : 'de'
  const t = translations[locale]

  const getPathForLocale = (path: string) => {
    // If we're at root, use root paths for German, otherwise use locale paths
    if (locale === 'de' && pathSegments.length === 1) {
      return path
    }
    return `/${locale}${path}`
  }

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link 
              href={getPathForLocale('/')}
              className="flex items-center space-x-2 group"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <span className="text-white text-xl font-bold">🎵</span>
              </div>
              <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
                Music Blast
              </span>
            </Link>
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Link
                href={getPathForLocale('/')}
                className="relative px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition-all duration-300 group"
              >
                {t.nav.home}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                href={getPathForLocale('/about')}
                className="relative px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition-all duration-300 group"
              >
                {t.nav.about}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                />
              </Link>
            </motion.div>
          </div>

          {/* Right Side - Language Switcher & CTA */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <LanguageSwitcher />
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="hidden sm:block"
            >
              <Link
                href="#"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                {t.header.cart}
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
} 
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import LanguageSwitcher from './LanguageSwitcher'
import { translations, type Locale } from '@/lib/translations'

export default function Header() {
  const pathname = usePathname()
  
  // Extract locale from pathname, default to 'de' for root
  const pathSegments = pathname.split('/')
  const locale = pathSegments[1] && ['en', 'de'].includes(pathSegments[1]) 
    ? pathSegments[1] as Locale 
    : 'de'
  const t = translations[locale]

  const getPathForLocale = (path: string) => {
    if (locale === 'de' && pathSegments.length === 1) {
      return path
    }
    return `/${locale}${path}`
  }

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              href={getPathForLocale('/')}
              className="text-2xl font-bold text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              {t.header.logo}
            </Link>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href={getPathForLocale('/')}
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              {t.header.products}
            </Link>
            <Link
              href={getPathForLocale('/reviews')}
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              {t.header.reviews}
            </Link>
          </nav>

          {/* Right side - Cart, Auth, Language Switcher */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
            <button className="relative p-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button>

            {/* Auth Buttons */}
            <div className="hidden sm:flex items-center space-x-2">
              <Link
                href={getPathForLocale('/login')}
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {t.header.login}
              </Link>
              <Link
                href={getPathForLocale('/signup')}
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {t.header.signup}
              </Link>
            </div>

            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* Mobile menu button */}
            <button className="md:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
} 
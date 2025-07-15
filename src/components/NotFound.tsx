'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { translations, type Locale } from '@/lib/translations'

export default function NotFound() {
  const pathname = usePathname()
  
  // Extract locale from pathname, default to 'de' for root
  const pathSegments = pathname.split('/')
  const locale = pathSegments[1] && ['en', 'de'].includes(pathSegments[1]) 
    ? pathSegments[1] as Locale 
    : 'de'

  const getPathForLocale = (path: string) => {
    if (locale === 'de') {
      return path
    }
    return `/${locale}${path}`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-red-500 dark:text-red-400 mb-4">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {locale === 'en' && "Page Not Found"}
            {locale === 'de' && "Seite nicht gefunden"}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            {locale === 'en' && "Sorry, the page you're looking for doesn't exist."}
            {locale === 'de' && "Entschuldigung, die gesuchte Seite existiert nicht."}
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            href={getPathForLocale('/')}
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            {locale === 'en' && "Go Back Home"}
            {locale === 'de' && "Zurück zur Startseite"}
          </Link>
          
          <div className="text-sm text-gray-500 dark:text-gray-400">
            <p>
              {locale === 'en' && "Or try one of these pages:"}
              {locale === 'de' && "O versuchen Sie eine dieser Seiten:"}
            </p>
            <div className="mt-2 space-x-4">
              <Link
                href={getPathForLocale('/')}
                className="text-red-600 dark:text-red-400 hover:underline"
              >
                {translations[locale].nav.home}
              </Link>
              <Link
                href={getPathForLocale('/about')}
                className="text-red-600 dark:text-red-400 hover:underline"
              >
                {translations[locale].nav.about}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
'use client'

import { usePathname } from 'next/navigation'
import { translations, type Locale } from '@/lib/translations'

export default function About() {
  const pathname = usePathname()
  
  // Extract locale from pathname, default to 'de' for root
  const pathSegments = pathname.split('/')
  const locale = pathSegments[1] && ['en', 'de'].includes(pathSegments[1]) 
    ? pathSegments[1] as Locale 
    : 'de'
  const t = translations[locale]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {t.about.title}
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
            {t.about.subtitle}
          </h2>
        </div>
        
        <div className="space-y-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              {t.about.description}
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {t.about.features}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg text-center">
              <div className="text-3xl mb-4">🎵</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Unlimited Music
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Access millions of songs from artists around the world
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg text-center">
              <div className="text-3xl mb-4">🎧</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                High Quality
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Crystal clear audio streaming at the highest quality
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg text-center">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Cross Platform
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Listen on any device, anywhere, anytime
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
'use client'

import { usePathname } from 'next/navigation'
import { translations, type Locale } from '@/lib/translations'

export default function Comparison() {
  const pathname = usePathname()
  
  // Extract locale from pathname, default to 'de' for root
  const pathSegments = pathname.split('/')
  const locale = pathSegments[1] && ['en', 'de'].includes(pathSegments[1]) 
    ? pathSegments[1] as Locale 
    : 'de'
  const t = translations[locale]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.comparison.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t.comparison.subtitle}
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-purple-50 dark:bg-purple-900">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                    Features
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-purple-600 dark:text-purple-400">
                    Music Blast
                  </th>
                  {t.comparison.competitors.map((competitor, index) => (
                    <th key={index} className="px-6 py-4 text-center text-sm font-semibold text-gray-600 dark:text-gray-300">
                      {competitor}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {t.comparison.features.map((feature, index) => (
                  <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                      {feature}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <svg className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </td>
                    {t.comparison.competitors.map((_, compIndex) => (
                      <td key={compIndex} className="px-6 py-4 text-center">
                        {index < 2 ? (
                          <svg className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <svg className="w-6 h-6 text-red-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          </svg>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Winner Badge */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-lg font-semibold">
            <span className="mr-2">🏆</span>
            Music Blast Wins!
          </div>
        </div>
      </div>
    </section>
  )
} 
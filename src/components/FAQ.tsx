'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { translations, type Locale } from '@/lib/translations'

export default function FAQ() {
  const pathname = usePathname()
  
  // Extract locale from pathname, default to 'de' for root
  const pathSegments = pathname.split('/')
  const locale = pathSegments[1] && ['en', 'de'].includes(pathSegments[1]) 
    ? pathSegments[1] as Locale 
    : 'de'
  const t = translations[locale]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.faq.title}
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {t.faq.items.map((item, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {item.question}
                </h3>
                <svg
                  className={`w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="mt-12 text-center">
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Our support team is here to help you 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Contact Support
              </button>
              <button className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-purple-500 dark:hover:border-purple-400 font-semibold py-3 px-6 rounded-lg transition-colors">
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
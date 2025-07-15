import { translations, type Locale } from '@/lib/translations'

interface HomeProps {
  locale: Locale
}

export default function Home({ locale }: HomeProps) {
  // Validate locale and fallback to German if invalid
  const validLocale = translations[locale] ? locale : 'de'
  const t = translations[validLocale]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {t.home.title}
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            {t.home.subtitle}
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            {t.home.description}
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-8 rounded-full text-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
            {t.home.cta}
          </button>
        </div>
      </div>
    </div>
  )
} 
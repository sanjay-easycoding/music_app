'use client'

import { usePathname } from 'next/navigation'
import { translations, type Locale } from '@/lib/translations'
import { motion } from 'framer-motion'

export default function Guarantees() {
  const pathname = usePathname()
  
  // Extract locale from pathname, default to 'de' for root
  const pathSegments = pathname.split('/')
  const locale = pathSegments[1] && ['en', 'de'].includes(pathSegments[1]) 
    ? pathSegments[1] as Locale 
    : 'de'
  const t = translations[locale]

  const guaranteeIcons = [
    // Money Back
    <svg key="money" className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
    </svg>,
    // Free Shipping
    <svg key="shipping" className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
      <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z" />
    </svg>,
    // Free App
    <svg key="app" className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
      <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
    </svg>
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  }

  const trustBadgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.guarantees.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t.guarantees.subtitle}
          </p>
        </motion.div>

        {/* Guarantees Grid */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {t.guarantees.items.map((guarantee, index) => (
            <motion.div 
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300"
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Icon */}
              <motion.div 
                className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600 dark:text-green-400"
                variants={iconVariants}
                whileHover="hover"
              >
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                >
                  {guaranteeIcons[index]}
                </motion.div>
              </motion.div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {guarantee.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {guarantee.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badges */}
        <motion.div 
          className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { icon: "🔒", label: "Secure Payment", color: "green" },
              { icon: "📱", label: "iOS & Android", color: "blue" },
              { icon: "🎵", label: "Spotify Ready", color: "purple" },
              { icon: "👨‍👩‍👧‍👦", label: "Family Fun", color: "yellow" }
            ].map((badge, index) => (
              <motion.div 
                key={index}
                className="flex flex-col items-center"
                variants={trustBadgeVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <motion.div 
                  className={`w-12 h-12 bg-${badge.color}-100 dark:bg-${badge.color}-900 rounded-full flex items-center justify-center mb-3`}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.span
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  >
                    {badge.icon}
                  </motion.span>
                </motion.div>
                <div className="text-sm font-medium text-gray-900 dark:text-white">
                  {badge.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 
'use client'

import { usePathname } from 'next/navigation'
import { translations, type Locale } from '@/lib/translations'
import { motion } from 'framer-motion'

export default function Features() {
  const pathname = usePathname()
  
  // Extract locale from pathname, default to 'de' for root
  const pathSegments = pathname.split('/')
  const locale = pathSegments[1] && ['en', 'de'].includes(pathSegments[1]) 
    ? pathSegments[1] as Locale 
    : 'de'
  const t = translations[locale]

  const featureIcons = [
    // QR Codes
    <svg key="qr" className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
    </svg>,
    // Mobile App
    <svg key="mobile" className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
      <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
    </svg>,
    // Game Modes
    <svg key="modes" className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    // Timeline
    <svg key="timeline" className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
    </svg>
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  const iconVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 300
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
            {t.features.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t.features.subtitle}
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {t.features.items.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-100/50 to-blue-100/50 dark:from-purple-900/20 dark:to-blue-900/20 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Floating particles */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-60"
                  style={{
                    left: `${20 + i * 30}%`,
                    top: `${10 + i * 20}%`,
                  }}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.6, 1, 0.6],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 2 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
              {/* Icon */}
              <motion.div 
                className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4 text-purple-600 dark:text-purple-400"
                variants={iconVariants}
                whileHover="hover"
              >
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                >
                  {featureIcons[index]}
                </motion.div>
              </motion.div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Benefits */}
        <motion.div 
          className="mt-16 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { number: "300+", label: "Song Cards" },
              { number: "4", label: "Game Modes" },
              { number: "2-8", label: "Players" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 
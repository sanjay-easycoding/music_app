'use client'

import { usePathname } from 'next/navigation'
import { translations, type Locale } from '@/lib/translations'
import { motion } from 'framer-motion'

export default function Reviews() {
  const pathname = usePathname()
  
  // Extract locale from pathname, default to 'de' for root
  const pathSegments = pathname.split('/')
  const locale = pathSegments[1] && ['en', 'de'].includes(pathSegments[1]) 
    ? pathSegments[1] as Locale 
    : 'de'
  const t = translations[locale]

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

  const reviewVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        type: 'spring' as const,
        stiffness: 100
      }
    }
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 2, -2, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut' as const
      }
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-10 left-1/4 w-32 h-32 bg-purple-200 dark:bg-purple-800 rounded-full opacity-20"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute bottom-10 right-1/4 w-24 h-24 bg-pink-200 dark:bg-pink-800 rounded-full opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [360, 180, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t.reviews.title}
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t.reviews.subtitle}
          </motion.p>
          
          {/* Rating Display */}
          <motion.div 
            className="flex items-center justify-center space-x-4 mt-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.div 
              className="text-4xl font-bold text-yellow-500"
              animate={{ 
                scale: [1, 1.1, 1],
                textShadow: ["0 0 0px rgba(245,158,11,0)", "0 0 20px rgba(245,158,11,0.5)", "0 0 0px rgba(245,158,11,0)"]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ⭐ {t.reviews.averageRating}
            </motion.div>
            <div className="text-gray-600 dark:text-gray-400">
              ({t.reviews.totalReviews} reviews)
            </div>
          </motion.div>
        </motion.div>

        {/* Reviews Grid */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {t.reviews.items.map((review, index) => (
            <motion.div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl relative overflow-hidden"
              variants={reviewVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-100/30 to-pink-100/30 dark:from-purple-900/20 dark:to-pink-900/20 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Floating elements */}
              <motion.div
                className="absolute top-4 right-4 w-8 h-8 bg-yellow-200 dark:bg-yellow-800 rounded-full opacity-60"
                variants={floatingVariants}
                animate="animate"
              />
              
              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <motion.span
                    key={i}
                    className="text-yellow-400 text-xl"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1, duration: 0.3 }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                  >
                    ⭐
                  </motion.span>
                ))}
              </div>

              {/* Review Text */}
              <motion.p 
                className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                &ldquo;{review.comment}&rdquo;
              </motion.p>

              {/* Author */}
              <motion.div 
                className="flex items-center space-x-3 relative z-10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-lg"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  {review.name.charAt(0)}
                </motion.div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {review.name}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Music Enthusiast
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.button 
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl relative overflow-hidden"
            whileHover={{ 
              scale: 1.05,
              y: -3,
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring' as const, stiffness: 300 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="relative z-10"
              animate={{ 
                textShadow: ["0 0 0px rgba(255,255,255,0)", "0 0 20px rgba(255,255,255,0.5)", "0 0 0px rgba(255,255,255,0)"]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Join the Fun Today!
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 
'use client'

import { usePathname } from 'next/navigation'
import { translations, type Locale } from '@/lib/translations'
import { motion } from 'framer-motion'

export default function Hero() {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        type: 'spring' as const,
        stiffness: 100
      }
    }
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity
      }
    }
  }

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity
      }
    }
  }

  return (
    <section className="relative bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-20 lg:py-32 overflow-hidden">
      {/* Enhanced animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-purple-200 dark:bg-purple-800 rounded-full opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [360, 180, 0],
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Additional floating elements */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-16 h-16 bg-pink-200 dark:bg-pink-800 rounded-full opacity-30"
        animate={{
          scale: [1, 1.4, 1],
          rotate: [0, 90, 180, 270, 360],
          y: [-10, 20, -10],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-12 h-12 bg-yellow-200 dark:bg-yellow-800 rounded-full opacity-30"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [360, 270, 180, 90, 0],
          x: [-10, 15, -10],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Animated particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-purple-400 dark:bg-purple-600 rounded-full opacity-60"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.6, 1, 0.6],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut"
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left side - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span 
                className="mr-2"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🎮
              </motion.span>
              {t.hero.discount}
            </motion.div>

            {/* Title */}
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
              variants={itemVariants}
            >
              {t.hero.title.split(' ').map((word, index) => (
                <motion.span
                  key={index}
                  className="inline-block mr-2"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{
                    scale: 1.05,
                    color: "#8b5cf6",
                    transition: { duration: 0.2 }
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300"
              variants={itemVariants}
            >
              {t.hero.subtitle}
            </motion.p>

            {/* Description */}
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-400"
              variants={itemVariants}
            >
              {t.hero.description}
            </motion.p>

            {/* Pricing */}
            <motion.div 
              className="flex items-center space-x-4"
              variants={itemVariants}
            >
              <motion.span 
                className="text-4xl font-bold text-gray-900 dark:text-white"
                variants={pulseVariants}
                animate="animate"
              >
                {t.hero.price}
              </motion.span>
              <span className="text-2xl text-gray-400 line-through">
                {t.hero.originalPrice}
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <motion.button 
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-8 rounded-full text-lg transition-colors duration-200 shadow-lg hover:shadow-xl relative overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
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
                  {t.hero.cta}
                </motion.span>
              </motion.button>
              <motion.button 
                className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-purple-500 dark:hover:border-purple-400 font-semibold py-4 px-8 rounded-full text-lg transition-colors duration-200"
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  borderColor: "#8b5cf6"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring' as const, stiffness: 300 }}
              >
                {t.hero.secondaryCta}
              </motion.button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div 
              className="flex flex-wrap gap-6 pt-4"
              variants={itemVariants}
            >
              {[
                { icon: "🚚", text: t.hero.trustBadges.freeShipping },
                { icon: "🔒", text: t.hero.trustBadges.secureCheckout },
                { icon: "💰", text: t.hero.trustBadges.moneyBack }
              ].map((badge, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400"
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.span
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  >
                    {badge.icon}
                  </motion.span>
                  <span>{badge.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right side - Product Image */}
          <motion.div 
            className="relative"
            variants={itemVariants}
          >
            <div className="relative z-10">
              {/* Game Box */}
              <motion.div 
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl mb-6"
                variants={floatingVariants}
                animate="animate"
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="w-full h-64 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-800 dark:to-blue-800 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <motion.div 
                      className="w-24 h-32 bg-purple-200 dark:bg-purple-700 rounded-lg mx-auto mb-4 flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring' as const, stiffness: 300 }}
                    >
                      <div className="text-center">
                        <motion.div 
                          className="text-2xl mb-2"
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          🎵
                        </motion.div>
                        <div className="text-xs font-bold text-purple-800 dark:text-purple-200">MUSIC BLAST</div>
                      </div>
                    </motion.div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Game Box</p>
                    <p className="text-gray-500 dark:text-gray-500 text-xs">300+ QR Cards</p>
                  </div>
                </div>
              </motion.div>

              {/* Mobile App */}
              <motion.div 
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl ml-8"
                variants={floatingVariants}
                animate="animate"
                whileHover={{ 
                  scale: 1.02,
                  rotateY: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="w-32 h-56 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-2xl flex items-center justify-center border-4 border-gray-300 dark:border-gray-600">
                  <div className="text-center">
                    <motion.div 
                      className="w-16 h-16 bg-purple-200 dark:bg-purple-800 rounded-full mx-auto mb-3 flex items-center justify-center"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ type: 'spring' as const, stiffness: 300 }}
                    >
                      <motion.svg 
                        className="w-8 h-8 text-purple-600 dark:text-purple-400" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.369 4.369 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
                      </motion.svg>
                    </motion.div>
                    <p className="text-gray-600 dark:text-gray-400 text-xs">Mobile App</p>
                    <p className="text-gray-500 dark:text-gray-500 text-xs">iOS & Android</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Floating elements */}
            <motion.div 
              className="absolute -top-4 -right-4 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-4 py-2 rounded-full text-sm font-medium shadow-lg"
              variants={floatingVariants}
              animate="animate"
              whileHover={{ scale: 1.1 }}
            >
              ⭐ 4.8/5 Rating
            </motion.div>
            <motion.div 
              className="absolute -bottom-4 -left-4 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium shadow-lg"
              variants={floatingVariants}
              animate="animate"
              whileHover={{ scale: 1.1 }}
            >
              🎮 2-8 Players
            </motion.div>
            <motion.div 
              className="absolute top-1/2 -right-8 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-xs font-medium shadow-lg"
              variants={floatingVariants}
              animate="animate"
              whileHover={{ scale: 1.1 }}
            >
              📱 Free App
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 
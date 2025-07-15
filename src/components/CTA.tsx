'use client'

import { usePathname } from 'next/navigation'
import { translations, type Locale } from '@/lib/translations'
import { motion } from 'framer-motion'

export default function CTA() {
  const pathname = usePathname()
  
  // Extract locale from pathname, default to 'de' for root
  const pathSegments = pathname.split('/')
  const locale = pathSegments[1] && ['en', 'de'].includes(pathSegments[1]) 
    ? pathSegments[1] as Locale 
    : 'de'
  const t = translations[locale].cta;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

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
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        type: 'spring' as const,
        stiffness: 200
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
      transition: {
        duration: 0.3
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <section id="cta" className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Animated background elements */}
      <motion.div
        className="absolute top-10 left-10 w-24 h-24 bg-white rounded-full opacity-10"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-32 h-32 bg-white rounded-full opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [360, 180, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full opacity-30"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + i * 8}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Urgency Badge */}
          <motion.div 
            className="inline-flex items-center px-4 py-2 bg-red-500 text-white rounded-full text-sm font-medium mb-6 relative overflow-hidden"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="absolute inset-0 bg-red-400"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.span 
              className="mr-2 relative z-10"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ⏰
            </motion.span>
            <span className="relative z-10">{t.urgency}</span>
          </motion.div>

          {/* Title */}
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            variants={itemVariants}
          >
            {t.title.split(' ').map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-2"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{
                  scale: 1.05,
                  color: "#fbbf24",
                  transition: { duration: 0.2 }
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>

          {/* Subtitle */}
          <motion.p 
            className="text-xl text-purple-100 mb-8"
            variants={itemVariants}
          >
            {t.subtitle}
          </motion.p>

          {/* Pricing */}
          <motion.div 
            className="flex items-center justify-center space-x-4 mb-8"
            variants={itemVariants}
          >
            <motion.span 
              className="text-5xl font-bold text-white"
              animate={{ 
                scale: [1, 1.1, 1],
                textShadow: ["0 0 0px rgba(255,255,255,0)", "0 0 30px rgba(255,255,255,0.8)", "0 0 0px rgba(255,255,255,0)"]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {t.price}
            </motion.span>
            <span className="text-3xl text-purple-200 line-through">
              {t.originalPrice}
            </span>
          </motion.div>

          {/* CTA Button */}
          <motion.button 
            className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-6 px-12 rounded-full text-xl transition-all duration-200 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 hover:scale-105 relative overflow-hidden"
            variants={buttonVariants}
            whileHover={{ 
              scale: 1.05,
              y: -5,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            }}
            whileTap={{ scale: 0.95 }}
                            transition={{ type: 'spring' as const, stiffness: 300 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="relative z-10"
              animate={{ 
                textShadow: ["0 0 0px rgba(147,51,234,0)", "0 0 20px rgba(147,51,234,0.5)", "0 0 0px rgba(147,51,234,0)"]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {t.button}
            </motion.span>
          </motion.button>

          {/* Trust Indicators */}
          <motion.div 
            className="mt-8 flex flex-wrap justify-center gap-6 text-purple-100"
            variants={itemVariants}
          >
            {[
              { icon: "🔒", text: "Secure Checkout" },
              { icon: "🚚", text: "Free Shipping" },
              { icon: "💰", text: "30-Day Money Back" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.span
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                >
                  {item.icon}
                </motion.span>
                <span>{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Stock Counter */}
          <motion.div 
            className="mt-8 bg-white bg-opacity-20 rounded-full px-6 py-3 inline-block"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center space-x-2 text-white">
              <motion.div 
                className="w-3 h-3 bg-red-400 rounded-full"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1]
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="text-sm font-medium">Only 23 units left in stock</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 
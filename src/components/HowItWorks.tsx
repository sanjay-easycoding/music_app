'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { translations, type Locale } from '@/lib/translations';

const HowItWorks = () => {
  const pathname = usePathname();
  
  // Extract locale from pathname, default to 'de' for root
  const pathSegments = pathname.split('/');
  const locale = pathSegments[1] && ['en', 'de'].includes(pathSegments[1]) 
    ? pathSegments[1] as Locale 
    : 'de';
  const t = translations[locale].howItWorks;

  const [activeStep, setActiveStep] = useState(0);

  const stepIcons = ['🎵', '📱', '🎮', '🏆'];
  const stepColors = [
    'from-blue-500 to-purple-500',
    'from-purple-500 to-pink-500', 
    'from-pink-500 to-red-500',
    'from-orange-500 to-yellow-500'
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-r from-pink-400/20 to-red-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, 60, 0],
            y: [0, -80, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-6"
          >
            {t.title.split(' ').map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="inline-block mr-2"
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            {t.subtitle}
          </motion.p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {t.steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className="relative group"
            >
              <div className="relative bg-white dark:bg-gray-800 shadow-xl border border-gray-200 dark:border-gray-700 rounded-2xl p-8 h-full transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/20">
                {/* Animated Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stepColors[index]} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                
                {/* Icon */}
                <motion.div
                  className="relative z-10 text-center mb-6"
                  whileHover={{ 
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.6 }
                  }}
                >
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${stepColors[index]} rounded-2xl shadow-lg group-hover:shadow-2xl group-hover:shadow-blue-500/30 transition-all duration-300`}>
                    <span className="text-3xl">{stepIcons[index]}</span>
                  </div>
                </motion.div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  <motion.h3
                    className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {step.title}
                  </motion.h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Floating Particles */}
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-60"
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                />
                <motion.div
                  className="absolute bottom-4 left-4 w-1 h-1 bg-purple-400 rounded-full opacity-60"
                  animate={{
                    y: [0, 8, 0],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Demo Video Section - Smaller and Better Themed */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="bg-white dark:bg-gray-800 shadow-xl border border-gray-200 dark:border-gray-700 rounded-2xl p-6 md:p-8">
            <div className="text-center mb-6">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3"
              >
                {t.demoTitle}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="text-gray-600 dark:text-gray-300"
              >
                {t.demoDescription}
              </motion.p>
            </div>

            {/* Video Placeholder - Smaller */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              whileHover={{ scale: 1.02 }}
              className="relative bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-xl overflow-hidden shadow-lg"
            >
              <div className="aspect-video bg-gradient-to-br from-blue-900/20 to-purple-900/20 flex items-center justify-center">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-xl cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(59, 130, 246, 0.4)",
                      "0 0 0 16px rgba(59, 130, 246, 0)",
                      "0 0 0 0 rgba(59, 130, 246, 0)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </motion.div>
              </div>
              
              {/* Video Overlay Elements */}
              <motion.div
                className="absolute top-3 left-3 bg-black/50 backdrop-blur-sm rounded-lg px-2 py-1 text-white text-xs font-medium"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                {t.demoDuration}
              </motion.div>
              
              <motion.div
                className="absolute top-3 right-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg px-2 py-1 text-white text-xs font-medium"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
              >
                {t.demoQuality}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 shadow-lg hover:shadow-2xl"
          >
            {t.ctaButton}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks; 
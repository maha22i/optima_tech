'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { colors } from '@/utils/colors'

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const toggleVisibility = () => {
      // Throttle pour améliorer les performances
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        // Afficher le bouton après avoir scrollé de 300px
        if (window.pageYOffset > 300) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      }, 100)
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
      clearTimeout(timeoutId)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 100 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-4 md:right-8 z-50 group"
          aria-label="Retour en haut de la page"
        >
          {/* Effet de glow */}
          <motion.div
            className="absolute inset-0 rounded-full blur-xl"
            style={{ backgroundColor: colors.accent.primary }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Bouton principal */}
          <motion.div
            className="relative p-3 md:p-4 rounded-full shadow-2xl backdrop-blur-sm transition-all duration-300"
            style={{ 
              backgroundColor: colors.accent.primary,
              color: colors.text.inverse 
            }}
            whileHover={{ 
              scale: 1.1,
              backgroundColor: colors.accent.primaryHover
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <ArrowUp size={20} className="md:w-6 md:h-6" />
            </motion.div>
          </motion.div>

          {/* Tooltip au hover - masqué sur mobile */}
          <motion.div
            className="hidden md:block absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
            style={{ 
              backgroundColor: colors.dominant.primary,
              color: colors.text.inverse 
            }}
          >
            Retour en haut
            <div 
              className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45"
              style={{ backgroundColor: colors.dominant.primary }}
            />
          </motion.div>

          {/* Effet de pulse au clic */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{ backgroundColor: colors.accent.primary }}
            initial={{ scale: 1, opacity: 0 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ duration: 0.6 }}
            key={Math.random()} // Force l'animation à chaque clic
          />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop

'use client'

import { motion } from 'framer-motion'
import { colors } from '@/utils/colors'
import { useEffect, useState } from 'react'

interface FloatingBubblesProps {
  count?: number
  className?: string
}

const FloatingBubbles: React.FC<FloatingBubblesProps> = ({ 
  count = 8, 
  className = '' 
}) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const bubbles = Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 100 + 20, // 20-120px
    x: Math.random() * 100, // 0-100%
    y: Math.random() * 100, // 0-100%
    delay: Math.random() * 5, // 0-5s delay
    duration: Math.random() * 10 + 15, // 15-25s duration
    color: Math.random() > 0.5 ? colors.accent.primary : colors.support.primary,
    opacity: Math.random() * 0.3 + 0.05, // 0.05-0.35 opacity
  }))

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full"
          style={{
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            width: bubble.size,
            height: bubble.size,
            backgroundColor: bubble.color,
            opacity: bubble.opacity,
            filter: 'blur(1px)',
          }}
          initial={{
            scale: 0,
            rotate: 0,
          }}
          animate={{
            scale: [0, 1, 0.8, 1.2, 0],
            rotate: [0, 180, 360],
            y: [0, -50, -100, -150, -200],
            x: [0, Math.random() * 50 - 25, Math.random() * 100 - 50],
          }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Gradient overlay bubbles - plus subtils */}
      {Array.from({ length: 3 }, (_, i) => (
        <motion.div
          key={`gradient-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${20 + i * 30}%`,
            top: `${20 + i * 20}%`,
            width: 150 + i * 50,
            height: 150 + i * 50,
            background: `radial-gradient(circle, ${colors.accent.primary}15, transparent)`,
            filter: 'blur(3px)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  )
}

export default FloatingBubbles

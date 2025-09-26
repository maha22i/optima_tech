'use client'

import { motion } from 'framer-motion'
import { colors } from '@/utils/colors'
import { useEffect, useState } from 'react'

interface ParticleFieldProps {
  count?: number
  className?: string
}

const ParticleField: React.FC<ParticleFieldProps> = ({ 
  count = 50, 
  className = '' 
}) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 1, // 1-5px
    x: Math.random() * 100, // 0-100%
    y: Math.random() * 100, // 0-100%
    delay: Math.random() * 10, // 0-10s delay
    duration: Math.random() * 20 + 10, // 10-30s duration
    color: Math.random() > 0.7 ? colors.accent.primary : colors.support.primary,
    opacity: Math.random() * 0.6 + 0.2, // 0.2-0.8 opacity
  }))

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            opacity: particle.opacity,
            filter: 'blur(0.5px)',
          }}
          initial={{
            scale: 0,
            rotate: 0,
          }}
          animate={{
            scale: [0, 1, 0.5, 1, 0],
            rotate: [0, 180, 360],
            y: [0, -200, -400, -600],
            x: [0, Math.random() * 100 - 50, Math.random() * 200 - 100],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}

export default ParticleField

'use client'

import { motion, useMotionValue, useTransform, animate, useSpring } from 'framer-motion'
import { Code, Users, Clock, Award, TrendingUp, Shield, Sparkles, Zap } from 'lucide-react'
import { useEffect, useState, useRef } from 'react'
import { colors } from '@/utils/colors'

interface StatsSectionPresenterProps {}

const StatsSectionPresenter: React.FC<StatsSectionPresenterProps> = () => {
  const [isInView, setIsInView] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const stats = [
    {
      icon: Code,
      number: '50',
      suffix: '+',
      label: 'Projets livrés',
      shortDesc: 'Solutions sur mesure',
      color: colors.support.primary,
      bgPattern: 'dots',
      delay: 0
    },
    {
      icon: Zap,
      number: '24',
      suffix: 'h',
      prefix: '<',
      label: 'Temps de réponse',
      shortDesc: 'Support réactif',
      color: colors.accent.primary,
      bgPattern: 'lines',
      delay: 0.1
    },
    {
      icon: Award,
      number: '100',
      suffix: '%',
      label: 'Satisfaction',
      shortDesc: 'Clients satisfaits',
      color: colors.accent.premium,
      bgPattern: 'circles',
      delay: 0.2
    },
    {
      icon: Shield,
      number: '99.9',
      suffix: '%',
      label: 'Disponibilité',
      shortDesc: 'Uptime garanti',
      color: colors.accent.warning,
      bgPattern: 'waves',
      delay: 0.3
    }
  ]

  // Animated counter component with modern design
  const AnimatedCounter = ({ 
    value, 
    prefix = '', 
    suffix = '', 
    delay = 0 
  }: { 
    value: string, 
    prefix?: string, 
    suffix?: string, 
    delay?: number 
  }) => {
    const count = useMotionValue(0)
    const rounded = useTransform(count, (latest) => {
      const num = parseFloat(value)
      if (value.includes('.')) {
        return (Math.round(latest * 10) / 10).toFixed(1)
      }
      return Math.round(latest).toString()
    })

    useEffect(() => {
      const num = parseFloat(value)
      if (isInView && !isNaN(num)) {
        const timeout = setTimeout(() => {
          animate(count, num, { 
            duration: 2.5, 
            ease: [0.25, 0.46, 0.45, 0.94] 
          })
        }, delay * 1000)
        return () => clearTimeout(timeout)
      }
    }, [count, value, delay])

    return (
      <motion.div className="relative">
        <motion.span 
          className="text-lg sm:text-xl lg:text-2xl font-bold tabular-nums"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + 0.2 }}
        >
          {prefix}
          <motion.span>{rounded}</motion.span>
          {suffix}
        </motion.span>
      </motion.div>
    )
  }

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      
      containerRef.current.style.setProperty('--mouse-x', `${x * 20}px`)
      containerRef.current.style.setProperty('--mouse-y', `${y * 20}px`)
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section 
      ref={containerRef}
      className="py-8 sm:py-12 lg:py-16 relative overflow-hidden"
      style={{ 
        background: `linear-gradient(180deg, ${colors.dominant.primary} 0%, ${colors.dominant.secondary} 100%)`,
      }}
    >
      {/* Modern animated background */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <motion.div 
          className="absolute -top-1/2 -left-1/2 w-full h-full opacity-30"
          animate={{
            rotate: [0, 360],
          }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        >
          <div 
            className="w-full h-full"
            style={{
              background: `radial-gradient(circle at 30% 50%, ${colors.accent.primary}20 0%, transparent 50%)`,
            }}
          />
        </motion.div>
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(${colors.text.inverse} 1px, transparent 1px), linear-gradient(90deg, ${colors.text.inverse} 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}
        />
        
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: colors.accent.primary,
              left: `${20 + i * 15}%`,
              top: `${10 + i * 10}%`,
            }}
            animate={{
              y: [-20, 20],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Ultra compact modern header */}
        <motion.div 
          className="text-center mb-8 sm:mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full mb-4"
            style={{ 
              background: `${colors.accent.primary}15`,
              border: `1px solid ${colors.accent.primary}30`
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Sparkles size={12} style={{ color: colors.accent.primary }} />
            <span className="text-[10px] font-medium uppercase tracking-wider" style={{ color: colors.accent.primary }}>
              Nos performances
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2"
            style={{ color: colors.text.inverse }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Des résultats
            <span 
              className="ml-2 bg-gradient-to-r bg-clip-text text-transparent"
              style={{ 
                backgroundImage: `linear-gradient(135deg, ${colors.accent.primary}, ${colors.support.light})` 
              }}
            >
              mesurables
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xs sm:text-sm max-w-xl mx-auto"
            style={{ color: colors.text.inverse, opacity: 0.7 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.7 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
          >
            L'expertise technique au service de votre croissance
          </motion.p>
        </motion.div>

        {/* Ultra compact stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 0.5, 
                  delay: stat.delay,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }
              }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              onViewportEnter={() => setIsInView(true)}
            >
              {/* Ultra compact glass card */}
              <motion.div 
                className="relative p-4 sm:p-5 h-full rounded-xl border transition-all duration-300"
                style={{
                  background: hoveredIndex === index 
                    ? `${colors.text.inverse}08` 
                    : `${colors.text.inverse}03`,
                  borderColor: hoveredIndex === index 
                    ? `${stat.color}40` 
                    : `${colors.text.inverse}10`,
                  backdropFilter: 'blur(10px)',
                }}
                whileHover={{ 
                  y: -2,
                  transition: { duration: 0.2 }
                }}
              >
                {/* Background pattern based on type */}
                <div className="absolute inset-0 opacity-5 rounded-xl overflow-hidden">
                  {stat.bgPattern === 'dots' && (
                    <div className="w-full h-full" style={{
                      backgroundImage: `radial-gradient(circle at 1px 1px, ${stat.color} 1px, transparent 1px)`,
                      backgroundSize: '20px 20px'
                    }} />
                  )}
                  {stat.bgPattern === 'lines' && (
                    <div className="w-full h-full" style={{
                      backgroundImage: `linear-gradient(45deg, ${stat.color} 25%, transparent 25%)`,
                      backgroundSize: '20px 20px'
                    }} />
                  )}
                  {stat.bgPattern === 'circles' && (
                    <div className="w-full h-full" style={{
                      backgroundImage: `radial-gradient(circle at center, ${stat.color}20 0%, transparent 70%)`,
                    }} />
                  )}
                  {stat.bgPattern === 'waves' && (
                    <div className="w-full h-full" style={{
                      backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, ${stat.color}10 10px, ${stat.color}10 20px)`,
                    }} />
                  )}
                </div>
                
                {/* Ultra compact icon */}
                <motion.div 
                  className="relative inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-lg mb-3"
                  style={{ 
                    background: `${stat.color}15`,
                    border: `1px solid ${stat.color}30`
                  }}
                  animate={hoveredIndex === index ? {
                    scale: [1, 1.05, 1],
                    rotate: [0, 3, -3, 0],
                  } : {}}
                  transition={{ duration: 0.4 }}
                >
                  <stat.icon size={16} style={{ color: stat.color }} className="sm:w-5 sm:h-5" />
                </motion.div>
                
                {/* Animated number */}
                <div className="mb-2" style={{ color: colors.text.inverse }}>
                  <AnimatedCounter 
                    value={stat.number} 
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    delay={stat.delay}
                  />
                </div>
                
                {/* Compact label */}
                <h3 
                  className="text-xs sm:text-sm font-semibold mb-0.5"
                  style={{ color: colors.text.inverse }}
                >
                  {stat.label}
                </h3>
                
                {/* Short description */}
                <p 
                  className="text-[10px] sm:text-xs"
                  style={{ color: colors.text.inverse, opacity: 0.6 }}
                >
                  {stat.shortDesc}
                </p>
                
                {/* Hover indicator */}
                <motion.div
                  className="absolute bottom-2 right-2 w-0.5 h-0.5 rounded-full"
                  style={{ backgroundColor: stat.color }}
                  animate={hoveredIndex === index ? {
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  } : {
                    scale: 1,
                    opacity: 0.3,
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                
                {/* Glow effect on hover */}
                {hoveredIndex === index && (
                  <motion.div
                    className="absolute inset-0 rounded-xl pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${stat.color}10 0%, transparent 70%)`,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-8 sm:mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="group relative inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-medium text-xs transition-all duration-300"
            style={{
              background: `${colors.accent.primary}15`,
              color: colors.accent.primary,
              border: `1px solid ${colors.accent.primary}30`
            }}
            whileHover={{ 
              scale: 1.03,
              background: `${colors.accent.primary}25`,
            }}
            whileTap={{ scale: 0.97 }}
          >
            <span>Découvrir nos services</span>
            <motion.span
              className="text-[10px]"
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default StatsSectionPresenter 
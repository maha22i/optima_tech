'use client'

import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'
import { ButtonProps } from '@/types'
import { colors } from '@/utils/colors'

const buttonVariants = {
  primary: {
    backgroundColor: colors.accent.primary,
    color: colors.text.inverse,
    borderColor: colors.accent.primary,
    hoverBackgroundColor: colors.accent.primaryHover,
    hoverBorderColor: colors.accent.primaryHover,
  },
  secondary: {
    backgroundColor: colors.support.primary,
    color: colors.text.inverse,
    borderColor: colors.support.primary,
    hoverBackgroundColor: colors.support.primaryHover,
    hoverBorderColor: colors.support.primaryHover,
  },
  outline: {
    backgroundColor: 'transparent',
    color: colors.accent.primary,
    borderColor: colors.accent.primary,
    hoverBackgroundColor: colors.accent.primary,
    hoverBorderColor: colors.accent.primary,
    hoverColor: colors.text.inverse,
  },
  ghost: {
    backgroundColor: 'transparent',
    color: colors.text.primary,
    borderColor: 'transparent',
    hoverBackgroundColor: colors.dominant.border,
    hoverBorderColor: colors.dominant.border,
  },
  success: {
    backgroundColor: colors.accent.success,
    color: colors.text.inverse,
    borderColor: colors.accent.success,
    hoverBackgroundColor: colors.accent.successHover,
    hoverBorderColor: colors.accent.successHover,
  },
  danger: {
    backgroundColor: colors.accent.danger,
    color: colors.text.inverse,
    borderColor: colors.accent.danger,
    hoverBackgroundColor: colors.accent.dangerHover,
    hoverBorderColor: colors.accent.dangerHover,
  }
}

const buttonSizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
  xl: 'px-10 py-5 text-xl',
}

export const ButtonPresenter = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className,
  onClick,
  ...props
}: ButtonProps) => {
  const variantStyle = buttonVariants[variant as keyof typeof buttonVariants]

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'font-semibold rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-offset-2 relative overflow-hidden group',
        buttonSizes[size],
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      style={{
        backgroundColor: variantStyle.backgroundColor,
        color: variantStyle.color,
        borderColor: variantStyle.borderColor
      }}
      whileHover={!disabled ? { 
        scale: 1.02,
        y: -2,
        backgroundColor: variantStyle.hoverBackgroundColor,
        borderColor: variantStyle.hoverBorderColor,
        color: (variantStyle as any).hoverColor || variantStyle.color,
        boxShadow: `0 10px 25px -5px ${variantStyle.borderColor}40, 0 8px 10px -6px ${variantStyle.borderColor}40`
      } : {}}
      whileTap={!disabled ? { 
        scale: 0.98,
        y: 0
      } : {}}
      transition={{ 
        duration: 0.2,
        ease: "easeInOut"
      }}
      {...props}
    >
      {/* Background glow effect */}
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at center, ${variantStyle.borderColor}20 0%, transparent 70%)`
        }}
      />
      
      {/* Content */}
      <span className="relative z-10 flex items-center justify-center space-x-2">
        {children}
      </span>
      
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{
          background: `linear-gradient(90deg, transparent, ${colors.text.inverse}30, transparent)`
        }}
      />
    </motion.button>
  )
} 
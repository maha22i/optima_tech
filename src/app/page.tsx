'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Hero } from '@/components/Hero'
import StatsSection from '@/components/StatsSection'
import { colors } from '@/utils/colors'
import AboutSection from '@/components/AboutSection'

export default function HomePage() {
  return (
    <div className="pt-16 sm:pt-20 lg:pt-24">
      <Hero />
      <AboutSection />
      <StatsSection />
    </div>
  )
} 
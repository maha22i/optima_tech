import type { Metadata } from 'next'
import ServicesHero from '@/components/ServicesHero'

import ServicesGrid from '@/components/ServicesGrid'

import ServicesPortfolio from '@/components/ServicesPortfolio'
import ServicesFAQ from '@/components/ServicesFAQ'

export const metadata: Metadata = {
  title: 'Nos Services - Adalink Group',
  description: 'Découvrez nos solutions de développement web et mobile : sites professionnels, applications iOS & Android, solutions sur mesure et accompagnement technique.',
}

export default function ServicesPage() {
  return (
    <div className="pt-16 sm:pt-20 lg:pt-24 min-h-screen">
      <ServicesHero />
      <ServicesGrid />
      {/* <ServicesPortfolio /> */}
      <ServicesFAQ />
    </div>
  )
} 
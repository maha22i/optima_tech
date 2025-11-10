import type { Metadata } from 'next'
import AboutUsHero from '@/components/AboutUsHero'
import AboutUsContent from '@/components/AboutUsContent'

export const metadata: Metadata = {
  title: 'Qui sommes-nous - Netlink Solutions',
  description: 'Découvrez Netlink Solutions, société technologique basée à Djibouti, spécialisée dans la transformation digitale des entreprises et institutions.',
}

export default function AboutPage() {
  return (
    <div className="pt-16 sm:pt-20 lg:pt-24 min-h-screen">
      <AboutUsHero />
      <AboutUsContent />
    </div>
  )
}

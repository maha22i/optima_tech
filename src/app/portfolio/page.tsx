import { Metadata } from 'next'
import PortfolioShowcase from '@/components/PortfolioShowcase'

export const metadata: Metadata = {
  title: 'Portfolio - Nos Réalisations | Adalink Groupe',
  description: 'Découvrez nos réalisations et projets innovants. Adalink Groupe vous accompagne dans votre transformation digitale avec des solutions sur mesure.',
}

export default function PortfolioPage() {
  return (
    <PortfolioShowcase />
  )
}

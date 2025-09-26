import type { Metadata } from 'next'
import PolitiqueConfidentialiteClient from './PolitiqueConfidentialiteClient'

export const metadata: Metadata = {
  title: 'Politique de confidentialité - Adalink Group',
  description: 'Politique de confidentialité d\'Adalink Group concernant la collecte et le traitement des données personnelles.',
  robots: { index: false, follow: true },
}

export default function PolitiqueConfidentialitePage() {
  return <PolitiqueConfidentialiteClient />
} 
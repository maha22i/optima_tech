import type { Metadata } from 'next'
import PolitiqueConfidentialiteClient from './PolitiqueConfidentialiteClient'

export const metadata: Metadata = {
  title: 'Politique de confidentialité - Netlink Solutions',
  description: 'Politique de confidentialité de Netlink Solutions concernant la collecte et le traitement des données personnelles.',
  robots: { index: false, follow: true },
}

export default function PolitiqueConfidentialitePage() {
  return <PolitiqueConfidentialiteClient />
} 
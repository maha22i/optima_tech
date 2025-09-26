import type { Metadata } from 'next'
import MentionsLegalesClient from './MentionsLegalesClient'

export const metadata: Metadata = {
  title: 'Mentions légales - Adalink Group',
  description: 'Mentions légales d\'Adalink Group, entreprise de développement web et mobile basée à Djibouti.',
  robots: { index: false, follow: true },
}

export default function MentionsLegalesPage() {
  return <MentionsLegalesClient />
} 
import type { Metadata } from 'next'
import MentionsLegalesClient from './MentionsLegalesClient'

export const metadata: Metadata = {
  title: 'Mentions légales - Netlink Solutions',
  description: 'Mentions légales de Netlink Solutions, entreprise de développement web et mobile basée à Djibouti.',
  robots: { index: false, follow: true },
}

export default function MentionsLegalesPage() {
  return <MentionsLegalesClient />
} 
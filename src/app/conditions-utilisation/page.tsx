import type { Metadata } from 'next'
import ConditionsUtilisationClient from './ConditionsUtilisationClient'

export const metadata: Metadata = {
  title: 'Conditions d\'utilisation - Netlink Solutions',
  description: 'Conditions d\'utilisation du site web et des services de Netlink Solutions.',
  robots: { index: false, follow: true },
}

export default function ConditionsUtilisationPage() {
  return <ConditionsUtilisationClient />
} 
import type { Metadata } from 'next'
import ConditionsUtilisationClient from './ConditionsUtilisationClient'

export const metadata: Metadata = {
  title: 'Conditions d\'utilisation - Adalink Group',
  description: 'Conditions d\'utilisation du site web et des services d\'Adalink Group.',
  robots: { index: false, follow: true },
}

export default function ConditionsUtilisationPage() {
  return <ConditionsUtilisationClient />
} 
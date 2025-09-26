import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact - Adalink Group',
  description: 'Contactez Adalink Group pour vos projets de développement web et mobile. Nous sommes basés à Djibouti et disponibles pour discuter de vos besoins digitaux.',
  keywords: ['contact adalink group', 'développement web djibouti', 'application mobile contact', 'devis personnalisé'],
  openGraph: {
    title: 'Contact - Adalink Group',
    description: 'Contactez Adalink Group pour vos projets de développement web et mobile. Nous sommes basés à Djibouti et disponibles pour discuter de vos besoins digitaux.',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 
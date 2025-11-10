import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact - Netlink Solutions',
  description: 'Contactez Netlink Solutions pour vos projets de développement web et mobile. Nous sommes basés à Djibouti et disponibles pour discuter de vos besoins digitaux.',
  keywords: ['contact netlink solutions', 'développement web djibouti', 'application mobile contact', 'devis personnalisé'],
  openGraph: {
    title: 'Contact - Netlink Solutions',
    description: 'Contactez Netlink Solutions pour vos projets de développement web et mobile. Nous sommes basés à Djibouti et disponibles pour discuter de vos besoins digitaux.',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 
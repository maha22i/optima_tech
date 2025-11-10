import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ScrollToTop } from '@/components/ScrollToTop'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Netlink Solutions - Développement web & mobile sur mesure',
    template: '%s | Netlink Solutions'
  },
  description: 'Netlink Solutions, entreprise djiboutienne de développement web et mobile. Création de sites internet, applications iOS & Android, solutions digitales sur mesure avec React, Next.js et React Native.',
  keywords: ['développement web', 'application mobile', 'Djibouti', 'React', 'Next.js', 'React Native', 'iOS', 'Android', 'site internet'],
  authors: [{ name: 'Netlink Solutions' }],
  creator: 'Netlink Solutions',
  publisher: 'Netlink Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://adalink.dj'),
  openGraph: {
    title: 'Netlink Solutions - Développement web & mobile sur mesure',
    description: 'Votre partenaire technique pour créer des solutions digitales innovantes à Djibouti',
    url: 'https://adalink.dj',
    siteName: 'Netlink Solutions',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Netlink Solutions - Développement web & mobile sur mesure',
    description: 'Votre partenaire technique pour créer des solutions digitales innovantes à Djibouti',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/logo-netlink.ico" />
        <link rel="icon" type="image/png" href="/logo-netlink.png" />
      </head>
      <body className={`${inter.className} antialiased bg-white`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
} 
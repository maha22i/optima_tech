import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ScrollToTop } from '@/components/ScrollToTop'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Adalink Group - Développement web & mobile sur mesure',
    template: '%s | Adalink Group'
  },
  description: 'Adalink Group, entreprise djiboutienne de développement web et mobile. Création de sites internet, applications iOS & Android, solutions digitales sur mesure avec React, Next.js et React Native.',
  keywords: ['développement web', 'application mobile', 'Djibouti', 'React', 'Next.js', 'React Native', 'iOS', 'Android', 'site internet'],
  authors: [{ name: 'Adalink Group' }],
  creator: 'Adalink Group',
  publisher: 'Adalink Group',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://adalink.dj'),
  openGraph: {
    title: 'Adalink Group - Développement web & mobile sur mesure',
    description: 'Votre partenaire technique pour créer des solutions digitales innovantes à Djibouti',
    url: 'https://adalink.dj',
    siteName: 'Adalink Group',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adalink Group - Développement web & mobile sur mesure',
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
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
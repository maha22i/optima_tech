import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Recrutement - Rejoignez Adalink Group',
  description: 'Rejoignez notre équipe passionnée et construisez votre carrière avec Adalink Group. Découvrez nos opportunités et postulez en ligne.',
  keywords: 'recrutement, emploi, carrière, Adalink Group, développeur, ingénieur, designer, Burundi, tech jobs',
  openGraph: {
    title: 'Recrutement - Rejoignez Adalink Group',
    description: 'Rejoignez notre équipe passionnée et construisez votre carrière avec Adalink Group.',
    type: 'website',
  }
}

export default function RecruitmentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

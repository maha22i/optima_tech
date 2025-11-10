import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Recrutement - Rejoignez Netlink Solutions',
  description: 'Rejoignez notre équipe passionnée et construisez votre carrière avec Netlink Solutions. Découvrez nos opportunités et postulez en ligne.',
  keywords: 'recrutement, emploi, carrière, Netlink Solutions, développeur, ingénieur, designer, Burundi, tech jobs',
  openGraph: {
    title: 'Recrutement - Rejoignez Netlink Solutions',
    description: 'Rejoignez notre équipe passionnée et construisez votre carrière avec Netlink Solutions.',
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

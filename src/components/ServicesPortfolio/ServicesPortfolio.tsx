'use client'

import { useRouter } from 'next/navigation'
import ServicesPortfolioPresenter from './ServicesPortfolioPresenter'

interface ServicesPortfolioProps {}

const ServicesPortfolio: React.FC<ServicesPortfolioProps> = () => {
  const router = useRouter()

  const handleContactClick = () => {
    router.push('/contact')
  }

  return <ServicesPortfolioPresenter onContactClick={handleContactClick} />
}

export default ServicesPortfolio

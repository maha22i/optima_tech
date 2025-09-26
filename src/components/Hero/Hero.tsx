'use client'

import { useRouter } from 'next/navigation'
import HeroSlider from './HeroSlider'

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  const router = useRouter()

  const handleContactClick = () => {
    router.push('/contact')
  }

  return <HeroSlider onContactClick={handleContactClick} />
}

export default Hero 
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface AboutHeroProps {}

const AboutHero: React.FC<AboutHeroProps> = () => {
  return (
    <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
      {/* Image de fond */}
      <Image
        src="/hero/slider1.jpg"
        alt="Équipe Adalink Group"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Contenu */}
      <div className="relative z-10 max-w-4xl px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
        >
          Qui sommes-nous&nbsp;?
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg text-white/90 leading-relaxed mx-auto"
        >
          Société technologique basée à Djibouti, Adalink Group accompagne entreprises, institutions et particuliers
          dans leur transformation digitale.
        </motion.p>
      </div>
    </section>
  )
}

export default AboutHero

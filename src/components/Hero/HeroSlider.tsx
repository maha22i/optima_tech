"use client"

import { useState, useEffect, useCallback } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import { colors } from "@/utils/colors"
import { ChevronLeft, ChevronRight, Phone, ArrowRight } from "lucide-react"

interface HeroSliderProps {
  onContactClick: () => void
}

const slides = [
  {
    img: "/hero/slider1.jpg",
    title: "Développement informatique",
    subtitle: "Sites vitrines, e-commerce, ERP & CRM sur-mesure",
    href: "/services#developpement",
  },
  {
    img: "/hero/slider2.jpg",
    title: "Vente de matériel informatique",
    subtitle: "PC, serveurs, imprimantes & solutions d'entreprise",
    href: "/services#materiel",
  },
  {
    img: "/hero/slider3.jpg",
    title: "Réseaux informatiques",
    subtitle: "Conception, déploiement & sécurisation de réseaux",
    href: "/services#reseau",
  },
  {
    img: "/hero/slider4.jpg",
    title: "Maintenance informatique",
    subtitle: "Support proactif et 24/7 pour votre parc",
    href: "/services#maintenance",
  },
] as const

const AUTO_DELAY = 8000 // ms

const HeroSlider: React.FC<HeroSliderProps> = ({ onContactClick }) => {
  const [index, setIndex] = useState(0)

  // auto-play
  useEffect(() => {
    const id = setInterval(() => setIndex((prev) => (prev + 1) % slides.length), AUTO_DELAY)
    return () => clearInterval(id)
  }, [])

  const next = useCallback(() => setIndex((i) => (i + 1) % slides.length), [])
  const prev = useCallback(() => setIndex((i) => (i - 1 + slides.length) % slides.length), [])

  return (
    <section className="group relative w-full h-[85vh] sm:h-[90vh] lg:min-h-screen overflow-hidden select-none">
      {/* Slides */}
      <AnimatePresence>
        {slides.map((s, i) =>
          i === index ? (
            <motion.div
              key={s.img}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              {/* Effet Ken Burns sur l'image */}
              <motion.div
                className="absolute inset-0"
                initial={{ scale: 1.15, x: 0, y: 0 }}
                animate={{ scale: 1, x: -20, y: -10 }}
                transition={{ duration: AUTO_DELAY / 1000, ease: "linear" }}
              >
                <Image src={s.img} alt={s.title} fill priority sizes="100vw" className="object-cover" />
              </motion.div>

              {/* Dégradé sombre */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />

              {/* Cercles flous animés */}
              <motion.div
                className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl"
                style={{ background: colors.accent.primary }}
                animate={{ scale: [1, 1.2, 1], rotate: [0, 30, 0], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-[-20%] right-[-20%] w-[450px] h-[450px] rounded-full blur-3xl"
                style={{ background: colors.support.primary }}
                animate={{ scale: [1.1, 0.9, 1.1], rotate: [0, -25, 0], opacity: [0.25, 0.4, 0.25] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Contenu */}
              <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
                <motion.h2
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.25 }}
                  className="text-white font-extrabold leading-tight mb-4 text-2xl sm:text-4xl lg:text-5xl drop-shadow-md"
                >
                  {s.title}
                </motion.h2>

                <motion.p
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.35 }}
                  className="text-white/90 max-w-2xl text-sm sm:text-lg lg:text-xl mb-8"
                >
                  {s.subtitle}
                </motion.p>

                {/* Boutons CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.45 }}
                  className="flex flex-col sm:flex-row items-center gap-4 mt-8 sm:mt-10"
                >
                  {/* Bouton primaire – Contact */}
                  <motion.button
                    onClick={onContactClick}
                    whileHover={{ scale: 1.06, y: -3 }}
                    whileTap={{ scale: 0.97 }}
                    className="relative inline-flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-3 font-semibold rounded-full overflow-hidden focus:outline-none backdrop-blur-md text-white shadow-xl"
                    style={{ background: `linear-gradient(135deg, ${colors.accent.primary}, ${colors.accent.primaryHover})` }}
                  >
                    {/* Halo subtil */}
                    <span className="absolute inset-0 rounded-full bg-white opacity-5 blur-xl pointer-events-none" />
                    <Phone size={20} className="relative z-10" />
                    <span className="relative z-10 whitespace-nowrap text-xs sm:text-sm">Démarrer votre projet</span>
                    <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform duration-200" />
                  </motion.button>

                  {/* Bouton secondaire – Découvrir le service */}
                  <motion.a
                    href={s.href}
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-3 font-semibold rounded-full border-2 border-white/40 text-white/90 hover:bg-white/10 transition-colors backdrop-blur-md"
                  >
                    Découvrir le service
                    <ArrowRight size={18} />
                  </motion.a>
                </motion.div>
              </div>

              {/* Barre de progression */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
                <motion.span
                  key={index}
                  className="block h-full"
                  style={{ background: colors.accent.primary }}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: AUTO_DELAY / 1000, ease: "linear" }}
                />
              </div>
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

      {/* Navigation arrows */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-between px-4 sm:px-8 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <motion.button
          aria-label="Slide précédent"
          onClick={prev}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="pointer-events-auto p-2 sm:p-3 rounded-full text-white/80 hover:text-white bg-black/30 hover:bg-black/50 transition-colors"
        >
          <ChevronLeft size={28} />
        </motion.button>
        <motion.button
          aria-label="Slide suivant"
          onClick={next}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="pointer-events-auto p-2 sm:p-3 rounded-full text-white/80 hover:text-white bg-black/30 hover:bg-black/50 transition-colors"
        >
          <ChevronRight size={28} />
        </motion.button>
      </div>

      {/* Bullets */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setIndex(idx)}
            className={`w-2 h-2 rounded-full transition-colors ${idx === index ? "bg-white" : "bg-white/40"}`}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroSlider

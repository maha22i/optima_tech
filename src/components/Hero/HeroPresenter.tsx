'use client'

import { motion } from 'framer-motion'
import { Phone, Clock, Shield, MapPin, ArrowRight, CheckCircle, Star, Zap } from 'lucide-react'
import Image from 'next/image'
import { colors } from '@/utils/colors'
import { FloatingBubbles, ParticleField } from '@/components/ui'

interface HeroPresenterProps {
  onContactClick: () => void
}

const HeroPresenter: React.FC<HeroPresenterProps> = ({ onContactClick }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background moderne avec le bleu clair */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${colors.support.primary} 0%, ${colors.support.dark} 50%, ${colors.dominant.primary} 100%)`
        }}
      />
      
      {/* Bulles flottantes modernes */}
      <FloatingBubbles count={12} />
      
      {/* Champ de particules extraordinaire */}
      <ParticleField count={30} />
      
      {/* Éléments décoratifs modernes - optimisés pour mobile */}
      <div className="absolute inset-0 opacity-20">
        <motion.div 
          className="absolute top-10 left-4 sm:top-20 sm:left-20 w-32 h-32 sm:w-72 sm:h-72 rounded-full blur-3xl"
          style={{ backgroundColor: colors.accent.primary }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-10 right-4 sm:bottom-20 sm:right-20 w-48 h-48 sm:w-96 sm:h-96 rounded-full blur-3xl"
          style={{ backgroundColor: colors.support.light }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Motif géométrique subtil */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, ${colors.text.inverse} 1px, transparent 0)`,
            backgroundSize: '60px 60px'
          }} />
        </div>
      </div>

      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Contenu principal modernisé */}
          <motion.div 
            className="text-left order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Badge moderne */}
            <motion.div 
              className="mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <motion.span 
                className="inline-flex items-center px-3 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-bold shadow-xl backdrop-blur-md border border-white/20"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: colors.text.inverse 
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Star size={14} className="mr-2" style={{ color: colors.accent.primary }} />
                <span className="hidden sm:inline">Entreprise djiboutienne • Solutions digitales</span>
                <span className="sm:hidden">Solutions digitales</span>
              </motion.span>
            </motion.div>

            {/* Titre principal avec design moderne - tailles responsives améliorées */}
            <motion.h1 
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 lg:mb-10 leading-[1.1] sm:leading-tight tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.15 }}
            >
              <motion.span 
                className="block mb-1 sm:mb-2"
                style={{ color: colors.text.inverse }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                Votre
              </motion.span>
              <motion.span 
                className="block bg-gradient-to-r bg-clip-text text-transparent mb-1 sm:mb-2"
                style={{ 
                  backgroundImage: `linear-gradient(135deg, ${colors.accent.primary}, ${colors.support.light})` 
                }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.25 }}
              >
web & mobile
              </motion.span>
              <motion.span 
                className="block"
                style={{ color: colors.text.inverse }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                externalisé
              </motion.span>
            </motion.h1>

            {/* Description moderne - responsivité améliorée */}
            <motion.p 
              className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-10 leading-relaxed max-w-2xl"
              style={{ color: colors.text.inverse, opacity: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              Adalink Group transforme vos idées en solutions digitales exceptionnelles. 
              <strong style={{ color: colors.accent.primary }}> Sites web professionnels, applications mobiles iOS & Android </strong> : 
              nous créons des expériences numériques qui font grandir votre entreprise.
            </motion.p>

            {/* Points clés avec design moderne - grille responsive améliorée */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.25 }}
            >
              {[
                { icon: CheckCircle, text: 'Code propre & optimisé', color: colors.accent.success },
                { icon: Clock, text: 'Livraison dans les délais', color: colors.support.primary },
                { icon: Shield, text: 'Sécurité & performance', color: colors.accent.warning },
                { icon: Zap, text: 'Technologies modernes', color: colors.accent.primary },
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 rounded-xl sm:rounded-2xl backdrop-blur-md border border-white/10"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                  whileHover={{ x: 8, scale: 1.02 }}
                >
                  <motion.div
                    className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl flex-shrink-0"
                    style={{ backgroundColor: item.color }}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <item.icon size={16} className="sm:w-5 sm:h-5" style={{ color: colors.text.inverse }} />
                  </motion.div>
                  <span 
                    className="font-medium text-sm sm:text-base"
                    style={{ color: colors.text.inverse }}
                  >
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Boutons d'action modernisés - stack sur mobile */}
            <motion.div 
              className="flex flex-col space-y-3 sm:space-y-4 lg:flex-row lg:space-y-0 lg:space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <motion.button
                onClick={onContactClick}
                className="group px-6 py-3 sm:px-8 sm:py-4 font-bold rounded-xl sm:rounded-2xl transition-all duration-200 shadow-2xl backdrop-blur-md border border-white/20"
                style={{ 
                  background: `linear-gradient(135deg, ${colors.accent.primary}, ${colors.accent.primaryHover})`,
                  color: colors.text.inverse 
                }}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center justify-center space-x-2 sm:space-x-3">
                  <Phone size={18} className="sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">Démarrer votre projet</span>
                  <ArrowRight size={18} className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </motion.button>
              
              <motion.button
                onClick={() => window.location.href = '/portfolio'}
                className="group px-6 py-3 sm:px-8 sm:py-4 font-bold rounded-xl sm:rounded-2xl transition-all duration-200 backdrop-blur-md border-2 border-white/30 hover:border-white/50"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: colors.text.inverse 
                }}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center justify-center space-x-2 sm:space-x-3">
                  <span className="text-sm sm:text-base">Voir nos réalisations</span>
                  <ArrowRight size={18} className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Section visuelle modernisée - ordre responsive */}
          <motion.div 
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            {/* Image principale avec effet moderne */}
            <motion.div 
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Équipe de développeurs travaillant sur des projets innovants"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                  width={1000}
                  height={600}
                  unoptimized
                />
                <div 
                  className="absolute inset-0 transition-opacity duration-200 group-hover:opacity-60"
                  style={{ 
                    background: `linear-gradient(45deg, ${colors.support.primary}30, ${colors.accent.primary}30)`
                  }}
                />
              </div>
            </motion.div>

            {/* Badge Djibouti modernisé - responsive positioning */}
            <motion.div 
              className="absolute -top-4 -left-4 sm:-top-8 sm:-left-8 px-3 py-2 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl shadow-2xl backdrop-blur-md border border-white/20"
              style={{ 
                background: `linear-gradient(135deg, ${colors.accent.primary}, ${colors.accent.primaryHover})`,
                color: colors.text.inverse 
              }}
              initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
              animate={{ opacity: 1, scale: 1, rotate: -5 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              whileHover={{ scale: 1.1, rotate: 0 }}
            >
              <div className="flex items-center space-x-2 sm:space-x-3">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
                >
                  <MapPin size={18} className="sm:w-6 sm:h-6" />
                </motion.div>
                <span className="font-bold text-sm sm:text-lg">
                  <span className="hidden sm:inline">Djibouti 🇩🇯</span>
                  <span className="sm:hidden">DJ 🇩🇯</span>
                </span>
              </div>
            </motion.div>

            {/* Carte statistiques flottante modernisée - CORRECTION RESPONSIVITÉ */}
            <motion.div 
              className="absolute -bottom-4 -right-4 sm:-bottom-8 sm:-right-8 p-3 sm:p-6 rounded-2xl sm:rounded-3xl shadow-2xl backdrop-blur-md border border-white/20 max-w-[calc(100%-2rem)] sm:max-w-none"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              whileHover={{ y: -8, scale: 1.05 }}
            >
              <div className="flex items-center space-x-2 sm:space-x-4">
                <motion.div 
                  className="w-10 h-10 sm:w-16 sm:h-16 rounded-lg sm:rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0"
                  style={{ 
                    background: `linear-gradient(135deg, ${colors.accent.success}, ${colors.accent.successHover})`
                  }}
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                >
                  <Phone size={18} className="sm:w-7 sm:h-7" style={{ color: colors.text.inverse }} />
                </motion.div>
                <div className="min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <div 
                      className="w-2 h-2 sm:w-3 sm:h-3 rounded-full animate-pulse flex-shrink-0"
                      style={{ backgroundColor: colors.accent.success }}
                    />
                    <p className="font-bold text-sm sm:text-base truncate" style={{ color: colors.text.primary }}>
                      Équipe active
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm font-medium truncate" style={{ color: colors.text.secondary }}>
                    <span className="hidden sm:inline">Développement en cours • 24/7</span>
                    <span className="sm:hidden">Dev 24/7</span>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Éléments décoratifs flottants - responsive */}
            <motion.div 
              className="absolute top-1/4 -right-2 sm:-right-4 w-4 h-4 sm:w-8 sm:h-8 rounded-full"
              style={{ backgroundColor: colors.accent.primary }}
              animate={{ 
                y: [0, -20, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            />
            <motion.div 
              className="absolute bottom-1/4 -left-2 sm:-left-4 w-3 h-3 sm:w-6 sm:h-6 rounded-full"
              style={{ backgroundColor: colors.support.primary }}
              animate={{ 
                y: [0, 15, 0],
                x: [0, 10, 0],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 2 }}
            />
          </motion.div>
        </div>

        {/* Scroll indicator modernisé - masqué sur mobile */}
        <motion.div 
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}
        >
          <motion.div 
            className="flex flex-col items-center space-y-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span 
              className="text-sm font-medium"
              style={{ color: colors.text.inverse, opacity: 0.8 }}
            >
              Découvrir
            </span>
            <div 
              className="w-6 h-10 border-2 rounded-full flex justify-center"
              style={{ borderColor: colors.text.inverse }}
            >
              <motion.div 
                className="w-1 h-3 rounded-full mt-2"
                style={{ backgroundColor: colors.text.inverse }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroPresenter 
'use client'

import { motion } from 'framer-motion'
import { Target, Users, Clock, Shield, Lightbulb, Sparkles } from 'lucide-react'
import Image from 'next/image'
import { colors } from '@/utils/colors'
import { getPartnersText } from '@/utils/contact'

interface AboutSectionPresenterProps {}

const AboutSectionPresenter: React.FC<AboutSectionPresenterProps> = () => {
  const values = [
    {
      icon: Target,
      title: 'Excellence technique',
      description: 'Maîtrise des technologies modernes et bonnes pratiques de développement pour des solutions robustes et pérennes.',
      gradient: `linear-gradient(135deg, ${colors.accent.primary}, ${colors.accent.primaryHover})`
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Veille technologique constante et intégration des dernières innovations pour vous donner un avantage concurrentiel.',
      gradient: `linear-gradient(135deg, ${colors.support.primary}, ${colors.support.primaryHover})`
    },
    {
      icon: Users,
      title: 'Accompagnement',
      description: 'Équipe de développeurs pour vous conseiller et vous accompagner à chaque étape de votre projet.',
      gradient: `linear-gradient(135deg, ${colors.accent.premium}, ${colors.accent.premiumHover})`
    },
    {
      icon: Clock,
      title: 'Réactivité',
      description: 'Livraisons rapides avec méthode agile et communication transparente tout au long du projet.',
      gradient: `linear-gradient(135deg, ${colors.accent.success}, ${colors.accent.successHover})`
    },
    {
      icon: Shield,
      title: 'Sécurité',
      description: 'Respect des standards de sécurité, conformité RGPD et protection optimale de vos données.',
      gradient: `linear-gradient(135deg, ${colors.accent.warning}, ${colors.accent.warningHover})`
    },
    {
      icon: Sparkles,
      title: 'Qualité',
      description: 'Code propre, tests rigoureux et documentation complète pour garantir la pérennité et la maintenabilité de vos projets.',
      gradient: `linear-gradient(135deg, ${colors.dominant.secondary}, ${colors.dominant.secondaryHover})`
    }
  ]

  return (
    <section 
      className="py-8 sm:py-12 lg:py-16 relative overflow-hidden"
      style={{ backgroundColor: colors.dominant.light }}
    >
      {/* Background decorations - optimisés pour mobile */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-4 sm:top-20 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 rounded-full" 
             style={{ background: `radial-gradient(circle, ${colors.support.primary}, transparent)` }} />
        <div className="absolute bottom-10 right-4 sm:bottom-20 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 rounded-full" 
             style={{ background: `radial-gradient(circle, ${colors.accent.primary}, transparent)` }} />
      </div>

      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* En-tête de section - responsive */}
        <motion.div 
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          
          
          <motion.h2 
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-6 sm:mb-8 leading-tight"
            style={{ color: colors.text.primary }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span 
              className="bg-gradient-to-r bg-clip-text text-transparent"
              style={{ 
                backgroundImage: `linear-gradient(135deg, ${colors.support.primary}, ${colors.accent.primary})` 
              }}
            >
            Adalink Group
            </span> votre partenaire de confiance
          </motion.h2>
          
          <motion.p 
            className="text-sm sm:text-base lg:text-lg max-w-6xl mx-auto leading-relaxed"
            style={{ color: colors.text.secondary }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Basé à Djibouti, Adalink Group transforme les idées en solutions digitales innovantes 
            avec une expertise technique de haut niveau et un accompagnement personnalisé pour chaque projet.
          </motion.p>
        </motion.div>

        {/* Contenu principal - responsive layout */}
        <div className="relative grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 sm:mb-24">

        {/* Ligne décorative centrale */}
        <motion.div 
          className="hidden lg:block absolute inset-y-0 left-1/2 w-1 transform -translate-x-1/2 rounded-full"
          style={{ backgroundColor: colors.accent.primary }}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />
          {/* Texte - ordre responsive */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center"
              style={{ color: colors.text.primary }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Une vision moderne du développement digital
            </motion.h3>
            
            <motion.div 
              className="space-y-6 sm:space-y-8 leading-relaxed text-sm sm:text-base"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {[
              {
                text: "Notre expertise technique combine maîtrise des technologies modernes et approche humaine du développement. Nous ne nous contentons pas d'écrire du code : nous concevons des expériences digitales exceptionnelles qui génèrent de la valeur et propulsent votre croissance.",
                highlight: "Excellence technique"
              },
              {
                text: "Basé au cœur de Djibouti, carrefour stratégique entre l'Afrique et le Moyen-Orient, Adalink Group bénéficie d'une position unique pour servir une clientèle internationale avec des solutions adaptées aux marchés locaux et une compréhension interculturelle approfondie.",
                highlight: "Positionnement stratégique"
              },
              {
                text: "Orienté résultats dans chaque projet, notre approche nous guide vers l'excellence : code propre et maintenable, performance optimale, sécurité renforcée et expérience utilisateur exceptionnelle sont les piliers de notre engagement technique.",
                highlight: "Orienté résultats"
              }
              ].map((paragraph, index) => (
                <motion.div
                  key={index}
                  className="relative pl-0 sm:pl-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <p style={{ color: colors.text.secondary }}>
                    <strong style={{ color: colors.accent.primary }}>
                      {paragraph.highlight}
                    </strong>{' '}
                    {paragraph.text}
                  </p>
                  
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image et stats - ordre et positionnement responsive */}
          <motion.div 
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Image principale - responsive */}
            <motion.div 
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Équipe de développeurs Adalink Group travaillant sur des projets innovants"
                className="rounded-2xl sm:rounded-3xl shadow-2xl w-full h-64 sm:h-80 lg:h-96 object-cover"
                width={1000}
                height={600}
                unoptimized
              />
            </motion.div>
            {/* Les éléments superposés ont été retirés pour un rendu plus épuré */}
          </motion.div>
        </div>

        {/* Nos valeurs - responsive grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-xl sm:text-2xl font-bold text-center mb-12 sm:mb-16"
            style={{ color: colors.text.primary }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Nos valeurs fondamentales
          </motion.h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Card moderne avec effet glassmorphism */}
                <div 
                  className="relative h-full min-h-[240px] p-6 rounded-2xl border border-gray-200/50 backdrop-blur-sm transition-all duration-300 group-hover:border-gray-300/50 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden"
                  style={{ 
                    backgroundColor: `${colors.dominant.light}ee`,
                    background: `linear-gradient(135deg, ${colors.dominant.light}ee 0%, ${colors.dominant.light}cc 100%)`
                  }}
                >
                  {/* Gradient overlay subtil */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ 
                      background: `linear-gradient(135deg, transparent 0%, ${value.gradient.split(',')[1].split(' ')[1]}08 100%)`
                    }}
                  />
                  
                  {/* Icon container moderne */}
                  <div className="relative mb-4">
                    <motion.div 
                      className="relative w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                      style={{ 
                        background: value.gradient,
                        boxShadow: `0 8px 24px ${value.gradient.split(',')[1].split(' ')[1]}30`
                      }}
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <value.icon size={20} style={{ color: colors.text.inverse }} />
                    </motion.div>
                    
                    {/* Effet de halo derrière l'icône */}
                    <div 
                      className="absolute inset-0 w-12 h-12 rounded-xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                      style={{ background: value.gradient }}
                    />
                  </div>
                  
                  {/* Content avec espacements améliorés */}
                  <motion.h4 
                    className="text-lg font-bold mb-3"
                    style={{ color: colors.text.primary }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    {value.title}
                  </motion.h4>
                  
                  <motion.p 
                    className="leading-relaxed text-sm text-gray-600"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    {value.description}
                  </motion.p>
                  
                  {/* Ligne décorative en bas */}
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-1 origin-left"
                    style={{ background: value.gradient }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                  />
                  
                  {/* Points décoratifs */}
                  <div className="absolute top-6 right-6 flex gap-1">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-1 h-1 rounded-full bg-gray-300"
                        animate={{ opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSectionPresenter 
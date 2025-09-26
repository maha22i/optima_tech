'use client'

import { motion } from 'framer-motion'
import { 
  Target, 
  Lightbulb, 
  Heart, 
  Star, 
  Users, 
  Award,
  Building,
  Phone,
  Mail,
  CheckCircle,
  ArrowRight,
  Zap,
  Shield,
  Handshake,
  Gem
} from 'lucide-react'
import { colors } from '@/utils/colors'
import { contactInfo } from '@/utils/contact'
import Image from 'next/image'

interface AboutUsContentPresenterProps {}

const AboutUsContentPresenter: React.FC<AboutUsContentPresenterProps> = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Apporter des solutions modernes et efficaces',
      color: colors.accent.primary
    },
    {
      icon: Shield,
      title: 'Fiabilité',
      description: 'Assurer un service de qualité, transparent et durable',
      color: colors.support.primary
    },
    {
      icon: Handshake,
      title: 'Proximité',
      description: 'Accompagner nos clients avec une écoute et un suivi personnalisé',
      color: colors.accent.success
    },
    {
      icon: Gem,
      title: 'Excellence',
      description: 'Viser la perfection dans chaque projet confié',
      color: colors.accent.premium
    }
  ]

  const timeline = [
    {
      year: '2022',
      title: 'La naissance d\'une vision',
      description: 'Adalink Group est né de la volonté de deux jeunes entrepreneurs djiboutiens passionnés par la technologie.',
      icon: Zap
    },
    {
      year: '2023',
      title: 'Expansion des services',
      description: 'Élargissement de notre offre avec des solutions ERP et des partenariats stratégiques.',
      icon: Building
    },
    {
      year: '2024',
      title: 'Croissance continue',
      description: 'Consolidation de notre position comme acteur clé de la transformation digitale à Djibouti.',
      icon: Target
    }
  ]

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  }

  return (
    <div className="bg-white">
      {/* Présentation de l'entreprise - Version moderne */}
      <section className="relative  sm:py-10 lg:py-10 overflow-hidden">
        {/* Background avec pattern et gradient */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
          <div className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header avec effet de texte */}
          <motion.div {...fadeInUp} className="text-center mb-10">
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              Présentation de l'entreprise
            </h2>
          </motion.div>

          {/* Contenu principal avec grille moderne */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-10">
            {/* Texte principal */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                <div className="relative">
                  <div className="absolute -left-4 top-0 w-1 h-full rounded-full"
                    style={{ backgroundColor: colors.accent.primary }}></div>
                  <p className="text-lg leading-relaxed pl-6" style={{ color: colors.text.primary }}>
                    <span className="font-semibold">Adalink Group</span> est une société fondée à Djibouti 
                    avec la mission d'accompagner les entreprises, les institutions et les particuliers 
                    dans leur <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    transformation digitale</span>.
                  </p>
                </div>

                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-base leading-relaxed" 
                  style={{ color: colors.text.secondary }}
                >
                  Nous combinons expertise locale et solutions innovantes pour répondre aux besoins 
                  croissants en technologies de l'information et de la communication dans la région.
                </motion.p>

                {/* Boutons d'action */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="flex flex-wrap gap-4 pt-4"
                >
                  <button
                    onClick={() => window.location.href = '/services'}
                    className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                    style={{ 
                      backgroundColor: colors.support.primary,
                      color: colors.text.inverse
                    }}
                  >
                    Découvrir nos services
                    <ArrowRight size={16} className="ml-2" />
                  </button>
                  <button
                    onClick={() => window.location.href = '/portfolio'}
                    className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 border-2"
                    style={{ 
                      borderColor: colors.dominant.border,
                      color: colors.text.primary
                    }}
                  >
                    Voir nos réalisations
                  </button>
                </motion.div>
              </div>
            </motion.div>

            {/* Carte de statistiques */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Décoration de fond */}
              <div className="absolute -inset-4 rounded-3xl opacity-10"
                style={{ 
                  background: `linear-gradient(135deg, ${colors.support.primary}, ${colors.accent.primary})` 
                }}></div>
              
              <div className="relative bg-white rounded-3xl shadow-2xl p-6 lg:p-8">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { number: '2+', label: 'Années d\'expérience', icon: Award },
                    { number: '50+', label: 'Projets réalisés', icon: Target },
                    { number: '100%', label: 'Clients satisfaits', icon: Heart },
                    { number: '24/7', label: 'Support technique', icon: Shield }
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      className="text-center group cursor-pointer"
                    >
                      <div className="mb-2 inline-flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 group-hover:scale-110"
                        style={{ 
                          backgroundColor: `${colors.accent.primary}10`,
                        }}>
                        <stat.icon size={20} style={{ color: colors.accent.primary }} />
                      </div>
                      <motion.div 
                        className="text-2xl font-bold mb-1"
                        style={{ color: colors.text.primary }}
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {stat.number}
                      </motion.div>
                      <div className="text-xs" style={{ color: colors.text.secondary }}>
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Badge de certification */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="mt-6 p-3 rounded-xl text-center"
                  style={{ 
                    backgroundColor: `${colors.support.primary}05`,
                    border: `1px solid ${colors.support.primary}20`
                  }}
                >
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle size={16} style={{ color: colors.support.primary }} />
                    <span className="text-xs font-medium" style={{ color: colors.text.primary }}>
                      Entreprise certifiée & partenaire officiel Canon et Odoo
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Éléments décoratifs flottants */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 rounded-full opacity-20"
                style={{ backgroundColor: colors.accent.primary }}
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full opacity-10"
                style={{ backgroundColor: colors.support.primary }}
                animate={{
                  x: [0, 10, 0],
                  rotate: [0, -180, -360],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </motion.div>
          </div>

          {/* Domaines d'expertise */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-6 text-white"
          >
            <h3 className="text-xl font-bold mb-6 text-center">Nos domaines d'expertise</h3>
            <div className="grid sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { name: 'Développement Web', icon: '💻' },
                { name: 'Solutions ERP', icon: '📊' },
                { name: 'Infrastructure IT', icon: '🔧' },
                { name: 'Support Technique', icon: '🛡️' },
                { name: 'Applications Mobiles', icon: '📱' },
                { name: 'Cloud Computing', icon: '☁️' },
                { name: 'Cybersécurité', icon: '🔒' },
                { name: 'Réseaux Télécom', icon: '🌐' },
                { name: 'Maintenance', icon: '🔨' },
                { name: 'Formation IT', icon: '🎓' },
                { name: 'Conseil Digital', icon: '💡' },
                { name: 'Data Analytics', icon: '📈' }
              ].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.05 * index }}
                  className="text-center group cursor-pointer"
                >
                  <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-105">
                    <div className="text-2xl mb-2">{skill.icon}</div>
                    <div className="text-xs font-medium">{skill.name}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision et Mission - Version moderne */}
      <section className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: colors.dominant.light }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Vision */}
            <motion.div 
              {...fadeInUp}
              className="relative group"
            >
              <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 lg:p-8 border"
                style={{ borderColor: `${colors.support.primary}20` }}>
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5"
                  style={{
                    background: `radial-gradient(circle, ${colors.support.primary}, transparent)`,
                  }}
                />
                
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl"
                      style={{ backgroundColor: `${colors.support.primary}15` }}>
                      <Target size={24} style={{ color: colors.support.primary }} />
                    </div>
                    <h3 className="text-xl font-bold" style={{ color: colors.text.primary }}>
                      Notre vision
                    </h3>
                  </div>
                  
                  <p className="text-sm leading-relaxed" style={{ color: colors.text.secondary }}>
                    Être un acteur clé du développement numérique à Djibouti et dans la région, 
                    en proposant des solutions technologiques adaptées, fiables et accessibles.
                  </p>
                  
                  {/* Decorative line */}
                  <motion.div 
                    className="absolute bottom-0 left-0 h-1 rounded-full"
                    style={{ backgroundColor: colors.support.primary }}
                    initial={{ width: 0 }}
                    whileInView={{ width: '100px' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div 
              {...fadeInUp} 
              transition={{ delay: 0.2 }}
              className="relative group"
            >
              <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 lg:p-8 border"
                style={{ borderColor: `${colors.accent.primary}20` }}>
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5"
                  style={{
                    background: `radial-gradient(circle, ${colors.accent.primary}, transparent)`,
                  }}
                />
                
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl"
                      style={{ backgroundColor: `${colors.accent.primary}15` }}>
                      <Heart size={24} style={{ color: colors.accent.primary }} />
                    </div>
                    <h3 className="text-xl font-bold" style={{ color: colors.text.primary }}>
                      Notre mission
                    </h3>
                  </div>
                  
                  <ul className="space-y-2 text-sm" style={{ color: colors.text.secondary }}>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="mt-0.5 flex-shrink-0" style={{ color: colors.accent.success }} />
                      <span>Simplifier l'accès aux technologies modernes pour les entreprises</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="mt-0.5 flex-shrink-0" style={{ color: colors.accent.success }} />
                      <span>Offrir des services de qualité, adaptés aux besoins locaux</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="mt-0.5 flex-shrink-0" style={{ color: colors.accent.success }} />
                      <span>Créer de la valeur ajoutée et soutenir la compétitivité</span>
                    </li>
                  </ul>
                  
                  {/* Decorative line */}
                  <motion.div 
                    className="absolute bottom-0 left-0 h-1 rounded-full"
                    style={{ backgroundColor: colors.accent.primary }}
                    initial={{ width: 0 }}
                    whileInView={{ width: '100px' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.7 }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nos valeurs - Version moderne */}
      <section className="relative   sm:py-5 lg:py-5 overflow-hidden bg-white">
        {/* Background avec pattern et gradient */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50"></div>
          <div className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-2 lg:px-2">
          {/* Header avec badge */}
          <motion.div {...fadeInUp} className="text-center mb-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-4 px-4 py-2 rounded-full text-sm font-medium"
              style={{ 
                backgroundColor: `${colors.accent.primary}10`,
                color: colors.accent.primary
              }}
            >
              NOS VALEURS
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: colors.text.primary }}>
              Les principes qui nous guident
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: colors.text.secondary }}>
              Notre engagement au quotidien
            </p>
          </motion.div>

          {/* Grille de valeurs moderne */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border overflow-hidden"
                  style={{ borderColor: `${value.color}15` }}>
                  
                  {/* Background decoration */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-5"
                    style={{ backgroundColor: value.color }}
                  />
                  
                  {/* Content */}
                  <div className="relative">
                    {/* Icon with background */}
                    <motion.div 
                      className="mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-sm"
                        style={{ 
                          backgroundColor: `${value.color}15`,
                          border: `1px solid ${value.color}30`
                        }}>
                        <value.icon size={24} style={{ color: value.color }} />
                      </div>
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-lg font-bold mb-2" style={{ color: colors.text.primary }}>
                      {value.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm leading-relaxed" style={{ color: colors.text.secondary }}>
                      {value.description}
                    </p>

                    {/* Bottom accent */}
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 h-1"
                      style={{ backgroundColor: value.color }}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                    />
                  </div>
                </div>

                {/* Hover effect decoration */}
                <motion.div
                  className="absolute -z-10 inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ 
                    background: `linear-gradient(135deg, ${value.color}10, transparent)`
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* Stats section below values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-12 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-6 text-white"
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              {[
                { number: '100+', label: 'Projets livrés' },
                { number: '50+', label: 'Clients satisfaits' },
                { number: '15+', label: 'Experts IT' },
                { number: '24/7', label: 'Support client' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                >
                  <div className="text-2xl font-bold mb-1 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-xs opacity-80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Floating decorative elements */}
          <motion.div
            className="absolute top-10 right-10 w-20 h-20 rounded-full opacity-10"
            style={{ backgroundColor: colors.accent.primary }}
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-10 left-10 w-32 h-32 rounded-full opacity-5"
            style={{ backgroundColor: colors.support.primary }}
            animate={{
              x: [0, 20, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </section>

      {/* Notre histoire - Timeline */}
      <section className="relative py-10 sm:py-12 lg:py-16 overflow-hidden">
        {/* Background avec pattern et gradient */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
          <div className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              Notre histoire
            </h2>
            <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{ color: colors.text.secondary }}>
              Une aventure entrepreneuriale au service de la transformation digitale
            </p>
          </motion.div>

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline line moderne avec gradient */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full hidden md:block">
              <div className="h-full w-full bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500 opacity-20"></div>
            </div>

            {/* Timeline items */}
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                } mb-8 md:mb-10`}
              >
                {/* Mobile timeline dot */}
                <div className="absolute left-8 w-3 h-3 rounded-full md:hidden"
                  style={{ 
                    backgroundColor: colors.accent.primary,
                  }}></div>

                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} pl-16 md:pl-0`}>
                  <div className="group relative">
                    {/* Card decoration */}
                    <div className="absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ 
                        background: `linear-gradient(135deg, ${colors.support.primary}20, ${colors.accent.primary}20)` 
                      }}></div>
                    
                    <div className="relative bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
                      <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <div className="w-8 h-8 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
                          style={{ backgroundColor: `${colors.accent.primary}15` }}>
                          <item.icon size={16} style={{ color: colors.accent.primary }} />
                        </div>
                        <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold mb-1.5" style={{ color: colors.text.primary }}>
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: colors.text.secondary }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Center dot - Desktop only */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="relative"
                  >
                    <div className="w-4 h-4 rounded-full"
                      style={{ 
                        backgroundColor: colors.accent.primary,
                      }}></div>
                    <div className="absolute inset-0 rounded-full animate-ping"
                      style={{ 
                        backgroundColor: colors.accent.primary,
                        opacity: 0.3
                      }}></div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to action */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-8"
          >
            <p className="text-base mb-4" style={{ color: colors.text.secondary }}>
              Rejoignez-nous dans cette aventure digitale
            </p>
            <button
              onClick={() => window.location.href = '/contact'}
              className="inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              style={{ 
                backgroundColor: colors.support.primary,
                color: colors.text.inverse
              }}
            >
              Démarrer un projet
              <ArrowRight size={16} className="ml-2" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Nos partenaires */}
      <section className="py-10 sm:py-16 lg:py-20" style={{ backgroundColor: colors.dominant.light }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: colors.text.primary }}>
              Nos partenaires de confiance
            </h2>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: colors.text.secondary }}>
              Nous collaborons avec des acteurs reconnus pour vous offrir des solutions complètes et innovantes.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Canon */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group"
            >
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 flex items-center justify-center h-32">
                <Image 
                  src="/canon.png" 
                  alt="Canon Logo" 
                  width={120}
                  height={56}
                  className="h-14 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2" style={{ color: colors.text.primary }}>
                  Canon
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: colors.text.secondary }}>
                  Solutions d'impression et de numérisation professionnelles haute performance.
                </p>
                <div className="flex flex-wrap gap-1 mt-3">
                  {['Impression', 'Bureautique'].map((tag, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Odoo */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group"
            >
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 flex items-center justify-center h-32">
                <Image 
                  src="/odoo-logo.png" 
                  alt="Odoo Logo" 
                  width={120}
                  height={56}
                  className="h-14 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2" style={{ color: colors.text.primary }}>
                  Odoo
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: colors.text.secondary }}>
                  Suite ERP complète pour la gestion intégrée de votre entreprise.
                </p>
                <div className="flex flex-wrap gap-1 mt-3">
                  {['ERP', 'Gestion'].map((tag, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* CNBD */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group"
            >
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 flex items-center justify-center h-32">
                <Image 
                  src="/cnbd-logo.png" 
                  alt="CNBD Logo" 
                  width={120}
                  height={56}
                  className="h-14 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2" style={{ color: colors.text.primary }}>
                  CNBD
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: colors.text.secondary }}>
                  Centre National de la bureautiques et de la dématerialisation, expertise en solutions d'impression et de numérisation.
                </p>
                <div className="flex flex-wrap gap-1 mt-3">
                  {['Impression', 'Numérisation'].map((tag, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Distritherm Services */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group"
            >
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 flex items-center justify-center h-32">
                <Image 
                  src="/ds-logo.png" 
                  alt="Distritherm Services Logo" 
                  width={120}
                  height={56}
                  className="h-14 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2" style={{ color: colors.text.primary }}>
                  Distritherm Services
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: colors.text.secondary }}>
                  Solutions de climatisation et thermiques pour entreprises et industries.
                </p>
                <div className="flex flex-wrap gap-1 mt-3">
                  {['Climatisation', 'Thermique'].map((tag, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            {...fadeInUp}
            transition={{ delay: 0.5 }}
            className="text-center mt-10"
          >
            <p className="text-base" style={{ color: colors.text.secondary }}>
              Ensemble, nous construisons des solutions sur mesure qui propulsent votre entreprise vers l'excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Engagement envers Djibouti */}
      <section className="py-5 sm:py-5 lg:py-5 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl"
              style={{ backgroundColor: colors.accent.primary }}>
              <div className="absolute inset-0 opacity-20">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-white rounded-full"></div>
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white rounded-full"></div>
              </div>
              
              <div className="relative p-8 sm:p-12 text-center text-white">
                <Award size={48} className="mx-auto mb-6" />
                
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  Engagement envers Djibouti
                </h2>
                
                <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                  En tant qu'entreprise locale, nous nous engageons à contribuer au développement 
                  numérique du pays, en favorisant l'emploi, la formation et la montée en 
                  compétences des jeunes talents djiboutiens.
                </p>

                <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">100%</div>
                    <div className="text-sm opacity-90">Entreprise locale</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">24/7</div>
                    <div className="text-sm opacity-90">Support disponible</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">+50</div>
                    <div className="text-sm opacity-90">Projets réalisés</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 sm:py-20 lg:py-24" style={{ backgroundColor: colors.dominant.light }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: colors.text.primary }}>
              Appel à action
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: colors.text.secondary }}>
              Vous souhaitez en savoir plus sur nous ou collaborer avec Adalink Group ?
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={contactInfo.phone.href}
                className="inline-flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                style={{ 
                  backgroundColor: colors.support.primary,
                  color: colors.text.inverse
                }}
              >
                <Phone size={20} className="mr-2" />
                {contactInfo.phone.display}
              </a>
              
              <a
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                style={{ 
                  backgroundColor: colors.accent.primary,
                  color: colors.text.inverse
                }}
              >
                <Mail size={20} className="mr-2" />
                {contactInfo.email}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutUsContentPresenter

'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { ArrowRight, Eye, Code, Award, ExternalLink, Sparkles } from 'lucide-react'
import { colors } from '@/utils/colors'

const PortfolioShowcase: React.FC = () => {
  const router = useRouter()
  const [isClicked, setIsClicked] = useState(false)

  const handleContactClick = () => {
    setIsClicked(true)
    setTimeout(() => {
      router.push('/contact')
    }, 300)
  }

  const projects = [
    {
      title: 'Navimove',
      url: 'https://navimove.fr',
      description: 'Marketplace djiboutienne innovante connectant vendeurs et acheteurs/loueurs. Plateforme de mise en relation pour tous types de produits et services à Djibouti.',
      category: 'Marketplace',
      tech: ['React', 'Node.js', 'API'],
      image: '/navimove.png',
      gradient: `linear-gradient(135deg, ${colors.support.primary}, ${colors.support.primaryHover})`
    },
    {
      title: 'CNBD',
      url: 'https://cnbd.fr',
      description: "Entreprise française B2B générant plus de 80 millions FDJ de chiffre d'affaires. Site institutionnel haute performance pour une croissance soutenue.",
      category: 'Enterprise B2B',
      tech: ['Next.js', 'TypeScript', 'Performance'],
      image: '/cnbd.png',
      gradient: `linear-gradient(135deg, ${colors.accent.primary}, ${colors.accent.primaryHover})`
    },
    {
      title: 'Distritherm Services',
      url: 'https://distritherm-services.fr',
      description: 'Plateforme e-commerce française de thermique générant plus de 1 milliard FDJ. Solution complète de distribution avec gestion avancée des stocks.',
      category: 'E-commerce B2B',
      tech: ['React', 'E-commerce', 'Gestion stocks'],
      image: '/ds.png', 
      gradient: `linear-gradient(135deg, ${colors.accent.premium}, ${colors.accent.premiumHover})`
    },
    {
      title: 'Infocyber',
      url: 'https://infocyber.net',
      description: 'Entreprise spécialisée en cybersécurité et développement. Plateforme de services techniques avec solutions de sécurité informatique avancées.',
      category: 'Cybersécurité & Dev',
      tech: ['Vue.js', 'Sécurité', 'Services'],
      image: '/info.png',
      gradient: `linear-gradient(135deg, ${colors.accent.warning}, ${colors.accent.warningHover})`
    },
    {
      title: 'Silalo',
      url: 'https://silalo.online',
      description: 'Plateforme e-commerce djiboutienne moderne. Solution complète de vente en ligne adaptée au marché local avec paiement mobile intégré.',
      category: 'E-commerce Djibouti',
      tech: ['React', 'E-commerce', 'Paiement mobile', 'Local'],
      image: '/silalo.png',
      gradient: `linear-gradient(135deg, ${colors.support.dark}, ${colors.accent.premium})`
    },
    {
      title: 'Pixel Nomade',
      url: 'https://pixel-nomade.com',
      description: 'Agence N°1 à Djibouti spécialisée en production vidéo, marketing digital et solutions web. Site moderne propulsé par l\'IA avec stratégie digitale sur mesure pour propulser la visibilité des entreprises.',
      category: 'Agence Digital & Production',
      tech: ['Next.js', 'Marketing Digital', 'Production Vidéo', 'IA'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      gradient: `linear-gradient(135deg, ${colors.accent.success}, ${colors.accent.successHover})`
    }
  ]

  return (
    <div className="pt-16 sm:pt-20 lg:pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Gradient Mesh Background */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 -left-4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>

          {/* Animated Grid */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 2 }}
          >
            <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          </motion.div>

          {/* Floating Particles */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            {/* Heading & Intro */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <motion.h1
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="inline-block">Nos Réalisations</span>
                <span className="inline-block ml-2 bg-gradient-to-r from-blue-400 via-orange-400 to-purple-400 bg-clip-text text-transparent">
                  à Djibouti et à l'étranger
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-base sm:text-lg text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed"
              >
                Découvrez quelques-unes de nos réalisations qui témoignent de notre expertise en développement web et mobile. Chaque projet reflète notre engagement envers l'excellence technique.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.button
                  onClick={handleContactClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`group relative inline-flex items-center px-6 py-3 overflow-hidden rounded-full font-semibold text-base transition-all duration-300 ${
                    isClicked
                      ? 'bg-blue-500 border-2 border-blue-500 text-white'
                      : 'bg-transparent border-2 border-white/50 text-white hover:border-blue-500'
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></div>
                  <span className="relative z-10 transition-colors duration-300">Démarrer votre projet</span>
                  <ArrowRight size={18} className="relative z-10 ml-2 group-hover:translate-x-1 transition-all duration-200" />
                  {isClicked && (
                    <motion.div
                      className="absolute inset-0 bg-blue-400 rounded-full"
                      initial={{ scale: 0, opacity: 0.5 }}
                      animate={{ scale: 2, opacity: 0 }}
                      transition={{ duration: 0.6 }}
                    />
                  )}
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-12"
            >
              <div className="flex flex-wrap justify-center gap-8 text-gray-400">
                {[
                  { icon: Code, label: 'Projets réalisés', value: '50+' },
                  { icon: Award, label: 'Clients satisfaits', value: '30+' },
                  { icon: Eye, label: 'Technologies', value: '15+' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                    className="flex flex-col items-center px-4 py-2"
                  >
                    <stat.icon size={20} className="mb-2 text-blue-400" />
                    <span className="text-xl font-bold text-white">{stat.value}</span>
                    <span className="text-xs text-gray-500">{stat.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

       

        <style jsx>{`
          @keyframes blob {
            0% {
              transform: translate(0px, 0px) scale(1);
            }
            33% {
              transform: translate(30px, -50px) scale(1.1);
            }
            66% {
              transform: translate(-20px, 20px) scale(0.9);
            }
            100% {
              transform: translate(0px, 0px) scale(1);
            }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
        `}</style>
      </section>

      {/* Projects Section */}
      <section
        className="py-4 sm:py-6 lg:py-8 relative overflow-hidden"
        style={{ backgroundColor: colors.dominant.light }}
      >
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute top-10 left-4 sm:top-20 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 rounded-full"
            style={{ background: `radial-gradient(circle, ${colors.accent.primary}, transparent)` }}
          />
          <div
            className="absolute bottom-10 right-4 sm:bottom-20 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 rounded-full"
            style={{ background: `radial-gradient(circle, ${colors.support.primary}, transparent)` }}
          />
        </div>

        <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* Section Title */}
          <motion.div
            className="text-center mb-8 sm:mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.p
              className="text-base sm:text-lg lg:text-xl mb-6 max-w-3xl mx-auto leading-relaxed"
              style={{ color: colors.text.secondary }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Découvrez quelques-unes de nos réalisations qui témoignent de notre expertise en développement web et mobile.{' '}
              <span className="font-semibold" style={{ color: colors.support.primary }}>
                Et il y en a encore plein d'autres !
              </span>
            </motion.p>
            {/* Decorative line */}
            <motion.div
              className="flex items-center justify-center space-x-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="h-px w-12 sm:w-16" style={{ backgroundColor: colors.accent.primary }} />
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.support.primary }} />
              <div className="h-px w-12 sm:w-16" style={{ backgroundColor: colors.accent.primary }} />
            </motion.div>
          </motion.div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Project Card */}
                <div
                  className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl transition-all duration-500 group-hover:shadow-3xl backdrop-blur-md border border-white/10 h-full flex flex-col"
                  style={{
                    background: `linear-gradient(145deg, ${colors.dominant.light}f8, ${colors.dominant.light}e6)`,
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                  }}
                >
                  {/* Image */}
                  <div className="relative h-40 sm:h-48 lg:h-52 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={`Projet ${project.title}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      width={500}
                      height={300}
                      unoptimized
                    />
                    {/* Overlay */}
                    <div
                      className="absolute inset-0 transition-all duration-500 group-hover:opacity-90"
                      style={{
                        background: `linear-gradient(45deg, ${project.gradient.split(',')[0].split('(')[1]} 20%, rgba(0,0,0,0.3) 60%, transparent 90%)`,
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Category Badge */}
                   

                    {/* External link */}
                    <motion.a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-4 right-4 w-10 h-10 sm:w-12 sm:h-12 rounded-lg backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                      style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} className="sm:w-5 sm:h-5" style={{ color: colors.text.primary }} />
                    </motion.a>
                  </div>

                  {/* Card Content */}
                  <div
                    className="p-4 sm:p-5 relative flex-1 flex flex-col"
                    style={{ background: `linear-gradient(135deg, ${colors.dominant.light}f0, ${colors.dominant.light}e0)` }}
                  >
                    {/* Category Chip */}
                    <motion.span
                      className="mb-2 inline-block px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold text-white shadow-md"
                      style={{ background: project.gradient }}
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.25 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {project.category}
                    </motion.span>
                    <motion.h3
                      className="text-lg sm:text-xl font-bold mb-2 sm:mb-3"
                      style={{ color: colors.text.primary }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {project.title}
                    </motion.h3>

                    <motion.p
                      className="text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4"
                      style={{ color: colors.text.secondary }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {project.description}
                    </motion.p>

                    {/* Technologies */}
                    <motion.div
                      className="flex flex-wrap gap-2 mb-4 sm:mb-6 flex-1"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="px-3 py-2 sm:px-4 sm:py-2 rounded-xl text-xs font-semibold backdrop-blur-md border border-opacity-20 shadow-md h-8 sm:h-9 flex items-center justify-center min-w-fit"
                          style={{
                            background: `linear-gradient(135deg, ${colors.accent.primaryLight}, ${colors.accent.primaryLight}80)`,
                            color: colors.accent.primary,
                            borderColor: colors.accent.primary,
                          }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.6 + index * 0.1 + techIndex * 0.05 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>

                    {/* CTA link */}
                    <motion.a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 font-semibold transition-all duration-200 group/link mt-auto"
                      style={{ color: colors.support.primary }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-sm sm:text-base">Visiter le site</span>
                      <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform duration-200" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA under grid */}
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-8 p-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 rounded-xl text-white shadow-xl relative overflow-hidden"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-2 right-2 w-8 h-8 border-2 border-white rounded-full"></div>
            <div className="absolute bottom-2 left-2 w-6 h-6 border-2 border-white rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 border border-white rounded-full"></div>
          </div>
          
          <div className="relative">
            <motion.h3 
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-lg font-bold mb-2"
            >
              Prêt à démarrer votre projet ?
            </motion.h3>
            <p className="text-blue-100 text-xs mb-4 max-w-md mx-auto leading-relaxed">
              Contactez-nous pour discuter de votre projet et découvrir comment nous pouvons vous aider.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-2.5 bg-white text-blue-600 font-medium text-sm rounded-lg hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Sparkles size={14} className="mr-2" />
              Contactez-nous
            </motion.a>
          </div>
        </motion.div>
        </div>
      </section>
    </div>
  )
}

export default PortfolioShowcase

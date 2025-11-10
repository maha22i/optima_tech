'use client'

import { motion } from 'framer-motion'
import { ExternalLink, ArrowRight, Zap, Star, Globe } from 'lucide-react'
import { colors } from '@/utils/colors'

interface ServicesPortfolioPresenterProps {
  onContactClick: () => void
}

const ServicesPortfolioPresenter: React.FC<ServicesPortfolioPresenterProps> = ({ onContactClick }) => {
  const projects = [
    {
      title: 'Navimove',
      url: 'https://navimove.fr',
      description: 'Marketplace djiboutienne de référence connectant vendeurs et acheteurs/loueurs. Écosystème complet de mise en relation pour produits et services avec géolocalisation intégrée.',
      category: 'Marketplace Djibouti',
      tech: ['React', 'Node.js', 'Géolocalisation', 'Marketplace'],
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      gradient: `linear-gradient(135deg, ${colors.support.primary}, ${colors.support.primaryHover})`,
      features: ['Vendeurs & acheteurs', 'Géolocalisation', 'Marché djiboutien']
    },
    {
      title: 'CNBD',
      url: 'https://cnbd.fr',
      description: 'Entreprise française B2B d\'envergure générant plus de 80 millions FDJ de chiffre d\'affaires annuel. Architecture technique haute performance supportant une croissance exceptionnelle.',
      category: 'Enterprise B2B France',
      tech: ['Next.js', 'TypeScript', 'Haute performance', 'B2B'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      gradient: `linear-gradient(135deg, ${colors.accent.primary}, ${colors.accent.primaryHover})`,
      features: ['80M+ FDJ CA', 'B2B France', 'Haute performance']
    },
    {
      title: 'Distritherm Services',
      url: 'https://distritherm-services.fr',
      description: 'Géant français de la distribution thermique générant plus de 1 milliard FDJ de revenus. Plateforme e-commerce B2B ultra-performante avec gestion avancée des stocks et commandes.',
      category: 'E-commerce B2B Leader',
      tech: ['React', 'E-commerce B2B', 'Gestion stocks', 'Distribution'],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      gradient: `linear-gradient(135deg, ${colors.accent.premium}, ${colors.accent.premiumHover})`,
      features: ['1 milliard+ FDJ', 'Leader thermique', 'B2B distribution']
    },
    {
      title: 'Infocyber',
      url: 'https://infocyber.net',
      description: 'Entreprise spécialisée en cybersécurité et développement sur mesure. Plateforme de services techniques avancés proposant audit sécurité, développement et conseil IT.',
      category: 'Cybersécurité & Développement',
      tech: ['Vue.js', 'Cybersécurité', 'Services IT', 'Audit'],
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      gradient: `linear-gradient(135deg, ${colors.accent.warning}, ${colors.accent.warningHover})`,
      features: ['Audit sécurité', 'Développement custom', 'Conseil IT']
    },
    {
      title: 'Silalo',
      url: 'https://silalo.online',
      description: 'Plateforme e-commerce djiboutienne innovante adaptée au marché local. Solution complète de vente en ligne avec paiement mobile intégré et expérience utilisateur optimisée pour Djibouti.',
      category: 'E-commerce Local Djibouti',
      tech: ['React', 'E-commerce', 'Paiement mobile', 'Marché local'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      gradient: `linear-gradient(135deg, ${colors.support.dark}, ${colors.accent.premium})`,
      features: ['E-commerce Djibouti', 'Paiement mobile', 'Adapté au local']
    },
    {
      title: 'Pixel Nomade',
      url: 'https://pixel-nomade.com',
      description: 'Agence N°1 à Djibouti spécialisée en production vidéo, marketing digital et solutions web. Site moderne propulsé par l\'IA avec stratégie digitale sur mesure pour propulser la visibilité des entreprises.',
      category: 'Agence Digital & Production',
      tech: ['Next.js', 'Marketing Digital', 'Production Vidéo', 'IA'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      gradient: `linear-gradient(135deg, ${colors.accent.success}, ${colors.accent.successHover})`,
      features: ['Agence N°1 Djibouti', 'Production Vidéo', 'Marketing Digital']
    }
  ]

  return (
    <section 
      id="portfolio"
      className="py-12 lg:py-16 relative overflow-hidden"
      style={{ 
        background: `linear-gradient(135deg, ${colors.dominant.primary} 0%, ${colors.dominant.secondary} 50%, ${colors.support.dark} 100%)`
      }}
    >
      {/* Background effects extraordinaires */}
      <div className="absolute inset-0">
        {/* Particules flottantes */}
        {Array.from({ length: 20 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full opacity-30"
            style={{ 
              backgroundColor: colors.accent.primary,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Orbes lumineux */}
        <motion.div 
          className="absolute top-20 left-20 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: `radial-gradient(circle, ${colors.accent.primary}, transparent)` }}
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 360],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-80 h-80 rounded-full blur-3xl opacity-15"
          style={{ background: `radial-gradient(circle, ${colors.support.primary}, transparent)` }}
          animate={{
            scale: [1.2, 0.8, 1.2],
            rotate: [360, 0],
            opacity: [0.15, 0.35, 0.15]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* En-tête extraordinaire */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-full mb-8 backdrop-blur-md border border-white/20"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <Star size={20} style={{ color: colors.accent.primary }} />
            <span className="text-white font-bold">Nos Réalisations Exceptionnelles</span>
            <Zap size={20} style={{ color: colors.accent.primary }} />
          </motion.div>
          
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
            style={{ color: colors.text.inverse }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Projets qui
            <br />
            <motion.span 
              className="bg-gradient-to-r bg-clip-text text-transparent inline-block"
              style={{ 
                backgroundImage: `linear-gradient(135deg, ${colors.accent.primary}, ${colors.support.light}, ${colors.accent.primary})` 
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              transforment
            </motion.span>
            <br />
            le digital
          </motion.h2>
          
          <motion.p 
            className="text-xl lg:text-2xl max-w-6xl mx-auto leading-relaxed"
            style={{ color: colors.text.inverse, opacity: 0.9 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Découvrez nos créations digitales qui repoussent les limites de l'innovation 
            et redéfinissent l'expérience utilisateur moderne.
          </motion.p>
        </motion.div>

        {/* Grille des projets extraordinaire - layout étendu */}
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-10 mb-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Carte avec effets extraordinaires - design premium */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-700 group-hover:shadow-4xl border border-white/5">
                {/* Fond avec gradient animé */}
                <motion.div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: project.gradient }}
                />
                
                {/* Container principal - style sophistiqué */}
                <div 
                  className="relative backdrop-blur-xl border border-white/10"
                  style={{ 
                    background: `linear-gradient(145deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02))`,
                    boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                  }}
                >
                  {/* Image avec effets - proportions optimisées */}
                  <div className="relative h-64 lg:h-72 xl:h-64 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={`Projet ${project.title}`}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    {/* Overlay avec gradient sophistiqué */}
                    <div 
                      className="absolute inset-0 transition-all duration-700 group-hover:opacity-95"
                      style={{ 
                        background: `linear-gradient(135deg, ${project.gradient.split(',')[0].split('(')[1]} 15%, rgba(0,0,0,0.4) 50%, transparent 85%)`
                      }}
                    />
                    <div 
                      className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    />
                    
                    {/* Badge catégorie flottant */}
                    <motion.div 
                      className="absolute top-6 left-6 px-4 py-2 rounded-full backdrop-blur-md border border-white/20"
                      style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, rotate: 2 }}
                    >
                      <span 
                        className="text-sm font-bold"
                        style={{ color: colors.text.primary }}
                      >
                        {project.category}
                      </span>
                    </motion.div>
                    
                    {/* Bouton visite externe */}
                    <motion.a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-6 right-6 w-14 h-14 rounded-full backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                      style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={20} style={{ color: colors.text.primary }} />
                    </motion.a>
                    
                    {/* Icône de globe */}
                    <motion.div
                      className="absolute bottom-6 right-6 w-12 h-12 rounded-full backdrop-blur-md border border-white/20 flex items-center justify-center"
                      style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <Globe size={18} style={{ color: colors.text.inverse }} />
                    </motion.div>
                  </div>
                  
                  {/* Contenu - design premium */}
                  <div 
                    className="p-6 lg:p-8 relative"
                    style={{ 
                      background: `linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))`,
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    <motion.h3 
                      className="text-3xl font-bold mb-4"
                      style={{ color: colors.text.inverse }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {project.title}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-base leading-relaxed mb-6"
                      style={{ color: colors.text.inverse, opacity: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {project.description}
                    </motion.p>
                    
                    {/* Features */}
                    <motion.div 
                      className="flex flex-wrap gap-2 mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {project.features.map((feature, featureIndex) => (
                        <motion.span
                          key={featureIndex}
                          className="px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md border border-white/20"
                          style={{ 
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            color: colors.text.inverse
                          }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: 0.7 + index * 0.1 + featureIndex * 0.05 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                        >
                          {feature}
                        </motion.span>
                      ))}
                    </motion.div>
                    
                    {/* Technologies */}
                    <motion.div 
                      className="flex flex-wrap gap-2 mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="px-3 py-1 rounded-full text-xs font-bold"
                          style={{ 
                            backgroundColor: colors.accent.primaryLight,
                            color: colors.accent.primary 
                          }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.8 + index * 0.1 + techIndex * 0.05 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>
                    
                    {/* Lien vers le site */}
                    <motion.a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-3 font-bold transition-all duration-300 group/link"
                      style={{ color: colors.accent.primary }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 10 }}
                    >
                      <span className="text-lg">Découvrir le projet</span>
                      <ArrowRight size={20} className="group-hover/link:translate-x-2 transition-transform duration-300" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section extraordinaire */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="relative p-12 rounded-3xl backdrop-blur-md border border-white/10 overflow-hidden"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background animé */}
            <motion.div
              className="absolute inset-0 opacity-20"
              style={{ 
                background: `linear-gradient(45deg, ${colors.accent.primary}, ${colors.support.primary}, ${colors.accent.primary})`
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <div className="relative">
              <motion.h3 
                className="text-4xl lg:text-5xl font-bold mb-6"
                style={{ color: colors.text.inverse }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Créons ensemble votre projet
              </motion.h3>
              
              <motion.p 
                className="text-xl mb-10 max-w-5xl mx-auto"
                style={{ color: colors.text.inverse, opacity: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Rejoignez nos clients satisfaits et donnez vie à vos idées les plus ambitieuses 
                avec des solutions digitales qui marquent les esprits.
              </motion.p>
              
              <motion.button
                onClick={onContactClick}
                className="inline-flex items-center space-x-4 px-10 py-5 font-bold text-lg rounded-2xl transition-all duration-300 shadow-2xl backdrop-blur-md border border-white/20"
                style={{ 
                  background: `linear-gradient(135deg, ${colors.accent.primary}, ${colors.accent.primaryHover})`,
                  color: colors.text.inverse 
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5, boxShadow: '0 25px 50px rgba(0,0,0,0.25)' }}
                whileTap={{ scale: 0.98 }}
              >
                <Zap size={24} />
                <span>Démarrer votre projet</span>
                <ArrowRight size={24} />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesPortfolioPresenter

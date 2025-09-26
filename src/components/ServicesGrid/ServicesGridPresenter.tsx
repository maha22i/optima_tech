'use client'

import { motion } from 'framer-motion'
import { Globe, Wifi, Wrench, Printer, Settings, Check, ArrowRight, Star, Shield, Headphones, Zap, Cloud } from 'lucide-react'

interface ServicesGridPresenterProps {}

const ServicesGridPresenter: React.FC<ServicesGridPresenterProps> = () => {
  const services = [
    {
      icon: Globe,
      title: 'Développement d\'applications & sites web/mobile',
      description: 'Conception et développement de solutions digitales sur mesure pour votre entreprise.',
      features: [
        'Applications web et mobiles sur mesure',
        'Sites vitrines et e-commerce professionnels',
        'Interfaces modernes et ergonomiques',
        'Intégration de solutions de paiement'
      ],
      color: 'from-blue-500 to-blue-600',
      highlight: true
    },
    {
      icon: Wifi,
      title: 'Réseaux & Infrastructure informatique',
      description: 'Installation et gestion complète de votre infrastructure réseau d\'entreprise.',
      features: [
        'Installation et configuration de réseaux',
        'Serveurs et solutions de connectivité',
        'Maintenance et optimisation',
        'Sécurité et protection des données'
      ],
      color: 'from-purple-500 to-purple-600',
      highlight: false
    },
    {
      icon: Wrench,
      title: 'Maintenance informatique',
      description: 'Support technique complet pour assurer la continuité de vos activités.',
      features: [
        'Support technique et assistance rapide',
        'Maintenance préventive et corrective',
        'Gestion de parc informatique',
        'Optimisation des systèmes'
      ],
      color: 'from-green-500 to-green-600',
      highlight: false
    },
    {
      icon: Printer,
      title: 'Fourniture de matériels bureautiques',
      description: 'Partenaire officiel Canon pour vos solutions d\'impression et de bureautique.',
      features: [
        'Vente et installation Canon',
        'Solutions de gestion documentaire',
        'Assistance technique spécialisée',
        'Conseils personnalisés'
      ],
      color: 'from-orange-500 to-orange-600',
      highlight: false,
      badge: 'Partenaire Canon'
    },
    {
      icon: Settings,
      title: 'Solutions de gestion ERP – Odoo',
      description: 'Implémentation et personnalisation d\'Odoo pour une gestion d\'entreprise optimale.',
      features: [
        'Mise en place et personnalisation',
        'Modules : Compta, Ventes, RH, Stock',
        'Formation des équipes',
        'Suivi et maintenance continue'
      ],
      color: 'from-indigo-500 to-indigo-600',
      highlight: false,
      badge: 'Odoo Partner'
    },
    {
      icon: Cloud,
      title: 'Cloud Computing',
      description: 'Solutions cloud sécurisées pour l’hébergement, la sauvegarde et la scalabilité de vos applications.',
      features: [
        'Infrastructure AWS / Azure',
        'Déploiement scalable',
        'Sauvegarde & reprise après sinistre',
        'Monitoring cloud'
      ],
      color: 'from-cyan-500 to-blue-500',
      highlight: false,
      badge: 'Nouveau'
    }
  ]

  const engagements = [
    {
      icon: Star,
      title: 'Expertise locale',
      description: 'Savoir-faire international adapté aux besoins de Djibouti'
    },
    {
      icon: Shield,
      title: 'Solutions sur mesure',
      description: 'Technologies adaptées à vos besoins spécifiques'
    },
    {
      icon: Headphones,
      title: 'Support réactif',
      description: 'Assistance client professionnelle et disponible'
    },
    {
      icon: Zap,
      title: 'Innovation durable',
      description: 'Accompagnement dans votre transformation digitale'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="services-details" className="relative py-16 bg-white overflow-hidden">
      {/* Background décoratif animé */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Présentation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <motion.div 
                className="h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent w-24"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              <span className="text-sm font-medium text-blue-500 tracking-wider uppercase">
                Nos Services
              </span>
              <motion.div 
                className="h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent w-24"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <motion.span 
                className="block text-blue-900"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Solutions technologiques
              </motion.span>
              <motion.span 
                className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                pour votre succès
              </motion.span>
            </h2>
            
            <motion.p 
              className="text-lg text-blue-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Des services professionnels adaptés aux besoins des entreprises djiboutiennes
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Grille des services - Design ultra moderne */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative h-full"
            >
              {/* Carte avec design moderne et minimaliste */}
              <motion.div 
                className={`relative h-full flex flex-col backdrop-blur-sm rounded-2xl transition-all duration-500 ${
                  service.highlight 
                    ? 'bg-white shadow-2xl' 
                    : 'bg-white/80 shadow-xl hover:shadow-2xl'
                }`}
                whileHover={{ 
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
                }}
              >
                {/* Effet de brillance animé */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                  </motion.div>
                </div>

                {/* Contenu de la carte */}
                <div className="relative z-10 p-8 flex flex-col h-full">
                  {/* Header avec icône et badge */}
                  <div className="flex items-start justify-between mb-6">
                    <motion.div 
                      className="relative"
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg bg-gradient-to-br ${service.color}`}>
                        <service.icon size={28} className="text-white" />
                      </div>
                      
                      {/* Effet de pulse */}
                      <motion.div 
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color}`}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        style={{ opacity: 0.3 }}
                      />
                    </motion.div>

                    {service.badge && (
                      <motion.span 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r from-orange-400 to-orange-500 text-white"
                      >
                        {service.badge}
                      </motion.span>
                    )}
                    {service.highlight && !service.badge && (
                      <motion.span 
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="text-xl"
                      >
                        ⭐
                      </motion.span>
                    )}
                  </div>

                  {/* Titre avec animation */}
                  <motion.h3 
                    className="text-xl font-bold mb-3 text-blue-900"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    {service.title}
                  </motion.h3>

                  {/* Description */}
                  <p className="text-sm mb-6 leading-relaxed flex-grow text-blue-600">
                    {service.description}
                  </p>

                  {/* Features avec animations */}
                  <div className="space-y-2.5">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div 
                        key={featureIndex} 
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          delay: 0.3 + index * 0.1 + featureIndex * 0.05,
                          duration: 0.3
                        }}
                        viewport={{ once: true }}
                      >
                        <motion.div 
                          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-gradient-to-br from-green-400 to-emerald-500"
                          whileHover={{ scale: 1.2, rotate: 180 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Check size={12} className="text-white" />
                        </motion.div>
                        <span className="text-sm text-blue-700">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Bouton CTA */}
                  <motion.div 
                    className="mt-6 pt-6 border-t border-blue-200"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <motion.a
                      href="/contact"
                      className="relative inline-flex items-center justify-center w-full px-4 py-3 font-medium rounded-xl transition-all duration-300 overflow-hidden group/cta bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="relative z-10 flex items-center">
                        Demander un devis
                        <motion.svg 
                          className="ml-2 w-4 h-4"
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          initial={{ x: 0 }}
                          whileHover={{ x: 3 }}
                          transition={{ duration: 0.2 }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </motion.svg>
                      </span>
                      
                      {/* Effet de shine au hover */}
                      <motion.div
                        className="absolute inset-0 -top-1"
                        initial={{ x: "-100%", opacity: 0 }}
                        whileHover={{ x: "100%", opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                      </motion.div>
                    </motion.a>
                  </motion.div>
                </div>

                {/* Particules décoratives */}
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 opacity-10">
                  <motion.div
                    className="w-full h-full rounded-full bg-blue-500"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ 
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Section Engagements - Design moderne avec orange */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative mb-20 py-5 px-8 bg-gradient-to-br from-blue-50 via-white to-sky-50 rounded-3xl border border-blue-100"
        >
          {/* Éléments décoratifs bleu */}
          <div className="absolute top-6 left-6 w-20 h-20 bg-blue-200/30 rounded-full blur-xl"></div>
          <div className="absolute bottom-6 right-6 w-16 h-16 bg-sky-300/20 rounded-full blur-lg"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
            
              
              <h3 className="text-3xl font-bold text-blue-900 mb-4">
                Pourquoi choisir
                <span className="text-blue-500"> Adalink Group</span> ?
              </h3>
              <p className="text-blue-600 max-w-2xl mx-auto">
                Nous nous engageons à fournir des solutions de qualité supérieure
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {engagements.map((engagement, index) => {
                const colors = [
                  'from-blue-400 to-blue-500',
                  'from-sky-300 to-sky-400', 
                  'from-blue-500 to-blue-600',
                  'from-cyan-300 to-cyan-400'
                ];
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <motion.div 
                      className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-200"
                      whileHover={{ y: -5 }}
                    >
                      <div className="relative mb-4">
                        <motion.div 
                          className={`w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br ${colors[index]} flex items-center justify-center shadow-lg`}
                          whileHover={{ 
                            rotate: [0, -10, 10, -10, 0],
                            scale: 1.1 
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          <engagement.icon size={24} className="text-white" />
                        </motion.div>
                        
                        {/* Effet de brillance bleu */}
                        <motion.div
                          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                          initial={{ scale: 0.8 }}
                          whileHover={{ scale: 1.2 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className={`w-full h-full rounded-2xl bg-gradient-to-r ${colors[index]} opacity-20 blur-xl`}></div>
                        </motion.div>
                      </div>
                      
                      <h4 className="text-base font-bold text-blue-900 mb-2">
                        {engagement.title}
                      </h4>
                      <p className="text-xs text-blue-600 leading-relaxed">
                        {engagement.description}
                      </p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* CTA Section - Design compact */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-2xl">
            {/* Background avec effet moderne */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600"></div>
            
            {/* Cercles décoratifs plus petits */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
            
            {/* Contenu compact */}
            <div className="relative z-10 p-8 md:p-10 text-center">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Prêt à transformer votre
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                    vision en réalité ?
                  </span>
                </h3>
                
                <p className="text-blue-100 mb-8 max-w-4xl mx-auto">
                  Rejoignez les entreprises qui nous font confiance pour leur transformation digitale
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <motion.a
                    href="/contact"
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                    className="group relative inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <span className="relative z-10">Commencer maintenant</span>
                    <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.a>
                  
                  <motion.a
                    href="/contact"
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                    className="inline-flex items-center justify-center px-6 py-3 bg-transparent text-white font-medium rounded-xl border border-white/50 hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                  >
                    <span>Voir nos réalisations</span>
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesGridPresenter
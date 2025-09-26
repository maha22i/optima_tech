'use client'

import { motion } from 'framer-motion'
import { 
  Monitor, 
  Smartphone, 
  Code, 
  Palette, 
  Clock, 
  Shield,
  Database,
  Globe,
  Zap
} from 'lucide-react'

interface FeaturesPresenterProps {}

const FeaturesPresenter: React.FC<FeaturesPresenterProps> = () => {
  const features = [
    {
      icon: Monitor,
      title: 'Sites web professionnels',
      description: 'Création de sites vitrines et e-commerce modernes, responsives et optimisés pour le référencement.',
      benefits: ['Design responsive', 'SEO optimisé', 'Performance']
    },
    {
      icon: Smartphone,
      title: 'Applications mobiles',
      description: 'Développement d\'applications iOS et Android natives avec une expérience utilisateur exceptionnelle.',
      benefits: ['iOS & Android', 'UX/UI moderne', 'Performance native']
    },
    {
      icon: Code,
      title: 'Développement sur mesure',
      description: 'Solutions techniques personnalisées adaptées à vos besoins spécifiques et votre secteur d\'activité.',
      benefits: ['Code propre', 'Architecture solide', 'Maintenabilité']
    },
    {
      icon: Palette,
      title: 'Design & expérience utilisateur',
      description: 'Création d\'interfaces intuitives et attrayantes qui convertissent et fidélisent vos utilisateurs.',
      benefits: ['UI/UX Design', 'Prototypage', 'Tests utilisateur']
    },
    {
      icon: Database,
      title: 'Intégrations & API',
      description: 'Connexion avec vos outils existants et création d\'API robustes pour votre écosystème digital.',
      benefits: ['API REST', 'Bases de données', 'Intégrations']
    },
    {
      icon: Clock,
      title: 'Maintenance & support',
      description: 'Suivi continu, mises à jour sécurité et évolutions pour garantir la pérennité de vos solutions.',
      benefits: ['Support 24/7', 'Mises à jour', 'Monitoring']
    }
  ]

  const additionalBenefits = [
    {
      icon: Globe,
      title: 'Technologies modernes',
      description: 'Stack technique à jour : React, Next.js, React Native, Node.js et plus'
    },
    {
      icon: Shield,
      title: 'Sécurité & conformité',
      description: 'Respect des standards de sécurité et conformité RGPD'
    },
    {
      icon: Zap,
      title: 'Livraison agile',
      description: 'Méthode agile avec livraisons itératives et feedback continu'
    }
  ]

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-slate-50">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* En-tête - responsive amélioré */}
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.span 
            className="inline-block px-3 py-2 sm:px-4 sm:py-2 bg-blue-100 text-blue-800 text-xs sm:text-sm font-medium rounded-full mb-3 sm:mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Nos Services
          </motion.span>
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Des solutions digitales
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              innovantes & performantes
            </span>
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Du simple site vitrine aux applications mobiles complexes, 
            Adalink Group transforme vos idées en solutions digitales qui font grandir votre entreprise.
          </motion.p>
        </motion.div>

        {/* Services principaux - grille responsive améliorée */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Icône - responsive */}
              <motion.div 
                className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <feature.icon size={24} className="sm:w-7 sm:h-7 text-white" />
              </motion.div>

              {/* Titre - responsive */}
              <motion.h3 
                className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-blue-900 transition-colors leading-tight"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
              >
                {feature.title}
              </motion.h3>

              {/* Description - responsive */}
              <motion.p 
                className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
              >
                {feature.description}
              </motion.p>

              {/* Avantages - responsive */}
              <motion.div 
                className="flex flex-wrap gap-1.5 sm:gap-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
              >
                {feature.benefits.map((benefit, benefitIndex) => (
                  <motion.span
                    key={benefitIndex}
                    className="px-2 py-1 sm:px-3 sm:py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 + benefitIndex * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {benefit}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Avantages supplémentaires - responsive amélioré */}
        <motion.div 
          className="bg-gradient-to-r from-blue-900 to-slate-900 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Pourquoi choisir Adalink Group ?
            </motion.h3>
            <motion.p 
              className="text-sm sm:text-base text-blue-100 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Au-delà du développement, nous vous accompagnons dans votre transformation 
              digitale avec expertise et innovation.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {additionalBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <motion.div 
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <benefit.icon size={20} className="sm:w-6 sm:h-6 text-white" />
                </motion.div>
                <motion.h4 
                  className="text-base sm:text-lg font-semibold mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {benefit.title}
                </motion.h4>
                <motion.p 
                  className="text-blue-100 text-xs sm:text-sm leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {benefit.description}
                </motion.p>
              </motion.div>
            ))}
          </div>

          {/* CTA - responsive */}
          <motion.div 
            className="text-center mt-8 sm:mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="/services"
              className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-200 shadow-lg text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="hidden sm:inline">Découvrir nos réalisations</span>
              <span className="sm:hidden">Nos réalisations</span>
              <motion.svg 
                className="ml-2 w-4 h-4 sm:w-5 sm:h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </motion.svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesPresenter 
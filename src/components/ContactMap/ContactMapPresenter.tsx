'use client'

import { motion } from 'framer-motion'
import { MapPin, ExternalLink, Globe, Clock, Navigation, Phone } from 'lucide-react'
import { colors } from '@/utils/colors'
import { contactInfo } from '@/utils/contact'

interface ContactMapPresenterProps {}

const ContactMapPresenter: React.FC<ContactMapPresenterProps> = () => {
  const locationInfo = [
    {
      label: 'Pays',
      value: 'République de Djibouti 🇩🇯',
      icon: Globe
    },
    {
      label: 'Ville',
      value: 'Djibouti',
      icon: MapPin
    },
    {
      label: 'Fuseau horaire',
      value: 'UTC+3',
      icon: Clock
    }
  ]

  const quickActions = [
    {
      title: 'Voir sur Google Maps',
      description: 'Localisation exacte',
      href: 'https://maps.google.com/?q=Djibouti',
      icon: ExternalLink,
      gradient: `linear-gradient(135deg, ${colors.support.primary}, ${colors.support.primaryHover})`
    },
    {
      title: 'Appeler maintenant',
      description: 'Contact direct',
      href: contactInfo.phone.href,
      icon: Phone,
      gradient: `linear-gradient(135deg, ${colors.accent.primary}, ${colors.accent.primaryHover})`
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <motion.div 
      className="space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.div 
        className="text-center"
        variants={itemVariants}
      >
        <motion.span 
          className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-4"
          style={{ 
            backgroundColor: colors.support.light,
            color: colors.support.primary 
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Notre localisation
        </motion.span>
        
        <h3 
          className="text-2xl font-bold mb-2"
          style={{ color: colors.text.primary }}
        >
          Basés à Djibouti
        </h3>
        
        <p 
          className="text-sm"
          style={{ color: colors.text.secondary }}
        >
          Au cœur de la Corne de l'Afrique
        </p>
      </motion.div>

      {/* Image de la carte */}
      <motion.div 
        className="relative rounded-3xl overflow-hidden shadow-2xl"
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <motion.img
          src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
          alt="Djibouti - Notre localisation"
          className="w-full h-56 object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        />
        
        {/* Overlay avec animation */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          style={{ 
            background: `linear-gradient(135deg, ${colors.dominant.primary}80, ${colors.support.primary}60)`
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div 
            className="p-6 rounded-full shadow-2xl"
            style={{ backgroundColor: colors.text.inverse }}
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 360, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <MapPin size={32} style={{ color: colors.accent.primary }} />
          </motion.div>
        </motion.div>

        {/* Badge flottant */}
        <motion.div 
          className="absolute top-4 right-4 px-4 py-2 rounded-full shadow-lg backdrop-blur-md"
          style={{ 
            backgroundColor: colors.accent.primary,
            color: colors.text.inverse 
          }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center space-x-2">
            <Navigation size={16} />
            <span className="text-sm font-bold">Djibouti</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Informations de localisation */}
      <motion.div 
        className="p-6 rounded-2xl shadow-lg"
        style={{ backgroundColor: colors.dominant.light }}
        variants={itemVariants}
      >
        <h4 
          className="font-bold mb-4 text-center"
          style={{ color: colors.text.primary }}
        >
          Informations de localisation
        </h4>
        
        <div className="space-y-3">
          {locationInfo.map((info, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-between p-3 rounded-xl group"
              style={{ backgroundColor: colors.dominant.light }}
              whileHover={{ 
                backgroundColor: colors.support.light,
                scale: 1.02
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center space-x-3">
                <div 
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300"
                  style={{ backgroundColor: colors.support.light }}
                >
                  <info.icon 
                    size={16} 
                    style={{ color: colors.support.primary }} 
                  />
                </div>
                <span 
                  className="text-sm font-medium"
                  style={{ color: colors.text.secondary }}
                >
                  {info.label}
                </span>
              </div>
              <span 
                className="font-bold"
                style={{ color: colors.text.primary }}
              >
                {info.value}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Actions rapides */}
      <motion.div 
        className="space-y-3"
        variants={containerVariants}
      >
        {quickActions.map((action, index) => (
          <motion.a
            key={index}
            href={action.href}
            target={action.href.startsWith('http') ? '_blank' : undefined}
            rel={action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="block p-4 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl group"
            style={{ backgroundColor: colors.dominant.light }}
            variants={itemVariants}
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center space-x-4">
              <motion.div 
                className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300"
                style={{ background: action.gradient }}
                whileHover={{ rotate: 10 }}
              >
                <action.icon size={20} style={{ color: colors.text.inverse }} />
              </motion.div>
              
              <div className="flex-1">
                <h5 
                  className="font-bold"
                  style={{ color: colors.text.primary }}
                >
                  {action.title}
                </h5>
                <p 
                  className="text-sm"
                  style={{ color: colors.text.secondary }}
                >
                  {action.description}
                </p>
              </div>
              
              <motion.div
                className="opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ x: 5 }}
              >
                <ExternalLink 
                  size={16} 
                  style={{ color: colors.text.tertiary }} 
                />
              </motion.div>
            </div>
          </motion.a>
        ))}
      </motion.div>

      {/* Informations supplémentaires */}
      <motion.div 
        className="text-center p-6 rounded-2xl"
        style={{ 
          background: `linear-gradient(135deg, ${colors.accent.primary}20, ${colors.support.primary}20)`
        }}
        variants={itemVariants}
      >
        <motion.div 
          className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg"
          style={{ backgroundColor: colors.accent.primary }}
          animate={{
            y: [0, -5, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Globe size={20} style={{ color: colors.text.inverse }} />
        </motion.div>
        
        <h4 
          className="font-bold mb-2"
          style={{ color: colors.text.primary }}
        >
          Position stratégique
        </h4>
        
        <p 
          className="text-sm leading-relaxed"
          style={{ color: colors.text.secondary }}
        >
          Djibouti se situe à un carrefour stratégique entre l'Afrique, l'Asie et l'Europe, 
          nous permettant de servir nos clients dans toutes les zones horaires.
        </p>
        
        <motion.div 
          className="flex items-center justify-center space-x-2 mt-4 text-xs font-medium"
          style={{ color: colors.accent.primary }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Clock size={14} />
          <span>Service heures de travail</span>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default ContactMapPresenter 
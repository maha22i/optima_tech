'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, ExternalLink, Users, Star, Zap } from 'lucide-react'
import { colors } from '@/utils/colors'
import { contactInfo as contactData } from '@/utils/contact'

interface ContactInfoPresenterProps {}

const ContactInfoPresenter: React.FC<ContactInfoPresenterProps> = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Téléphone',
      content: contactData.phone.display,
      description: 'Lun-Ven 8h-18h',
      gradient: `linear-gradient(135deg, ${colors.accent.primary}, ${colors.accent.primaryHover})`,
      href: contactData.phone.href
    },
    {
      icon: Mail,
      title: 'Email',
      content: contactData.email,
      description: 'Réponse sous 24h',
      gradient: `linear-gradient(135deg, ${colors.support.primary}, ${colors.support.primaryHover})`,
      href: `mailto:${contactData.email}`
    },
    {
      icon: MapPin,
      title: 'Adresse',
      content: contactData.address.city,
      description: `République de ${contactData.address.country}`,
      gradient: `linear-gradient(135deg, ${colors.accent.primary}, ${colors.support.primary})`,
      href: `https://maps.google.com/?q=${contactData.address.city}`
    },
    {
      icon: Clock,
      title: 'Horaires',
      content: 'Lun-Ven 8h-18h',
      description: 'Support technique disponible',
      gradient: `linear-gradient(135deg, ${colors.accent.success}, ${colors.accent.successHover})`,
      href: null
    }
  ]

  const stats = [
    {
      icon: Users,
      value: '50+',
      label: 'Entreprises',
      description: 'Nous font confiance'
    },
    {
      icon: Star,
      value: '99.9%',
      label: 'Satisfaction',
      description: 'Client garantie'
    },
    {
      icon: Zap,
      value: '2h',
      label: 'Réponse',
      description: 'Maximum'
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
      className="space-y-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >

      {/* Contact Methods */}
      <motion.div 
        className="space-y-2"
        variants={containerVariants}
      >
        {contactInfo.map((info, index) => (
          <motion.div
            key={index}
            className="group"
            variants={itemVariants}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.3 }}
          >
            {info.href ? (
              <a
                href={info.href}
                target={info.href.startsWith('http') ? '_blank' : undefined}
                rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="block p-2 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
                style={{ backgroundColor: colors.dominant.light }}
              >
                <ContactInfoCard info={info} />
              </a>
            ) : (
              <div 
                className="p-2 rounded-lg shadow-md"
                style={{ backgroundColor: colors.dominant.light }}
              >
                <ContactInfoCard info={info} />
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>

     
    </motion.div>
  )
}

// Contact Info Card Component
const ContactInfoCard: React.FC<{ info: any }> = ({ info }) => (
  <div className="flex items-start space-x-2">
    <motion.div 
      className="w-8 h-8 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300"
      style={{ background: info.gradient }}
      whileHover={{ rotate: 5 }}
    >
      <info.icon size={14} style={{ color: colors.text.inverse }} />
    </motion.div>
    
    <div className="flex-1">
      <div className="flex items-center justify-between mb-0.5">
        <h4 
          className="font-semibold text-xs"
          style={{ color: colors.text.primary }}
        >
          {info.title}
        </h4>
        {info.href && (
          <motion.div
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            whileHover={{ rotate: 45 }}
          >
            <ExternalLink 
              size={12} 
              style={{ color: colors.text.tertiary }} 
            />
          </motion.div>
        )}
      </div>
      
      <p 
        className="font-medium mb-0.5"
        style={{ color: colors.text.secondary, fontSize: '0.688rem' }}
      >
        {info.content}
      </p>
      
      <p 
        style={{ color: colors.text.tertiary, fontSize: '0.625rem' }}
      >
        {info.description}
      </p>
    </div>
  </div>
)

export default ContactInfoPresenter 
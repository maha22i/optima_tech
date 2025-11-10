'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import ContactInfo from '@/components/ContactInfo'
import { colors } from '@/utils/colors'
import { contactInfo, getPartnersText } from '@/utils/contact'

export default function ContactPage() {
  const quickContactMethods = [
    {
      icon: Phone,
      title: 'Appel direct',
      description: 'Parlez directement à notre équipe',
      action: contactInfo.phone.display,
      href: contactInfo.phone.href,
      gradient: `linear-gradient(135deg, ${colors.accent.success}, ${colors.accent.successHover})`
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Chat direct et rapide',
      action: 'Chatter sur WhatsApp',
      href: `https://wa.me/25377360607?text=Bonjour, je souhaite discuter d'un projet avec Netlink Solutions`,
      gradient: `linear-gradient(135deg, #25D366, #128C7E)`
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'Réponse garantie sous 24h',
      action: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
      gradient: `linear-gradient(135deg, ${colors.support.primary}, ${colors.support.primaryHover})`
    },
    {
      icon: MessageCircle,
      title: 'Formulaire',
      description: 'Message détaillé et personnalisé',
      action: 'Écrire un message',
      href: '#contact-form',
      gradient: `linear-gradient(135deg, ${colors.accent.primary}, ${colors.accent.primaryHover})`
    }
  ]



  return (
    <div className="pt-16 sm:pt-20 lg:pt-24 min-h-screen" style={{ backgroundColor: colors.dominant.light }}>
      {/* Hero Section */}
      <motion.section 
        className="relative overflow-hidden pt-8 sm:pt-12 lg:pt-16 pb-12 sm:pb-16 lg:pb-20 bg-gradient-to-b from-gray-900 to-black text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated Grid Background */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
        >
          <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </motion.div>

        {/* Gradient Mesh Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 -left-4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.h1 
                className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <span className="inline-block bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
                  Contactez-nous
                </span>
              </motion.h1>

              <motion.p 
                className="text-sm sm:text-base text-gray-400 mb-6 max-w-xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Notre équipe d'experts est là pour répondre à toutes vos questions et vous accompagner 
                dans la réalisation de votre projet digital sur-mesure.
              </motion.p>
              {/* Quick Contact Methods */}
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                {quickContactMethods.map((method, index) => (
                  <motion.a
                    key={index}
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="p-3 rounded-lg backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 group text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    whileHover={{ y: -2, scale: 1.02 }}
                  >
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 mx-auto mb-2"
                      style={{ background: method.gradient }}
                    >
                      <method.icon size={16} className="text-white" />
                    </div>
                    <h3 className="font-semibold text-xs mb-0.5 text-white">
                      {method.title}
                    </h3>
                    <p className="text-xs text-gray-400 mb-1" style={{ fontSize: '0.688rem' }}>
                      {method.description}
                    </p>
                    <span className="font-medium text-blue-400 group-hover:text-blue-300 transition-colors" style={{ fontSize: '0.688rem' }}>
                      {method.action}
                    </span>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact Content */}
      <section className="py-8">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.span 
              className="inline-block px-3 py-1.5 rounded-full text-xs font-semibold mb-3 shadow-md"
              style={{ 
                backgroundColor: colors.support.light,
                color: colors.support.primary 
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Prenons contact
            </motion.span>
            
            <motion.h2 
              className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3"
              style={{ color: colors.text.primary }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Parlons de votre projet
            </motion.h2>
            
            <motion.p 
              className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
              style={{ color: colors.text.secondary }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Que vous souhaitiez un devis personnalisé, des informations détaillées sur nos services, 
              ou simplement discuter de vos besoins, nous sommes là pour vous écouter.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Formulaire */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              id="contact-form"
            >
              <ContactForm />
            </motion.div>
            
            {/* Informations */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <ContactInfo />
            </motion.div>
          </div>
        </div>
      </section>


    </div>
  )
} 
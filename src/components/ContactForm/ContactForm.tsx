'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Check, AlertCircle, User, Mail, MessageSquare, Calendar, Loader2 } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { colors } from '@/utils/colors'
import { contactInfo } from '@/utils/contact'

interface ContactFormProps {}

const ContactForm: React.FC<ContactFormProps> = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const subjectOptions = [
    { value: 'Demande de devis', icon: Calendar, description: 'Obtenez un devis adapté à vos besoins' },
    { value: 'Demande d\'information', icon: MessageSquare, description: 'En savoir plus sur nos services' },
    { value: 'Support technique', icon: AlertCircle, description: 'Assistance technique' },
    { value: 'Partenariat', icon: User, description: 'Collaboration business' },
    { value: 'Autre', icon: Mail, description: 'Autre demande' }
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Effacer l'erreur quand l'utilisateur commence à taper
    if (error) setError(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      // Préparer les données pour EmailJS selon le template
      const templateParams = {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        time: new Date().toLocaleString('fr-FR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      }

      // Envoyer avec EmailJS
      await emailjs.send(
        'service_r0ojyxv', // Service ID
        'template_kzkb4o5', // Template ID
        templateParams,
        '9Q9GnTHyyBlNMuEBC' // Clé publique
      )

      setIsSubmitted(true)
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error)
      setError('Erreur lors de l\'envoi du message. Veuillez réessayer ou nous contacter directement.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  if (isSubmitted) {
    return (
      <motion.div 
        className="relative p-12 rounded-3xl shadow-2xl text-center overflow-hidden"
        style={{ backgroundColor: colors.dominant.light }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Background decoration */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{ 
            background: `radial-gradient(circle at center, ${colors.accent.success}, transparent 70%)`
          }}
        />
        
        <motion.div 
          className="relative"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <div 
            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl"
            style={{ 
              background: `linear-gradient(135deg, ${colors.accent.success}, ${colors.accent.successHover})`
            }}
          >
            <Check size={30} style={{ color: colors.text.inverse }} />
          </div>
        </motion.div>

        <motion.h3 
          className="text-base font-bold mb-1"
          style={{ color: colors.text.primary }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Message envoyé avec succès !
        </motion.h3>
        
        <motion.p 
          className="text-sm mb-4 leading-relaxed"
          style={{ color: colors.text.secondary }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Merci pour votre message. Notre équipe vous contactera dans les 
          <strong style={{ color: colors.accent.primary }}> 2 heures ouvrées</strong>.
        </motion.p>
        
        <motion.button
          onClick={() => setIsSubmitted(false)}
          className="px-6 py-2 font-semibold rounded-lg transition-all duration-300 shadow-md text-sm"
          style={{ 
            backgroundColor: colors.accent.primary,
            color: colors.text.inverse 
          }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Envoyer un autre message
        </motion.button>
      </motion.div>
    )
  }

  return (
    <motion.div 
      className="relative p-6 rounded-2xl shadow-lg overflow-hidden"
      style={{ backgroundColor: colors.dominant.light }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
        <div 
          className="w-full h-full rounded-full"
          style={{ 
            background: `radial-gradient(circle, ${colors.support.primary}, transparent)`
          }}
        />
      </div>

      <motion.div variants={itemVariants}>
        <h2 
          className="text-base font-bold mb-1.5"
          style={{ color: colors.text.primary }}
        >
          Envoyez-nous un message
        </h2>
        <p 
          className="text-xs mb-3"
          style={{ color: colors.text.secondary }}
        >
          Décrivez-nous votre projet et nous vous recontacterons rapidement
        </p>
      </motion.div>

      <AnimatePresence>
        {error && (
          <motion.div 
            className="mb-4 p-3 rounded-lg border-l-3"
            style={{ 
              backgroundColor: colors.accent.dangerLight,
              borderColor: colors.accent.danger,
              color: colors.accent.danger
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center space-x-2">
              <AlertCircle size={14} />
              <span className="font-medium text-xs">{error}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Nom et Prénom */}
        <motion.div 
          className="grid md:grid-cols-2 gap-3"
          variants={itemVariants}
        >
          <div className="relative">
            <label 
              htmlFor="firstName" 
              className="block text-xs font-semibold mb-1.5"
              style={{ color: colors.text.primary }}
            >
              Prénom *
            </label>
            <div className="relative">
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                onFocus={() => setFocusedField('firstName')}
                onBlur={() => setFocusedField(null)}
                required
                className="w-full pl-7 pr-2 py-1.5 rounded-md border transition-all duration-300 focus:outline-none"
                style={{
                  borderColor: focusedField === 'firstName' ? colors.accent.primary : colors.dominant.border,
                  backgroundColor: colors.dominant.light,
                  color: colors.text.primary,
                  fontSize: '0.75rem'
                }}
                placeholder="Votre prénom"
              />
              <div 
                className="absolute left-2 top-1/2 transform -translate-y-1/2 transition-colors duration-300"
                style={{ 
                  color: focusedField === 'firstName' ? colors.accent.primary : colors.text.tertiary 
                }}
              >
                <User size={14} />
              </div>
            </div>
          </div>
          
          <div className="relative">
            <label 
              htmlFor="lastName" 
              className="block text-xs font-semibold mb-1.5"
              style={{ color: colors.text.primary }}
            >
              Nom *
            </label>
            <div className="relative">
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                onFocus={() => setFocusedField('lastName')}
                onBlur={() => setFocusedField(null)}
                required
                className="w-full pl-7 pr-2 py-1.5 rounded-md border transition-all duration-300 focus:outline-none"
                style={{
                  borderColor: focusedField === 'lastName' ? colors.accent.primary : colors.dominant.border,
                  backgroundColor: colors.dominant.light,
                  color: colors.text.primary,
                  fontSize: '0.75rem'
                }}
                placeholder="Votre nom"
              />
              <div 
                className="absolute left-2 top-1/2 transform -translate-y-1/2 transition-colors duration-300"
                style={{ 
                  color: focusedField === 'lastName' ? colors.accent.primary : colors.text.tertiary 
                }}
              >
                <User size={14} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Email */}
        <motion.div variants={itemVariants}>
          <label 
            htmlFor="email" 
            className="block text-xs font-semibold mb-1.5"
            style={{ color: colors.text.primary }}
          >
            Email *
          </label>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
              required
              className="w-full pl-7 pr-2 py-1.5 rounded-md border transition-all duration-300 focus:outline-none"
              style={{
                borderColor: focusedField === 'email' ? colors.support.primary : colors.dominant.border,
                backgroundColor: colors.dominant.light,
                color: colors.text.primary,
                fontSize: '0.75rem'
              }}
              placeholder="votre@email.com"
            />
            <div 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 transition-colors duration-300"
              style={{ 
                color: focusedField === 'email' ? colors.support.primary : colors.text.tertiary 
              }}
            >
              <Mail size={14} />
            </div>
          </div>
        </motion.div>

        {/* Sujet */}
        <motion.div variants={itemVariants}>
          <label 
            htmlFor="subject" 
            className="block text-xs font-semibold mb-1.5"
            style={{ color: colors.text.primary }}
          >
            Objet de votre demande *
          </label>
          <div className="relative">
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              onFocus={() => setFocusedField('subject')}
              onBlur={() => setFocusedField(null)}
              required
              className="w-full pl-7 pr-2 py-1.5 rounded-md border transition-all duration-300 focus:outline-none appearance-none"
              style={{
                borderColor: focusedField === 'subject' ? colors.accent.primary : colors.dominant.border,
                backgroundColor: colors.dominant.light,
                color: colors.text.primary,
                fontSize: '0.75rem'
              }}
            >
              <option value="">Sélectionnez le type de votre demande</option>
              {subjectOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.value} - {option.description}
                </option>
              ))}
            </select>
            <div 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 transition-colors duration-300"
              style={{ 
                color: focusedField === 'subject' ? colors.accent.primary : colors.text.tertiary 
              }}
            >
              <MessageSquare size={14} />
            </div>
          </div>
        </motion.div>

        {/* Message */}
        <motion.div variants={itemVariants}>
          <label 
            htmlFor="message" 
            className="block text-xs font-semibold mb-1.5"
            style={{ color: colors.text.primary }}
          >
            Votre message *
          </label>
          <div className="relative">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFocusedField('message')}
              onBlur={() => setFocusedField(null)}
              required
              rows={4}
              className="w-full pl-7 pr-2 py-1.5 rounded-md border transition-all duration-300 focus:outline-none resize-none"
              style={{
                borderColor: focusedField === 'message' ? colors.accent.primary : colors.dominant.border,
                backgroundColor: colors.dominant.light,
                color: colors.text.primary,
                fontSize: '0.75rem'
              }}
              placeholder="Décrivez vos besoins en détail, le nombre d'appels estimé, vos horaires préférés..."
            />
            <div 
              className="absolute left-2 top-3 transition-colors duration-300"
              style={{ 
                color: focusedField === 'message' ? colors.accent.primary : colors.text.tertiary 
              }}
            >
              <MessageSquare size={14} />
            </div>
          </div>
        </motion.div>

        {/* Submit Button */}
        <motion.div variants={itemVariants}>
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2 px-3 font-semibold text-xs rounded-md transition-all duration-300 shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            style={{ 
              background: `linear-gradient(135deg, ${colors.accent.primary}, ${colors.accent.primaryHover})`,
              color: colors.text.inverse 
            }}
            whileHover={!isSubmitting ? { 
              scale: 1.02, 
              y: -3,
              boxShadow: `0 20px 40px -10px ${colors.accent.primary}60`
            } : {}}
            whileTap={!isSubmitting ? { scale: 0.98 } : {}}
          >
            <AnimatePresence mode="wait">
              {isSubmitting ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center space-x-3"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Loader2 size={18} />
                  </motion.div>
                  <span>Envoi en cours...</span>
                </motion.div>
              ) : (
                <motion.div
                  key="send"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center space-x-3"
                >
                  <Send size={18} />
                  <span>Envoyer le message</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>
      </form>
    </motion.div>
  )
}

export default ContactForm 
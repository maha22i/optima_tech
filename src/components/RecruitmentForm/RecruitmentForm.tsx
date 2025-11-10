'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Check, AlertCircle, User, Mail, MessageSquare, Briefcase, Loader2, Phone, Globe, FileText, Upload } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { colors } from '@/utils/colors'

interface RecruitmentFormProps {}

const RecruitmentForm: React.FC<RecruitmentFormProps> = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    portfolio: '',
    linkedin: '',
    salary: '',
    availability: '',
    message: '',
    cv: null as File | null
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  // Auto-hide success message after 5 seconds
  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [isSubmitted])

  const positionOptions = [
    { value: 'Développeur Full Stack', icon: Briefcase },
    { value: 'Ingénieur Réseau', icon: Globe },
    { value: 'UI/UX Designer', icon: MessageSquare },
    { value: 'Chef de Projet', icon: User },
    { value: 'Stage', icon: FileText },
    { value: 'Autre', icon: Briefcase }
  ]

  const experienceLevels = [
    'Débutant (0-2 ans)',
    'Intermédiaire (2-5 ans)',
    'Senior (5-10 ans)',
    'Expert (10+ ans)'
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    
    if (type === 'file') {
      const fileInput = e.target as HTMLInputElement
      const file = fileInput.files?.[0] || null
      setFormData({
        ...formData,
        [name]: file
      })
    } else {
      setFormData({
        ...formData,
        [name]: value
      })
    }
    
    if (error) setError(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    // Validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.position) {
      setError('Veuillez remplir tous les champs obligatoires')
      setIsSubmitting(false)
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setError('Veuillez entrer une adresse email valide')
      setIsSubmitting(false)
      return
    }

    try {
      // Préparer les données pour EmailJS
      const templateParams: any = {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone || 'Non renseigné',
        position: formData.position,
        experience: formData.experience || 'Non spécifié',
        portfolio: formData.portfolio || 'Non renseigné',
        linkedin: formData.linkedin || 'Non renseigné',
        salary: formData.salary || 'Non spécifié',
        availability: formData.availability || 'Non spécifiée',
        message: formData.message || 'Pas de message de motivation',
        cv_filename: formData.cv ? formData.cv.name : 'Aucun fichier joint',
        cv_size: formData.cv ? `${(formData.cv.size / 1024 / 1024).toFixed(2)} MB` : 'N/A',
        time: new Date().toLocaleString('fr-FR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      }

      // Si un fichier CV est présent, le convertir en base64 pour l'email
      if (formData.cv) {
        await new Promise<void>((resolve) => {
          const reader = new FileReader()
          reader.onloadend = () => {
            templateParams.cv_attachment = reader.result as string
            templateParams.cv_type = formData.cv!.type
            templateParams.cv_base64 = (reader.result as string).split(',')[1] // Base64 sans le préfixe
            resolve()
          }
          reader.onerror = () => {
            console.error('Erreur lors de la lecture du fichier')
            resolve()
          }
          reader.readAsDataURL(formData.cv!)
        })
      }

      // Envoyer avec EmailJS
      await emailjs.send(
        'service_5r9k8zo', // Service ID
        'template_cdvlzsc', // Template ID
        templateParams,
        'qAhyqdGUGl5uLDqT5' // Clé publique
      )

      setIsSubmitted(true)
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        portfolio: '',
        linkedin: '',
        salary: '',
        availability: '',
        message: '',
        cv: null
      })
    } catch (error) {
      console.error('Erreur:', error)
      setError('Une erreur est survenue. Veuillez réessayer.')
    } finally {
      setIsSubmitting(false)
    }
  }

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
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  if (isSubmitted) {
    return (
      <motion.div 
        className="text-center p-6 rounded-xl shadow-lg"
        style={{ backgroundColor: colors.text.inverse }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2 
          }}
        >
          <div 
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg"
            style={{ backgroundColor: colors.accent.successLight }}
          >
            <Check size={32} style={{ color: colors.accent.success }} />
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 
            className="text-xl font-bold mb-2"
            style={{ color: colors.text.primary }}
          >
            Candidature envoyée !
          </h2>
          <p 
            className="text-sm mb-4"
            style={{ color: colors.text.secondary }}
          >
            Nous avons bien reçu votre candidature et nous la traiterons dans les plus brefs délais.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="px-6 py-2.5 rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300"
            style={{ 
              backgroundColor: colors.support.primary,
              color: colors.text.inverse 
            }}
          >
            Envoyer une autre candidature
          </button>
        </motion.div>
      </motion.div>
    )
  }

  return (
    <motion.div 
      className="relative p-6 rounded-xl shadow-lg overflow-hidden"
      style={{ backgroundColor: colors.text.inverse }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-40 h-40 opacity-5">
        <div 
          className="w-full h-full rounded-full"
          style={{ 
            background: `radial-gradient(circle, ${colors.support.primary}, transparent)`
          }}
        />
      </div>

      <AnimatePresence>
        {error && (
          <motion.div 
            className="mb-3 p-2 rounded-lg border-l-3"
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
              <AlertCircle size={16} />
              <span className="font-medium text-sm">{error}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Nom et Prénom */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-3" variants={itemVariants}>
          <div className="relative">
            <label 
              htmlFor="firstName" 
              className="block text-xs font-medium mb-1.5"
              style={{ color: colors.text.secondary }}
            >
              Prénom *
            </label>
            <div className="relative">
              <User 
                size={16} 
                className="absolute left-3 top-1/2 transform -translate-y-1/2"
                style={{ color: focusedField === 'firstName' ? colors.support.primary : colors.text.tertiary }}
              />
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                onFocus={() => setFocusedField('firstName')}
                onBlur={() => setFocusedField(null)}
                className="w-full pl-9 pr-3 py-2.5 rounded-lg border transition-all duration-300 text-sm"
                style={{ 
                  borderColor: focusedField === 'firstName' ? colors.support.primary : colors.dominant.border,
                  backgroundColor: colors.dominant.light,
                  color: colors.text.primary
                }}
                required
              />
            </div>
          </div>

          <div className="relative">
            <label 
              htmlFor="lastName" 
              className="block text-xs font-medium mb-1.5"
              style={{ color: colors.text.secondary }}
            >
              Nom *
            </label>
            <div className="relative">
              <User 
                size={16} 
                className="absolute left-3 top-1/2 transform -translate-y-1/2"
                style={{ color: focusedField === 'lastName' ? colors.support.primary : colors.text.tertiary }}
              />
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                onFocus={() => setFocusedField('lastName')}
                onBlur={() => setFocusedField(null)}
                className="w-full pl-9 pr-3 py-2.5 rounded-lg border transition-all duration-300 text-sm"
                style={{ 
                  borderColor: focusedField === 'lastName' ? colors.support.primary : colors.dominant.border,
                  backgroundColor: colors.dominant.light,
                  color: colors.text.primary
                }}
                required
              />
            </div>
          </div>
        </motion.div>

        {/* Email et Téléphone */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-3" variants={itemVariants}>
          <div className="relative">
            <label 
              htmlFor="email" 
              className="block text-xs font-medium mb-1.5"
              style={{ color: colors.text.secondary }}
            >
              Email *
            </label>
            <div className="relative">
              <Mail 
                size={16} 
                className="absolute left-3 top-1/2 transform -translate-y-1/2"
                style={{ color: focusedField === 'email' ? colors.support.primary : colors.text.tertiary }}
              />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                className="w-full pl-9 pr-3 py-2.5 rounded-lg border transition-all duration-300 text-sm"
                style={{ 
                  borderColor: focusedField === 'email' ? colors.support.primary : colors.dominant.border,
                  backgroundColor: colors.dominant.light,
                  color: colors.text.primary
                }}
                required
              />
            </div>
          </div>

          <div className="relative">
            <label 
              htmlFor="phone" 
              className="block text-xs font-medium mb-1.5"
              style={{ color: colors.text.secondary }}
            >
              Téléphone
            </label>
            <div className="relative">
              <Phone 
                size={16} 
                className="absolute left-3 top-1/2 transform -translate-y-1/2"
                style={{ color: focusedField === 'phone' ? colors.support.primary : colors.text.tertiary }}
              />
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onFocus={() => setFocusedField('phone')}
                onBlur={() => setFocusedField(null)}
                className="w-full pl-9 pr-3 py-2.5 rounded-lg border transition-all duration-300 text-sm"
                style={{ 
                  borderColor: focusedField === 'phone' ? colors.support.primary : colors.dominant.border,
                  backgroundColor: colors.dominant.light,
                  color: colors.text.primary
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Poste et Expérience */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-3" variants={itemVariants}>
          <div className="relative">
            <label 
              htmlFor="position" 
              className="block text-xs font-medium mb-1.5"
              style={{ color: colors.text.secondary }}
            >
              Poste souhaité *
            </label>
            <div className="relative">
              <Briefcase 
                size={16} 
                className="absolute left-3 top-1/2 transform -translate-y-1/2"
                style={{ color: focusedField === 'position' ? colors.support.primary : colors.text.tertiary }}
              />
              <select
                id="position"
                name="position"
                value={formData.position}
                onChange={handleChange}
                onFocus={() => setFocusedField('position')}
                onBlur={() => setFocusedField(null)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border transition-all duration-300 appearance-none"
                style={{ 
                  borderColor: focusedField === 'position' ? colors.support.primary : colors.dominant.border,
                  backgroundColor: colors.dominant.light,
                  color: colors.text.primary
                }}
                required
              >
                <option value="">Sélectionnez un poste</option>
                {positionOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.value}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="relative">
            <label 
              htmlFor="experience" 
              className="block text-xs font-medium mb-1.5"
              style={{ color: colors.text.secondary }}
            >
              Niveau d'expérience
            </label>
            <select
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              onFocus={() => setFocusedField('experience')}
              onBlur={() => setFocusedField(null)}
                              className="w-full px-3 py-2.5 rounded-lg border transition-all duration-300 appearance-none text-sm"
              style={{ 
                borderColor: focusedField === 'experience' ? colors.support.primary : colors.dominant.border,
                backgroundColor: colors.dominant.light,
                color: colors.text.primary
              }}
            >
              <option value="">Sélectionnez votre niveau</option>
              {experienceLevels.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Portfolio et LinkedIn */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-3" variants={itemVariants}>
          <div className="relative">
            <label 
              htmlFor="portfolio" 
              className="block text-xs font-medium mb-1.5"
              style={{ color: colors.text.secondary }}
            >
              Portfolio / GitHub
            </label>
            <div className="relative">
              <Globe 
                size={16} 
                className="absolute left-3 top-1/2 transform -translate-y-1/2"
                style={{ color: focusedField === 'portfolio' ? colors.support.primary : colors.text.tertiary }}
              />
              <input
                type="url"
                id="portfolio"
                name="portfolio"
                value={formData.portfolio}
                onChange={handleChange}
                onFocus={() => setFocusedField('portfolio')}
                onBlur={() => setFocusedField(null)}
                placeholder="https://..."
                className="w-full pl-9 pr-3 py-2.5 rounded-lg border transition-all duration-300 text-sm"
                style={{ 
                  borderColor: focusedField === 'portfolio' ? colors.support.primary : colors.dominant.border,
                  backgroundColor: colors.dominant.light,
                  color: colors.text.primary
                }}
              />
            </div>
          </div>

          <div className="relative">
            <label 
              htmlFor="linkedin" 
              className="block text-xs font-medium mb-1.5"
              style={{ color: colors.text.secondary }}
            >
              LinkedIn
            </label>
            <input
              type="url"
              id="linkedin"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              onFocus={() => setFocusedField('linkedin')}
              onBlur={() => setFocusedField(null)}
              placeholder="https://linkedin.com/in/..."
              className="w-full px-4 py-3 rounded-lg border transition-all duration-300"
              style={{ 
                borderColor: focusedField === 'linkedin' ? colors.support.primary : colors.dominant.border,
                backgroundColor: colors.dominant.light,
                color: colors.text.primary
              }}
            />
          </div>
        </motion.div>

        {/* Salaire et Disponibilité */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-3" variants={itemVariants}>
          <div className="relative">
            <label 
              htmlFor="salary" 
              className="block text-xs font-medium mb-1.5"
              style={{ color: colors.text.secondary }}
            >
              Prétentions salariales
            </label>
            <input
              type="text"
              id="salary"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              onFocus={() => setFocusedField('salary')}
              onBlur={() => setFocusedField(null)}
              placeholder="Ex: 50000-60000 USD/an"
              className="w-full px-4 py-3 rounded-lg border transition-all duration-300"
              style={{ 
                borderColor: focusedField === 'salary' ? colors.support.primary : colors.dominant.border,
                backgroundColor: colors.dominant.light,
                color: colors.text.primary
              }}
            />
          </div>

          <div className="relative">
            <label 
              htmlFor="availability" 
              className="block text-xs font-medium mb-1.5"
              style={{ color: colors.text.secondary }}
            >
              Disponibilité
            </label>
            <input
              type="text"
              id="availability"
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              onFocus={() => setFocusedField('availability')}
              onBlur={() => setFocusedField(null)}
              placeholder="Ex: Immédiate, 1 mois..."
              className="w-full px-4 py-3 rounded-lg border transition-all duration-300"
              style={{ 
                borderColor: focusedField === 'availability' ? colors.support.primary : colors.dominant.border,
                backgroundColor: colors.dominant.light,
                color: colors.text.primary
              }}
            />
          </div>
        </motion.div>

        {/* CV Upload */}
        <motion.div variants={itemVariants}>
          <label 
            htmlFor="cv" 
            className="block text-sm font-medium mb-2"
            style={{ color: colors.text.secondary }}
          >
            CV (PDF, DOC, DOCX - Max 5MB)
          </label>
          <div 
            className="relative border-2 border-dashed rounded-lg p-4 text-center cursor-pointer hover:border-opacity-100 transition-all duration-300"
            style={{ 
              borderColor: colors.dominant.border,
              backgroundColor: colors.dominant.light
            }}
          >
            <input
              type="file"
              id="cv"
              name="cv"
              onChange={handleChange}
              accept=".pdf,.doc,.docx"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <Upload size={24} className="mx-auto mb-1" style={{ color: colors.text.tertiary }} />
            <p className="text-sm" style={{ color: colors.text.secondary }}>
              {formData.cv ? formData.cv.name : 'Cliquez ou glissez votre CV ici'}
            </p>
          </div>
        </motion.div>

        {/* Message */}
        <motion.div variants={itemVariants}>
          <label 
            htmlFor="message" 
            className="block text-sm font-medium mb-2"
            style={{ color: colors.text.secondary }}
          >
            Message de motivation
          </label>
          <div className="relative">
            <MessageSquare 
              size={16} 
              className="absolute left-3 top-3"
              style={{ color: focusedField === 'message' ? colors.support.primary : colors.text.tertiary }}
            />
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFocusedField('message')}
              onBlur={() => setFocusedField(null)}
              rows={4}
              className="w-full pl-10 pr-4 py-3 rounded-lg border transition-all duration-300 resize-none"
              style={{ 
                borderColor: focusedField === 'message' ? colors.support.primary : colors.dominant.border,
                backgroundColor: colors.dominant.light,
                color: colors.text.primary
              }}
              placeholder="Parlez-nous de votre parcours et de vos motivations..."
            />
          </div>
        </motion.div>

        {/* Submit Button */}
        <motion.div variants={itemVariants}>
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 rounded-lg font-semibold text-sm text-white shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
            style={{ 
              backgroundColor: isSubmitting ? colors.text.tertiary : colors.support.primary,
              cursor: isSubmitting ? 'not-allowed' : 'pointer'
            }}
          >
            {isSubmitting ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                <span>Envoi en cours...</span>
              </>
            ) : (
              <>
                <span>Envoyer ma candidature</span>
                <Send size={16} />
              </>
            )}
          </motion.button>
        </motion.div>
      </form>
    </motion.div>
  )
}

export default RecruitmentForm

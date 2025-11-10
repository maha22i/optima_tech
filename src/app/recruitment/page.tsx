'use client'

import { motion } from 'framer-motion'
import { Users, Rocket, Heart, Code, MessageSquare, Briefcase, Award, Target } from 'lucide-react'
import RecruitmentHero from '@/components/RecruitmentHero'
import RecruitmentForm from '@/components/RecruitmentForm'
import { colors } from '@/utils/colors'

export default function RecruitmentPage() {
  const companyValues = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'Nous recherchons des passionnés qui aiment ce qu\'ils font',
      gradient: `linear-gradient(135deg, ${colors.accent.danger}, ${colors.accent.dangerHover})`
    },
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'Toujours à la pointe des dernières technologies',
      gradient: `linear-gradient(135deg, ${colors.support.primary}, ${colors.support.primaryHover})`
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'L\'esprit d\'équipe est au cœur de notre culture',
      gradient: `linear-gradient(135deg, ${colors.accent.success}, ${colors.accent.successHover})`
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans chaque projet',
      gradient: `linear-gradient(135deg, ${colors.accent.primary}, ${colors.accent.primaryHover})`
    }
  ]

  const hiringProcess = [
    {
      step: '01',
      title: 'Candidature',
      description: 'Envoyez votre CV et lettre de motivation via notre formulaire',
      icon: MessageSquare
    },
    {
      step: '02',
      title: 'Première évaluation',
      description: 'Notre équipe RH examine votre profil',
      icon: Award
    },
    {
      step: '03',
      title: 'Entretien technique',
      description: 'Discussion approfondie sur vos compétences techniques',
      icon: Code
    },
    {
      step: '04',
      title: 'Intégration',
      description: 'Bienvenue dans l\'équipe Netlink Solutions !',
      icon: Briefcase
    }
  ]

  const teamStats = [
    { value: '20+', label: 'Experts' },
    { value: '5', label: 'Nationalités' },
    { value: '95%', label: 'Satisfaction équipe' },
    { value: '3', label: 'Bureaux' }
  ]

  const openPositions = [
    {
      title: 'Développeur Full Stack',
      type: 'CDI',
      location: 'Bujumbura',
      skills: ['React', 'Node.js', 'TypeScript', 'MongoDB']
    },
    {
      title: 'Ingénieur Réseau',
      type: 'CDI',
      location: 'Gitega',
      skills: ['Cisco', 'Firewall', 'VPN', 'Cloud']
    },
    {
      title: 'UI/UX Designer',
      type: 'Stage',
      location: 'Remote',
      skills: ['Figma', 'Adobe XD', 'Prototypage', 'Design System']
    }
  ]

  return (
    <div className="pt-16 sm:pt-20 lg:pt-24 min-h-screen" style={{ backgroundColor: colors.dominant.light }}>
      {/* Hero Section */}
      <RecruitmentHero />

      {/* Company Values */}
      <section className="py-5 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.span 
              className="inline-block px-4 py-2 rounded-full text-xs font-semibold mb-4 shadow-md"
              style={{ 
                backgroundColor: colors.support.light,
                color: colors.support.primary 
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Nos valeurs
            </motion.span>
            
            <motion.h2 
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4"
              style={{ color: colors.text.primary }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Ce qui nous unit
            </motion.h2>
            
            <motion.p 
              className="text-base max-w-2xl mx-auto leading-relaxed"
              style={{ color: colors.text.secondary }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Chez Netlink Solutions, nous construisons plus qu'une entreprise, nous créons une famille 
              où chaque membre contribue à notre succès collectif
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyValues.map((value, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                style={{ backgroundColor: colors.text.inverse }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 mb-4"
                  style={{ background: value.gradient }}
                >
                  <value.icon size={24} className="text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: colors.text.primary }}>
                  {value.title}
                </h3>
                <p className="text-sm" style={{ color: colors.text.secondary }}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process and Form Side by Side */}
      <section className="py-8 sm:py-12" id="recruitment-form">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Side - Hiring Process */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.span 
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 shadow-md"
                  style={{ 
                    backgroundColor: colors.accent.primaryLight,
                    color: colors.accent.primary 
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Processus de recrutement
                </motion.span>
                
                <motion.h2 
                  className="text-xl sm:text-2xl font-bold mb-6"
                  style={{ color: colors.text.primary }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Simple et transparent
                </motion.h2>
              </motion.div>

              <div className="space-y-6">
                {hiringProcess.map((process, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative">
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center shadow-md flex-shrink-0"
                        style={{ backgroundColor: colors.support.light }}
                      >
                        <process.icon size={20} style={{ color: colors.support.primary }} />
                      </div>
                      <span 
                        className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shadow-sm"
                        style={{ 
                          backgroundColor: colors.accent.primary, 
                          color: colors.text.inverse,
                          fontSize: '0.625rem'
                        }}
                      >
                        {process.step}
                      </span>
                      {/* Vertical connection line */}
                      {index < hiringProcess.length - 1 && (
                        <div 
                          className="absolute top-12 left-1/2 w-0.5 h-12 -translate-x-1/2"
                          style={{ backgroundColor: colors.dominant.border }}
                        />
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm mb-1" style={{ color: colors.text.primary }}>
                        {process.title}
                      </h3>
                      <p className="text-xs" style={{ color: colors.text.secondary }}>
                        {process.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Side - Form */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.span 
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 shadow-md"
                  style={{ 
                    backgroundColor: colors.support.light,
                    color: colors.support.primary 
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Candidature
                </motion.span>
                
                <motion.h2 
                  className="text-xl sm:text-2xl font-bold mb-2"
                  style={{ color: colors.text.primary }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Envoyez votre candidature
                </motion.h2>
                
                <motion.p 
                  className="text-sm leading-relaxed"
                  style={{ color: colors.text.secondary }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Partagez votre parcours et vos ambitions avec nous.
                </motion.p>
              </motion.div>

              <RecruitmentForm />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
  
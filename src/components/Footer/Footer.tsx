'use client'

import Link from 'next/link'
import { Phone, Mail, Facebook, Twitter, Linkedin, Instagram, Youtube, Globe, Rocket, Heart, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import { colors } from '@/utils/colors'
import { contactInfo } from '@/utils/contact'

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const currentYear = new Date().getFullYear()
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  const navigationLinks = [
    { 
      title: 'Navigation', 
      icon: Globe,
      links: [
        { name: 'Accueil', href: '/', icon: '🏠' },
        { name: 'Services', href: '/services', icon: '🚀' },
        { name: 'À propos', href: '/#about', icon: '📖' },
        { name: 'Nos réalisations', href: '/portfolio', icon: '💼' },
        { name: 'Contact', href: '/contact', icon: '📧' },
      ]
    },
    {
      title: 'Nos Services',
      icon: Rocket,
      links: [
        { name: 'Développement Web', href: '/services#web', icon: '💻' },
        { name: 'Applications Mobiles', href: '/services#mobile', icon: '📱' },
        { name: 'Design UI/UX', href: '/services#design', icon: '🎨' },
        { name: 'Marketing Digital', href: '/services#marketing', icon: '📈' },
        { name: 'Maintenance', href: '/services#maintenance', icon: '🔧' },
      ]
    }
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: '#1877F2' },
    { icon: Twitter, href: '#', label: 'Twitter', color: '#1DA1F2' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: '#0A66C2' },
    { icon: Instagram, href: '#', label: 'Instagram', color: '#E4405F' },
    { icon: Youtube, href: '#', label: 'YouTube', color: '#FF0000' },
  ]

  const legalLinks = [
    { name: 'Mentions légales', href: '/mentions-legales' },
    { name: 'Politique de confidentialité', href: '/politique-confidentialite' },
    { name: 'Conditions d\'utilisation', href: '/conditions-utilisation' },
  ]





  return (
    <footer className="relative overflow-hidden">
      {/* Background Gradient */}
      <div 
        className="absolute inset-0"
        style={{ 
          background: `linear-gradient(135deg, ${colors.dominant.primary} 0%, ${colors.dominant.primary}E6 100%)` 
        }}
      />

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className="absolute inset-0"
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            repeatType: 'reverse' 
          }}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Wave Shape */}
      <div className="absolute top-0 left-0 right-0 h-16 -mt-16">
        <svg 
          viewBox="0 0 1440 48" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path 
            d="M0 48h1440V0c-240 48-480 48-720 48S240 48 0 0v48z" 
            fill={colors.dominant.primary}
          />
        </svg>
      </div>

      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-12 pb-8">

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Company Info - Spans 5 columns */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <motion.div 
                className="flex items-center gap-4 mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src="/logo-netlink.png"
                  alt="Netlink Solutions Logo"
                  width={144}
                  height={144}
                  className="rounded-lg shadow-xl object-contain"
                  quality={95}
                />
                <div>
                  <h3 
                    className="text-2xl font-bold"
                    style={{ color: colors.text.inverse }}
                  >
                    Netlink Solutions
                  </h3>
                  <p 
                    className="text-sm"
                    style={{ color: colors.accent.primary }}
                  >
                    Innovation Digitale à Djibouti
                  </p>
                </div>
              </motion.div>

              <p 
                className="text-base leading-relaxed mb-8"
                style={{ color: colors.text.inverse, opacity: 0.9 }}
              >
                Transformez vos idées en solutions digitales exceptionnelles. 
                Nous combinons créativité, technologie et expertise pour donner vie à vos projets les plus ambitieux.
              </p>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 
                className="text-sm font-semibold uppercase tracking-wider"
                style={{ color: colors.accent.primary }}
              >
                Suivez-nous
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="relative group"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <div 
                      className="p-3 rounded-full backdrop-blur-sm transition-all duration-300 shadow-lg"
                      style={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      }}
                    >
                      <social.icon 
                        size={20} 
                        style={{ color: colors.text.inverse }}
                      />
                    </div>
                    <motion.div
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ 
                        backgroundColor: social.color,
                        filter: 'blur(20px)',
                        zIndex: -1
                      }}
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Navigation Links - Spans 4 columns */}
          <motion.div 
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {navigationLinks.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                  <div className="flex items-center gap-2 mb-6">
                    <section.icon 
                      size={20} 
                      style={{ color: colors.accent.primary }} 
                    />
                    <h3 
                      className="text-lg font-bold"
                      style={{ color: colors.text.inverse }}
                    >
                      {section.title}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <motion.li
                        key={linkIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: linkIndex * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <Link
                          href={link.href}
                          className="group flex items-center gap-3 transition-all duration-300"
                          onMouseEnter={() => setHoveredLink(`${sectionIndex}-${linkIndex}`)}
                          onMouseLeave={() => setHoveredLink(null)}
                        >
                          <motion.span
                            animate={{ 
                              scale: hoveredLink === `${sectionIndex}-${linkIndex}` ? 1.2 : 1,
                              rotate: hoveredLink === `${sectionIndex}-${linkIndex}` ? 360 : 0
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            {link.icon}
                          </motion.span>
                          <span 
                            className="text-sm group-hover:translate-x-2 transition-transform duration-300"
                            style={{ 
                              color: colors.text.inverse, 
                              opacity: hoveredLink === `${sectionIndex}-${linkIndex}` ? 1 : 0.8 
                            }}
                          >
                            {link.name}
                          </span>
                          <ChevronRight 
                            size={14} 
                            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{ color: colors.accent.primary }}
                          />
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Info - Spans 3 columns */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 
              className="text-lg font-bold mb-6 flex items-center gap-2"
              style={{ color: colors.text.inverse }}
            >
              <Phone size={20} style={{ color: colors.accent.primary }} />
              Contactez-nous
            </h3>
            
            <div className="space-y-4">
              {[
                { 
                  icon: Phone, 
                  label: 'Téléphone',
                  text: contactInfo.phone.display, 
                  link: contactInfo.phone.href,
                  color: colors.accent.primary 
                },
                { 
                  icon: Mail, 
                  label: 'Email',
                  text: contactInfo.email, 
                  link: `mailto:${contactInfo.email}`,
                  color: colors.support.primary 
                }
              ].map((contact, index) => (
                <motion.a 
                  key={index}
                  href={contact.link}
                  className="flex items-start gap-4 p-4 rounded-xl backdrop-blur-sm transition-all duration-300 group"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                  whileHover={{ 
                    scale: 1.02, 
                    backgroundColor: 'rgba(255, 255, 255, 0.1)' 
                  }}
                >
                  <motion.div 
                    className="p-3 rounded-full transition-all duration-300"
                    style={{ backgroundColor: `${contact.color}20` }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <contact.icon 
                      size={20} 
                      style={{ color: contact.color }} 
                    />
                  </motion.div>
                  <div className="flex-1">
                    <div 
                      className="text-xs uppercase tracking-wider mb-1"
                      style={{ color: contact.color, opacity: 0.8 }}
                    >
                      {contact.label}
                    </div>
                    <div 
                      className="text-sm font-medium"
                      style={{ color: colors.text.inverse }}
                    >
                      {contact.text}
                    </div>
                  </div>
                  <ChevronRight 
                    size={16} 
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-4"
                    style={{ color: colors.accent.primary }}
                  />
                </motion.a>
              ))}
            </div>


          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t pt-8"
          style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-center lg:text-left">
              <p 
                className="text-sm flex items-center gap-2"
                style={{ color: colors.text.inverse, opacity: 0.8 }}
              >
                © {currentYear} Netlink Solutions. Tous droits réservés.
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6">
              {legalLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-xs transition-all duration-300 hover:scale-105"
                  style={{ 
                    color: colors.text.inverse, 
                    opacity: 0.6 
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
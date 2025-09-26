'use client'

import { motion } from 'framer-motion'
import { contactInfo } from '@/utils/contact'
import { Building, MapPin, Phone, Mail } from 'lucide-react'

export default function MentionsLegalesClient() {
  return (
    <div className="min-h-screen bg-slate-50 pt-16 sm:pt-20 lg:pt-24">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12 lg:py-16">


        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Mentions légales
          </h1>
          <p className="text-xl text-gray-600">
            Informations légales concernant Adalink Group
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-6 md:p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="prose prose-lg max-w-none">
            {/* Identification de l'entreprise */}
            <section className="mb-10">
              <div className="flex items-center mb-6">
                <Building className="text-blue-600 mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 m-0">
                  Identification de l'entreprise
                </h2>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-6 space-y-4">
                <div className="flex items-start space-x-3">
                  <Building size={20} className="text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Dénomination sociale</p>
                    <p className="text-gray-700">Adalink Group</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin size={20} className="text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Siège social</p>
                    <p className="text-gray-700">Djibouti, République de Djibouti</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone size={20} className="text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Téléphone</p>
                    <p className="text-gray-700">+253 77 34 81 82</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail size={20} className="text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Email</p>
                    <p className="text-gray-700">{contactInfo.email}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Directeur de publication */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Directeur de publication
              </h2>
              <p className="text-gray-700">
                Le directeur de la publication du site internet adalink.dj est le représentant légal de l'entreprise Adalink Group.
              </p>
            </section>

            {/* Hébergement */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Hébergement
              </h2>
              <p className="text-gray-700">
                Ce site est hébergé par Vercel Inc., dont le siège social est situé aux États-Unis.
              </p>
            </section>

            {/* Propriété intellectuelle */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Propriété intellectuelle
              </h2>
              <p className="text-gray-700 mb-4">
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur 
                et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour 
                les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
              <p className="text-gray-700">
                La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est 
                formellement interdite sauf autorisation expresse du directeur de la publication.
              </p>
            </section>

            {/* Limitation de responsabilité */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Limitation de responsabilité
              </h2>
              <p className="text-gray-700 mb-4">
                Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour 
                à différentes périodes de l'année, mais peut toutefois contenir des inexactitudes ou des omissions.
              </p>
              <p className="text-gray-700">
                Si vous constatez une lacune, erreur ou ce qui paraît être un dysfonctionnement, merci de bien 
                vouloir le signaler par email, à l'adresse {contactInfo.email}, en décrivant le problème de 
                la manière la plus précise possible.
              </p>
            </section>

            {/* Droit applicable */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Droit applicable et attribution de juridiction
              </h2>
              <p className="text-gray-700">
                Tout litige en relation avec l'utilisation du site adalink.dj est soumis au droit djiboutien. 
                Il est fait attribution exclusive de juridiction aux tribunaux compétents de Djibouti.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 
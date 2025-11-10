'use client'

import { motion } from 'framer-motion'
import { contactInfo } from '@/utils/contact'
import { FileText, Scale, Users, AlertCircle } from 'lucide-react'

export default function ConditionsUtilisationClient() {
  return (
    <div className="min-h-screen bg-slate-50 pt-16 sm:pt-20 lg:pt-24">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8">


        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex justify-center mb-4">
            <FileText className="text-blue-600" size={48} />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Conditions d'utilisation
          </h1>
          <p className="text-xl text-gray-600">
            Modalités d'utilisation du site et des services Netlink Solutions
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
            {/* Introduction */}
            <section className="mb-10">
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl mb-6">
                <p className="text-gray-700 m-0">
                  <strong>Dernière mise à jour :</strong> Version actuelle
                </p>
              </div>
              
              <p className="text-gray-700">
                Les présentes conditions d'utilisation régissent l'accès et l'utilisation du site web 
                adalink.dj et des services proposés par Netlink Solutions. En utilisant notre site ou nos services, 
                vous acceptez d'être lié par ces conditions.
              </p>
            </section>

            {/* Acceptation des conditions */}
            <section className="mb-10">
              <div className="flex items-center mb-6">
                <Scale className="text-blue-600 mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 m-0">
                  Acceptation des conditions
                </h2>
              </div>
              
              <div className="bg-yellow-50 rounded-xl p-6">
                <p className="text-gray-700">
                  En accédant à ce site et en utilisant nos services, vous reconnaissez avoir lu, 
                  compris et accepté d'être lié par ces conditions d'utilisation. Si vous n'acceptez 
                  pas ces conditions, veuillez ne pas utiliser notre site ou nos services.
                </p>
              </div>
            </section>

            {/* Description des services */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Description des services
              </h2>
              
              <p className="text-gray-700 mb-4">
                Netlink Solutions propose les services suivants :
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Développement web</h3>
                  <p className="text-sm text-gray-600">Création de sites internet et applications web</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Applications mobiles</h3>
                  <p className="text-sm text-gray-600">Développement d'apps iOS et Android</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Solutions sur mesure</h3>
                  <p className="text-sm text-gray-600">Développement technique personnalisé</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Support multilingue</h3>
                  <p className="text-sm text-gray-600">Services en français, arabe et anglais</p>
                </div>
              </div>
            </section>

            {/* ... Rest of the content stays the same ... */}
            <section className="mb-10">
              <div className="flex items-center mb-6">
                <Users className="text-blue-600 mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 m-0">
                  Obligations de l'utilisateur
                </h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-red-50 border-l-4 border-red-500 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Utilisation conforme</h3>
                  <p className="text-gray-700">
                    Vous vous engagez à utiliser notre site et nos services de manière conforme 
                    à la loi et aux présentes conditions.
                  </p>
                </div>
                
                <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Informations exactes</h3>
                  <p className="text-gray-700">
                    Vous garantissez que toutes les informations fournies sont exactes, 
                    complètes et à jour.
                  </p>
                </div>
                
                <div className="bg-green-50 border-l-4 border-green-500 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Respect des tiers</h3>
                  <p className="text-gray-700">
                    Vous vous engagez à respecter les droits des tiers et à ne pas porter 
                    atteinte à leur réputation.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section>
              <div className="flex items-center mb-6">
                <AlertCircle className="text-blue-600 mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 m-0">
                  Questions et contact
                </h2>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-6">
                <p className="text-gray-700 mb-4">
                  Pour toute question concernant ces conditions d'utilisation, 
                  n'hésitez pas à nous contacter :
                </p>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <strong>Email :</strong> {contactInfo.email}
                  </p>
                  <p className="text-gray-700">
                                          <strong>Téléphone :</strong> +253 77 34 81 82
                  </p>
                  <p className="text-gray-700">
                    <strong>Adresse :</strong> Djibouti, République de Djibouti
                  </p>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 
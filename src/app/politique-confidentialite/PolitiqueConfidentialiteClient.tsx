'use client'

import { motion } from 'framer-motion'
import { contactInfo } from '@/utils/contact'
import { Shield, Eye, Lock, Users, Database, AlertTriangle } from 'lucide-react'

export default function PolitiqueConfidentialiteClient() {
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
            <Shield className="text-blue-600" size={48} />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Politique de confidentialité
          </h1>
          <p className="text-xl text-gray-600">
            Protection et traitement de vos données personnelles
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
                Netlink Solutions s'engage à protéger votre vie privée et vos données personnelles. Cette politique 
                de confidentialité explique comment nous collectons, utilisons, stockons et protégeons 
                vos informations personnelles conformément aux réglementations en vigueur.
              </p>
            </section>

            {/* Données collectées */}
            <section className="mb-10">
              <div className="flex items-center mb-6">
                <Database className="text-blue-600 mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 m-0">
                  Données que nous collectons
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Données d'identification
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Nom et prénom</li>
                    <li>• Adresse email</li>
                    <li>• Numéro de téléphone</li>
                    <li>• Nom de l'entreprise</li>
                    <li>• Fonction/poste</li>
                  </ul>
                </div>
                
                <div className="bg-orange-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Données de navigation
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Adresse IP</li>
                    <li>• Type de navigateur</li>
                    <li>• Pages visitées</li>
                    <li>• Durée de visite</li>
                    <li>• Données de géolocalisation</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Vos droits */}
            <section className="mb-10">
              <div className="flex items-center mb-6">
                <Users className="text-blue-600 mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 m-0">
                  Vos droits
                </h2>
              </div>
              
              <p className="text-gray-700 mb-4">
                Conformément à la réglementation applicable, vous disposez des droits suivants :
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "Droit d'accès", desc: "Connaître les données que nous détenons sur vous" },
                  { title: "Droit de rectification", desc: "Corriger vos données inexactes ou incomplètes" },
                  { title: "Droit d'effacement", desc: "Demander la suppression de vos données" },
                  { title: "Droit à la portabilité", desc: "Récupérer vos données dans un format exploitable" },
                  { title: "Droit d'opposition", desc: "Vous opposer au traitement de vos données" },
                  { title: "Droit de limitation", desc: "Demander la limitation du traitement" }
                ].map((right, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">{right.title}</h3>
                    <p className="text-sm text-gray-600">{right.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact */}
            <section>
              <div className="flex items-center mb-6">
                <AlertTriangle className="text-orange-600 mr-3" size={24} />
                <h2 className="text-2xl font-bold text-gray-900 m-0">
                  Exercer vos droits
                </h2>
              </div>
              
              <div className="bg-orange-50 rounded-xl p-6">
                <p className="text-gray-700 mb-4">
                  Pour exercer vos droits ou pour toute question concernant cette politique 
                  de confidentialité, contactez-nous :
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
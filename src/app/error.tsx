'use client'

import { useEffect } from 'react'
import { contactInfo } from '@/utils/contact'
import { motion } from 'framer-motion'
import { AlertTriangle, RefreshCw, Home, Mail } from 'lucide-react'
import Link from 'next/link'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 flex items-center justify-center px-4 pt-16 sm:pt-20 lg:pt-24">
      <div className="max-w-2xl mx-auto text-center">
        {/* Error Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="w-24 h-24 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
            <AlertTriangle size={48} className="text-white" />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Oops ! Une erreur s'est produite
          </h1>
          <p className="text-xl text-gray-600 mb-4 leading-relaxed">
            Nous sommes désolés, mais quelque chose s'est mal passé. 
            Notre équipe a été automatiquement notifiée.
          </p>
          
          {/* Error details for development */}
          {process.env.NODE_ENV === 'development' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-red-50 border border-red-200 rounded-lg p-4 mt-6 text-left"
            >
              <h3 className="font-semibold text-red-800 mb-2">Détails de l'erreur (mode développement) :</h3>
              <code className="text-sm text-red-700 break-all">
                {error.message}
              </code>
            </motion.div>
          )}
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-6"
        >
          {/* Primary actions */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center">
            <motion.button
              onClick={reset}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <RefreshCw size={20} className="mr-2" />
              Réessayer
            </motion.button>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/"
                className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300"
              >
                <Home size={20} className="mr-2" />
                Retour à l'accueil
              </Link>
            </motion.div>
          </div>

          {/* Help section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Besoin d'aide immédiate ?
            </h3>
            <p className="text-gray-600 mb-6">
              Si le problème persiste, notre équipe support est disponible pour vous aider.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center p-4 bg-blue-50 rounded-xl">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Email</div>
                  <div className="text-sm text-gray-600">{contactInfo.email}</div>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-green-50 rounded-xl">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Téléphone</div>
                  <div className="text-sm text-gray-600">+253 77 34 81 82</div>
                </div>
              </div>
            </div>
            
            <motion.div
              className="mt-6"
              whileHover={{ scale: 1.02 }}
            >
              <Link
                href="/contact"
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
              >
                Nous contacter
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Footer message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-8 text-gray-500 text-sm"
        >
          Code d'erreur : {error.digest || 'UNKNOWN'}
        </motion.div>
      </div>
    </div>
  )
} 
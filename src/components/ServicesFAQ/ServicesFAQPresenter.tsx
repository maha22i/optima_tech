'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, Sparkles } from 'lucide-react'
import { useState } from 'react'

interface ServicesFAQPresenterProps {}

const ServicesFAQPresenter: React.FC<ServicesFAQPresenterProps> = () => {
  const [openItems, setOpenItems] = useState<number[]>([0])

  const faqs = [
    {
      question: 'Quels types de projets développez-vous ?',
      answer: 'Nous développons une large gamme de projets digitaux : sites web vitrines et e-commerce, applications mobiles iOS et Android, solutions web sur mesure, API et intégrations, ainsi que des designs UI/UX. Chaque projet est adapté aux besoins spécifiques de nos clients.',
      category: 'Services'
    },
    {
      question: 'Combien de temps faut-il pour développer un projet ?',
      answer: 'Les délais varient selon la complexité : un site vitrine prend 1 à 2 semaines, un e-commerce entre 1 mois et 1 mois et demi, et une application mobile entre 1 mois et 1 mois et demi. Nous utilisons une méthode agile avec des livraisons itératives pour vous tenir informé de l\'avancement.',
      category: 'Délais'
    },
    {
      question: 'Comment se déroule le processus de développement ?',
      answer: 'Nous commençons par une analyse approfondie de vos besoins, puis créons un cahier des charges détaillé. Le développement suit une méthode agile avec des points réguliers. Nous assurons les tests, la mise en ligne et la formation à l\'utilisation.',
      category: 'Process'
    },
    {
      question: 'Proposez-vous la maintenance après livraison ?',
      answer: 'Oui, nous proposons différentes formules de maintenance : support technique, mises à jour sécurité, évolutions fonctionnelles et monitoring. Nos forfaits maintenance sont compétitifs et adaptés à vos besoins spécifiques.',
      category: 'Maintenance'
    },
    {
      question: 'Quelles technologies utilisez-vous ?',
      answer: 'Nous utilisons les technologies les plus modernes et robustes : React, Next.js pour le web, React Native pour le mobile, Node.js pour les API, et diverses bases de données (PostgreSQL, MongoDB). Nous choisissons toujours la stack la plus adaptée à votre projet.',
      category: 'Technologies'
    },
    {
      question: 'Comment calculez-vous vos tarifs ?',
      answer: 'Nos tarifs compétitifs sont calculés selon la complexité du projet, les technologies utilisées, et le temps de développement estimé. Nous proposons des prix adaptés à vos besoins avec un devis détaillé et transparent. Les paiements peuvent être échelonnés selon l\'avancement du projet.',
      category: 'Tarifs'
    },
    {
      question: 'Peut-on voir des exemples de vos réalisations ?',
      answer: 'Bien sûr ! Nous avons développé navimove.fr (marketplace djiboutienne), cnbd.fr (entreprise B2B générant 80M+ FDJ), distritherm-services.fr (leader e-commerce B2B avec 1 milliard+ FDJ), infocyber.net (entreprise cybersécurité & développement) et silalo.online (e-commerce djiboutien). Chaque projet témoigne de notre expertise technique.',
      category: 'Portfolio'
    },
    {
      question: 'Assurez-vous la formation à l\'utilisation ?',
      answer: 'Absolument ! Nous incluons systématiquement une formation complète à l\'utilisation de votre solution. Nous créons également une documentation détaillée et restons disponibles pour répondre à vos questions après la livraison.',
      category: 'Formation'
    }
  ]

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    )
  }

  const categories = Array.from(new Set(faqs.map(faq => faq.category)))

  return (
    <section className="py-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-xl"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-medium rounded-full mb-3 shadow-lg"
          >
            <Sparkles size={12} className="mr-1.5" />
            FAQ
          </motion.div>
          <h2 className="text-5xl md:text-3xl font-bold text-gray-900 mb-3">
            Questions{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              fréquentes
            </span>
          </h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Trouvez rapidement les réponses à vos questions sur nos services 
            de développement web et mobile.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100/50 overflow-hidden hover:shadow-md transition-all duration-300"
            >
              <motion.button
                onClick={() => toggleItem(index)}
                className="w-full px-5 py-4 text-left flex items-center justify-between group hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-purple-50/50 transition-all duration-300"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-center space-x-3 flex-1 min-w-0">
                  <motion.span 
                    whileHover={{ scale: 1.1 }}
                    className="px-2 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-[10px] font-medium rounded-lg shadow-sm flex-shrink-0"
                  >
                    {faq.category}
                  </motion.span>
                  <h3 className="text-sm font-medium text-gray-900 group-hover:text-blue-900 transition-colors truncate">
                    {faq.question}
                  </h3>
                </div>
                <motion.div
                  animate={{ 
                    rotate: openItems.includes(index) ? 180 : 0,
                    scale: openItems.includes(index) ? 1.1 : 1
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="flex-shrink-0 ml-3"
                >
                  {openItems.includes(index) ? (
                    <Minus size={16} className="text-purple-600" />
                  ) : (
                    <Plus size={16} className="text-gray-400 group-hover:text-blue-600" />
                  )}
                </motion.div>
              </motion.button>
              
              <AnimatePresence>
                {openItems.includes(index) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-4 border-t border-gradient-to-r from-blue-100 to-purple-100">
                      <motion.p 
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="text-xs text-gray-600 leading-relaxed pt-3 bg-gradient-to-r from-gray-50 to-blue-50/30 rounded-lg p-3 mt-3"
                      >
                        {faq.answer}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

       
      </div>
    </section>
  )
}

export default ServicesFAQPresenter
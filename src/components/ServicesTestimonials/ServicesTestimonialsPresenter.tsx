'use client'

import { motion } from 'framer-motion'
import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

interface ServicesTestimonialsPresenterProps {}

const ServicesTestimonialsPresenter: React.FC<ServicesTestimonialsPresenterProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: 'Représentant CNBD',
      company: 'CNBD',
      role: 'Responsable Communication',
      content: 'Netlink Solutions nous accompagne avec professionnalisme dans le développement de nos solutions digitales. Leur approche personnalisée et leur expertise technique correspondent parfaitement à nos attentes. Nous apprécions la qualité du travail fourni.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 rounded-full mb-6">
            <Star size={16} className="text-orange-400 mr-2" />
            <span className="text-orange-100 text-sm font-medium">Témoignages clients</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            La confiance de notre
            <span className="block bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent">
              partenaire
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-5xl mx-auto">
            Découvrez le témoignage de notre partenaire CNBD qui nous fait confiance pour ses projets digitaux.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Featured Testimonial */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="md:col-span-2 bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 relative overflow-hidden"
            >
              <Quote size={48} className="text-orange-400 mb-6 opacity-50" />
              
              <p className="text-slate-100 mb-8 leading-relaxed text-lg">
                &ldquo;{testimonials[currentIndex].content}&rdquo;
              </p>

              <div className="flex items-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-orange-400 fill-current" />
                ))}
              </div>

              <div className="flex items-center">
                <Image
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-14 h-14 rounded-full mr-4 border-2 border-orange-400"
                  width={56}
                  height={56}
                  unoptimized
                />
                <div>
                  <div className="font-semibold text-white text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-sm text-slate-300">
                    {testimonials[currentIndex].role}
                  </div>
                  <div className="text-sm text-orange-300 font-medium">
                    {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Navigation and Stats */}
            <div className="space-y-6">
              {/* Navigation */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-slate-300 text-sm">
                    {currentIndex + 1} sur {testimonials.length}
                  </span>
                  <div className="flex space-x-2">
                    <button
                      onClick={prevTestimonial}
                      className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200"
                    >
                      <ArrowLeft size={18} className="text-white" />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200"
                    >
                      <ArrowRight size={18} className="text-white" />
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-4 gap-1">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        index === currentIndex 
                          ? 'bg-orange-400' 
                          : 'bg-white/30 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>


            </div>
          </div>

          {/* All Testimonials Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setCurrentIndex(index)}
                className={`cursor-pointer bg-white/5 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 ${
                  index === currentIndex 
                    ? 'border-orange-400/50 bg-white/10' 
                    : 'border-white/10 hover:border-white/20 hover:bg-white/5'
                }`}
              >
                <div className="flex items-center mb-3">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full mr-3"
                    width={40}
                    height={40}
                    unoptimized
                  />
                  <div>
                    <div className="font-medium text-white text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-slate-400">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={12} className="text-orange-400 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>


      </div>
    </section>
  )
}

export default ServicesTestimonialsPresenter 
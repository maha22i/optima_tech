'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Users, Sparkles, Code2, Globe } from 'lucide-react'
import { useState } from 'react'

interface RecruitmentHeroPresenterProps {}

const RecruitmentHeroPresenter: React.FC<RecruitmentHeroPresenterProps> = () => {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(true)
    setTimeout(() => {
      const element = document.getElementById('recruitment-form')
      element?.scrollIntoView({ behavior: 'smooth' })
    }, 300)
  }

  return (
    <section className="relative min-h-[75vh] sm:min-h-[80vh] flex items-center bg-gradient-to-b from-gray-900 via-black to-black text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Mesh Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 -left-4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        {/* Animated Grid */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
        >
          <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </motion.div>

        {/* Floating Icons */}
        {[
          { Icon: Code2, left: '10%', top: '20%', color: 'text-blue-400' },
          { Icon: Users, left: '80%', top: '30%', color: 'text-green-400' },
          { Icon: Globe, left: '20%', top: '70%', color: 'text-purple-400' },
          { Icon: Sparkles, left: '70%', top: '60%', color: 'text-yellow-400' }
        ].map((item, i) => (
          <motion.div
            key={i}
            className={`absolute opacity-30 ${item.color} blur-[0.5px]`}
            style={{
              left: item.left,
              top: item.top,
            }}
            animate={{
              y: [0, -25, 0],
              rotate: [0, 15, -15, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 4 + 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          >
            <item.Icon size={40} className="drop-shadow-lg" />
          </motion.div>
        ))}

        {/* Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              backgroundColor: `rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1})`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0, 1, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="text-center">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            

            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 leading-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block">Construisez votre</span>
              <span className="inline-block ml-2 bg-gradient-to-r from-green-400 via-emerald-400 to-purple-500 bg-clip-text text-transparent animate-gradient">
                Carrière
              </span>
              <br />
              <span className="inline-block">avec Nous</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg lg:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Rejoignez une équipe passionnée qui façonne l'avenir du digital à Djibouti.
            </motion.p>

      

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              
            </motion.div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-10"
          >
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {[
                { text: 'Formation continue', icon: Sparkles },
                { text: 'Environnement flexible', icon: Users },
                { text: 'Projets innovants', icon: Code2 },
                { text: 'Équipe internationale', icon: Globe }
              ].map((benefit, index) => (
                <motion.button
                  key={benefit.text}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -2,
                    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative px-4 py-2.5 sm:px-6 sm:py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg text-xs sm:text-sm font-semibold text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 flex items-center gap-2 shadow-md"
                >
                  <benefit.icon size={16} className="opacity-70 group-hover:opacity-100 transition-opacity" />
                  <span>{benefit.text}</span>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-green-400/0 via-emerald-400/0 to-purple-500/0 group-hover:from-green-400/10 group-hover:via-emerald-400/10 group-hover:to-purple-500/10 transition-all duration-300" />
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  )
}

export default RecruitmentHeroPresenter

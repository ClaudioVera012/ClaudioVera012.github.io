'use client'

import { ArrowDown, Mail, Linkedin } from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  const { t } = useLanguage()

  const scrollToContact = () => {
    const element = document?.getElementById?.('contact')
    element?.scrollIntoView?.({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src="https://www.tetratech.com/wp-content/uploads/2025/07/digital-systems-solutions.jpg"
            alt="Hero background"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-teal-500/10 to-transparent" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <p className="text-blue-600 font-semibold mb-4 text-lg">
              {t?.hero?.greeting ?? 'Hola, soy'}
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 leading-tight">
              {t?.hero?.name ?? 'Claudio Vera Díaz'}
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 mb-4">
              {t?.hero?.title ?? 'Estudiante de Ingeniería Civil Química'}
            </h2>
            <p className="text-xl text-blue-600 font-medium mb-6">
              {t?.hero?.subtitle ?? 'Especializado en Data Science & Programación'}
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              {t?.hero?.tagline ?? 'Transformando datos en soluciones para la ingeniería'}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToContact}
                className="group px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {t?.hero?.cta ?? 'Contáctame'}
                <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform" />
              </button>
              <a
                href="https://www.linkedin.com/in/claudio-vera-d%C3%ADaz-b26686334"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl border-2 border-blue-600 transform hover:-translate-y-1"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>

            {/* Contact Info */}
            <div className="mt-8 flex flex-wrap gap-6 text-gray-600">
              <a
                href="mailto:tatoveradiaz@gmail.com"
                className="flex items-center gap-2 hover:text-blue-600 transition-colors"
              >
                <Mail size={18} />
                tatoveradiaz@gmail.com
              </a>
            </div>
          </motion.div>

          {/* Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:flex justify-center items-center"
          >
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-teal-400 rounded-full blur-3xl opacity-30 animate-pulse" />
              <div className="relative w-full h-full bg-gradient-to-br from-blue-600 to-teal-500 rounded-full p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-teal-500 mb-4">
                      CV
                    </div>
                    <p className="text-gray-600 text-sm">
                      Ingeniería Química<br />& Data Science
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <ArrowDown size={32} className="text-blue-600" />
      </motion.div>
    </section>
  )
}
'use client'

import { Lightbulb, Users, Award } from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

export default function About() {
  const { t } = useLanguage()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const stats = [
    { value: 2, label: t?.about?.stats?.experience ?? 'Años de Experiencia' },
    { value: 4, label: t?.about?.stats?.projects ?? 'Proyectos Completados', suffix: '+' },
    { value: 11, label: t?.about?.stats?.skills ?? 'Habilidades Técnicas', suffix: '+' }
  ]

  const values = [
    {
      icon: Lightbulb,
      title: t?.about?.values?.innovation ?? 'Innovación',
      description: t?.about?.values?.innovationDesc ?? 'Busco constantemente nuevas formas de aplicar tecnología a la ingeniería'
    },
    {
      icon: Users,
      title: t?.about?.values?.teamwork ?? 'Trabajo en Equipo',
      description: t?.about?.values?.teamworkDesc ?? 'Colaboración efectiva y comunicación clara son fundamentales'
    },
    {
      icon: Award,
      title: t?.about?.values?.excellence ?? 'Excelencia Académica',
      description: t?.about?.values?.excellenceDesc ?? 'Compromiso con el aprendizaje continuo y la mejora constante'
    }
  ]

  return (
    <section id="about" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t?.about?.title ?? 'Sobre Mí'}
          </h2>
          <p className="text-xl text-gray-600">
            {t?.about?.subtitle ?? 'Conoce mi trayectoria profesional'}
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://thumbs.dreamstime.com/b/interior-clean-modern-white-laboratory-background-laboratory-concept-medical-chemical-caucasian-male-chemist-horizontal-63500347.jpg"
                alt="About Claudio Vera"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {t?.about?.intro}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t?.about?.description}
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {stats?.map?.((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-5xl font-bold text-blue-600 mb-2">
                {stat?.value ?? 0}{stat?.suffix ?? ''}
              </div>
              <div className="text-gray-700 font-medium">{stat?.label}</div>
            </div>
          )) ?? null}
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {t?.about?.values?.title ?? 'Mis Valores'}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values?.map?.((value, index) => {
              const Icon = value?.icon
              return (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-100 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    {Icon && <Icon className="text-blue-600" size={24} />}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{value?.title}</h4>
                  <p className="text-gray-600">{value?.description}</p>
                </div>
              )
            }) ?? null}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
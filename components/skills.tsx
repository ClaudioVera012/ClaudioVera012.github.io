'use client'

import { Code, Wrench, Globe } from 'lucide-react'
import * as LucideIcons from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

export default function Skills() {
  const { t } = useLanguage()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const technicalSkills = t?.skills?.technicalSkills ?? []
  const softSkills = t?.skills?.softSkills ?? []

  // Group technical skills by category
  const groupedSkills = technicalSkills?.reduce?.((acc: any, skill: any) => {
    const category = skill?.category ?? 'other'
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(skill)
    return acc
  }, {}) ?? {}

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t?.skills?.title ?? 'Habilidades'}
          </h2>
          <p className="text-xl text-gray-600">
            {t?.skills?.subtitle ?? 'Competencias técnicas y profesionales'}
          </p>
        </motion.div>

        {/* Header Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-xl mb-16"
        >
          <Image
            src="https://towardsdatascience.com/wp-content/uploads/2026/01/TDS_image-1.jpg"
            alt="Skills"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Code className="text-blue-600" size={32} />
            {t?.skills?.technical ?? 'Habilidades Técnicas'}
          </h3>

          <div className="space-y-8">
            {Object?.entries?.(groupedSkills)?.map?.(([category, skills]: [string, any]) => (
              <div key={category} className="bg-white rounded-lg p-6 shadow-lg">
                <h4 className="text-xl font-semibold text-gray-800 mb-4 capitalize">
                  {t?.skills?.categories?.[category as keyof typeof t.skills.categories] ?? category}
                </h4>
                <div className="space-y-4">
                  {skills?.map?.((skill: any, index: number) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-700">{skill?.name}</span>
                        <span className="text-sm text-blue-600 font-semibold">{skill?.level ?? 0}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill?.level ?? 0}%` } : {}}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                          className="bg-gradient-to-r from-blue-500 to-teal-500 h-2.5 rounded-full"
                        />
                      </div>
                    </div>
                  )) ?? null}
                </div>
              </div>
            )) ?? null}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Wrench className="text-blue-600" size={32} />
            {t?.skills?.soft ?? 'Habilidades Blandas'}
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {softSkills?.map?.((skill, index) => {
              const iconName = skill?.icon as keyof typeof LucideIcons
              const Icon = LucideIcons?.[iconName] as any
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                  className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    {Icon && <Icon className="text-blue-600" size={24} />}
                  </div>
                  <p className="text-sm font-medium text-gray-700">{skill?.name}</p>
                </motion.div>
              )
            }) ?? null}
          </div>
        </motion.div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Globe className="text-blue-600" size={32} />
            {t?.skills?.languages?.title ?? 'Idiomas'}
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  ES
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">
                    {t?.skills?.languages?.spanish ?? 'Español'}
                  </h4>
                  <p className="text-blue-600 font-semibold">
                    {t?.skills?.languages?.spanishLevel ?? 'Nativo'}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-700 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  EN
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">
                    {t?.skills?.languages?.english ?? 'Inglés'}
                  </h4>
                  <p className="text-blue-600 font-semibold">
                    {t?.skills?.languages?.englishLevel ?? 'Avanzado'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
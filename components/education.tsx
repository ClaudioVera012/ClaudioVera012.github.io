'use client'

import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

export default function Education() {
  const { t } = useLanguage()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const degree = t?.education?.degree

  return (
    <section id="education" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t?.education?.title ?? 'Educación'}
          </h2>
          <p className="text-xl text-gray-600">
            {t?.education?.subtitle ?? 'Mi formación académica'}
          </p>
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative aspect-square lg:aspect-auto bg-gray-200">
                <Image
                  src="https://viterbischool.usc.edu/wp-content/uploads/2025/05/square-image_2025-commencement.jpg"
                  alt="Education"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold mb-6 self-start">
                  <GraduationCap size={18} />
                  {t?.education?.status ?? 'En Curso'}
                </div>

                {/* Title */}
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {degree?.title ?? 'Ingeniería Civil Química'}
                </h3>
                <p className="text-xl text-blue-600 font-semibold mb-6">
                  {degree?.institution ?? 'Universidad de Concepción'}
                </p>

                {/* Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Calendar size={18} className="text-blue-600" />
                    <span className="font-medium">{degree?.period ?? '2021 - 2026'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <MapPin size={18} className="text-blue-600" />
                    <span>{degree?.modality ?? 'Presencial'}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {degree?.description}
                </p>

                {/* Highlights */}
                {degree?.highlights && degree.highlights.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <BookOpen size={18} className="text-blue-600" />
                      Áreas de Enfoque
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {degree?.highlights?.map?.((highlight, index) => (
                        <div
                          key={index}
                          className="bg-white rounded-lg px-4 py-2 text-sm font-medium text-gray-700 shadow-sm"
                        >
                          {highlight}
                        </div>
                      )) ?? null}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
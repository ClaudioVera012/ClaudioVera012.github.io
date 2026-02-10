'use client'

import { MapPin, Calendar, Briefcase, CheckCircle } from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

export default function Experience() {
  const { t } = useLanguage()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const jobs = t?.experience?.jobs ?? []

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t?.experience?.title ?? 'Experiencia Profesional'}
          </h2>
          <p className="text-xl text-gray-600">
            {t?.experience?.subtitle ?? 'Mi trayectoria laboral y académica'}
          </p>
        </motion.div>

        {/* Header Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full aspect-[4/3] md:aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-xl mb-16"
        >
          <Image
            src="https://png.pngtree.com/thumb_back/fh260/background/20231221/pngtree-engineering-industry-concept-in-office-with-oil-and-gas-industry-refinery-photo-image_15548481.png"
            alt="Experience"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 to-teal-400" />

          {/* Experience Items */}
          <div className="space-y-12">
            {jobs?.map?.((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className={`relative grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? 'md:text-right' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:col-start-2'}>
                  <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{job?.title}</h3>
                      <div className="flex items-center gap-2 text-blue-600 font-semibold mb-2">
                        <Briefcase size={18} />
                        <span>{job?.company}</span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{job?.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{job?.period}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 mb-4">{job?.description}</p>

                    {/* Responsibilities */}
                    {job?.responsibilities && job.responsibilities.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {t?.experience?.responsibilities ?? 'Responsabilidades:'}
                        </h4>
                        <ul className="space-y-2">
                          {job?.responsibilities?.map?.((resp, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-600">
                              <CheckCircle size={16} className="text-blue-500 mt-1 flex-shrink-0" />
                              <span>{resp}</span>
                            </li>
                          )) ?? null}
                        </ul>
                      </div>
                    )}

                    {/* Achievements */}
                    {job?.achievements && job.achievements.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {t?.experience?.achievements ?? 'Logros:'}
                        </h4>
                        <ul className="space-y-2">
                          {job?.achievements?.map?.((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-600">
                              <CheckCircle size={16} className="text-teal-500 mt-1 flex-shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          )) ?? null}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg" />
              </motion.div>
            )) ?? null}
          </div>
        </div>
      </div>
    </section>
  )
}
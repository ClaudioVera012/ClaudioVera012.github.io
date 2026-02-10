'use client'

import { Folder, Code, Award } from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Projects() {
  const { t } = useLanguage()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const projects = t?.projects?.items ?? []

  return (
    <section id="projects" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t?.projects?.title ?? 'Proyectos Destacados'}
          </h2>
          <p className="text-xl text-gray-600">
            {t?.projects?.subtitle ?? 'Trabajos y desarrollos realizados'}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects?.map?.((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="p-6">
                {/* Icon */}
                <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Folder className="text-white" size={28} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{project?.title}</h3>

                {/* Description */}
                <p className="text-gray-700 mb-4 leading-relaxed">{project?.description}</p>

                {/* Technologies */}
                {project?.technologies && project.technologies.length > 0 && (
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Code size={18} className="text-blue-600" />
                      <span className="font-semibold text-gray-900">Tecnologías:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project?.technologies?.map?.((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-white text-blue-600 text-sm font-medium rounded-full shadow-sm"
                        >
                          {tech}
                        </span>
                      )) ?? null}
                    </div>
                  </div>
                )}

                {/* Highlights */}
                {project?.highlights && project.highlights.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Award size={18} className="text-teal-600" />
                      <span className="font-semibold text-gray-900">Destacados:</span>
                    </div>
                    <ul className="space-y-1">
                      {project?.highlights?.map?.((highlight, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="text-teal-500 mt-0.5">•</span>
                          <span>{highlight}</span>
                        </li>
                      )) ?? null}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          )) ?? null}
        </div>
      </div>
    </section>
  )
}
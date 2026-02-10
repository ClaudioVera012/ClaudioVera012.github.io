'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

export default function Contact() {
  const { t } = useLanguage()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<any>({})

  const validateForm = () => {
    const newErrors: any = {}
    if (!formData?.name?.trim?.()) {
      newErrors.name = true
    }
    if (!formData?.email?.trim?.() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData?.email ?? '')) {
      newErrors.email = true
    }
    if (!formData?.message?.trim?.()) {
      newErrors.message = true
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e?.preventDefault?.()
    if (!validateForm()) return

    setStatus('sending')
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const result = await response?.json?.()
      if (result?.success) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 5000)
      }
    } catch (error) {
      console.error('Contact form error:', error)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e?.target ?? {}
    setFormData(prev => ({ ...prev, [name ?? '']: value ?? '' }))
    if (errors?.[name ?? '']) {
      setErrors((prev: any) => ({ ...prev, [name ?? '']: false }))
    }
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden" ref={ref}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="relative w-full h-full">
          <Image
            src="https://marketplace.canva.com/EAFc44rHeWw/2/0/1600w/canva-purple-modern-professional-webinar-zoom-virtual-background-IkheBQKWbv4.jpg"
            alt="Contact background"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t?.contact?.title ?? 'Contacto'}
          </h2>
          <p className="text-xl text-gray-600 mb-2">
            {t?.contact?.subtitle ?? 'Trabajemos juntos'}
          </p>
          <p className="text-gray-600">
            {t?.contact?.description ?? '¿Tienes un proyecto en mente o quieres colaborar? No dudes en contactarme.'}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t?.contact?.info?.title ?? 'Información de Contacto'}
              </h3>

              <div className="space-y-6">
                <a
                  href="mailto:tatoveradiaz@gmail.com"
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-blue-50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                    <Mail className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">
                      {t?.contact?.info?.email ?? 'Email'}
                    </p>
                    <p className="text-blue-600">tatoveradiaz@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-lg">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-teal-600" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">
                      {t?.contact?.info?.phone ?? 'Teléfono'}
                    </p>
                    <p className="text-gray-600">+56 9 7307 9287</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">
                      {t?.contact?.info?.location ?? 'Ubicación'}
                    </p>
                    <p className="text-gray-600">
                      {t?.contact?.info?.locationValue ?? 'Talcahuano, Biobío, Chile'}
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <p className="font-semibold text-gray-900 mb-4">
                    {t?.contact?.info?.social ?? 'Redes Sociales'}
                  </p>
                  <a
                    href="https://www.linkedin.com/in/claudio-vera-d%C3%ADaz-b26686334"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Linkedin size={24} />
                    <span className="font-medium">Visítame en LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t?.contact?.form?.title ?? 'Envíame un Mensaje'}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t?.contact?.form?.name ?? 'Nombre Completo'}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData?.name ?? ''}
                    onChange={handleChange}
                    placeholder={t?.contact?.form?.namePlaceholder ?? 'Tu nombre'}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                      errors?.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    disabled={status === 'sending'}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t?.contact?.form?.email ?? 'Correo Electrónico'}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData?.email ?? ''}
                    onChange={handleChange}
                    placeholder={t?.contact?.form?.emailPlaceholder ?? 'tu@email.com'}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                      errors?.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    disabled={status === 'sending'}
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    {t?.contact?.form?.subject ?? 'Asunto'}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData?.subject ?? ''}
                    onChange={handleChange}
                    placeholder={t?.contact?.form?.subjectPlaceholder ?? 'Asunto del mensaje'}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    disabled={status === 'sending'}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t?.contact?.form?.message ?? 'Mensaje'}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData?.message ?? ''}
                    onChange={handleChange}
                    placeholder={t?.contact?.form?.messagePlaceholder ?? 'Cuéntame sobre tu proyecto o consulta...'}
                    rows={5}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none ${
                      errors?.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    disabled={status === 'sending'}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full px-6 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-1"
                >
                  {status === 'sending' ? (
                    <>{t?.contact?.form?.sending ?? 'Enviando...'}</>
                  ) : (
                    <>
                      <Send size={20} />
                      {t?.contact?.form?.submit ?? 'Enviar Mensaje'}
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                    {t?.contact?.form?.success ?? '¡Mensaje enviado exitosamente! Te responderé pronto.'}
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                    {t?.contact?.form?.error ?? 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.'}
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
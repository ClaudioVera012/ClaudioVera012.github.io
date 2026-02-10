'use client'

import { Heart } from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date()?.getFullYear?.()

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400 mb-2">
            © {currentYear} Claudio Vera Díaz. {t?.footer?.rights ?? 'Todos los derechos reservados'}.
          </p>
          <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
            {t?.footer?.developedBy ?? 'Desarrollado con'}{' '}
            <Heart size={16} className="text-red-500" />
          </p>
        </div>
      </div>
    </footer>
  )
}
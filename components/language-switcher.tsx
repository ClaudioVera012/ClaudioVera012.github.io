'use client'

import { Globe } from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg">
      <Globe size={16} className="text-gray-600" />
      <button
        onClick={() => setLanguage('es')}
        className={`px-2 py-1 text-xs font-medium rounded transition-all ${
          language === 'es'
            ? 'bg-blue-600 text-white'
            : 'text-gray-600 hover:text-blue-600'
        }`}
      >
        ES
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-2 py-1 text-xs font-medium rounded transition-all ${
          language === 'en'
            ? 'bg-blue-600 text-white'
            : 'text-gray-600 hover:text-blue-600'
        }`}
      >
        EN
      </button>
    </div>
  )
}
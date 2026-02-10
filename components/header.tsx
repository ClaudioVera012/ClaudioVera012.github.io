'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'
import LanguageSwitcher from './language-switcher'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window?.scrollY > 50)
    }
    window?.addEventListener?.('scroll', handleScroll)
    return () => window?.removeEventListener?.('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document?.getElementById?.(sectionId)
    element?.scrollIntoView?.({ behavior: 'smooth', block: 'start' })
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { id: 'about', label: t?.nav?.about ?? 'Sobre Mí' },
    { id: 'experience', label: t?.nav?.experience ?? 'Experiencia' },
    { id: 'education', label: t?.nav?.education ?? 'Educación' },
    { id: 'skills', label: t?.nav?.skills ?? 'Habilidades' },
    { id: 'projects', label: t?.nav?.projects ?? 'Proyectos' },
    { id: 'contact', label: t?.nav?.contact ?? 'Contacto' }
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
          >
            CV
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems?.map?.((item) => (
              <button
                key={item?.id}
                onClick={() => scrollToSection(item?.id ?? '')}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
              >
                {item?.label}
              </button>
            )) ?? null}
            <LanguageSwitcher />
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg">
          <nav className="px-4 py-4 space-y-2">
            {navItems?.map?.((item) => (
              <button
                key={item?.id}
                onClick={() => scrollToSection(item?.id ?? '')}
                className="block w-full text-left px-4 py-3 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
              >
                {item?.label}
              </button>
            )) ?? null}
          </nav>
        </div>
      )}
    </header>
  )
}
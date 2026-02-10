import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/contexts/language-context'

const inter = Inter({ subsets: ['latin'] })

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL || 'http://localhost:3000'),
  title: 'Claudio Vera Díaz | Ingeniero Químico & Data Science',
  description: 'Portafolio profesional de Claudio Vera Díaz - Estudiante de Ingeniería Civil Química con experiencia en programación, Data Science y docencia.',
  keywords: ['Ingeniería Química', 'Data Science', 'Python', 'MATLAB', 'Programación', 'Chile'],
  authors: [{ name: 'Claudio Vera Díaz' }],
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: '/',
    siteName: 'Claudio Vera Díaz Portfolio',
    title: 'Claudio Vera Díaz | Ingeniero Químico & Data Science',
    description: 'Portafolio profesional de Claudio Vera Díaz - Estudiante de Ingeniería Civil Química con experiencia en programación, Data Science y docencia.',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Claudio Vera Díaz Portfolio'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claudio Vera Díaz | Ingeniero Químico & Data Science',
    description: 'Portafolio profesional de Claudio Vera Díaz',
    images: ['/og-image.png']
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js" async />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
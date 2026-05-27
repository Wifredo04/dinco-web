import type { Metadata } from 'next'
import './globals.css'
import PresenciaSocial from '@/components/layout/PresenciaSocial'

export const metadata: Metadata = {
  title: {
    default: 'DINCO Inmobiliaria & Constructora',
    template: '%s | DINCO Inmobiliaria',
  },
  description: 'Plataforma global de venta, renta y promoción de propiedades en República Dominicana y el mundo. Más de 12 años de experiencia.',
  keywords: ['inmobiliaria', 'propiedades', 'Puerto Plata', 'Cabarete', 'Sosúa', 'República Dominicana', 'venta', 'renta'],
  openGraph: {
    title: 'DINCO Inmobiliaria & Constructora',
    description: 'Plataforma global de negocios inmobiliarios',
    locale: 'es_DO',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="min-h-full flex flex-col antialiased">
        {children}
        <PresenciaSocial />
      </body>
    </html>
  )
}
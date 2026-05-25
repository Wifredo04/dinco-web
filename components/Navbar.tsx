'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/10 shadow-lg py-2' : 'py-4'
      }`}
      style={{
        transform: scrolled ? 'scaleY(1.02)' : 'scaleY(1)',
        transformOrigin: 'top',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="logo-font" aria-label="Inicio - DINCO Inmobiliaria">
          <Image
            src="/nuevo_dc.svg"
            alt="DINCO Inmobiliaria"
            width={220}
            height={60}
            className="h-auto w-[220px]"
          />
        </Link>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex items-center gap-8 logo-font">
          {['Propiedades', 'Regiones', 'Agentes', 'Nosotros', 'Contacto'].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className={`text-sm font-medium transition-colors duration-300 hover:text-[#FF2A39] ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {item}
            </Link>
          ))}
          <Link
            href="/postulacion"
            className="bg-[#FF2A39] text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-[#0056B3] transition-colors duration-300"
          >
            Publicar propiedad
          </Link>
        </div>

        {/* MENU MOBILE */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? 'bg-gray-700' : 'bg-white'}`} />
          <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? 'bg-gray-700' : 'bg-white'}`} />
          <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? 'bg-gray-700' : 'bg-white'}`} />
        </button>
      </div>

      {/* MENU MOBILE DESPLEGABLE */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-xl px-6 py-4 flex flex-col gap-4 logo-font">
          {['Propiedades', 'Regiones', 'Agentes', 'Nosotros', 'Contacto'].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-gray-700 font-medium hover:text-[#FF2A39]"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <Link
            href="/postulacion"
            className="bg-[#FF2A39] text-white text-center font-semibold px-5 py-2 rounded-full hover:bg-[#0056B3] transition-colors duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Publicar propiedad
          </Link>
        </div>
      )}
    </nav>
  )
}
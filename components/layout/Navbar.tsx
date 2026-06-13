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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0B1A30]/90 backdrop-blur-md shadow-lg py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="logo-font" aria-label="Inicio - DINCO Inmobiliaria">
          <img
           src="/nuevo_dc_1.svg"
           alt="DINCO Inmobiliaria"
           className="w-[200px] md:w-[250px] h-auto transition-all duration-300"
           />
        </Link>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex items-center gap-8 font-serif">
          {['Propiedades', 'Regiones', 'Agentes', 'Nosotros', 'Contacto'].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-sm font-medium transition-colors duration-300 text-white hover:text-[#00D2FF]"
            >
              {item}
            </Link>
          ))}
          <Link
            href="/postulacion"
            className="bg-[#0056B3] text-white text-sm font-semibold px-5 py-2 rounded-xs border border-[#0056B3] hover:bg-transparent hover:text-[#00D2FF] hover:border-[#00D2FF] transition-all duration-300 uppercase tracking-wider"
          >
            Publicar propiedad
          </Link>
        </div>

        {/* MENU MOBILE (BOTÓN) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Abrir menú"
        >
          <span className="block w-6 h-0.5 bg-white transition-all duration-300" />
          <span className="block w-6 h-0.5 bg-white transition-all duration-300" />
          <span className="block w-6 h-0.5 bg-white transition-all duration-300" />
        </button>
      </div>

      {/* MENU MOBILE DESPLEGABLE */}
      {menuOpen && (
        <div className="md:hidden bg-[#0B1A30] border-t border-white/10 px-6 py-4 flex flex-col gap-4 font-serif">
          {['Propiedades', 'Regiones', 'Agentes', 'Nosotros', 'Contacto'].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-white font-medium hover:text-[#00D2FF]"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <Link
            href="/postulacion"
            className="bg-[#0056B3] text-white text-center font-semibold px-5 py-2 rounded-[0.125rem] hover:bg-transparent hover:text-[#00D2FF] border border-[#0056B3] hover:border-[#00D2FF] transition-all duration-300 uppercase tracking-wider"
            onClick={() => setMenuOpen(false)}
          >
            Publicar propiedad
          </Link>
        </div>
      )}
    </nav>
  )
}

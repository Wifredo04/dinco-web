'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const MENU_ITEMS = [
  {
    label: 'Propiedades',
    href: '/propiedades',
    submenu: [
      { label: 'Todas las propiedades', href: '/propiedades' },
      { label: 'En venta', href: '/propiedades?tipo=venta' },
      { label: 'En renta', href: '/propiedades?tipo=renta' },
      { label: 'Proyectos nuevos', href: '/propiedades?tipo=nuevo' },
    ],
  },
  {
    label: 'Regiones',
    href: '#',
    submenu: [
      { label: 'Puerto Plata', href: '/puerto-plata' },
      { label: 'Cabarete', href: '/cabarete' },
      { label: 'Sosúa', href: '/sosua' },
      { label: 'Santo Domingo', href: '/santo-domingo' },
      { label: 'Samaná', href: '/samana' },
      { label: 'Monte Cristi', href: '/monte-cristi' },
    ],
  },
  { label: 'Agentes', href: '/agentes' },
  { label: 'Blog', href: '/blog' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Contacto', href: '/contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-black/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <img
            src="/nuevo_dc.svg"
            alt="DINCO Inmobiliaria"
            style={{ width: '160px', height: 'auto' }}
            className={`transition-all duration-500 ${
              scrolled ? '' : 'brightness-0 invert'
            }`}
          />
        </Link>

        {/* MENÚ DESKTOP */}
        <div className="hidden lg:flex items-center gap-1">
          {MENU_ITEMS.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.submenu && setActiveSubmenu(item.label)}
              onMouseLeave={() => setActiveSubmenu(null)}
            >
              <Link
                href={item.href}
                className={`flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  scrolled
                    ? 'text-gray-700 hover:text-[#0056B3] hover:bg-blue-50'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
                {item.submenu && (
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeSubmenu === item.label ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>

              {/* SUBMENU DROPDOWN */}
              {item.submenu && activeSubmenu === item.label && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl shadow-black/10 border border-gray-100 overflow-hidden animate-fade-in">
                  {item.submenu.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      className="flex items-center gap-3 px-5 py-3.5 text-sm text-gray-700 hover:text-[#0056B3] hover:bg-blue-50 transition-colors duration-150 first:pt-4 last:pb-4"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF2A39] flex-shrink-0" />
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* BOTÓN PUBLICAR */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/dashboard/propietario"
            className={`text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-200 ${
              scrolled
                ? 'text-gray-600 hover:text-[#0056B3]'
                : 'text-white/80 hover:text-white'
            }`}
          >
            Mi panel
          </Link>
          <Link
            href="/postulacion"
            className="bg-[#FF2A39] hover:bg-[#0056B3] text-white text-sm font-bold px-6 py-2.5 rounded-xl transition-all duration-300 shadow-lg shadow-red-500/25 hover:shadow-blue-500/25 hover:scale-105"
          >
            Publicar propiedad
          </Link>
        </div>

        {/* HAMBURGER MOBILE */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2 rounded-xl"
          aria-label="Menú"
        >
          <span className={`block h-0.5 rounded-full transition-all duration-300 ${
            menuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'
          } ${scrolled ? 'bg-gray-700' : 'bg-white'}`} />
          <span className={`block h-0.5 rounded-full transition-all duration-300 ${
            menuOpen ? 'opacity-0 w-0' : 'w-4'
          } ${scrolled ? 'bg-gray-700' : 'bg-white'}`} />
          <span className={`block h-0.5 rounded-full transition-all duration-300 ${
            menuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-6'
          } ${scrolled ? 'bg-gray-700' : 'bg-white'}`} />
        </button>
      </div>

      {/* MENÚ MOBILE */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl animate-fade-in">
          <div className="max-w-7xl mx-auto px-6 py-4 space-y-1">
            {MENU_ITEMS.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block px-4 py-3 text-gray-700 font-semibold rounded-xl hover:bg-blue-50 hover:text-[#0056B3] transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.submenu && (
                  <div className="ml-4 space-y-1 mb-2">
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-500 hover:text-[#0056B3] rounded-xl hover:bg-blue-50 transition-colors"
                        onClick={() => setMenuOpen(false)}
                      >
                        <span className="w-1 h-1 rounded-full bg-[#FF2A39]" />
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
              <Link
                href="/dashboard/propietario"
                className="block px-4 py-3 text-center text-gray-600 font-semibold rounded-xl border border-gray-200 hover:border-[#0056B3] hover:text-[#0056B3] transition-all"
                onClick={() => setMenuOpen(false)}
              >
                Mi panel
              </Link>
              <Link
                href="/postulacion"
                className="block px-4 py-3 text-center bg-[#FF2A39] text-white font-bold rounded-xl hover:bg-[#0056B3] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Publicar propiedad
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
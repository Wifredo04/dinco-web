'use client'
// Navbar.tsx — Barra de navegación DINCO
// CÓMO EDITAR: Busca las secciones marcadas con [EDITAR]

import { useState, useEffect } from 'react'
import Link from 'next/link'

// [EDITAR] — ENLACES DEL MENÚ
// Para agregar un enlace: { label: 'Texto', href: '/ruta' }
// Para agregar submenú: añade submenu: [{ label, href }]
const MENU = [
  {
    label: 'Propiedades',
    href: '/propiedades',
    sub: [
      { label: 'Todas', href: '/propiedades' },
      { label: 'En venta', href: '/propiedades?operacion=venta' },
      { label: 'En renta', href: '/propiedades?operacion=renta' },
    ],
  },
  {
    label: 'Regiones',
    href: '#',
    sub: [
      { label: 'Puerto Plata', href: '/puerto-plata' },
      { label: 'Cabarete', href: '/cabarete' },
      { label: 'Sosúa', href: '/sosua' },
      { label: 'Santo Domingo', href: '/santo-domingo' },
      { label: 'Samaná', href: '/samana' },
      { label: 'Monte Cristi', href: '/monte-cristi' },
    ],
  },
  { label: 'Agentes', href: '/agentes' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Contacto', href: '/contacto' },
]

export default function Navbar() {
  // Estado: submenú activo (qué enlace está expandido)
  const [subActivo, setSubActivo] = useState<string | null>(null)
  // Estado: menú móvil abierto o cerrado
  const [movil, setMovil] = useState(false)
  // Estado: modo oscuro (true) o claro (false)
  const [oscuro, setOscuro] = useState(true)

  // Cargar modo guardado al iniciar
  // CÓMO EDITAR: 'dinco-modo' es la clave en localStorage
  useEffect(() => {
    const guardado = localStorage.getItem('dinco-modo')
    const esOscuro = guardado !== 'claro'
    setOscuro(esOscuro)
    document.documentElement.setAttribute('data-modo', esOscuro ? 'oscuro' : 'claro')
  }, [])

  // Cambiar modo y guardar preferencia
  const toggleModo = () => {
    const nuevo = !oscuro
    setOscuro(nuevo)
    const valor = nuevo ? 'oscuro' : 'claro'
    document.documentElement.setAttribute('data-modo', valor)
    localStorage.setItem('dinco-modo', valor)
  }

  return (
    <>
      {/* NAVBAR PRINCIPAL
          [EDITAR] bg-black: cambia el color de fondo del navbar
          [EDITAR] border-b: cambia el borde inferior
          h-16: altura fija (64px) — cambia si necesitas más altura */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-blend-darken border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex place-items-stretch justify-between">
        <Link
             href="/postulacion"
             className="hidden lg:flex absolute top-3 right-6 items-center gap-1.5 px-8 py-3 text-xs uppercase tracking-widest border border-[#00D2FF]/60 text-[#00D2FF] hover:bg-[#00D2FF] hover:text-black transition-all duration-200 rounded-sm font-serif">

             Publicar propiedad
        </Link>
          {/* LOGO
              [EDITAR] w-32: ancho del logo (128px)
              invert: invierte colores del SVG según el modo
              El logo SVG debe tener letras en negro para que
              invert lo convierta a blanco en modo oscuro */}
          <Link href="/" onClick={() => setMovil(false)}>
            <img
              src="/nuevo_dc_4.svg"
              alt="DINCO Inmobiliaria"
              className={`h-24 w-66 transition-none ${
                // [EDITAR] — Inversión del logo según modo
                // oscuro=true → invert (negro→blanco sobre fondo negro)
                // oscuro=false → sin filtro (negro sobre fondo blanco)
                oscuro ? 'invert' : ''
              }`}
            />
          </Link>

          {/* MENÚ DESKTOP — oculto en móvil */}
          <div className="hidden lg:flex place-items-end-safe gap-8">
            {MENU.map((item) => (
              <div
                key={item.label}
                className="relative"
                // Abre submenú al pasar el mouse
                onMouseEnter={() => item.sub && setSubActivo(item.label)}
                onMouseLeave={() => setSubActivo(null)}
              >
                {/* ENLACE PRINCIPAL
                    [EDITAR] text-white/70: opacidad del texto
                    [EDITAR] hover:text-[#00D2FF]: color al hover
                    [EDITAR] text-xs: tamaño del texto */}
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-6 py-3 text-xs uppercase tracking-widest transition-colors duration-200 font-serif ${
  oscuro
    ? 'text-white/70 hover:text-[#00D2FF]'
    : 'text-black/70 hover:text-[#0077CC]'
}`}
                >
                  {item.label}
                  {/* Flecha si tiene submenú */}
                  {item.sub && (
                    <svg className={`w-3 h-3 transition-transform duration-200 ${subActivo === item.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* SUBMENÚ DESPLEGABLE
                    [EDITAR] bg-[#0B1A30]: color de fondo del submenú
                    [EDITAR] border-[#00D2FF]/20: color del borde */}
                {item.sub && subActivo === item.label && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-[#0B1A30] border border-[#00D2FF]/15 rounded-sm shadow-xl z-50">
                    {item.sub.map((s) => (
                      <Link
                        key={s.label}
                        href={s.href}
                        // [EDITAR] hover:text-[#00D2FF]: color hover submenú
                        className="flex items-center gap-2 px-4 py-2.5 text-xs text-white/50 hover:text-[#00D2FF] hover:bg-white/5 transition-colors duration-150 font-serif tracking-wide"
                        onClick={() => setSubActivo(null)}
                      >
                        {/* Punto decorativo cyan */}
                        <span className="w-1 h-1 rounded-full bg-[#00D2FF] opacity-50 flex-shrink: 0" />
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CONTROLES DERECHA: toggle modo + botón publicar + hamburguesa */}
          <div className="flex items-center gap-1">

            {/* TOGGLE MODO OSCURO/CLARO
                [EDITAR] border-white/10: color del borde del botón
                [EDITAR] hover:border-[#00D2FF]/40: borde al hover
                Ícono cambia entre sol (claro) y luna (oscuro) */}
            <button
              onClick={toggleModo}
              title={oscuro ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
              className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-[#00D2FF] hover:border-[#00D2FF]/40 transition-colors duration-200"
            >
              {/* Sol = modo claro activo | Luna = modo oscuro activo */}
              {oscuro ? (
                // Ícono SOL — indica que puedes cambiar a modo claro
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="5" strokeWidth="2" />
                  <path strokeWidth="2" strokeLinecap="round" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              ) : (
                // Ícono LUNA — indica que puedes cambiar a modo oscuro
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>

            {/* BOTÓN PUBLICAR — solo desktop
                [EDITAR] border-[#00D2FF]: color del borde
                [EDITAR] hover:bg-[#00D2FF]: color de fondo al hover */}

            {/* HAMBURGUESA — solo móvil
                Tres líneas que se convierten en X al abrir */}
            <button
              onClick={() => setMovil(!movil)}
              className="lg:hidden flex flex-col gap-1.5 p-1"
              aria-label="Menú"
            >
              {/* [EDITAR] bg-white: color de las líneas del hamburguesa */}
              <span className={`block w-5 h-px bg-white transition-transform duration-300 ${movil ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`block w-3.5 h-px bg-white transition-opacity duration-300 ${movil ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-px bg-white transition-transform duration-300 ${movil ? '-translate-y-2 -rotate-45' : ''}`} />
            </button>

          </div>
        </div>

        {/* MENÚ MÓVIL
            [EDITAR] bg-black: fondo del menú móvil
            [EDITAR] border-t border-white/5: línea divisora superior */}
        {movil && (
          <div className="lg:hidden bg-black border-t border-white/5 px-4 py-4">
            {MENU.map((item) => (
              <div key={item.label}>
                {/* Enlace principal móvil */}
                <Link
                  href={item.href}
                  // [EDITAR] text-white/80: color del texto en móvil
                  className="block py-3 text-sm font-serif text-white/80 border-b border-white/5 tracking-wide"
                  onClick={() => setMovil(false)}
                >
                  {item.label}
                </Link>
                {/* Subenlaces móvil */}
                {item.sub && (
                  <div className="pl-3 py-1">
                    {item.sub.map((s) => (
                      <Link
                        key={s.label}
                        href={s.href}
                        className="flex items-center gap-2 py-2 text-xs text-white/40 hover:text-[#00D2FF] font-serif tracking-wide transition-colors"
                        onClick={() => setMovil(false)}
                      >
                        <span className="w-1 h-1 rounded-full bg-[#00D2FF]/50" />
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {/* Botón publicar móvil */}
            <Link
              href="/postulacion"
              className="mt-4 flex items-center justify-center w-full py-3 text-xs uppercase tracking-widest border border-[#00D2FF]/60 text-[#00D2FF] hover:bg-[#00D2FF] hover:text-black transition-all duration-200 rounded-sm font-serif"
              onClick={() => setMovil(false)}
            >
              Publicar propiedad
            </Link>
          </div>
        )}
      </nav>

      {/* ESPACIADOR — empuja el contenido para que no quede bajo el navbar
          [EDITAR] h-16: debe coincidir con la altura del navbar */}
      <div className="h-24" />
    </>
  )
}

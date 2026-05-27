'use client'
import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'

const REGIONES = [
  {
    nombre: 'Puerto Plata',
    descripcion: 'Villas y residencias frente al mar Caribe',
    tagline: 'Costa Norte · República Dominicana',
    imagen: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
    propiedades: 124,
    slug: 'puerto-plata',
    color: 'from-blue-900/70',
  },
  {
    nombre: 'Cabarete',
    descripcion: 'El paraíso del surf y la vida costera',
    tagline: 'Capital del Surf · República Dominicana',
    imagen: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80',
    propiedades: 86,
    slug: 'cabarete',
    color: 'from-teal-900/70',
  },
  {
    nombre: 'Sosúa',
    descripcion: 'Playas cristalinas y propiedades de lujo',
    tagline: 'Costa Norte · República Dominicana',
    imagen: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=1920&q=80',
    propiedades: 98,
    slug: 'sosua',
    color: 'from-cyan-900/70',
  },
  {
    nombre: 'Santo Domingo',
    descripcion: 'La capital — centro de negocios e inversión',
    tagline: 'Capital · República Dominicana',
    imagen: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80',
    propiedades: 215,
    slug: 'santo-domingo',
    color: 'from-gray-900/80',
  },
  {
    nombre: 'Samaná',
    descripcion: 'Naturaleza exuberante y exclusividad tropical',
    tagline: 'Noroeste · República Dominicana',
    imagen: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1920&q=80',
    propiedades: 67,
    slug: 'samana',
    color: 'from-green-900/70',
  },
  {
    nombre: 'Monte Cristi',
    descripcion: 'Tierra de oportunidades y paisajes únicos',
    tagline: 'Noroeste · República Dominicana',
    imagen: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1920&q=80',
    propiedades: 43,
    slug: 'monte-cristi',
    color: 'from-amber-900/70',
  },
]

const TIPOS_OPERACION = ['Venta', 'Renta', 'Promoción']
const TIPOS_PROPIEDAD = ['Casa', 'Apartamento', 'Villa', 'Penthouse', 'Local', 'Terreno']

export default function Hero() {
  const [actual, setActual] = useState(0)
  const [prev, setPrev] = useState<number | null>(null)
  const [transitioning, setTransitioning] = useState(false)

  const goTo = useCallback((idx: number) => {
    if (transitioning || idx === actual) return
    setPrev(actual)
    setTransitioning(true)
    setTimeout(() => {
      setActual(idx)
      setTransitioning(false)
      setPrev(null)
    }, 700)
  }, [actual, transitioning])

  useEffect(() => {
    const t = setInterval(() => goTo((actual + 1) % REGIONES.length), 6000)
    return () => clearInterval(t)
  }, [actual, goTo])

  const region = REGIONES[actual]

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">

      {/* FONDO ANTERIOR (salida) */}
      {prev !== null && (
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-700 opacity-0"
          style={{ backgroundImage: `url(${REGIONES[prev].imagen})` }}
        />
      )}

      {/* FONDO ACTUAL */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
        style={{ backgroundImage: `url(${region.imagen})` }}
      />

      {/* GRADIENTES */}
      <div className={`absolute inset-0 bg-gradient-to-t ${region.color} via-black/30 to-black/10 transition-all duration-700`} />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

      {/* CONTENIDO */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-6 pt-20">

        {/* BADGE */}
        <div className={`transition-all duration-500 ${transitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          <span className="inline-flex items-center gap-2 bg-[#FF2A39]/90 backdrop-blur-sm text-white text-xs font-bold px-5 py-2 rounded-full tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
            {region.tagline}
          </span>
        </div>

        {/* TÍTULO */}
        <div className={`text-center transition-all duration-500 ${transitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
          <h1
            className="text-6xl md:text-8xl lg:text-9xl font-black mb-4 leading-none tracking-tight drop-shadow-2xl"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {region.nombre}
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-2 font-light max-w-2xl mx-auto">
            {region.descripcion}
          </p>
          <p className="text-[#FF2A39] font-bold text-sm tracking-widest uppercase mb-10">
            {region.propiedades} propiedades disponibles
          </p>
        </div>

        {/* BUSCADOR */}
        <div className="w-full max-w-4xl glass rounded-2xl p-3 mb-8">
          <div className="flex flex-col md:flex-row gap-2">
            <select className="flex-1 bg-white text-gray-700 rounded-xl px-4 py-3.5 text-sm font-semibold outline-none cursor-pointer">
              <option value="">Tipo de operación</option>
              {TIPOS_OPERACION.map(t => <option key={t} value={t.toLowerCase()}>{t}</option>)}
            </select>
            <select className="flex-1 bg-white text-gray-700 rounded-xl px-4 py-3.5 text-sm font-semibold outline-none cursor-pointer">
              <option value="">Tipo de propiedad</option>
              {TIPOS_PROPIEDAD.map(t => <option key={t} value={t.toLowerCase()}>{t}</option>)}
            </select>
            <select className="flex-1 bg-white text-gray-700 rounded-xl px-4 py-3.5 text-sm font-semibold outline-none cursor-pointer">
              <option value="">Región</option>
              {REGIONES.map(r => <option key={r.slug} value={r.slug}>{r.nombre}</option>)}
            </select>
            <Link
              href="/propiedades"
              className="bg-[#FF2A39] hover:bg-[#0056B3] text-white font-black px-10 py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap shadow-lg"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Buscar
            </Link>
          </div>
        </div>

        {/* ESTADÍSTICAS */}
        <div className="flex items-center gap-6 md:gap-10 mb-8">
          {[
            { num: '+600', label: 'Propiedades' },
            { num: '6', label: 'Regiones' },
            { num: '+12', label: 'Años' },
            { num: '+800', label: 'Clientes' },
          ].map((s, i) => (
            <div key={s.label} className="flex items-center gap-6">
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-black text-white leading-none">{s.num}</p>
                <p className="text-white/50 text-xs tracking-widest uppercase mt-0.5">{s.label}</p>
              </div>
              {i < 3 && <div className="w-px h-8 bg-white/20" />}
            </div>
          ))}
        </div>

        {/* INDICADORES */}
        <div className="flex items-center gap-3 flex-wrap justify-center">
          {REGIONES.map((r, i) => (
            <button
              key={r.slug}
              onClick={() => goTo(i)}
              className="group flex flex-col items-center gap-1.5"
            >
              <span className={`text-xs font-bold transition-all duration-300 ${
                i === actual ? 'text-white' : 'text-white/35 group-hover:text-white/65'
              }`}>
                {r.nombre}
              </span>
              <span className={`block h-0.5 rounded-full transition-all duration-400 ${
                i === actual
                  ? 'bg-[#FF2A39] w-10'
                  : 'bg-white/25 w-3 group-hover:w-6 group-hover:bg-white/50'
              }`} />
            </button>
          ))}
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 animate-bounce">
        <span className="text-white/40 text-xs tracking-widest uppercase">Explorar</span>
        <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

    </section>
  )
}
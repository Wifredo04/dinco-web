'use client'
import { useState, useEffect, useCallback } from 'react'

const regiones = [
  {
    nombre: 'Puerto Plata',
    descripcion: 'Descubre villas y residencias frente al mar Caribe',
    imagen: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
    propiedades: 124,
  },
  {
    nombre: 'Cabarete',
    descripcion: 'El paraíso del surf y la vida costera',
    imagen: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80',
    propiedades: 86,
  },
  {
    nombre: 'Sosúa',
    descripcion: 'Playas cristalinas y propiedades de lujo',
    imagen: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=1920&q=80',
    propiedades: 98,
  },
  {
    nombre: 'Santo Domingo',
    descripcion: 'La capital, centro de negocios e inversión',
    imagen: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80',
    propiedades: 215,
  },
  {
    nombre: 'Samaná',
    descripcion: 'Naturaleza exuberante y exclusividad tropical',
    imagen: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1920&q=80',
    propiedades: 67,
  },
  {
    nombre: 'Monte Cristi',
    descripcion: 'Tierra de oportunidades y paisajes únicos',
    imagen: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1920&q=80',
    propiedades: 43,
  },
]

export default function Hero() {
  const [actual, setActual] = useState(0)
  const [animando, setAnimando] = useState(false)

  const cambiarRegion = useCallback((indice: number) => {
    if (animando || indice === actual) return
    setAnimando(true)
    setTimeout(() => {
      setActual(indice)
      setAnimando(false)
    }, 400)
  }, [actual, animando])

  useEffect(() => {
    const intervalo = setInterval(() => {
      cambiarRegion((actual + 1) % regiones.length)
    }, 5000)
    return () => clearInterval(intervalo)
  }, [actual, cambiarRegion])

  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* IMAGEN DE FONDO */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${regiones[actual].imagen})` }}
      />

      {/* CAPAS DE GRADIENTE */}
      <div className="absolute inset-0 bg-linearinea-to-t from-black/80 via-black/40 to-black/20" />
      <div className="absolute inset-0 bg-linear-to-r from-black/40 to-transparent" />

      {/* CONTENIDO PRINCIPAL */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-6">

        {/* BADGE REGIÓN */}
        <div className={`transition-all duration-400 ${animando ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'}`}>
          <span className="inline-block bg-[#FF2A39]/90 text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-widest uppercase mb-4">
            República Dominicana
          </span>

          {/* NOMBRE REGIÓN */}
          <h1 className="text-6xl md:text-8xl font-black mb-3 drop-shadow-2xl">
            {regiones[actual].nombre}
          </h1>

          {/* DESCRIPCIÓN */}
          <p className="text-xl md:text-2xl text-white/85 mb-3 max-w-2xl mx-auto font-light">
            {regiones[actual].descripcion}
          </p>

          {/* CONTADOR PROPIEDADES */}
          <p className="text-[#FF2A39] font-semibold text-sm tracking-wider mb-10">
            {regiones[actual].propiedades} propiedades disponibles
          </p>
        </div>

        {/* BUSCADOR */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex flex-col md:flex-row gap-3 w-full max-w-4xl shadow-2xl">
          <select className="flex-1 bg-white text-gray-700 rounded-xl px-4 py-3.5 text-sm font-medium outline-none cursor-pointer">
            <option value="">Tipo de operación</option>
            <option value="venta">Venta</option>
            <option value="renta">Renta</option>
            <option value="promocion">Promoción</option>
          </select>
          <select className="flex-1 bg-white text-gray-700 rounded-xl px-4 py-3.5 text-sm font-medium outline-none cursor-pointer">
            <option value="">Tipo de propiedad</option>
            <option value="casa">Casa</option>
            <option value="apartamento">Apartamento</option>
            <option value="villa">Villa</option>
            <option value="penthouse">Penthouse</option>
            <option value="local">Local comercial</option>
            <option value="terreno">Terreno</option>
          </select>
          <select className="flex-1 bg-white text-gray-700 rounded-xl px-4 py-3.5 text-sm font-medium outline-none cursor-pointer">
            <option value="">Región</option>
            {regiones.map((r) => (
              <option key={r.nombre} value={r.nombre}>{r.nombre}</option>
            ))}
          </select>
          <button className="bg-[#FF2A39] hover:bg-[#0056B3] text-white font-bold px-10 py-3.5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
            Buscar
          </button>
        </div>

        {/* ESTADÍSTICAS RÁPIDAS */}
        <div className="flex gap-8 mt-8">
          <div className="text-center">
            <p className="text-2xl font-black text-white">+600</p>
            <p className="text-xs text-white/60 tracking-wider uppercase">Propiedades</p>
          </div>
          <div className="w-px bg-white/20" />
          <div className="text-center">
            <p className="text-2xl font-black text-white">6</p>
            <p className="text-xs text-white/60 tracking-wider uppercase">Regiones</p>
          </div>
          <div className="w-px bg-white/20" />
          <div className="text-center">
            <p className="text-2xl font-black text-white">+12</p>
            <p className="text-xs text-white/60 tracking-wider uppercase">Años</p>
          </div>
          <div className="w-px bg-white/20" />
          <div className="text-center">
            <p className="text-2xl font-black text-white">+800</p>
            <p className="text-xs text-white/60 tracking-wider uppercase">Clientes</p>
          </div>
        </div>

        {/* INDICADORES DE REGIÓN */}
        <div className="flex gap-4 mt-8 flex-wrap justify-center">
          {regiones.map((r, i) => (
            <button
              key={i}
              onClick={() => cambiarRegion(i)}
              className="flex flex-col items-center gap-1 group"
            >
              <span className={`text-xs font-semibold transition-all duration-300 ${
                i === actual ? 'text-white' : 'text-white/40 group-hover:text-white/70'
              }`}>
                {r.nombre}
              </span>
              <span className={`block h-0.5 rounded-full transition-all duration-300 ${
                i === actual ? 'bg-[#FF2A39] w-10' : 'bg-white/20 w-4 group-hover:w-7'
              }`} />
            </button>
          ))}
        </div>
      </div>

      {/* FLECHA SCROLL */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

    </section>
  )
}
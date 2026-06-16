'use client'
import { useState } from 'react'

const testimonios = [
  {
    id: 1,
    nombre: 'Michael Johnson',
    pais: 'Estados Unidos',
    bandera: '🇺🇸',
    texto:
      'Compré mi villa en Cabarete a través de DINCO y fue una experiencia increíble. El agente me guió en cada paso del proceso desde Nueva York. En menos de 3 meses todo estaba cerrado.',
    propiedad: 'Villa en Cabarete',
    calificacion: 5,
    foto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
  },
  {
    id: 2,
    nombre: 'Sophie Müller',
    pais: 'Alemania',
    bandera: '🇩🇪',
    texto:
      'Publiqué mi apartamento en Sosúa con DINCO y en dos semanas ya tenía inquilinos. El proceso fue completamente digital, nunca tuve que viajar a República Dominicana.',
    propiedad: 'Apartamento en Sosúa',
    calificacion: 5,
    foto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80',
  },
  {
    id: 3,
    nombre: 'Jean-Pierre Dubois',
    pais: 'Francia',
    bandera: '🇫🇷',
    texto:
      'Invertí en un terreno en Puerto Plata gracias a DINCO. La asesoría fue excelente y el precio superó mis expectativas. Ya estoy planificando mi segunda inversión.',
    propiedad: 'Terreno en Puerto Plata',
    calificacion: 5,
    foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
  },
  {
    id: 4,
    nombre: 'Isabella Rossi',
    pais: 'Italia',
    bandera: '🇮🇹',
    texto:
      'El equipo de DINCO es profesional y transparente. Me ayudaron a encontrar el penthouse perfecto en Santo Domingo. La comunicación fue impecable en todo momento.',
    propiedad: 'Penthouse en Santo Domingo',
    calificacion: 5,
    foto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
  },
]

export default function Testimonios() {
  const [actual, setActual] = useState(0)

  const anterior = () =>
    setActual((prev) => (prev === 0 ? testimonios.length - 1 : prev - 1))
  const siguiente = () =>
    setActual((prev) => (prev === testimonios.length - 1 ? 0 : prev + 1))

  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        {/* ENCABEZADO */}
        <div className="mb-14 text-center">
          <span className="text-sm font-bold tracking-widest text-[#FF2A39] uppercase">
            Lo que dicen nuestros clientes
          </span>
          <h2 className="mt-2 mb-4 text-4xl font-black text-[#0056B3] md:text-5xl">
            Historias de éxito
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-500">
            Clientes de todo el mundo confían en DINCO para sus inversiones
            inmobiliarias
          </p>
        </div>

        {/* ESTADÍSTICAS */}
        <div className="mb-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          {[
            { numero: '98%', label: 'Clientes satisfechos' },
            { numero: '+800', label: 'Transacciones cerradas' },
            { numero: '+40', label: 'Países representados' },
            { numero: '12', label: 'Años de experiencia' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-gray-50 p-6 text-center"
            >
              <p className="mb-1 text-4xl font-black text-[#0056B3]">
                {stat.numero}
              </p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CAROUSEL */}
        <div className="relative mx-auto max-w-4xl">
          <div className="rounded-3xl bg-gray-50 p-8 md:p-12">
            <div className="flex flex-col items-center gap-8 md:flex-row">
              {/* FOTO */}
              <div className="flex-shrink-0">
                <div
                  className="h-24 w-24 rounded-full border-4 border-[#0056B3] bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${testimonios[actual].foto})`,
                  }}
                />
              </div>

              {/* CONTENIDO */}
              <div className="flex-1">
                {/* ESTRELLAS */}
                <div className="mb-4 flex gap-1">
                  {[...Array(testimonios[actual].calificacion)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="mb-6 text-lg leading-relaxed text-gray-700 italic">
                  "{testimonios[actual].texto}"
                </p>

                <div>
                  <p className="text-lg font-black text-gray-900">
                    {testimonios[actual].nombre} {testimonios[actual].bandera}
                  </p>
                  <p className="text-sm font-semibold text-[#0056B3]">
                    {testimonios[actual].propiedad} · {testimonios[actual].pais}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CONTROLES */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={anterior}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all duration-300 hover:bg-[#0056B3] hover:text-white"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div className="flex gap-2">
              {testimonios.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActual(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === actual
                      ? 'h-3 w-8 bg-[#FF2A39]'
                      : 'h-3 w-3 bg-gray-200'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={siguiente}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all duration-300 hover:bg-[#0056B3] hover:text-white"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

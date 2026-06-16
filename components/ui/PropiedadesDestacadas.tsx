import Link from 'next/link'

const propiedades = [
  {
    id: 1,
    titulo: 'Villa frente al mar',
    ubicacion: 'Puerto Plata',
    precio: 'US$ 285,000',
    tipo: 'Venta',
    habitaciones: 4,
    banos: 3,
    metros: 320,
    imagen:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    destacada: true,
  },
  {
    id: 2,
    titulo: 'Apartamento beachfront',
    ubicacion: 'Cabarete',
    precio: 'US$ 145,000',
    tipo: 'Venta',
    habitaciones: 2,
    banos: 2,
    metros: 95,
    imagen:
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
    destacada: false,
  },
  {
    id: 3,
    titulo: 'Villa de lujo con piscina',
    ubicacion: 'Sosúa',
    precio: 'US$ 420,000',
    tipo: 'Venta',
    habitaciones: 5,
    banos: 4,
    metros: 480,
    imagen:
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    destacada: true,
  },
  {
    id: 4,
    titulo: 'Penthouse ejecutivo',
    ubicacion: 'Santo Domingo',
    precio: 'US$ 3,500 / mes',
    tipo: 'Renta',
    habitaciones: 3,
    banos: 2,
    metros: 210,
    imagen:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80',
    destacada: false,
  },
  {
    id: 5,
    titulo: 'Casa colonial restaurada',
    ubicacion: 'Samaná',
    precio: 'US$ 195,000',
    tipo: 'Venta',
    habitaciones: 3,
    banos: 2,
    metros: 180,
    imagen:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    destacada: false,
  },
  {
    id: 6,
    titulo: 'Terreno frente al mar',
    ubicacion: 'Monte Cristi',
    precio: 'US$ 89,000',
    tipo: 'Venta',
    habitaciones: 0,
    banos: 0,
    metros: 1200,
    imagen:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
    destacada: false,
  },
]

export default function PropiedadesDestacadas() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        {/* ENCABEZADO */}
        <div className="mb-14 flex flex-col justify-between md:flex-row md:items-end">
          <div>
            <span className="text-sm font-bold tracking-widest text-[#FF2A39] uppercase">
              Selección exclusiva
            </span>
            <h2 className="mt-2 mb-3 text-4xl font-black text-[#0056B3] md:text-5xl">
              Propiedades destacadas
            </h2>
            <p className="max-w-xl text-lg text-gray-500">
              Las mejores oportunidades de inversión seleccionadas por nuestros
              expertos
            </p>
          </div>
          <Link
            href="/propiedades"
            className="mt-6 inline-flex items-center gap-2 rounded-xl border-2 border-[#0056B3] px-6 py-3 font-bold text-[#0056B3] transition-all duration-300 hover:bg-[#0056B3] hover:text-white md:mt-0"
          >
            Ver todas
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {propiedades.map((p) => (
            <div
              key={p.id}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition-all duration-300 hover:shadow-2xl"
            >
              {/* IMAGEN */}
              <div className="relative h-52 overflow-hidden">
                <div
                  className="h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${p.imagen})` }}
                />
                {/* BADGES */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold text-white ${
                      p.tipo === 'Venta' ? 'bg-[#0056B3]' : 'bg-[#FF2A39]'
                    }`}
                  >
                    {p.tipo}
                  </span>
                  {p.destacada && (
                    <span className="rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-yellow-900">
                      Destacada
                    </span>
                  )}
                </div>
                {/* FAVORITO */}
                <button className="absolute top-4 right-4 rounded-full bg-white/90 p-2 transition-colors duration-200 hover:bg-white">
                  <svg
                    className="h-4 w-4 text-gray-400 hover:text-[#FF2A39]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
              </div>

              {/* CONTENIDO */}
              <div className="p-5">
                <div className="mb-2 flex items-start justify-between">
                  <h3 className="text-lg leading-tight font-bold text-gray-900">
                    {p.titulo}
                  </h3>
                </div>

                {/* UBICACIÓN */}
                <div className="mb-3 flex items-center gap-1 text-sm text-gray-400">
                  <svg
                    className="h-4 w-4 text-[#FF2A39]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {p.ubicacion}
                </div>

                {/* CARACTERÍSTICAS */}
                <div className="mb-4 flex items-center gap-4 border-b border-gray-100 pb-4 text-sm text-gray-500">
                  {p.habitaciones > 0 && (
                    <span className="flex items-center gap-1">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                      {p.habitaciones} hab.
                    </span>
                  )}
                  {p.banos > 0 && (
                    <span className="flex items-center gap-1">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                        />
                      </svg>
                      {p.banos} baños
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                      />
                    </svg>
                    {p.metros} m²
                  </span>
                </div>

                {/* PRECIO Y ACCIÓN */}
                <div className="flex items-center justify-between">
                  <p className="text-xl font-black text-[#0056B3]">
                    {p.precio}
                  </p>
                  <Link
                    href={`/propiedades/${p.id}`}
                    className="rounded-xl bg-[#FF2A39] px-4 py-2 text-sm font-bold text-white transition-colors duration-300 hover:bg-[#0056B3]"
                  >
                    Ver detalles
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

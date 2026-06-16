import Link from 'next/link'

const regiones = [
  {
    nombre: 'Puerto Plata',
    descripcion: 'Villas, casas y locales frente al mar Caribe',
    imagen:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    propiedades: 124,
    slug: 'puerto-plata',
  },
  {
    nombre: 'Cabarete',
    descripcion: 'Apartamentos y villas en la capital del surf',
    imagen:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    propiedades: 86,
    slug: 'cabarete',
  },
  {
    nombre: 'Sosúa',
    descripcion: 'Residencias de lujo y propiedades comerciales',
    imagen:
      'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=800&q=80',
    propiedades: 98,
    slug: 'sosua',
  },
  {
    nombre: 'Santo Domingo',
    descripcion: 'Inversión y negocios en la capital del país',
    imagen:
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
    propiedades: 215,
    slug: 'santo-domingo',
  },
  {
    nombre: 'Samaná',
    descripcion: 'Naturaleza tropical y exclusividad costera',
    imagen:
      'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80',
    propiedades: 67,
    slug: 'samana',
  },
  {
    nombre: 'Monte Cristi',
    descripcion: 'Oportunidades únicas en el norte del país',
    imagen:
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80',
    propiedades: 43,
    slug: 'monte-cristi',
  },
]

export default function SeccionRegiones() {
  return (
    <section className="bg-gray-50 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        {/* ENCABEZADO */}
        <div className="mb-14 text-center">
          <span className="text-sm font-bold tracking-widest text-[#FF2A39] uppercase">
            República Dominicana
          </span>
          <h2 className="mt-2 mb-4 text-4xl font-black text-[#0056B3] md:text-5xl">
            Explora por región
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-500">
            Encuentra la propiedad perfecta en las mejores zonas del país
          </p>
        </div>

        {/* GRID DE REGIONES */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {regiones.map((region) => (
            <Link
              key={region.slug}
              href={`/${region.slug}`}
              className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl"
            >
              {/* IMAGEN */}
              <div
                className="h-64 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${region.imagen})` }}
              />

              {/* CAPA OSCURA */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

              {/* CONTENIDO */}
              <div className="absolute right-0 bottom-0 left-0 p-6">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="mb-1 text-2xl font-black text-white">
                      {region.nombre}
                    </h3>
                    <p className="text-sm text-white/70">
                      {region.descripcion}
                    </p>
                  </div>
                  <div className="ml-4 text-right">
                    <p className="text-2xl font-black text-[#FF2A39]">
                      {region.propiedades}
                    </p>
                    <p className="text-xs tracking-wider text-white/60 uppercase">
                      propiedades
                    </p>
                  </div>
                </div>

                {/* BOTÓN */}
                <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span>Ver propiedades</span>
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
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

import Link from 'next/link'

const regiones = [
  {
    nombre: 'Puerto Plata',
    descripcion: 'Villas, casas y locales frente al mar Caribe',
    imagen: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    propiedades: 124,
    slug: 'puerto-plata',
  },
  {
    nombre: 'Cabarete',
    descripcion: 'Apartamentos y villas en la capital del surf',
    imagen: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    propiedades: 86,
    slug: 'cabarete',
  },
  {
    nombre: 'Sosúa',
    descripcion: 'Residencias de lujo y propiedades comerciales',
    imagen: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=800&q=80',
    propiedades: 98,
    slug: 'sosua',
  },
  {
    nombre: 'Santo Domingo',
    descripcion: 'Inversión y negocios en la capital del país',
    imagen: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
    propiedades: 215,
    slug: 'santo-domingo',
  },
  {
    nombre: 'Samaná',
    descripcion: 'Naturaleza tropical y exclusividad costera',
    imagen: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80',
    propiedades: 67,
    slug: 'samana',
  },
  {
    nombre: 'Monte Cristi',
    descripcion: 'Oportunidades únicas en el norte del país',
    imagen: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80',
    propiedades: 43,
    slug: 'monte-cristi',
  },
]

export default function SeccionRegiones() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* ENCABEZADO */}
        <div className="text-center mb-14">
          <span className="text-[#FF2A39] text-sm font-bold tracking-widest uppercase">
            República Dominicana
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0056B3] mt-2 mb-4">
            Explora por región
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Encuentra la propiedad perfecta en las mejores zonas del país
          </p>
        </div>

        {/* GRID DE REGIONES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regiones.map((region) => (
            <Link
              key={region.slug}
              href={`/${region.slug}`}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              {/* IMAGEN */}
              <div
                className="h-64 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${region.imagen})` }}
              />

              {/* CAPA OSCURA */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

              {/* CONTENIDO */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-white text-2xl font-black mb-1">
                      {region.nombre}
                    </h3>
                    <p className="text-white/70 text-sm">
                      {region.descripcion}
                    </p>
                  </div>
                  <div className="text-right ml-4">
                    <p className="text-[#FF2A39] text-2xl font-black">
                      {region.propiedades}
                    </p>
                    <p className="text-white/60 text-xs uppercase tracking-wider">
                      propiedades
                    </p>
                  </div>
                </div>

                {/* BOTÓN */}
                <div className="mt-4 flex items-center gap-2 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Ver propiedades</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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
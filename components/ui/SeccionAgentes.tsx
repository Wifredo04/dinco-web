import Link from 'next/link'

const agentes = [
  {
    id: 1,
    nombre: 'Carlos Durán',
    cargo: 'Agente Senior',
    region: 'Puerto Plata',
    idiomas: ['Español', 'Inglés'],
    propiedades: 48,
    foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    whatsapp: '18091234567',
    email: 'carlos@dinco.com',
  },
  {
    id: 2,
    nombre: 'María González',
    cargo: 'Agente Inmobiliaria',
    region: 'Cabarete',
    idiomas: ['Español', 'Inglés', 'Francés'],
    propiedades: 35,
    foto: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    whatsapp: '18097654321',
    email: 'maria@dinco.com',
  },
  {
    id: 3,
    nombre: 'Roberto Méndez',
    cargo: 'Agente Comercial',
    region: 'Santo Domingo',
    idiomas: ['Español', 'Inglés', 'Alemán'],
    propiedades: 62,
    foto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    whatsapp: '18099876543',
    email: 'roberto@dinco.com',
  },
  {
    id: 4,
    nombre: 'Ana Martínez',
    cargo: 'Agente de Lujo',
    region: 'Sosúa',
    idiomas: ['Español', 'Inglés', 'Italiano'],
    propiedades: 29,
    foto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    whatsapp: '18091112233',
    email: 'ana@dinco.com',
  },
]

export default function SeccionAgentes() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* ENCABEZADO */}
        <div className="text-center mb-14">
          <span className="text-[#FF2A39] text-sm font-bold tracking-widest uppercase">
            Nuestro equipo
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0056B3] mt-2 mb-4">
            Agentes especializados
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Expertos en cada región listos para asesorarte y encontrar la propiedad ideal
          </p>
        </div>

        {/* GRID AGENTES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {agentes.map((agente) => (
            <div
              key={agente.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* FOTO */}
              <div className="relative h-56 overflow-hidden">
                <div
                  className="h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${agente.foto})` }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-[#FF2A39] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {agente.region}
                  </span>
                </div>
              </div>

              {/* CONTENIDO */}
              <div className="p-5">
                <h3 className="text-gray-900 font-black text-lg">{agente.nombre}</h3>
                <p className="text-[#0056B3] text-sm font-semibold mb-2">{agente.cargo}</p>

                {/* IDIOMAS */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {agente.idiomas.map((idioma) => (
                    <span key={idioma} className="text-xs bg-blue-50 text-[#0056B3] px-2 py-0.5 rounded-full">
                      {idioma}
                    </span>
                  ))}
                </div>

                {/* PROPIEDADES */}
                <p className="text-gray-400 text-sm mb-4">
                  <span className="text-[#0056B3] font-black text-lg">{agente.propiedades}</span> propiedades activas
                </p>

                {/* BOTONES CONTACTO */}
<div className="flex gap-2">

  <a
    href={`https://wa.me/${agente.whatsapp}`}
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1 bg-green-500 hover:bg-green-600 text-white text-xs font-bold py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-colors duration-300"
  >
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>

    WhatsApp
  </a>

  <a
    href={`mailto:${agente.email}`}
    className="flex-1 bg-[#0056B3] hover:bg-[#003d82] text-white text-xs font-bold py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-colors duration-300"
  >
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>

    Email
  </a>

</div>
              </div>
            </div>
          ))}
        </div>

        {/* VER TODOS */}
        <div className="text-center mt-12">
          <Link
            href="/agentes"
            className="inline-flex items-center gap-2 bg-[#0056B3] hover:bg-[#FF2A39] text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Ver todos los agentes
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  )
}
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

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
  {
    id: 5,
    nombre: 'Pedro Reyes',
    cargo: 'Agente Internacional',
    region: 'Samaná',
    idiomas: ['Español', 'Inglés', 'Portugués'],
    propiedades: 21,
    foto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    whatsapp: '18094445566',
    email: 'pedro@dinco.com',
  },
  {
    id: 6,
    nombre: 'Laura Sánchez',
    cargo: 'Agente Residencial',
    region: 'Monte Cristi',
    idiomas: ['Español', 'Inglés'],
    propiedades: 17,
    foto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80',
    whatsapp: '18097778899',
    email: 'laura@dinco.com',
  },
]

const regiones = [
  'Todas',
  'Puerto Plata',
  'Cabarete',
  'Sosúa',
  'Santo Domingo',
  'Samaná',
  'Monte Cristi',
]

export default function Agentes() {
  return (
    <main>
      <Navbar />

      {/* HERO */}
      <section className="bg-[#0056B3] px-6 pt-32 pb-16">
        <div className="mx-auto max-w-7xl text-center">
          <span className="mb-4 inline-block rounded-full bg-[#FF2A39] px-4 py-1.5 text-xs font-bold tracking-widest text-white uppercase">
            Nuestro equipo
          </span>
          <h1 className="mb-4 text-5xl font-black text-white">
            Directorio de agentes
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/75">
            Expertos en cada región listos para asesorarte y encontrar la
            propiedad ideal
          </p>
        </div>
      </section>

      {/* FILTRO POR REGIÓN */}
      <section className="sticky top-0 z-40 border-b border-gray-100 bg-white px-6 py-4 shadow-sm">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-2">
          {regiones.map((region) => (
            <button
              key={region}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                region === 'Todas'
                  ? 'bg-[#0056B3] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-[#0056B3] hover:text-white'
              }`}
            >
              {region}
            </button>
          ))}
        </div>
      </section>

      {/* GRID DE AGENTES */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {agentes.map((agente) => (
            <div
              key={agente.id}
              className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-xl"
            >
              {/* FOTO */}
              <div className="relative h-64 overflow-hidden">
                <div
                  className="h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${agente.foto})` }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="rounded-full bg-[#FF2A39] px-3 py-1 text-xs font-bold text-white">
                    {agente.region}
                  </span>
                </div>
              </div>

              {/* CONTENIDO */}
              <div className="p-6">
                <h3 className="mb-1 text-xl font-black text-gray-900">
                  {agente.nombre}
                </h3>
                <p className="mb-3 text-sm font-semibold text-[#0056B3]">
                  {agente.cargo}
                </p>

                <div className="mb-4 flex flex-wrap gap-1">
                  {agente.idiomas.map((idioma) => (
                    <span
                      key={idioma}
                      className="rounded-full bg-blue-50 px-2 py-0.5 text-xs text-[#0056B3]"
                    >
                      {idioma}
                    </span>
                  ))}
                </div>

                <p className="mb-5 text-sm text-gray-400">
                  <span className="text-xl font-black text-[#0056B3]">
                    {agente.propiedades}
                  </span>{' '}
                  propiedades activas
                </p>

                <div className="flex gap-2">
                  <a
                    href={`https://wa.me/${agente.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-xl bg-green-500 py-2.5 text-center text-sm font-bold text-white transition-colors duration-300 hover:bg-green-600"
                  >
                    WhatsApp
                  </a>
                  <a
                    href={`mailto:${agente.email}`}
                    className="flex-1 rounded-xl bg-[#0056B3] py-2.5 text-center text-sm font-bold text-white transition-colors duration-300 hover:bg-[#003d82]"
                  >
                    Email
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const agentes = [
  { id: 1, nombre: 'Carlos Durán', cargo: 'Agente Senior', region: 'Puerto Plata', idiomas: ['Español', 'Inglés'], propiedades: 48, foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80', whatsapp: '18091234567', email: 'carlos@dinco.com' },
  { id: 2, nombre: 'María González', cargo: 'Agente Inmobiliaria', region: 'Cabarete', idiomas: ['Español', 'Inglés', 'Francés'], propiedades: 35, foto: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80', whatsapp: '18097654321', email: 'maria@dinco.com' },
  { id: 3, nombre: 'Roberto Méndez', cargo: 'Agente Comercial', region: 'Santo Domingo', idiomas: ['Español', 'Inglés', 'Alemán'], propiedades: 62, foto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80', whatsapp: '18099876543', email: 'roberto@dinco.com' },
  { id: 4, nombre: 'Ana Martínez', cargo: 'Agente de Lujo', region: 'Sosúa', idiomas: ['Español', 'Inglés', 'Italiano'], propiedades: 29, foto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80', whatsapp: '18091112233', email: 'ana@dinco.com' },
  { id: 5, nombre: 'Pedro Reyes', cargo: 'Agente Internacional', region: 'Samaná', idiomas: ['Español', 'Inglés', 'Portugués'], propiedades: 21, foto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80', whatsapp: '18094445566', email: 'pedro@dinco.com' },
  { id: 6, nombre: 'Laura Sánchez', cargo: 'Agente Residencial', region: 'Monte Cristi', idiomas: ['Español', 'Inglés'], propiedades: 17, foto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80', whatsapp: '18097778899', email: 'laura@dinco.com' },
]

const regiones = ['Todas', 'Puerto Plata', 'Cabarete', 'Sosúa', 'Santo Domingo', 'Samaná', 'Monte Cristi']

export default function Agentes() {
  return (
    <main>
      <Navbar />

      {/* HERO */}
      <section className="pt-32 pb-16 px-6 bg-[#0056B3]">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block bg-[#FF2A39] text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-widest uppercase mb-4">
            Nuestro equipo
          </span>
          <h1 className="text-5xl font-black text-white mb-4">Directorio de agentes</h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto">
            Expertos en cada región listos para asesorarte y encontrar la propiedad ideal
          </p>
        </div>
      </section>

      {/* FILTRO POR REGIÓN */}
      <section className="bg-white border-b border-gray-100 py-4 px-6 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-2">
          {regiones.map((region) => (
            <button
              key={region}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
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
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agentes.map((agente) => (
            <div key={agente.id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">

              {/* FOTO */}
              <div className="relative h-64 overflow-hidden">
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
              <div className="p-6">
                <h3 className="text-gray-900 font-black text-xl mb-1">{agente.nombre}</h3>
                <p className="text-[#0056B3] text-sm font-semibold mb-3">{agente.cargo}</p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {agente.idiomas.map((idioma) => (
                    <span key={idioma} className="text-xs bg-blue-50 text-[#0056B3] px-2 py-0.5 rounded-full">
                      {idioma}
                    </span>
                  ))}
                </div>

                <p className="text-gray-400 text-sm mb-5">
                  <span className="text-[#0056B3] font-black text-xl">{agente.propiedades}</span> propiedades activas
                </p>

                <div className="flex gap-2">
                  <a
                    href={`https://wa.me/${agente.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white text-sm font-bold py-2.5 rounded-xl text-center transition-colors duration-300"
                  >
                    WhatsApp
                  </a>
                  <a
                    href={`mailto:${agente.email}`}
                    className="flex-1 bg-[#0056B3] hover:bg-[#003d82] text-white text-sm font-bold py-2.5 rounded-xl text-center transition-colors duration-300"
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
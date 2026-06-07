import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

const valores = [
  { titulo: 'Transparencia', desc: 'Cada transacción es clara y honesta. Sin letra pequeña, sin sorpresas.' },
  { titulo: 'Excelencia', desc: 'Más de 12 años perfeccionando cada detalle del servicio inmobiliario.' },
  { titulo: 'Alcance global', desc: 'Presencia en más de 40 países conectando compradores e inversores.' },
  { titulo: 'Compromiso', desc: 'Tu inversión es nuestra prioridad. Acompañamos cada paso del proceso.' },
]

const equipo = [
  { nombre: 'Lic. Rafael Durán', cargo: 'Director General', foto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80' },
  { nombre: 'Arq. Carmen Durán', cargo: 'Directora de Proyectos', foto: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80' },
  { nombre: 'Lic. Miguel Santos', cargo: 'Director Comercial', foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80' },
]

export default function Nosotros() {
  return (
    <main>
      <Navbar />

      {/* HERO */}
      <section
        className="relative pt-32 pb-20 px-6 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80)' }}
      >
        <div className="absolute inset-0 bg-[#0056B3]/85" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="inline-block bg-[#FF2A39] text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-widest uppercase mb-4">
            Nuestra historia
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            Más de 12 años construyendo sueños
          </h1>
          <p className="text-white/80 text-xl leading-relaxed">
            DINCO nació en Puerto Plata con una visión clara — hacer que cada dominicano y cada inversor del mundo pueda acceder a la mejor propiedad, con el mejor servicio y total transparencia.
          </p>
        </div>
      </section>

      {/* MISIÓN Y VISIÓN */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-gray-50 rounded-3xl p-8">
            <span className="text-[#FF2A39] text-sm font-bold tracking-widest uppercase">Nuestra misión</span>
            <h2 className="text-3xl font-black text-[#0056B3] mt-2 mb-4">¿Para qué existimos?</h2>
            <p className="text-gray-600 leading-relaxed">
              Conectar personas con propiedades que transformen sus vidas, ya sea como hogar, inversión o negocio. Ofrecemos un servicio inmobiliario completo, ético y accesible desde cualquier parte del mundo.
            </p>
          </div>
          <div className="bg-[#0056B3] rounded-3xl p-8">
            <span className="text-[#FF2A39] text-sm font-bold tracking-widest uppercase">Nuestra visión</span>
            <h2 className="text-3xl font-black text-white mt-2 mb-4">¿Hacia dónde vamos?</h2>
            <p className="text-white/80 leading-relaxed">
              Ser la plataforma inmobiliaria de referencia en el Caribe y América Latina, reconocida por su tecnología, transparencia y el impacto positivo que generamos en cada comunidad donde operamos.
            </p>
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#FF2A39] text-sm font-bold tracking-widest uppercase">Lo que nos define</span>
            <h2 className="text-4xl font-black text-[#0056B3] mt-2">Nuestros valores</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((valor) => (
              <div key={valor.titulo} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-14 h-14 bg-[#0056B3]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 bg-[#0056B3] rounded-full" />
                </div>
                <h3 className="font-black text-gray-900 text-lg mb-2">{valor.titulo}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{valor.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EQUIPO DIRECTIVO */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#FF2A39] text-sm font-bold tracking-widest uppercase">Las personas detrás de DINCO</span>
            <h2 className="text-4xl font-black text-[#0056B3] mt-2">Equipo directivo</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {equipo.map((persona) => (
              <div key={persona.nombre} className="text-center group">
                <div
                  className="w-40 h-40 rounded-full bg-cover bg-center mx-auto mb-4 border-4 border-[#0056B3] transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundImage: `url(${persona.foto})` }}
                />
                <h3 className="font-black text-gray-900 text-lg">{persona.nombre}</h3>
                <p className="text-[#0056B3] text-sm font-semibold">{persona.cargo}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-[#FF2A39]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-4">¿Listo para encontrar tu propiedad ideal?</h2>
          <p className="text-white/80 text-lg mb-8">
            Nuestro equipo está disponible para asesorarte sin compromiso
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              href="/propiedades"
              className="bg-white text-[#FF2A39] font-black px-8 py-4 rounded-xl hover:bg-[#0056B3] hover:text-white transition-all duration-300"
            >
              Ver propiedades
            </Link>
            <Link
              href="/contacto"
              className="bg-transparent border-2 border-white text-white font-black px-8 py-4 rounded-xl hover:bg-white hover:text-[#FF2A39] transition-all duration-300"
            >
              Contactar ahora
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

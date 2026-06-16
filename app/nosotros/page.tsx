import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

const valores = [
  {
    titulo: 'Transparencia',
    desc: 'Cada transacción es clara y honesta. Sin letra pequeña, sin sorpresas.',
  },
  {
    titulo: 'Excelencia',
    desc: 'Más de 12 años perfeccionando cada detalle del servicio inmobiliario.',
  },
  {
    titulo: 'Alcance global',
    desc: 'Presencia en más de 40 países conectando compradores e inversores.',
  },
  {
    titulo: 'Compromiso',
    desc: 'Tu inversión es nuestra prioridad. Acompañamos cada paso del proceso.',
  },
]

const equipo = [
  {
    nombre: 'Lic. Rafael Durán',
    cargo: 'Director General',
    foto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
  },
  {
    nombre: 'Arq. Carmen Durán',
    cargo: 'Directora de Proyectos',
    foto: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
  },
  {
    nombre: 'Lic. Miguel Santos',
    cargo: 'Director Comercial',
    foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
]

export default function Nosotros() {
  return (
    <main>
      <Navbar />

      {/* HERO */}
      <section
        className="relative bg-cover bg-center px-6 pt-32 pb-20"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-[#0056B3]/85" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <span className="mb-4 inline-block rounded-full bg-[#FF2A39] px-4 py-1.5 text-xs font-bold tracking-widest text-white uppercase">
            Nuestra historia
          </span>
          <h1 className="mb-6 text-5xl font-black text-white md:text-6xl">
            Más de 12 años construyendo sueños
          </h1>
          <p className="text-xl leading-relaxed text-white/80">
            DINCO nació en Puerto Plata con una visión clara — hacer que cada
            dominicano y cada inversor del mundo pueda acceder a la mejor
            propiedad, con el mejor servicio y total transparencia.
          </p>
        </div>
      </section>

      {/* MISIÓN Y VISIÓN */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-2">
          <div className="rounded-3xl bg-gray-50 p-8">
            <span className="text-sm font-bold tracking-widest text-[#FF2A39] uppercase">
              Nuestra misión
            </span>
            <h2 className="mt-2 mb-4 text-3xl font-black text-[#0056B3]">
              ¿Para qué existimos?
            </h2>
            <p className="leading-relaxed text-gray-600">
              Conectar personas con propiedades que transformen sus vidas, ya
              sea como hogar, inversión o negocio. Ofrecemos un servicio
              inmobiliario completo, ético y accesible desde cualquier parte del
              mundo.
            </p>
          </div>
          <div className="rounded-3xl bg-[#0056B3] p-8">
            <span className="text-sm font-bold tracking-widest text-[#FF2A39] uppercase">
              Nuestra visión
            </span>
            <h2 className="mt-2 mb-4 text-3xl font-black text-white">
              ¿Hacia dónde vamos?
            </h2>
            <p className="leading-relaxed text-white/80">
              Ser la plataforma inmobiliaria de referencia en el Caribe y
              América Latina, reconocida por su tecnología, transparencia y el
              impacto positivo que generamos en cada comunidad donde operamos.
            </p>
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="text-sm font-bold tracking-widest text-[#FF2A39] uppercase">
              Lo que nos define
            </span>
            <h2 className="mt-2 text-4xl font-black text-[#0056B3]">
              Nuestros valores
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {valores.map((valor) => (
              <div
                key={valor.titulo}
                className="rounded-2xl bg-white p-6 text-center shadow-md transition-all duration-300 hover:shadow-xl"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0056B3]/10">
                  <div className="h-6 w-6 rounded-full bg-[#0056B3]" />
                </div>
                <h3 className="mb-2 text-lg font-black text-gray-900">
                  {valor.titulo}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500">
                  {valor.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EQUIPO DIRECTIVO */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="text-sm font-bold tracking-widest text-[#FF2A39] uppercase">
              Las personas detrás de DINCO
            </span>
            <h2 className="mt-2 text-4xl font-black text-[#0056B3]">
              Equipo directivo
            </h2>
          </div>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
            {equipo.map((persona) => (
              <div key={persona.nombre} className="group text-center">
                <div
                  className="mx-auto mb-4 h-40 w-40 rounded-full border-4 border-[#0056B3] bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundImage: `url(${persona.foto})` }}
                />
                <h3 className="text-lg font-black text-gray-900">
                  {persona.nombre}
                </h3>
                <p className="text-sm font-semibold text-[#0056B3]">
                  {persona.cargo}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FF2A39] px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-4xl font-black text-white">
            ¿Listo para encontrar tu propiedad ideal?
          </h2>
          <p className="mb-8 text-lg text-white/80">
            Nuestro equipo está disponible para asesorarte sin compromiso
          </p>
          <div className="flex flex-col justify-center gap-4 md:flex-row">
            <Link
              href="/propiedades"
              className="rounded-xl bg-white px-8 py-4 font-black text-[#FF2A39] transition-all duration-300 hover:bg-[#0056B3] hover:text-white"
            >
              Ver propiedades
            </Link>
            <Link
              href="/contacto"
              className="rounded-xl border-2 border-white bg-transparent px-8 py-4 font-black text-white transition-all duration-300 hover:bg-white hover:text-[#FF2A39]"
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

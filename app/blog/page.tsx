import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

const articulos = [
  {
    id: 1,
    titulo:
      'Guía completa para comprar propiedad en República Dominicana siendo extranjero',
    categoria: 'Guía del comprador',
    fecha: '15 Mayo 2025',
    tiempo: '8 min lectura',
    imagen:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    resumen:
      'Todo lo que necesitas saber sobre el proceso legal, impuestos y requisitos para adquirir una propiedad en RD como ciudadano extranjero.',
    destacado: true,
  },
  {
    id: 2,
    titulo:
      'Las 5 zonas con mayor plusvalía en la costa norte dominicana en 2025',
    categoria: 'Mercado inmobiliario',
    fecha: '10 Mayo 2025',
    tiempo: '5 min lectura',
    imagen:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    resumen:
      'Analizamos el comportamiento del mercado en Puerto Plata, Cabarete, Sosúa y sus alrededores para identificar las mejores oportunidades de inversión.',
    destacado: true,
  },
  {
    id: 3,
    titulo: 'Cómo rentar tu propiedad en Cabarete y generar ingresos pasivos',
    categoria: 'Inversión',
    fecha: '5 Mayo 2025',
    tiempo: '6 min lectura',
    imagen:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    resumen:
      'Estrategias probadas para maximizar el retorno de tu inversión inmobiliaria a través del alquiler vacacional y a largo plazo.',
    destacado: false,
  },
  {
    id: 4,
    titulo: 'Impuestos y gastos al comprar propiedad en República Dominicana',
    categoria: 'Legal y financiero',
    fecha: '28 Abril 2025',
    tiempo: '7 min lectura',
    imagen:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
    resumen:
      'Desglose completo de todos los impuestos, honorarios y gastos adicionales que debes considerar al momento de comprar una propiedad.',
    destacado: false,
  },
  {
    id: 5,
    titulo: 'Samaná: el secreto mejor guardado del Caribe para invertir',
    categoria: 'Destinos',
    fecha: '20 Abril 2025',
    tiempo: '4 min lectura',
    imagen:
      'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80',
    resumen:
      'Por qué Samaná se está convirtiendo en uno de los destinos inmobiliarios más atractivos para inversores internacionales.',
    destacado: false,
  },
  {
    id: 6,
    titulo: 'Qué debes verificar antes de firmar un contrato de compraventa',
    categoria: 'Legal y financiero',
    fecha: '15 Abril 2025',
    tiempo: '9 min lectura',
    imagen:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
    resumen:
      'Lista de verificación completa para proteger tu inversión y evitar sorpresas durante el proceso de compra de una propiedad.',
    destacado: false,
  },
]

const categorias = [
  'Todas',
  'Guía del comprador',
  'Mercado inmobiliario',
  'Inversión',
  'Legal y financiero',
  'Destinos',
]

export default function Blog() {
  const destacados = articulos.filter((a) => a.destacado)
  const resto = articulos.filter((a) => !a.destacado)

  return (
    <main>
      <Navbar />

      {/* HERO */}
      <section className="bg-[#0056B3] px-6 pt-32 pb-16">
        <div className="mx-auto max-w-7xl text-center">
          <span className="mb-4 inline-block rounded-full bg-[#FF2A39] px-4 py-1.5 text-xs font-bold tracking-widest text-white uppercase">
            Conocimiento inmobiliario
          </span>
          <h1 className="mb-4 text-5xl font-black text-white">Blog DINCO</h1>
          <p className="mx-auto max-w-2xl text-lg text-white/75">
            Guías, noticias del mercado y recursos para tomar la mejor decisión
            inmobiliaria
          </p>
        </div>
      </section>

      {/* CATEGORÍAS */}
      <section className="sticky top-0 z-40 border-b border-gray-100 bg-white px-6 py-4 shadow-sm">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-2">
          {categorias.map((cat) => (
            <button
              key={cat}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                cat === 'Todas'
                  ? 'bg-[#0056B3] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-[#0056B3] hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          {/* ARTÍCULOS DESTACADOS */}
          <div className="mb-16">
            <h2 className="mb-8 text-2xl font-black text-gray-900">
              Artículos destacados
            </h2>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {destacados.map((articulo) => (
                <Link
                  key={articulo.id}
                  href={`/blog/${articulo.id}`}
                  className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-2xl"
                >
                  <div className="relative h-64 overflow-hidden">
                    <div
                      className="h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${articulo.imagen})` }}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="rounded-full bg-[#FF2A39] px-3 py-1 text-xs font-bold text-white">
                        {articulo.categoria}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-3 flex items-center gap-3 text-xs text-gray-400">
                      <span>{articulo.fecha}</span>
                      <span>·</span>
                      <span>{articulo.tiempo}</span>
                    </div>
                    <h3 className="mb-3 text-xl font-black text-gray-900 transition-colors group-hover:text-[#0056B3]">
                      {articulo.titulo}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-500">
                      {articulo.resumen}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-sm font-bold text-[#0056B3]">
                      Leer artículo
                      <svg
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
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

          {/* TODOS LOS ARTÍCULOS */}
          <div>
            <h2 className="mb-8 text-2xl font-black text-gray-900">
              Más artículos
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {resto.map((articulo) => (
                <Link
                  key={articulo.id}
                  href={`/blog/${articulo.id}`}
                  className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-xl"
                >
                  <div className="relative h-44 overflow-hidden">
                    <div
                      className="h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${articulo.imagen})` }}
                    />
                    <div className="absolute top-3 left-3">
                      <span className="rounded-full bg-[#0056B3] px-2.5 py-1 text-xs font-bold text-white">
                        {articulo.categoria}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="mb-2 flex items-center gap-2 text-xs text-gray-400">
                      <span>{articulo.fecha}</span>
                      <span>·</span>
                      <span>{articulo.tiempo}</span>
                    </div>
                    <h3 className="text-sm leading-snug font-black text-gray-900 transition-colors group-hover:text-[#0056B3]">
                      {articulo.titulo}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* NEWSLETTER */}
          <div className="mt-16 rounded-3xl bg-[#0056B3] p-10 text-center">
            <h3 className="mb-3 text-3xl font-black text-white">
              Recibe el mercado en tu correo
            </h3>
            <p className="mb-6 text-white/75">
              Análisis semanal del mercado inmobiliario dominicano directo a tu
              bandeja de entrada
            </p>
            <div className="mx-auto flex max-w-md gap-3">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 rounded-xl px-5 py-3 text-sm text-gray-700 outline-none"
              />
              <button className="rounded-xl bg-[#FF2A39] px-6 py-3 font-bold whitespace-nowrap text-white transition-all duration-300 hover:bg-white hover:text-[#FF2A39]">
                Suscribirme
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

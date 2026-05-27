import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

const articulos = [
  {
    id: 1,
    titulo: 'Guía completa para comprar propiedad en República Dominicana siendo extranjero',
    categoria: 'Guía del comprador',
    fecha: '15 Mayo 2025',
    tiempo: '8 min lectura',
    imagen: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    resumen: 'Todo lo que necesitas saber sobre el proceso legal, impuestos y requisitos para adquirir una propiedad en RD como ciudadano extranjero.',
    destacado: true,
  },
  {
    id: 2,
    titulo: 'Las 5 zonas con mayor plusvalía en la costa norte dominicana en 2025',
    categoria: 'Mercado inmobiliario',
    fecha: '10 Mayo 2025',
    tiempo: '5 min lectura',
    imagen: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    resumen: 'Analizamos el comportamiento del mercado en Puerto Plata, Cabarete, Sosúa y sus alrededores para identificar las mejores oportunidades de inversión.',
    destacado: true,
  },
  {
    id: 3,
    titulo: 'Cómo rentar tu propiedad en Cabarete y generar ingresos pasivos',
    categoria: 'Inversión',
    fecha: '5 Mayo 2025',
    tiempo: '6 min lectura',
    imagen: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    resumen: 'Estrategias probadas para maximizar el retorno de tu inversión inmobiliaria a través del alquiler vacacional y a largo plazo.',
    destacado: false,
  },
  {
    id: 4,
    titulo: 'Impuestos y gastos al comprar propiedad en República Dominicana',
    categoria: 'Legal y financiero',
    fecha: '28 Abril 2025',
    tiempo: '7 min lectura',
    imagen: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
    resumen: 'Desglose completo de todos los impuestos, honorarios y gastos adicionales que debes considerar al momento de comprar una propiedad.',
    destacado: false,
  },
  {
    id: 5,
    titulo: 'Samaná: el secreto mejor guardado del Caribe para invertir',
    categoria: 'Destinos',
    fecha: '20 Abril 2025',
    tiempo: '4 min lectura',
    imagen: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80',
    resumen: 'Por qué Samaná se está convirtiendo en uno de los destinos inmobiliarios más atractivos para inversores internacionales.',
    destacado: false,
  },
  {
    id: 6,
    titulo: 'Qué debes verificar antes de firmar un contrato de compraventa',
    categoria: 'Legal y financiero',
    fecha: '15 Abril 2025',
    tiempo: '9 min lectura',
    imagen: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
    resumen: 'Lista de verificación completa para proteger tu inversión y evitar sorpresas durante el proceso de compra de una propiedad.',
    destacado: false,
  },
]

const categorias = ['Todas', 'Guía del comprador', 'Mercado inmobiliario', 'Inversión', 'Legal y financiero', 'Destinos']

export default function Blog() {
  const destacados = articulos.filter((a) => a.destacado)
  const resto = articulos.filter((a) => !a.destacado)

  return (
    <main>
      <Navbar />

      {/* HERO */}
      <section className="pt-32 pb-16 px-6 bg-[#0056B3]">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block bg-[#FF2A39] text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-widest uppercase mb-4">
            Conocimiento inmobiliario
          </span>
          <h1 className="text-5xl font-black text-white mb-4">Blog DINCO</h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto">
            Guías, noticias del mercado y recursos para tomar la mejor decisión inmobiliaria
          </p>
        </div>
      </section>

      {/* CATEGORÍAS */}
      <section className="bg-white border-b border-gray-100 py-4 px-6 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-2">
          {categorias.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
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

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">

          {/* ARTÍCULOS DESTACADOS */}
          <div className="mb-16">
            <h2 className="text-2xl font-black text-gray-900 mb-8">Artículos destacados</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {destacados.map((articulo) => (
                <Link
                  key={articulo.id}
                  href={`/blog/${articulo.id}`}
                  className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  <div className="relative overflow-hidden h-64">
                    <div
                      className="h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${articulo.imagen})` }}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#FF2A39] text-white text-xs font-bold px-3 py-1 rounded-full">
                        {articulo.categoria}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-gray-400 text-xs mb-3">
                      <span>{articulo.fecha}</span>
                      <span>·</span>
                      <span>{articulo.tiempo}</span>
                    </div>
                    <h3 className="text-gray-900 font-black text-xl mb-3 group-hover:text-[#0056B3] transition-colors">
                      {articulo.titulo}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{articulo.resumen}</p>
                    <div className="flex items-center gap-2 text-[#0056B3] font-bold text-sm mt-4">
                      Leer artículo
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* TODOS LOS ARTÍCULOS */}
          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-8">Más artículos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resto.map((articulo) => (
                <Link
                  key={articulo.id}
                  href={`/blog/${articulo.id}`}
                  className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="relative overflow-hidden h-44">
                    <div
                      className="h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${articulo.imagen})` }}
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-[#0056B3] text-white text-xs font-bold px-2.5 py-1 rounded-full">
                        {articulo.categoria}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 text-gray-400 text-xs mb-2">
                      <span>{articulo.fecha}</span>
                      <span>·</span>
                      <span>{articulo.tiempo}</span>
                    </div>
                    <h3 className="text-gray-900 font-black text-sm leading-snug group-hover:text-[#0056B3] transition-colors">
                      {articulo.titulo}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* NEWSLETTER */}
          <div className="mt-16 bg-[#0056B3] rounded-3xl p-10 text-center">
            <h3 className="text-3xl font-black text-white mb-3">
              Recibe el mercado en tu correo
            </h3>
            <p className="text-white/75 mb-6">
              Análisis semanal del mercado inmobiliario dominicano directo a tu bandeja de entrada
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-5 py-3 rounded-xl outline-none text-gray-700 text-sm"
              />
              <button className="bg-[#FF2A39] hover:bg-white hover:text-[#FF2A39] text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 whitespace-nowrap">
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
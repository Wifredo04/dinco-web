import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

const propiedadesEjemplo = [
  { id: 1, titulo: 'Villa frente al mar', precio: 'US$ 285,000', tipo: 'Venta', habitaciones: 4, banos: 3, metros: 320, imagen: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80', destacada: true },
  { id: 2, titulo: 'Apartamento moderno', precio: 'US$ 145,000', tipo: 'Venta', habitaciones: 2, banos: 2, metros: 95, imagen: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80', destacada: false },
  { id: 3, titulo: 'Casa con jardín', precio: 'US$ 1,800 / mes', tipo: 'Renta', habitaciones: 3, banos: 2, metros: 180, imagen: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80', destacada: false },
  { id: 4, titulo: 'Penthouse ejecutivo', precio: 'US$ 3,500 / mes', tipo: 'Renta', habitaciones: 3, banos: 2, metros: 210, imagen: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80', destacada: false },
  { id: 5, titulo: 'Villa de lujo', precio: 'US$ 420,000', tipo: 'Venta', habitaciones: 5, banos: 4, metros: 480, imagen: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80', destacada: true },
  { id: 6, titulo: 'Terreno residencial', precio: 'US$ 89,000', tipo: 'Venta', habitaciones: 0, banos: 0, metros: 1200, imagen: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80', destacada: false },
]

const filtros = ['Todas', 'Venta', 'Renta', 'Casas', 'Apartamentos', 'Villas', 'Terrenos']

interface Props {
  nombre: string
  descripcion: string
  imagen: string
  propiedades: number
  slug: string
}

export default function CatalogoRegion({ nombre, descripcion, imagen, propiedades }: Props) {
  return (
    <main>
      <Navbar />

      {/* HERO REGIÓN */}
      <section
        className="relative h-80 bg-cover bg-center flex items-end"
        style={{ backgroundImage: `url(${imagen})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-10 w-full">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-2">
            <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-white">{nombre}</span>
          </div>
          <h1 className="text-5xl font-black text-white">{nombre}</h1>
          <p className="text-white/75 mt-2">{propiedades} propiedades disponibles · {descripcion}</p>
        </div>
      </section>

      {/* FILTROS */}
      <section className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap gap-3">
          {filtros.map((filtro) => (
            <button
              key={filtro}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                filtro === 'Todas'
                  ? 'bg-[#0056B3] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-[#0056B3] hover:text-white'
              }`}
            >
              {filtro}
            </button>
          ))}
        </div>
      </section>

      {/* CATÁLOGO */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {propiedadesEjemplo.map((p) => (
              <div
                key={p.id}
                className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="relative overflow-hidden h-52">
                  <div
                    className="h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${p.imagen})` }}
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full text-white ${
                      p.tipo === 'Venta' ? 'bg-[#0056B3]' : 'bg-[#FF2A39]'
                    }`}>
                      {p.tipo}
                    </span>
                    {p.destacada && (
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-yellow-400 text-yellow-900">
                        Destacada
                      </span>
                    )}
                  </div>
                  <button className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
                    <svg className="w-4 h-4 text-gray-400 hover:text-[#FF2A39]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>

                <div className="p-5">
                  <h3 className="text-gray-900 font-bold text-lg mb-1">{p.titulo}</h3>
                  <div className="flex items-center gap-1 text-gray-400 text-sm mb-3">
                    <svg className="w-4 h-4 text-[#FF2A39]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    {nombre}
                  </div>

                  <div className="flex items-center gap-4 text-gray-500 text-sm mb-4 pb-4 border-b border-gray-100">
                    {p.habitaciones > 0 && <span>{p.habitaciones} hab.</span>}
                    {p.banos > 0 && <span>{p.banos} baños</span>}
                    <span>{p.metros} m²</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-[#0056B3] font-black text-xl">{p.precio}</p>
                    <Link
                      href={`/propiedades/${p.id}`}
                      className="bg-[#FF2A39] hover:bg-[#0056B3] text-white text-sm font-bold px-4 py-2 rounded-xl transition-colors duration-300"
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

      <Footer />
    </main>
  )
}
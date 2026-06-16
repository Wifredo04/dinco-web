import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

const propiedadesEjemplo = [
  {
    id: 1,
    titulo: 'Villa frente al mar',
    precio: 'US$ 285,000',
    tipo: 'Venta',
    habitaciones: 4,
    banos: 3,
    metros: 320,
    imagen:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    destacada: true,
  },
  {
    id: 2,
    titulo: 'Apartamento moderno',
    precio: 'US$ 145,000',
    tipo: 'Venta',
    habitaciones: 2,
    banos: 2,
    metros: 95,
    imagen:
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
    destacada: false,
  },
  {
    id: 3,
    titulo: 'Casa con jardín',
    precio: 'US$ 1,800 / mes',
    tipo: 'Renta',
    habitaciones: 3,
    banos: 2,
    metros: 180,
    imagen:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    destacada: false,
  },
  {
    id: 4,
    titulo: 'Penthouse ejecutivo',
    precio: 'US$ 3,500 / mes',
    tipo: 'Renta',
    habitaciones: 3,
    banos: 2,
    metros: 210,
    imagen:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80',
    destacada: false,
  },
  {
    id: 5,
    titulo: 'Villa de lujo',
    precio: 'US$ 420,000',
    tipo: 'Venta',
    habitaciones: 5,
    banos: 4,
    metros: 480,
    imagen:
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    destacada: true,
  },
  {
    id: 6,
    titulo: 'Terreno residencial',
    precio: 'US$ 89,000',
    tipo: 'Venta',
    habitaciones: 0,
    banos: 0,
    metros: 1200,
    imagen:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
    destacada: false,
  },
]

const filtros = [
  'Todas',
  'Venta',
  'Renta',
  'Casas',
  'Apartamentos',
  'Villas',
  'Terrenos',
]

interface Props {
  nombre: string
  descripcion: string
  imagen: string
  propiedades: number
  slug: string
}

export default function CatalogoRegion({
  nombre,
  descripcion,
  imagen,
  propiedades,
}: Props) {
  return (
    <main>
      <Navbar />

      {/* HERO REGIÓN */}
      <section
        className="relative flex h-80 items-end bg-cover bg-center"
        style={{ backgroundImage: `url(${imagen})` }}
      >
        <div className="absolute inset-0 bg-linear-to-t from-black/80 to-black/20" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-10">
          <div className="mb-2 flex items-center gap-2 text-sm text-white/60">
            <Link href="/" className="transition-colors hover:text-white">
              Inicio
            </Link>
            <span>/</span>
            <span className="text-white">{nombre}</span>
          </div>
          <h1 className="text-5xl font-black text-white">{nombre}</h1>
          <p className="mt-2 text-white/75">
            {propiedades} propiedades disponibles · {descripcion}
          </p>
        </div>
      </section>

      {/* FILTROS */}
      <section className="sticky top-0 z-40 border-b border-gray-100 bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3 px-6 py-4">
          {filtros.map((filtro) => (
            <button
              key={filtro}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
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
      <section className="bg-gray-50 px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {propiedadesEjemplo.map((p) => (
              <div
                key={p.id}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition-all duration-300 hover:shadow-2xl"
              >
                <div className="relative h-52 overflow-hidden">
                  <div
                    className="h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${p.imagen})` }}
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold text-white ${
                        p.tipo === 'Venta' ? 'bg-[#0056B3]' : 'bg-[#FF2A39]'
                      }`}
                    >
                      {p.tipo}
                    </span>
                    {p.destacada && (
                      <span className="rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-yellow-900">
                        Destacada
                      </span>
                    )}
                  </div>
                  <button className="absolute top-4 right-4 rounded-full bg-white/90 p-2 transition-colors hover:bg-white">
                    <svg
                      className="h-4 w-4 text-gray-400 hover:text-[#FF2A39]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                </div>

                <div className="p-5">
                  <h3 className="mb-1 text-lg font-bold text-gray-900">
                    {p.titulo}
                  </h3>
                  <div className="mb-3 flex items-center gap-1 text-sm text-gray-400">
                    <svg
                      className="h-4 w-4 text-[#FF2A39]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                    </svg>
                    {nombre}
                  </div>

                  <div className="mb-4 flex items-center gap-4 border-b border-gray-100 pb-4 text-sm text-gray-500">
                    {p.habitaciones > 0 && <span>{p.habitaciones} hab.</span>}
                    {p.banos > 0 && <span>{p.banos} baños</span>}
                    <span>{p.metros} m²</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-xl font-black text-[#0056B3]">
                      {p.precio}
                    </p>
                    <Link
                      href={`/propiedades/${p.id}`}
                      className="rounded-xl bg-[#FF2A39] px-4 py-2 text-sm font-bold text-white transition-colors duration-300 hover:bg-[#0056B3]"
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

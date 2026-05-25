import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

const todas = [
  { id: 1, titulo: 'Villa frente al mar', region: 'Puerto Plata', precio: 'US$ 285,000', tipo: 'Venta', habitaciones: 4, banos: 3, metros: 320, imagen: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80' },
  { id: 2, titulo: 'Apartamento beachfront', region: 'Cabarete', precio: 'US$ 145,000', tipo: 'Venta', habitaciones: 2, banos: 2, metros: 95, imagen: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80' },
  { id: 3, titulo: 'Villa de lujo con piscina', region: 'Sosúa', precio: 'US$ 420,000', tipo: 'Venta', habitaciones: 5, banos: 4, metros: 480, imagen: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80' },
  { id: 4, titulo: 'Penthouse ejecutivo', region: 'Santo Domingo', precio: 'US$ 3,500 / mes', tipo: 'Renta', habitaciones: 3, banos: 2, metros: 210, imagen: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80' },
  { id: 5, titulo: 'Casa colonial restaurada', region: 'Samaná', precio: 'US$ 195,000', tipo: 'Venta', habitaciones: 3, banos: 2, metros: 180, imagen: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80' },
  { id: 6, titulo: 'Terreno frente al mar', region: 'Monte Cristi', precio: 'US$ 89,000', tipo: 'Venta', habitaciones: 0, banos: 0, metros: 1200, imagen: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80' },
  { id: 7, titulo: 'Casa moderna con piscina', region: 'Puerto Plata', precio: 'US$ 320,000', tipo: 'Venta', habitaciones: 4, banos: 3, metros: 350, imagen: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80' },
  { id: 8, titulo: 'Apartamento céntrico', region: 'Santo Domingo', precio: 'US$ 2,200 / mes', tipo: 'Renta', habitaciones: 2, banos: 1, metros: 90, imagen: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80' },
  { id: 9, titulo: 'Villa privada con vista al mar', region: 'Cabarete', precio: 'US$ 550,000', tipo: 'Venta', habitaciones: 6, banos: 5, metros: 600, imagen: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80' },
]

const filtros = ['Todas', 'Venta', 'Renta']
const regiones = ['Todas las regiones', 'Puerto Plata', 'Cabarete', 'Sosúa', 'Santo Domingo', 'Samaná', 'Monte Cristi']
const tipos = ['Todos los tipos', 'Casa', 'Apartamento', 'Villa', 'Terreno', 'Local comercial']

export default function Propiedades() {
  return (
    <main>
      <Navbar />

      {/* HERO */}
      <section className="pt-32 pb-12 px-6 bg-[#0056B3]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-block bg-[#FF2A39] text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-widest uppercase mb-4">
              Catálogo completo
            </span>
            <h1 className="text-5xl font-black text-white mb-3">Todas las propiedades</h1>
            <p className="text-white/75 text-lg">+600 propiedades disponibles en República Dominicana y el mundo</p>
          </div>

          {/* FILTROS HERO */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex flex-col md:flex-row gap-3 max-w-4xl mx-auto">
            <select className="flex-1 bg-white text-gray-700 rounded-xl px-4 py-3 text-sm font-medium outline-none">
              {filtros.map((f) => <option key={f}>{f}</option>)}
            </select>
            <select className="flex-1 bg-white text-gray-700 rounded-xl px-4 py-3 text-sm font-medium outline-none">
              {regiones.map((r) => <option key={r}>{r}</option>)}
            </select>
            <select className="flex-1 bg-white text-gray-700 rounded-xl px-4 py-3 text-sm font-medium outline-none">
              {tipos.map((t) => <option key={t}>{t}</option>)}
            </select>
            <button className="bg-[#FF2A39] hover:bg-white hover:text-[#FF2A39] text-white font-bold px-8 py-3 rounded-xl transition-all duration-300">
              Buscar
            </button>
          </div>
        </div>
      </section>

      {/* CATÁLOGO */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">

          {/* CONTEO */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-gray-500 font-medium">
              Mostrando <span className="text-[#0056B3] font-black">{todas.length}</span> propiedades
            </p>
            <select className="border border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-600 outline-none">
              <option>Ordenar por: Más recientes</option>
              <option>Precio: menor a mayor</option>
              <option>Precio: mayor a menor</option>
              <option>Más vistos</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {todas.map((p) => (
              <div
                key={p.id}
                className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="relative overflow-hidden h-52">
                  <div
                    className="h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${p.imagen})` }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full text-white ${
                      p.tipo === 'Venta' ? 'bg-[#0056B3]' : 'bg-[#FF2A39]'
                    }`}>
                      {p.tipo}
                    </span>
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
                    {p.region}
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
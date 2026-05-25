'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const citas = [
  { id: 1, cliente: 'Michael Johnson 🇺🇸', propiedad: 'Villa frente al mar', fecha: 'Hoy 3:00 PM', tipo: 'Presencial', estado: 'Confirmada' },
  { id: 2, cliente: 'Sophie Müller 🇩🇪', propiedad: 'Apartamento beachfront', fecha: 'Mañana 10:00 AM', tipo: 'Virtual', estado: 'Pendiente' },
  { id: 3, cliente: 'Jean-Pierre Dubois 🇫🇷', propiedad: 'Terreno residencial', fecha: '28 Mayo 2:00 PM', tipo: 'Presencial', estado: 'Confirmada' },
]

const cartera = [
  { id: 1, titulo: 'Villa frente al mar', region: 'Puerto Plata', precio: 'US$ 285,000', tipo: 'Venta', visitas: 142, imagen: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&q=80' },
  { id: 2, titulo: 'Apartamento beachfront', region: 'Cabarete', precio: 'US$ 145,000', tipo: 'Venta', visitas: 89, imagen: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&q=80' },
  { id: 3, titulo: 'Villa de lujo', region: 'Sosúa', precio: 'US$ 420,000', tipo: 'Venta', visitas: 201, imagen: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&q=80' },
  { id: 4, titulo: 'Penthouse ejecutivo', region: 'Santo Domingo', precio: 'US$ 3,500/mes', tipo: 'Renta', visitas: 55, imagen: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&q=80' },
]

const prospectos = [
  { nombre: 'Michael Johnson', pais: '🇺🇸', interes: 'Villa · Puerto Plata', presupuesto: 'US$ 250k-350k', estado: 'Caliente', ultima: 'Hoy' },
  { nombre: 'Sophie Müller', pais: '🇩🇪', interes: 'Apartamento · Cabarete', presupuesto: 'US$ 100k-200k', estado: 'Tibio', ultima: 'Ayer' },
  { nombre: 'Isabella Rossi', pais: '🇮🇹', interes: 'Villa · Sosúa', presupuesto: 'US$ 400k+', estado: 'Nuevo', ultima: 'Hace 3 días' },
]

const tabs = ['Mi cartera', 'Citas del día', 'Prospectos', 'Comisiones']

export default function DashboardAgente() {
  const [tabActiva, setTabActiva] = useState(0)

  return (
    <main>
      <Navbar />

      <section className="pt-24 pb-16 px-6 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto">

          {/* ENCABEZADO */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <div
                  className="w-12 h-12 rounded-full bg-cover bg-center border-2 border-[#0056B3]"
                  style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80)' }}
                />
                <div>
                  <h1 className="text-2xl font-black text-gray-900">Carlos Durán</h1>
                  <p className="text-[#0056B3] text-sm font-semibold">Agente Senior · Puerto Plata</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span className="text-green-600 text-sm font-bold">Disponible</span>
            </div>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Propiedades activas', valor: '48', color: 'text-[#0056B3]' },
              { label: 'Citas esta semana', valor: '6', color: 'text-green-600' },
              { label: 'Prospectos activos', valor: '14', color: 'text-[#FF2A39]' },
              { label: 'Ventas este mes', valor: 'US$ 42k', color: 'text-yellow-600' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <p className={`text-3xl font-black ${stat.color}`}>{stat.valor}</p>
                <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* TABS */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="flex border-b border-gray-100">
              {tabs.map((tab, i) => (
                <button
                  key={tab}
                  onClick={() => setTabActiva(i)}
                  className={`flex-1 py-4 text-sm font-semibold transition-all duration-200 ${
                    tabActiva === i
                      ? 'text-[#0056B3] border-b-2 border-[#0056B3] bg-blue-50'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="p-6">

              {/* TAB 1: CARTERA */}
              {tabActiva === 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {cartera.map((p) => (
                    <div key={p.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                      <div
                        className="w-20 h-16 rounded-xl bg-cover bg-center shrink-0"
                        style={{ backgroundImage: `url(${p.imagen})` }}
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-black text-gray-900 text-sm truncate">{p.titulo}</h3>
                        <p className="text-gray-500 text-xs mt-0.5">{p.region} · {p.tipo}</p>
                        <p className="text-[#0056B3] font-black text-sm mt-1">{p.precio}</p>
                        <p className="text-gray-400 text-xs">{p.visitas} visitas</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* TAB 2: CITAS */}
              {tabActiva === 1 && (
                <div className="space-y-3">
                  {citas.map((c) => (
                    <div key={c.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-black text-gray-900">{c.cliente}</h3>
                          <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                            c.tipo === 'Virtual' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
                          }`}>
                            {c.tipo}
                          </span>
                        </div>
                        <p className="text-[#0056B3] text-sm font-semibold">{c.propiedad}</p>
                        <p className="text-gray-400 text-xs mt-0.5">{c.fecha}</p>
                      </div>
                      <span className={`text-xs font-bold px-3 py-1.5 rounded-xl ${
                        c.estado === 'Confirmada' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {c.estado}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* TAB 3: PROSPECTOS */}
              {tabActiva === 2 && (
                <div className="space-y-3">
                  {prospectos.map((p) => (
                    <div key={p.nombre} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                      <div>
                        <h3 className="font-black text-gray-900">{p.nombre} {p.pais}</h3>
                        <p className="text-gray-500 text-sm">{p.interes}</p>
                        <p className="text-[#0056B3] font-bold text-sm">{p.presupuesto}</p>
                        <p className="text-gray-400 text-xs">Último contacto: {p.ultima}</p>
                      </div>
                      <div className="text-right">
                        <span className={`text-xs font-bold px-3 py-1.5 rounded-full block mb-2 ${
                          p.estado === 'Caliente' ? 'bg-red-100 text-red-700' :
                          p.estado === 'Tibio' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-blue-100 text-blue-700'
                        }`}>
                          {p.estado}
                        </span>
                        <button className="text-xs bg-[#0056B3] hover:bg-[#FF2A39] text-white px-3 py-1.5 rounded-xl transition-all duration-200">
                          Contactar
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* TAB 4: COMISIONES */}
              {tabActiva === 3 && (
                <div>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {[
                      { label: 'Este mes', valor: 'US$ 42,000', color: 'bg-green-50 text-green-700' },
                      { label: 'Este año', valor: 'US$ 186,500', color: 'bg-blue-50 text-[#0056B3]' },
                      { label: 'Pendiente cobro', valor: 'US$ 18,000', color: 'bg-yellow-50 text-yellow-700' },
                    ].map((item) => (
                      <div key={item.label} className={`p-5 rounded-2xl ${item.color}`}>
                        <p className="text-2xl font-black">{item.valor}</p>
                        <p className="text-sm mt-1 opacity-75">{item.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-6 text-center">
                    <p className="text-gray-500 text-sm">Historial detallado de comisiones disponible en la siguiente fase</p>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}
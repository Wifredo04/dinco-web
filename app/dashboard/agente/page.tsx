'use client'
import { useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const citas = [
  {
    id: 1,
    cliente: 'Michael Johnson 🇺🇸',
    propiedad: 'Villa frente al mar',
    fecha: 'Hoy 3:00 PM',
    tipo: 'Presencial',
    estado: 'Confirmada',
  },
  {
    id: 2,
    cliente: 'Sophie Müller 🇩🇪',
    propiedad: 'Apartamento beachfront',
    fecha: 'Mañana 10:00 AM',
    tipo: 'Virtual',
    estado: 'Pendiente',
  },
  {
    id: 3,
    cliente: 'Jean-Pierre Dubois 🇫🇷',
    propiedad: 'Terreno residencial',
    fecha: '28 Mayo 2:00 PM',
    tipo: 'Presencial',
    estado: 'Confirmada',
  },
]

const cartera = [
  {
    id: 1,
    titulo: 'Villa frente al mar',
    region: 'Puerto Plata',
    precio: 'US$ 285,000',
    tipo: 'Venta',
    visitas: 142,
    imagen:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&q=80',
  },
  {
    id: 2,
    titulo: 'Apartamento beachfront',
    region: 'Cabarete',
    precio: 'US$ 145,000',
    tipo: 'Venta',
    visitas: 89,
    imagen:
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&q=80',
  },
  {
    id: 3,
    titulo: 'Villa de lujo',
    region: 'Sosúa',
    precio: 'US$ 420,000',
    tipo: 'Venta',
    visitas: 201,
    imagen:
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&q=80',
  },
  {
    id: 4,
    titulo: 'Penthouse ejecutivo',
    region: 'Santo Domingo',
    precio: 'US$ 3,500/mes',
    tipo: 'Renta',
    visitas: 55,
    imagen:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&q=80',
  },
]

const prospectos = [
  {
    nombre: 'Michael Johnson',
    pais: '🇺🇸',
    interes: 'Villa · Puerto Plata',
    presupuesto: 'US$ 250k-350k',
    estado: 'Caliente',
    ultima: 'Hoy',
  },
  {
    nombre: 'Sophie Müller',
    pais: '🇩🇪',
    interes: 'Apartamento · Cabarete',
    presupuesto: 'US$ 100k-200k',
    estado: 'Tibio',
    ultima: 'Ayer',
  },
  {
    nombre: 'Isabella Rossi',
    pais: '🇮🇹',
    interes: 'Villa · Sosúa',
    presupuesto: 'US$ 400k+',
    estado: 'Nuevo',
    ultima: 'Hace 3 días',
  },
]

const tabs = ['Mi cartera', 'Citas del día', 'Prospectos', 'Comisiones']

export default function DashboardAgente() {
  const [tabActiva, setTabActiva] = useState(0)

  return (
    <main>
      <Navbar />

      <section className="min-h-screen bg-gray-50 px-6 pt-24 pb-16">
        <div className="mx-auto max-w-7xl">
          {/* ENCABEZADO */}
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <div className="mb-1 flex items-center gap-3">
                <div
                  className="h-12 w-12 rounded-full border-2 border-[#0056B3] bg-cover bg-center"
                  style={{
                    backgroundImage:
                      'url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80)',
                  }}
                />
                <div>
                  <h1 className="text-2xl font-black text-gray-900">
                    Carlos Durán
                  </h1>
                  <p className="text-sm font-semibold text-[#0056B3]">
                    Agente Senior · Puerto Plata
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-400" />
              <span className="text-sm font-bold text-green-600">
                Disponible
              </span>
            </div>
          </div>

          {/* STATS */}
          <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              {
                label: 'Propiedades activas',
                valor: '48',
                color: 'text-[#0056B3]',
              },
              {
                label: 'Citas esta semana',
                valor: '6',
                color: 'text-green-600',
              },
              {
                label: 'Prospectos activos',
                valor: '14',
                color: 'text-[#FF2A39]',
              },
              {
                label: 'Ventas este mes',
                valor: 'US$ 42k',
                color: 'text-yellow-600',
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
              >
                <p className={`text-3xl font-black ${stat.color}`}>
                  {stat.valor}
                </p>
                <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* TABS */}
          <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
            <div className="flex border-b border-gray-100">
              {tabs.map((tab, i) => (
                <button
                  key={tab}
                  onClick={() => setTabActiva(i)}
                  className={`flex-1 py-4 text-sm font-semibold transition-all duration-200 ${
                    tabActiva === i
                      ? 'border-b-2 border-[#0056B3] bg-blue-50 text-[#0056B3]'
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
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {cartera.map((p) => (
                    <div
                      key={p.id}
                      className="flex items-center gap-4 rounded-2xl bg-gray-50 p-4 transition-colors hover:bg-gray-100"
                    >
                      <div
                        className="h-16 w-20 shrink-0 rounded-xl bg-cover bg-center"
                        style={{ backgroundImage: `url(${p.imagen})` }}
                      />
                      <div className="min-w-0 flex-1">
                        <h3 className="truncate text-sm font-black text-gray-900">
                          {p.titulo}
                        </h3>
                        <p className="mt-0.5 text-xs text-gray-500">
                          {p.region} · {p.tipo}
                        </p>
                        <p className="mt-1 text-sm font-black text-[#0056B3]">
                          {p.precio}
                        </p>
                        <p className="text-xs text-gray-400">
                          {p.visitas} visitas
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* TAB 2: CITAS */}
              {tabActiva === 1 && (
                <div className="space-y-3">
                  {citas.map((c) => (
                    <div
                      key={c.id}
                      className="flex items-center justify-between rounded-2xl bg-gray-50 p-4"
                    >
                      <div>
                        <div className="mb-1 flex items-center gap-2">
                          <h3 className="font-black text-gray-900">
                            {c.cliente}
                          </h3>
                          <span
                            className={`rounded-full px-2 py-0.5 text-xs font-bold ${
                              c.tipo === 'Virtual'
                                ? 'bg-blue-100 text-blue-700'
                                : 'bg-green-100 text-green-700'
                            }`}
                          >
                            {c.tipo}
                          </span>
                        </div>
                        <p className="text-sm font-semibold text-[#0056B3]">
                          {c.propiedad}
                        </p>
                        <p className="mt-0.5 text-xs text-gray-400">
                          {c.fecha}
                        </p>
                      </div>
                      <span
                        className={`rounded-xl px-3 py-1.5 text-xs font-bold ${
                          c.estado === 'Confirmada'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-yellow-100 text-yellow-700'
                        }`}
                      >
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
                    <div
                      key={p.nombre}
                      className="flex items-center justify-between rounded-2xl bg-gray-50 p-4"
                    >
                      <div>
                        <h3 className="font-black text-gray-900">
                          {p.nombre} {p.pais}
                        </h3>
                        <p className="text-sm text-gray-500">{p.interes}</p>
                        <p className="text-sm font-bold text-[#0056B3]">
                          {p.presupuesto}
                        </p>
                        <p className="text-xs text-gray-400">
                          Último contacto: {p.ultima}
                        </p>
                      </div>
                      <div className="text-right">
                        <span
                          className={`mb-2 block rounded-full px-3 py-1.5 text-xs font-bold ${
                            p.estado === 'Caliente'
                              ? 'bg-red-100 text-red-700'
                              : p.estado === 'Tibio'
                                ? 'bg-yellow-100 text-yellow-700'
                                : 'bg-blue-100 text-blue-700'
                          }`}
                        >
                          {p.estado}
                        </span>
                        <button className="rounded-xl bg-[#0056B3] px-3 py-1.5 text-xs text-white transition-all duration-200 hover:bg-[#FF2A39]">
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
                  <div className="mb-6 grid grid-cols-3 gap-4">
                    {[
                      {
                        label: 'Este mes',
                        valor: 'US$ 42,000',
                        color: 'bg-green-50 text-green-700',
                      },
                      {
                        label: 'Este año',
                        valor: 'US$ 186,500',
                        color: 'bg-blue-50 text-[#0056B3]',
                      },
                      {
                        label: 'Pendiente cobro',
                        valor: 'US$ 18,000',
                        color: 'bg-yellow-50 text-yellow-700',
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className={`rounded-2xl p-5 ${item.color}`}
                      >
                        <p className="text-2xl font-black">{item.valor}</p>
                        <p className="mt-1 text-sm opacity-75">{item.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-2xl bg-gray-50 p-6 text-center">
                    <p className="text-sm text-gray-500">
                      Historial detallado de comisiones disponible en la
                      siguiente fase
                    </p>
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

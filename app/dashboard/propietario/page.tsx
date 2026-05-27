'use client'
import { useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

const propiedades = [
  { id: 1, titulo: 'Villa frente al mar', region: 'Puerto Plata', tipo: 'Venta', precio: 'US$ 285,000', estado: 'Publicada', visitas: 142, consultas: 8, imagen: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&q=80' },
  { id: 2, titulo: 'Apartamento céntrico', region: 'Santo Domingo', tipo: 'Renta', precio: 'US$ 1,800/mes', estado: 'En revisión', visitas: 0, consultas: 0, imagen: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&q=80' },
  { id: 3, titulo: 'Terreno residencial', region: 'Samaná', tipo: 'Venta', precio: 'US$ 95,000', estado: 'Pausada', visitas: 67, consultas: 3, imagen: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&q=80' },
]

const consultas = [
  { id: 1, nombre: 'Michael Johnson', pais: '🇺🇸', propiedad: 'Villa frente al mar', mensaje: 'Me interesa agendar una visita esta semana.', fecha: 'Hace 2 horas', leido: false },
  { id: 2, nombre: 'Sophie Müller', pais: '🇩🇪', propiedad: 'Villa frente al mar', mensaje: '¿Está disponible para renta vacacional?', fecha: 'Hace 1 día', leido: true },
  { id: 3, nombre: 'Carlos Pérez', pais: '🇩🇴', propiedad: 'Terreno residencial', mensaje: 'Quisiera más información sobre el terreno.', fecha: 'Hace 2 días', leido: true },
]

const documentos = [
  { nombre: 'Título de propiedad', estado: 'Verificado', fecha: '10 Mayo 2025' },
  { nombre: 'Planos de construcción', estado: 'Pendiente', fecha: '—' },
  { nombre: 'Certificado catastral', estado: 'Verificado', fecha: '8 Mayo 2025' },
  { nombre: 'Contrato de venta', estado: 'En proceso', fecha: '12 Mayo 2025' },
]

const tabs = ['Mis propiedades', 'Consultas', 'Documentos', 'Negociaciones']

export default function DashboardPropietario() {
  const [tabActiva, setTabActiva] = useState(0)

  return (
    <main>
      <Navbar />

      <section className="pt-24 pb-16 px-6 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto">

          {/* ENCABEZADO */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-black text-gray-900">Mi panel</h1>
              <p className="text-gray-500 mt-1">Bienvenido, <span className="text-[#0056B3] font-bold">Rafael Durán</span></p>
            </div>
            <Link
              href="/postulacion"
              className="inline-flex items-center gap-2 bg-[#FF2A39] hover:bg-[#0056B3] text-white font-bold px-6 py-3 rounded-xl transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Publicar nueva propiedad
            </Link>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Propiedades activas', valor: '2', color: 'text-[#0056B3]' },
              { label: 'Total consultas', valor: '11', color: 'text-green-600' },
              { label: 'Visitas totales', valor: '209', color: 'text-[#FF2A39]' },
              { label: 'Negociaciones abiertas', valor: '1', color: 'text-yellow-600' },
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

              {/* TAB 1: MIS PROPIEDADES */}
              {tabActiva === 0 && (
                <div className="space-y-4">
                  {propiedades.map((p) => (
                    <div key={p.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                      <div
                        className="w-20 h-16 rounded-xl bg-cover bg-center shrink-0"
                        style={{ backgroundImage: `url(${p.imagen})` }}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-black text-gray-900 truncate">{p.titulo}</h3>
                          <span className={`text-xs font-bold px-2 py-0.5 rounded-full shrink-0 ${
                            p.estado === 'Publicada' ? 'bg-green-100 text-green-700' :
                            p.estado === 'En revisión' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-gray-100 text-gray-600'
                          }`}>
                            {p.estado}
                          </span>
                        </div>
                        <p className="text-gray-500 text-sm">{p.region} · {p.tipo} · {p.precio}</p>
                        <p className="text-gray-400 text-xs mt-1">{p.visitas} visitas · {p.consultas} consultas</p>
                      </div>
                      <div className="flex gap-2 shrink-0">
                        <button className="text-xs bg-white border border-gray-200 hover:border-[#0056B3] hover:text-[#0056B3] text-gray-600 px-3 py-1.5 rounded-xl transition-all duration-200">
                          Editar
                        </button>
                        <Link
                          href={`/propiedades/${p.id}`}
                          className="text-xs bg-[#0056B3] hover:bg-[#FF2A39] text-white px-3 py-1.5 rounded-xl transition-all duration-200"
                        >
                          Ver
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* TAB 2: CONSULTAS */}
              {tabActiva === 1 && (
                <div className="space-y-3">
                  {consultas.map((c) => (
                    <div key={c.id} className={`p-4 rounded-2xl border transition-colors ${
                      !c.leido ? 'bg-blue-50 border-blue-100' : 'bg-gray-50 border-gray-100'
                    }`}>
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-black text-gray-900">{c.nombre} {c.pais}</span>
                            {!c.leido && (
                              <span className="w-2 h-2 bg-[#0056B3] rounded-full shrink-0" />
                            )}
                          </div>
                          <p className="text-[#0056B3] text-xs font-semibold mb-1">{c.propiedad}</p>
                          <p className="text-gray-600 text-sm">{c.mensaje}</p>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="text-gray-400 text-xs mb-2">{c.fecha}</p>
                          <button className="text-xs bg-[#0056B3] hover:bg-[#FF2A39] text-white px-3 py-1.5 rounded-xl transition-all duration-200">
                            Responder
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* TAB 3: DOCUMENTOS */}
              {tabActiva === 2 && (
                <div>
                  <div className="space-y-3 mb-6">
                    {documentos.map((doc) => (
                      <div key={doc.nombre} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                            doc.estado === 'Verificado' ? 'bg-green-100' :
                            doc.estado === 'Pendiente' ? 'bg-gray-100' :
                            'bg-yellow-100'
                          }`}>
                            <svg className={`w-5 h-5 ${
                              doc.estado === 'Verificado' ? 'text-green-600' :
                              doc.estado === 'Pendiente' ? 'text-gray-400' :
                              'text-yellow-600'
                            }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </div>
                          <div>
                            <p className="font-bold text-gray-900 text-sm">{doc.nombre}</p>
                            <p className="text-gray-400 text-xs">{doc.fecha}</p>
                          </div>
                        </div>
                        <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                          doc.estado === 'Verificado' ? 'bg-green-100 text-green-700' :
                          doc.estado === 'Pendiente' ? 'bg-gray-100 text-gray-600' :
                          'bg-yellow-100 text-yellow-700'
                        }`}>
                          {doc.estado}
                        </span>
                      </div>
                    ))}
                  </div>
                  <button className="w-full border-2 border-dashed border-gray-300 hover:border-[#0056B3] hover:text-[#0056B3] text-gray-400 font-bold py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Subir documento
                  </button>
                </div>
              )}

              {/* TAB 4: NEGOCIACIONES */}
              {tabActiva === 3 && (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-[#0056B3]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-[#0056B3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="font-black text-gray-900 text-lg mb-2">Módulo de negociaciones</h3>
                  <p className="text-gray-500 text-sm max-w-sm mx-auto">
                    Aquí aparecerán las ofertas recibidas, contratos en proceso y el estado de cada negociación activa.
                  </p>
                  <p className="text-[#0056B3] font-bold text-sm mt-3">Disponible en la siguiente fase</p>
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
'use client'
import { useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

const propiedades = [
  {
    id: 1,
    titulo: 'Villa frente al mar',
    region: 'Puerto Plata',
    tipo: 'Venta',
    precio: 'US$ 285,000',
    estado: 'Publicada',
    visitas: 142,
    consultas: 8,
    imagen:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&q=80',
  },
  {
    id: 2,
    titulo: 'Apartamento céntrico',
    region: 'Santo Domingo',
    tipo: 'Renta',
    precio: 'US$ 1,800/mes',
    estado: 'En revisión',
    visitas: 0,
    consultas: 0,
    imagen:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&q=80',
  },
  {
    id: 3,
    titulo: 'Terreno residencial',
    region: 'Samaná',
    tipo: 'Venta',
    precio: 'US$ 95,000',
    estado: 'Pausada',
    visitas: 67,
    consultas: 3,
    imagen:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&q=80',
  },
]

const consultas = [
  {
    id: 1,
    nombre: 'Michael Johnson',
    pais: '🇺🇸',
    propiedad: 'Villa frente al mar',
    mensaje: 'Me interesa agendar una visita esta semana.',
    fecha: 'Hace 2 horas',
    leido: false,
  },
  {
    id: 2,
    nombre: 'Sophie Müller',
    pais: '🇩🇪',
    propiedad: 'Villa frente al mar',
    mensaje: '¿Está disponible para renta vacacional?',
    fecha: 'Hace 1 día',
    leido: true,
  },
  {
    id: 3,
    nombre: 'Carlos Pérez',
    pais: '🇩🇴',
    propiedad: 'Terreno residencial',
    mensaje: 'Quisiera más información sobre el terreno.',
    fecha: 'Hace 2 días',
    leido: true,
  },
]

const documentos = [
  {
    nombre: 'Título de propiedad',
    estado: 'Verificado',
    fecha: '10 Mayo 2025',
  },
  { nombre: 'Planos de construcción', estado: 'Pendiente', fecha: '—' },
  {
    nombre: 'Certificado catastral',
    estado: 'Verificado',
    fecha: '8 Mayo 2025',
  },
  { nombre: 'Contrato de venta', estado: 'En proceso', fecha: '12 Mayo 2025' },
]

const tabs = ['Mis propiedades', 'Consultas', 'Documentos', 'Negociaciones']

export default function DashboardPropietario() {
  const [tabActiva, setTabActiva] = useState(0)

  return (
    <main>
      <Navbar />

      <section className="min-h-screen bg-gray-50 px-6 pt-24 pb-16">
        <div className="mx-auto max-w-7xl">
          {/* ENCABEZADO */}
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h1 className="text-3xl font-black text-gray-900">Mi panel</h1>
              <p className="mt-1 text-gray-500">
                Bienvenido,{' '}
                <span className="font-bold text-[#0056B3]">Rafael Durán</span>
              </p>
            </div>
            <Link
              href="/postulacion"
              className="inline-flex items-center gap-2 rounded-xl bg-[#FF2A39] px-6 py-3 font-bold text-white transition-all duration-300 hover:bg-[#0056B3]"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Publicar nueva propiedad
            </Link>
          </div>

          {/* STATS */}
          <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              {
                label: 'Propiedades activas',
                valor: '2',
                color: 'text-[#0056B3]',
              },
              {
                label: 'Total consultas',
                valor: '11',
                color: 'text-green-600',
              },
              {
                label: 'Visitas totales',
                valor: '209',
                color: 'text-[#FF2A39]',
              },
              {
                label: 'Negociaciones abiertas',
                valor: '1',
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
              {/* TAB 1: MIS PROPIEDADES */}
              {tabActiva === 0 && (
                <div className="space-y-4">
                  {propiedades.map((p) => (
                    <div
                      key={p.id}
                      className="flex items-center gap-4 rounded-2xl bg-gray-50 p-4 transition-colors hover:bg-gray-100"
                    >
                      <div
                        className="h-16 w-20 shrink-0 rounded-xl bg-cover bg-center"
                        style={{ backgroundImage: `url(${p.imagen})` }}
                      />
                      <div className="min-w-0 flex-1">
                        <div className="mb-1 flex items-center gap-2">
                          <h3 className="truncate font-black text-gray-900">
                            {p.titulo}
                          </h3>
                          <span
                            className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-bold ${
                              p.estado === 'Publicada'
                                ? 'bg-green-100 text-green-700'
                                : p.estado === 'En revisión'
                                  ? 'bg-yellow-100 text-yellow-700'
                                  : 'bg-gray-100 text-gray-600'
                            }`}
                          >
                            {p.estado}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500">
                          {p.region} · {p.tipo} · {p.precio}
                        </p>
                        <p className="mt-1 text-xs text-gray-400">
                          {p.visitas} visitas · {p.consultas} consultas
                        </p>
                      </div>
                      <div className="flex shrink-0 gap-2">
                        <button className="rounded-xl border border-gray-200 bg-white px-3 py-1.5 text-xs text-gray-600 transition-all duration-200 hover:border-[#0056B3] hover:text-[#0056B3]">
                          Editar
                        </button>
                        <Link
                          href={`/propiedades/${p.id}`}
                          className="rounded-xl bg-[#0056B3] px-3 py-1.5 text-xs text-white transition-all duration-200 hover:bg-[#FF2A39]"
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
                    <div
                      key={c.id}
                      className={`rounded-2xl border p-4 transition-colors ${
                        !c.leido
                          ? 'border-blue-100 bg-blue-50'
                          : 'border-gray-100 bg-gray-50'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <div className="mb-1 flex items-center gap-2">
                            <span className="font-black text-gray-900">
                              {c.nombre} {c.pais}
                            </span>
                            {!c.leido && (
                              <span className="h-2 w-2 shrink-0 rounded-full bg-[#0056B3]" />
                            )}
                          </div>
                          <p className="mb-1 text-xs font-semibold text-[#0056B3]">
                            {c.propiedad}
                          </p>
                          <p className="text-sm text-gray-600">{c.mensaje}</p>
                        </div>
                        <div className="shrink-0 text-right">
                          <p className="mb-2 text-xs text-gray-400">
                            {c.fecha}
                          </p>
                          <button className="rounded-xl bg-[#0056B3] px-3 py-1.5 text-xs text-white transition-all duration-200 hover:bg-[#FF2A39]">
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
                  <div className="mb-6 space-y-3">
                    {documentos.map((doc) => (
                      <div
                        key={doc.nombre}
                        className="flex items-center justify-between rounded-2xl bg-gray-50 p-4"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                              doc.estado === 'Verificado'
                                ? 'bg-green-100'
                                : doc.estado === 'Pendiente'
                                  ? 'bg-gray-100'
                                  : 'bg-yellow-100'
                            }`}
                          >
                            <svg
                              className={`h-5 w-5 ${
                                doc.estado === 'Verificado'
                                  ? 'text-green-600'
                                  : doc.estado === 'Pendiente'
                                    ? 'text-gray-400'
                                    : 'text-yellow-600'
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              />
                            </svg>
                          </div>
                          <div>
                            <p className="text-sm font-bold text-gray-900">
                              {doc.nombre}
                            </p>
                            <p className="text-xs text-gray-400">{doc.fecha}</p>
                          </div>
                        </div>
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-bold ${
                            doc.estado === 'Verificado'
                              ? 'bg-green-100 text-green-700'
                              : doc.estado === 'Pendiente'
                                ? 'bg-gray-100 text-gray-600'
                                : 'bg-yellow-100 text-yellow-700'
                          }`}
                        >
                          {doc.estado}
                        </span>
                      </div>
                    ))}
                  </div>
                  <button className="flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-gray-300 py-4 font-bold text-gray-400 transition-all duration-300 hover:border-[#0056B3] hover:text-[#0056B3]">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                    Subir documento
                  </button>
                </div>
              )}

              {/* TAB 4: NEGOCIACIONES */}
              {tabActiva === 3 && (
                <div className="py-12 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0056B3]/10">
                    <svg
                      className="h-8 w-8 text-[#0056B3]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-lg font-black text-gray-900">
                    Módulo de negociaciones
                  </h3>
                  <p className="mx-auto max-w-sm text-sm text-gray-500">
                    Aquí aparecerán las ofertas recibidas, contratos en proceso
                    y el estado de cada negociación activa.
                  </p>
                  <p className="mt-3 text-sm font-bold text-[#0056B3]">
                    Disponible en la siguiente fase
                  </p>
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

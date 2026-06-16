'use client'
import { useState } from 'react'
import Link from 'next/link'

const STATS = [
  {
    label: 'Propiedades activas',
    valor: '247',
    cambio: '+12 este mes',
    color: 'text-[#0056B3]',
    bg: 'bg-blue-50',
  },
  {
    label: 'Postulaciones pendientes',
    valor: '18',
    cambio: '5 sin revisar',
    color: 'text-yellow-600',
    bg: 'bg-yellow-50',
  },
  {
    label: 'Usuarios registrados',
    valor: '1,284',
    cambio: '+34 esta semana',
    color: 'text-green-600',
    bg: 'bg-green-50',
  },
  {
    label: 'Negociaciones abiertas',
    valor: '9',
    cambio: '3 en firma',
    color: 'text-[#FF2A39]',
    bg: 'bg-red-50',
  },
]

const POSTULACIONES = [
  {
    id: 1,
    nombre: 'Michael Johnson',
    pais: '🇺🇸',
    propiedad: 'Villa frente al mar',
    region: 'Puerto Plata',
    tipo: 'Venta',
    estado: 'Pendiente',
    fecha: 'Hace 2h',
  },
  {
    id: 2,
    nombre: 'Sophie Müller',
    pais: '🇩🇪',
    propiedad: 'Apartamento en Cabarete',
    region: 'Cabarete',
    tipo: 'Renta',
    estado: 'En revisión',
    fecha: 'Hace 5h',
  },
  {
    id: 3,
    nombre: 'Jean-Pierre Dubois',
    pais: '🇫🇷',
    propiedad: 'Villa con piscina',
    region: 'Sosúa',
    tipo: 'Venta',
    estado: 'Aprobada',
    fecha: 'Ayer',
  },
  {
    id: 4,
    nombre: 'Isabella Rossi',
    pais: '🇮🇹',
    propiedad: 'Penthouse ejecutivo',
    region: 'Santo Domingo',
    tipo: 'Renta',
    estado: 'Pendiente',
    fecha: 'Ayer',
  },
]

const PROPIEDADES_RECIENTES = [
  {
    id: 1,
    titulo: 'Villa frente al mar',
    region: 'Puerto Plata',
    precio: 'US$ 285,000',
    estado: 'Publicada',
    visitas: 142,
  },
  {
    id: 2,
    titulo: 'Apartamento beachfront',
    region: 'Cabarete',
    precio: 'US$ 145,000',
    estado: 'En revisión',
    visitas: 0,
  },
  {
    id: 3,
    titulo: 'Villa de lujo con piscina',
    region: 'Sosúa',
    precio: 'US$ 420,000',
    estado: 'Publicada',
    visitas: 201,
  },
  {
    id: 4,
    titulo: 'Penthouse ejecutivo',
    region: 'Santo Domingo',
    precio: 'US$ 3,500/mes',
    estado: 'Publicada',
    visitas: 89,
  },
]

const TABS = ['Resumen', 'Postulaciones', 'Propiedades', 'Usuarios', 'Reportes']

const REGIONES = [
  'Puerto Plata',
  'Cabarete',
  'Sosúa',
  'Santo Domingo',
  'Samaná',
  'Monte Cristi',
]

export default function DashboardAdmin() {
  const [tab, setTab] = useState(0)

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* SIDEBAR */}
      <aside className="fixed z-40 flex h-full w-64 flex-col bg-[#0d1b2a] text-white">
        <div className="border-b border-white/10 p-6">
          <img
            src="/nuevo_dc.svg"
            alt="DINCO"
            className="mb-1 w-28 brightness-0 invert"
          />
          <p className="text-xs font-medium tracking-widest text-white/40 uppercase">
            Panel Admin
          </p>
        </div>

        <nav className="flex-1 space-y-1 p-4">
          {[
            {
              label: 'Resumen',
              icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
              active: true,
            },
            {
              label: 'Propiedades',
              icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
              active: false,
            },
            {
              label: 'Postulaciones',
              icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
              active: false,
            },
            {
              label: 'Agentes',
              icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
              active: false,
            },
            {
              label: 'Usuarios',
              icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
              active: false,
            },
            {
              label: 'Negociaciones',
              icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
              active: false,
            },
            {
              label: 'Blog',
              icon: 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z',
              active: false,
            },
            {
              label: 'Reportes',
              icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
              active: false,
            },
          ].map((item) => (
            <button
              key={item.label}
              className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                item.active
                  ? 'bg-[#0056B3] text-white'
                  : 'text-white/50 hover:bg-white/5 hover:text-white'
              }`}
            >
              <svg
                className="h-5 w-5 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={item.icon}
                />
              </svg>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="border-t border-white/10 p-4">
          <Link
            href="/"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-white/40 transition-all hover:bg-white/5 hover:text-white"
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
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Ver sitio
          </Link>
        </div>
      </aside>

      {/* CONTENIDO PRINCIPAL */}
      <main className="ml-64 flex-1">
        {/* TOPBAR */}
        <header className="sticky top-0 z-30 flex items-center justify-between border-b border-gray-100 bg-white px-8 py-4">
          <div>
            <h1 className="text-xl font-black text-gray-900">
              Panel de administración
            </h1>
            <p className="mt-0.5 text-xs text-gray-400">
              DINCO Inmobiliaria & Constructora
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative rounded-xl p-2 transition-colors hover:bg-gray-100">
              <svg
                className="h-5 w-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-[#FF2A39]" />
            </button>
            <div className="flex items-center gap-2 border-l border-gray-100 pl-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0056B3] text-xs font-black text-white">
                AD
              </div>
              <span className="text-sm font-semibold text-gray-700">
                Admin DINCO
              </span>
            </div>
          </div>
        </header>

        <div className="p-8">
          {/* STATS */}
          <div className="mb-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <div
                  className={`inline-flex h-10 w-10 items-center justify-center ${stat.bg} mb-3 rounded-xl`}
                >
                  <div
                    className={`h-3 w-3 rounded-full ${stat.color.replace('text-', 'bg-')}`}
                  />
                </div>
                <p className={`text-3xl font-black ${stat.color}`}>
                  {stat.valor}
                </p>
                <p className="mt-0.5 text-sm font-semibold text-gray-700">
                  {stat.label}
                </p>
                <p className="mt-1 text-xs text-gray-400">{stat.cambio}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* POSTULACIONES RECIENTES */}
            <div className="rounded-2xl border border-gray-100 bg-white shadow-sm lg:col-span-2">
              <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
                <h2 className="font-black text-gray-900">
                  Postulaciones recientes
                </h2>
                <span className="rounded-full bg-yellow-100 px-2.5 py-1 text-xs font-bold text-yellow-700">
                  5 sin revisar
                </span>
              </div>
              <div className="divide-y divide-gray-50">
                {POSTULACIONES.map((p) => (
                  <div
                    key={p.id}
                    className="flex items-center justify-between px-6 py-4 transition-colors hover:bg-gray-50"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="mb-0.5 flex items-center gap-2">
                        <span className="text-sm font-bold text-gray-900">
                          {p.nombre} {p.pais}
                        </span>
                      </div>
                      <p className="truncate text-xs text-gray-500">
                        {p.propiedad} · {p.region}
                      </p>
                      <p className="text-xs text-gray-400">{p.fecha}</p>
                    </div>
                    <div className="ml-4 flex items-center gap-3">
                      <span
                        className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-bold ${
                          p.estado === 'Aprobada'
                            ? 'bg-green-100 text-green-700'
                            : p.estado === 'Pendiente'
                              ? 'bg-yellow-100 text-yellow-700'
                              : 'bg-blue-100 text-blue-700'
                        }`}
                      >
                        {p.estado}
                      </span>
                      <div className="flex gap-1">
                        <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-50 text-green-600 transition-colors hover:bg-green-100">
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </button>
                        <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-50 text-red-500 transition-colors hover:bg-red-100">
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-100 px-6 py-3">
                <button className="text-sm font-bold text-[#0056B3] transition-colors hover:text-[#FF2A39]">
                  Ver todas las postulaciones →
                </button>
              </div>
            </div>

            {/* PANEL DERECHO */}
            <div className="space-y-5">
              {/* CATÁLOGOS POR REGIÓN */}
              <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                <h2 className="mb-4 font-black text-gray-900">
                  Propiedades por región
                </h2>
                <div className="space-y-3">
                  {[
                    {
                      region: 'Santo Domingo',
                      total: 215,
                      color: 'bg-[#0056B3]',
                      pct: 100,
                    },
                    {
                      region: 'Puerto Plata',
                      total: 124,
                      color: 'bg-[#FF2A39]',
                      pct: 58,
                    },
                    {
                      region: 'Sosúa',
                      total: 98,
                      color: 'bg-green-500',
                      pct: 46,
                    },
                    {
                      region: 'Cabarete',
                      total: 86,
                      color: 'bg-yellow-500',
                      pct: 40,
                    },
                    {
                      region: 'Samaná',
                      total: 67,
                      color: 'bg-purple-500',
                      pct: 31,
                    },
                    {
                      region: 'Monte Cristi',
                      total: 43,
                      color: 'bg-orange-400',
                      pct: 20,
                    },
                  ].map((r) => (
                    <div key={r.region}>
                      <div className="mb-1 flex justify-between text-xs">
                        <span className="font-medium text-gray-600">
                          {r.region}
                        </span>
                        <span className="font-bold text-gray-400">
                          {r.total}
                        </span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-gray-100">
                        <div
                          className={`h-full ${r.color} rounded-full transition-all duration-700`}
                          style={{ width: `${r.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ACCIONES RÁPIDAS */}
              <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                <h2 className="mb-4 font-black text-gray-900">
                  Acciones rápidas
                </h2>
                <div className="space-y-2">
                  {[
                    {
                      label: 'Aprobar postulaciones',
                      color: 'bg-green-50 text-green-700 hover:bg-green-100',
                      count: '5',
                    },
                    {
                      label: 'Revisar propiedades',
                      color: 'bg-blue-50 text-[#0056B3] hover:bg-blue-100',
                      count: '3',
                    },
                    {
                      label: 'Asignar agentes',
                      color: 'bg-yellow-50 text-yellow-700 hover:bg-yellow-100',
                      count: '2',
                    },
                    {
                      label: 'Ver negociaciones',
                      color: 'bg-red-50 text-[#FF2A39] hover:bg-red-100',
                      count: '9',
                    },
                  ].map((a) => (
                    <button
                      key={a.label}
                      className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-bold transition-colors ${a.color}`}
                    >
                      {a.label}
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-black">
                        {a.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* TABLA PROPIEDADES */}
          <div className="mt-6 rounded-2xl border border-gray-100 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
              <h2 className="font-black text-gray-900">
                Propiedades recientes
              </h2>
              <Link
                href="/propiedades"
                className="text-sm font-bold text-[#0056B3] transition-colors hover:text-[#FF2A39]"
              >
                Ver catálogo completo →
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-50">
                    <th className="px-6 py-3 text-left text-xs font-bold tracking-wider text-gray-400 uppercase">
                      Propiedad
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-bold tracking-wider text-gray-400 uppercase">
                      Región
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-bold tracking-wider text-gray-400 uppercase">
                      Precio
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-bold tracking-wider text-gray-400 uppercase">
                      Estado
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-bold tracking-wider text-gray-400 uppercase">
                      Visitas
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-bold tracking-wider text-gray-400 uppercase">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {PROPIEDADES_RECIENTES.map((p) => (
                    <tr
                      key={p.id}
                      className="transition-colors hover:bg-gray-50"
                    >
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                        {p.titulo}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {p.region}
                      </td>
                      <td className="px-6 py-4 text-sm font-black text-[#0056B3]">
                        {p.precio}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`rounded-full px-2.5 py-1 text-xs font-bold ${
                            p.estado === 'Publicada'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-yellow-100 text-yellow-700'
                          }`}
                        >
                          {p.estado}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {p.visitas}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button className="text-xs font-bold text-[#0056B3] transition-colors hover:text-[#FF2A39]">
                            Editar
                          </button>
                          <button className="text-xs font-bold text-gray-400 transition-colors hover:text-red-500">
                            Pausar
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

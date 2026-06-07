'use client'
import { useState } from 'react'
import Link from 'next/link'

const STATS = [
  { label: 'Propiedades activas', valor: '247', cambio: '+12 este mes', color: 'text-[#0056B3]', bg: 'bg-blue-50' },
  { label: 'Postulaciones pendientes', valor: '18', cambio: '5 sin revisar', color: 'text-yellow-600', bg: 'bg-yellow-50' },
  { label: 'Usuarios registrados', valor: '1,284', cambio: '+34 esta semana', color: 'text-green-600', bg: 'bg-green-50' },
  { label: 'Negociaciones abiertas', valor: '9', cambio: '3 en firma', color: 'text-[#FF2A39]', bg: 'bg-red-50' },
]

const POSTULACIONES = [
  { id: 1, nombre: 'Michael Johnson', pais: '🇺🇸', propiedad: 'Villa frente al mar', region: 'Puerto Plata', tipo: 'Venta', estado: 'Pendiente', fecha: 'Hace 2h' },
  { id: 2, nombre: 'Sophie Müller', pais: '🇩🇪', propiedad: 'Apartamento en Cabarete', region: 'Cabarete', tipo: 'Renta', estado: 'En revisión', fecha: 'Hace 5h' },
  { id: 3, nombre: 'Jean-Pierre Dubois', pais: '🇫🇷', propiedad: 'Villa con piscina', region: 'Sosúa', tipo: 'Venta', estado: 'Aprobada', fecha: 'Ayer' },
  { id: 4, nombre: 'Isabella Rossi', pais: '🇮🇹', propiedad: 'Penthouse ejecutivo', region: 'Santo Domingo', tipo: 'Renta', estado: 'Pendiente', fecha: 'Ayer' },
]

const PROPIEDADES_RECIENTES = [
  { id: 1, titulo: 'Villa frente al mar', region: 'Puerto Plata', precio: 'US$ 285,000', estado: 'Publicada', visitas: 142 },
  { id: 2, titulo: 'Apartamento beachfront', region: 'Cabarete', precio: 'US$ 145,000', estado: 'En revisión', visitas: 0 },
  { id: 3, titulo: 'Villa de lujo con piscina', region: 'Sosúa', precio: 'US$ 420,000', estado: 'Publicada', visitas: 201 },
  { id: 4, titulo: 'Penthouse ejecutivo', region: 'Santo Domingo', precio: 'US$ 3,500/mes', estado: 'Publicada', visitas: 89 },
]

const TABS = ['Resumen', 'Postulaciones', 'Propiedades', 'Usuarios', 'Reportes']

const REGIONES = ['Puerto Plata', 'Cabarete', 'Sosúa', 'Santo Domingo', 'Samaná', 'Monte Cristi']

export default function DashboardAdmin() {
  const [tab, setTab] = useState(0)

  return (
    <div className="min-h-screen bg-gray-50 flex">

      {/* SIDEBAR */}
      <aside className="w-64 bg-[#0d1b2a] text-white flex flex-col fixed h-full z-40">
        <div className="p-6 border-b border-white/10">
          <img src="/nuevo_dc.svg" alt="DINCO" className="w-28 brightness-0 invert mb-1" />
          <p className="text-white/40 text-xs font-medium tracking-widest uppercase">Panel Admin</p>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {[
            { label: 'Resumen', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', active: true },
            { label: 'Propiedades', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4', active: false },
            { label: 'Postulaciones', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2', active: false },
            { label: 'Agentes', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z', active: false },
            { label: 'Usuarios', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z', active: false },
            { label: 'Negociaciones', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', active: false },
            { label: 'Blog', icon: 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z', active: false },
            { label: 'Reportes', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z', active: false },
          ].map((item) => (
            <button
              key={item.label}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                item.active
                  ? 'bg-[#0056B3] text-white'
                  : 'text-white/50 hover:text-white hover:bg-white/5'
              }`}
            >
              <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
              </svg>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-white/10">
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-3 text-white/40 hover:text-white text-sm font-semibold rounded-xl hover:bg-white/5 transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Ver sitio
          </Link>
        </div>
      </aside>

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-1 ml-64">

        {/* TOPBAR */}
        <header className="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between sticky top-0 z-30">
          <div>
            <h1 className="text-xl font-black text-gray-900">Panel de administración</h1>
            <p className="text-gray-400 text-xs mt-0.5">DINCO Inmobiliaria & Constructora</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-xl hover:bg-gray-100 transition-colors">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#FF2A39] rounded-full" />
            </button>
            <div className="flex items-center gap-2 pl-3 border-l border-gray-100">
              <div className="w-8 h-8 bg-[#0056B3] rounded-full flex items-center justify-center text-white text-xs font-black">
                AD
              </div>
              <span className="text-sm font-semibold text-gray-700">Admin DINCO</span>
            </div>
          </div>
        </header>

        <div className="p-8">

          {/* STATS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className={`inline-flex items-center justify-center w-10 h-10 ${stat.bg} rounded-xl mb-3`}>
                  <div className={`w-3 h-3 rounded-full ${stat.color.replace('text-', 'bg-')}`} />
                </div>
                <p className={`text-3xl font-black ${stat.color}`}>{stat.valor}</p>
                <p className="text-gray-700 font-semibold text-sm mt-0.5">{stat.label}</p>
                <p className="text-gray-400 text-xs mt-1">{stat.cambio}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* POSTULACIONES RECIENTES */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                <h2 className="font-black text-gray-900">Postulaciones recientes</h2>
                <span className="text-xs bg-yellow-100 text-yellow-700 font-bold px-2.5 py-1 rounded-full">
                  5 sin revisar
                </span>
              </div>
              <div className="divide-y divide-gray-50">
                {POSTULACIONES.map((p) => (
                  <div key={p.id} className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="font-bold text-gray-900 text-sm">{p.nombre} {p.pais}</span>
                      </div>
                      <p className="text-gray-500 text-xs truncate">{p.propiedad} · {p.region}</p>
                      <p className="text-gray-400 text-xs">{p.fecha}</p>
                    </div>
                    <div className="flex items-center gap-3 ml-4">
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full shrink-0 ${
                        p.estado === 'Aprobada' ? 'bg-green-100 text-green-700' :
                        p.estado === 'Pendiente' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {p.estado}
                      </span>
                      <div className="flex gap-1">
                        <button className="w-8 h-8 bg-green-50 hover:bg-green-100 text-green-600 rounded-lg flex items-center justify-center transition-colors">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </button>
                        <button className="w-8 h-8 bg-red-50 hover:bg-red-100 text-red-500 rounded-lg flex items-center justify-center transition-colors">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-6 py-3 border-t border-gray-100">
                <button className="text-sm text-[#0056B3] font-bold hover:text-[#FF2A39] transition-colors">
                  Ver todas las postulaciones →
                </button>
              </div>
            </div>

            {/* PANEL DERECHO */}
            <div className="space-y-5">

              {/* CATÁLOGOS POR REGIÓN */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                <h2 className="font-black text-gray-900 mb-4">Propiedades por región</h2>
                <div className="space-y-3">
                  {[
                    { region: 'Santo Domingo', total: 215, color: 'bg-[#0056B3]', pct: 100 },
                    { region: 'Puerto Plata', total: 124, color: 'bg-[#FF2A39]', pct: 58 },
                    { region: 'Sosúa', total: 98, color: 'bg-green-500', pct: 46 },
                    { region: 'Cabarete', total: 86, color: 'bg-yellow-500', pct: 40 },
                    { region: 'Samaná', total: 67, color: 'bg-purple-500', pct: 31 },
                    { region: 'Monte Cristi', total: 43, color: 'bg-orange-400', pct: 20 },
                  ].map((r) => (
                    <div key={r.region}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-600 font-medium">{r.region}</span>
                        <span className="text-gray-400 font-bold">{r.total}</span>
                      </div>
                      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
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
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                <h2 className="font-black text-gray-900 mb-4">Acciones rápidas</h2>
                <div className="space-y-2">
                  {[
                    { label: 'Aprobar postulaciones', color: 'bg-green-50 text-green-700 hover:bg-green-100', count: '5' },
                    { label: 'Revisar propiedades', color: 'bg-blue-50 text-[#0056B3] hover:bg-blue-100', count: '3' },
                    { label: 'Asignar agentes', color: 'bg-yellow-50 text-yellow-700 hover:bg-yellow-100', count: '2' },
                    { label: 'Ver negociaciones', color: 'bg-red-50 text-[#FF2A39] hover:bg-red-100', count: '9' },
                  ].map((a) => (
                    <button
                      key={a.label}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-colors ${a.color}`}
                    >
                      {a.label}
                      <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-xs font-black">
                        {a.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* TABLA PROPIEDADES */}
          <div className="mt-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h2 className="font-black text-gray-900">Propiedades recientes</h2>
              <Link href="/propiedades" className="text-sm text-[#0056B3] font-bold hover:text-[#FF2A39] transition-colors">
                Ver catálogo completo →
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-50">
                    <th className="text-left text-xs font-bold text-gray-400 uppercase tracking-wider px-6 py-3">Propiedad</th>
                    <th className="text-left text-xs font-bold text-gray-400 uppercase tracking-wider px-6 py-3">Región</th>
                    <th className="text-left text-xs font-bold text-gray-400 uppercase tracking-wider px-6 py-3">Precio</th>
                    <th className="text-left text-xs font-bold text-gray-400 uppercase tracking-wider px-6 py-3">Estado</th>
                    <th className="text-left text-xs font-bold text-gray-400 uppercase tracking-wider px-6 py-3">Visitas</th>
                    <th className="text-left text-xs font-bold text-gray-400 uppercase tracking-wider px-6 py-3">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {PROPIEDADES_RECIENTES.map((p) => (
                    <tr key={p.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-gray-900 text-sm">{p.titulo}</td>
                      <td className="px-6 py-4 text-gray-500 text-sm">{p.region}</td>
                      <td className="px-6 py-4 text-[#0056B3] font-black text-sm">{p.precio}</td>
                      <td className="px-6 py-4">
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                          p.estado === 'Publicada' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {p.estado}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-500 text-sm">{p.visitas}</td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button className="text-xs text-[#0056B3] font-bold hover:text-[#FF2A39] transition-colors">Editar</button>
                          <button className="text-xs text-gray-400 font-bold hover:text-red-500 transition-colors">Pausar</button>
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

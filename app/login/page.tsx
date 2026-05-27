'use client'
import { useState } from 'react'
import Link from 'next/link'

const ROLES = [
  { id: 'propietario', label: 'Propietario', desc: 'Quiero publicar y gestionar mis propiedades', icono: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
  { id: 'comprador', label: 'Comprador / Inversor', desc: 'Busco propiedades para comprar o invertir', icono: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' },
  { id: 'agente', label: 'Agente inmobiliario', desc: 'Soy agente y quiero trabajar con DINCO', icono: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' },
]

export default function Registro() {
  const [paso, setPaso] = useState(1)
  const [rol, setRol] = useState('')
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '', password: '', confirmar: '' })

  const actualizar = (campo: string, valor: string) =>
    setForm(p => ({ ...p, [campo]: valor }))

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-lg">

        {/* LOGO */}
        <Link href="/" className="flex justify-center mb-8">
          <img src="/nuevo_dc.svg" alt="DINCO" className="w-32" />
        </Link>

        {/* INDICADOR DE PASOS */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {[1, 2, 3].map((p) => (
            <div key={p} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black transition-all duration-300 ${
                paso >= p ? 'bg-[#0056B3] text-white' : 'bg-gray-200 text-gray-400'
              }`}>
                {paso > p ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                ) : p}
              </div>
              {p < 3 && <div className={`w-12 h-0.5 mx-1 transition-all duration-300 ${paso > p ? 'bg-[#0056B3]' : 'bg-gray-200'}`} />}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8">

          {/* PASO 1 — ROL */}
          {paso === 1 && (
            <div>
              <h1 className="text-2xl font-black text-gray-900 mb-2">¿Cómo usarás DINCO?</h1>
              <p className="text-gray-500 text-sm mb-6">Selecciona tu perfil para personalizar tu experiencia</p>
              <div className="space-y-3">
                {ROLES.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => setRol(r.id)}
                    className={`w-full flex items-center gap-4 p-4 rounded-2xl border-2 text-left transition-all duration-200 ${
                      rol === r.id
                        ? 'border-[#0056B3] bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      rol === r.id ? 'bg-[#0056B3]' : 'bg-gray-100'
                    }`}>
                      <svg className={`w-5 h-5 ${rol === r.id ? 'text-white' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={r.icono} />
                      </svg>
                    </div>
                    <div>
                      <p className={`font-black text-sm ${rol === r.id ? 'text-[#0056B3]' : 'text-gray-900'}`}>{r.label}</p>
                      <p className="text-gray-400 text-xs mt-0.5">{r.desc}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* PASO 2 — DATOS */}
          {paso === 2 && (
            <div>
              <h1 className="text-2xl font-black text-gray-900 mb-2">Tus datos personales</h1>
              <p className="text-gray-500 text-sm mb-6">Completa tu información básica</p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Nombre completo</label>
                  <input
                    type="text"
                    value={form.nombre}
                    onChange={e => actualizar('nombre', e.target.value)}
                    placeholder="Tu nombre completo"
                    className="w-full border-2 border-gray-200 focus:border-[#0056B3] rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Correo electrónico</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => actualizar('email', e.target.value)}
                    placeholder="tu@email.com"
                    className="w-full border-2 border-gray-200 focus:border-[#0056B3] rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Teléfono / WhatsApp</label>
                  <input
                    type="tel"
                    value={form.telefono}
                    onChange={e => actualizar('telefono', e.target.value)}
                    placeholder="+1 (809) 000-0000"
                    className="w-full border-2 border-gray-200 focus:border-[#0056B3] rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                  />
                </div>
              </div>
            </div>
          )}

          {/* PASO 3 — CONTRASEÑA */}
          {paso === 3 && (
            <div>
              <h1 className="text-2xl font-black text-gray-900 mb-2">Crea tu contraseña</h1>
              <p className="text-gray-500 text-sm mb-6">Mínimo 8 caracteres con números y letras</p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Contraseña</label>
                  <input
                    type="password"
                    value={form.password}
                    onChange={e => actualizar('password', e.target.value)}
                    placeholder="••••••••"
                    className="w-full border-2 border-gray-200 focus:border-[#0056B3] rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Confirmar contraseña</label>
                  <input
                    type="password"
                    value={form.confirmar}
                    onChange={e => actualizar('confirmar', e.target.value)}
                    placeholder="••••••••"
                    className="w-full border-2 border-gray-200 focus:border-[#0056B3] rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                  />
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-xs font-bold text-gray-600 mb-2">Al registrarte aceptas:</p>
                  <div className="space-y-1 text-xs text-gray-500">
                    <p>✓ Términos y condiciones de DINCO</p>
                    <p>✓ Política de privacidad</p>
                    <p>✓ Recibir comunicaciones sobre propiedades</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* NAVEGACIÓN */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
            {paso > 1 ? (
              <button
                onClick={() => setPaso(paso - 1)}
                className="flex items-center gap-2 text-gray-500 font-bold hover:text-[#0056B3] transition-colors text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Anterior
              </button>
            ) : <div />}

            {paso < 3 ? (
              <button
                onClick={() => setPaso(paso + 1)}
                disabled={paso === 1 && !rol}
                className="flex items-center gap-2 bg-[#0056B3] hover:bg-[#FF2A39] text-white font-black px-8 py-3 rounded-xl transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed text-sm"
              >
                Continuar
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            ) : (
              <button className="bg-[#0056B3] hover:bg-[#FF2A39] text-white font-black px-8 py-3 rounded-xl transition-all duration-300 text-sm">
                Crear mi cuenta
              </button>
            )}
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          ¿Ya tienes cuenta?{' '}
          <Link href="/login" className="text-[#0056B3] font-bold hover:text-[#FF2A39] transition-colors">
            Inicia sesión
          </Link>
        </p>

      </div>
    </div>
  )
}
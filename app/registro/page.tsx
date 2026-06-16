'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)

  const handleSubmit = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 1500)
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* PANEL IZQUIERDO — VISUAL */}
      <div
        className="relative hidden bg-cover bg-center lg:flex lg:w-1/2"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-linear-to-br from-[#0056B3]/90 to-[#003d82]/80" />
        <div className="relative z-10 flex w-full flex-col justify-between p-12">
          <Link href="/">
            <img
              src="/nuevo_dc.svg"
              alt="DINCO"
              className="w-36 brightness-0 invert"
            />
          </Link>
          <div>
            <h2 className="mb-4 text-4xl leading-tight font-black text-white">
              Tu propiedad ideal te espera
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-white/70">
              Accede a tu panel para gestionar propiedades, consultas y
              negociaciones en tiempo real.
            </p>
            <div className="flex gap-4">
              {[
                { num: '+600', label: 'Propiedades' },
                { num: '+800', label: 'Clientes' },
                { num: '12', label: 'Años' },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl bg-white/10 px-4 py-3 text-center"
                >
                  <p className="text-xl font-black text-white">{s.num}</p>
                  <p className="text-xs text-white/60">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* PANEL DERECHO — FORMULARIO */}
      <div className="flex flex-1 items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* LOGO MOBILE */}
          <Link href="/" className="mb-8 flex justify-center lg:hidden">
            <img src="/nuevo_dc.svg" alt="DINCO" className="w-32" />
          </Link>

          <div className="mb-8">
            <h1 className="mb-2 text-3xl font-black text-gray-900">
              Bienvenido de vuelta
            </h1>
            <p className="text-gray-500">Ingresa a tu cuenta de DINCO</p>
          </div>

          {/* TABS TIPO USUARIO */}
          <div className="mb-6 flex rounded-xl bg-gray-100 p-1">
            {['Propietario', 'Agente', 'Admin'].map((tipo, i) => (
              <button
                key={tipo}
                className={`flex-1 rounded-lg py-2.5 text-sm font-bold transition-all duration-200 ${
                  i === 0
                    ? 'bg-white text-[#0056B3] shadow-sm'
                    : 'text-gray-500'
                }`}
              >
                {tipo}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-bold text-gray-700">
                Correo electrónico
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) =>
                  setForm((p) => ({ ...p, email: e.target.value }))
                }
                placeholder="tu@email.com"
                className="w-full rounded-xl border-2 border-gray-200 px-4 py-3.5 text-sm transition-colors outline-none focus:border-[#0056B3]"
              />
            </div>
            <div>
              <div className="mb-2 flex justify-between">
                <label className="text-sm font-bold text-gray-700">
                  Contraseña
                </label>
                <Link
                  href="#"
                  className="text-xs font-semibold text-[#0056B3] transition-colors hover:text-[#FF2A39]"
                >
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
              <input
                type="password"
                value={form.password}
                onChange={(e) =>
                  setForm((p) => ({ ...p, password: e.target.value }))
                }
                placeholder="••••••••"
                className="w-full rounded-xl border-2 border-gray-200 px-4 py-3.5 text-sm transition-colors outline-none focus:border-[#0056B3]"
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[#0056B3] py-4 font-black text-white shadow-lg transition-all duration-300 hover:bg-[#FF2A39] disabled:opacity-70"
            >
              {loading ? (
                <svg
                  className="h-5 w-5 animate-spin"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
              ) : (
                'Iniciar sesión'
              )}
            </button>
          </div>

          {/* SEPARADOR */}
          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-gray-200" />
            <span className="text-sm text-gray-400">o continúa con</span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          {/* SOCIAL LOGIN */}
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 rounded-xl border-2 border-gray-200 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-300">
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Google
            </button>
            <button className="flex items-center justify-center gap-2 rounded-xl border-2 border-gray-200 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-300">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </button>
          </div>

          <p className="mt-6 text-center text-sm text-gray-500">
            ¿No tienes cuenta?{' '}
            <Link
              href="/registro"
              className="font-bold text-[#0056B3] transition-colors hover:text-[#FF2A39]"
            >
              Regístrate gratis
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

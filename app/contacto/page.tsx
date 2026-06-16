'use client'
import { useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const oficinas = [
  {
    ciudad: 'Puerto Plata',
    direccion: 'Av. Circunvalación Norte, Puerto Plata',
    telefono: '+1 (809) 123-4567',
    email: 'pplata@dinco.com',
    horario: 'Lun-Vie 8am-6pm · Sáb 9am-2pm',
  },
  {
    ciudad: 'Santo Domingo',
    direccion: 'Av. Winston Churchill, Piantini, D.N.',
    telefono: '+1 (809) 987-6543',
    email: 'sd@dinco.com',
    horario: 'Lun-Vie 8am-6pm · Sáb 9am-2pm',
  },
  {
    ciudad: 'Cabarete',
    direccion: 'Carretera Principal, Cabarete, Puerto Plata',
    telefono: '+1 (809) 456-7890',
    email: 'cabarete@dinco.com',
    horario: 'Lun-Vie 9am-5pm · Sáb 10am-1pm',
  },
]

export default function Contacto() {
  const [enviado, setEnviado] = useState(false)
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: '',
  })

  const actualizar = (campo: string, valor: string) =>
    setForm((prev) => ({ ...prev, [campo]: valor }))

  const enviar = () => setEnviado(true)

  return (
    <main>
      <Navbar />

      {/* HERO */}
      <section className="bg-[#0056B3] px-6 pt-32 pb-16">
        <div className="mx-auto max-w-7xl text-center">
          <span className="mb-4 inline-block rounded-full bg-[#FF2A39] px-4 py-1.5 text-xs font-bold tracking-widest text-white uppercase">
            Estamos aquí para ayudarte
          </span>
          <h1 className="mb-4 text-5xl font-black text-white">Contáctanos</h1>
          <p className="mx-auto max-w-2xl text-lg text-white/75">
            Nuestro equipo de agentes está disponible para responder todas tus
            preguntas
          </p>
        </div>
      </section>

      {/* CONTENIDO PRINCIPAL */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2">
          {/* FORMULARIO */}
          <div className="rounded-3xl bg-white p-8 shadow-xl">
            {!enviado ? (
              <>
                <h2 className="mb-6 text-2xl font-black text-gray-900">
                  Envíanos un mensaje
                </h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="mb-2 block text-sm font-bold text-gray-700">
                        Nombre
                      </label>
                      <input
                        type="text"
                        value={form.nombre}
                        onChange={(e) => actualizar('nombre', e.target.value)}
                        placeholder="Tu nombre"
                        className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-sm transition-colors outline-none focus:border-[#0056B3]"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-bold text-gray-700">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        value={form.telefono}
                        onChange={(e) => actualizar('telefono', e.target.value)}
                        placeholder="+1 (809) 000-0000"
                        className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-sm transition-colors outline-none focus:border-[#0056B3]"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-bold text-gray-700">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => actualizar('email', e.target.value)}
                      placeholder="tu@email.com"
                      className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-sm transition-colors outline-none focus:border-[#0056B3]"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-bold text-gray-700">
                      Asunto
                    </label>
                    <select
                      value={form.asunto}
                      onChange={(e) => actualizar('asunto', e.target.value)}
                      className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-sm text-gray-700 transition-colors outline-none focus:border-[#0056B3]"
                    >
                      <option value="">Selecciona un asunto</option>
                      <option value="compra">
                        Quiero comprar una propiedad
                      </option>
                      <option value="renta">Quiero rentar una propiedad</option>
                      <option value="vender">Quiero vender mi propiedad</option>
                      <option value="inversion">Asesoría de inversión</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-bold text-gray-700">
                      Mensaje
                    </label>
                    <textarea
                      value={form.mensaje}
                      onChange={(e) => actualizar('mensaje', e.target.value)}
                      placeholder="Cuéntanos en qué podemos ayudarte..."
                      rows={5}
                      className="w-full resize-none rounded-xl border-2 border-gray-200 px-4 py-3 text-sm transition-colors outline-none focus:border-[#0056B3]"
                    />
                  </div>
                  <button
                    onClick={enviar}
                    className="w-full rounded-xl bg-[#0056B3] py-4 font-black text-white transition-all duration-300 hover:bg-[#FF2A39]"
                  >
                    Enviar mensaje
                  </button>
                </div>
              </>
            ) : (
              <div className="py-12 text-center">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                  <svg
                    className="h-10 w-10 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="mb-3 text-2xl font-black text-gray-900">
                  ¡Mensaje enviado!
                </h3>
                <p className="text-gray-500">
                  Un agente te contactará en menos de 24 horas.
                </p>
              </div>
            )}
          </div>

          {/* INFORMACIÓN */}
          <div className="space-y-6">
            <div>
              <h2 className="mb-6 text-2xl font-black text-gray-900">
                Nuestras oficinas
              </h2>
              <div className="space-y-4">
                {oficinas.map((oficina) => (
                  <div
                    key={oficina.ciudad}
                    className="rounded-2xl bg-white p-6 shadow-md"
                  >
                    <h3 className="mb-3 text-lg font-black text-[#0056B3]">
                      {oficina.ciudad}
                    </h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p>📍 {oficina.direccion}</p>
                      <p>📞 {oficina.telefono}</p>
                      <p>✉️ {oficina.email}</p>
                      <p>🕐 {oficina.horario}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* WHATSAPP DIRECTO */}
            <a
              href="https://wa.me/18091234567?text=Hola%20DINCO,%20necesito%20información"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl bg-green-500 px-6 py-4 text-center font-black text-white shadow-lg transition-colors duration-300 hover:bg-green-600"
            >
              💬 Chatea con un agente ahora por WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

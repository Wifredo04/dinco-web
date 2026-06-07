'use client'
import { useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const oficinas = [
  { ciudad: 'Puerto Plata', direccion: 'Av. Circunvalación Norte, Puerto Plata', telefono: '+1 (809) 123-4567', email: 'pplata@dinco.com', horario: 'Lun-Vie 8am-6pm · Sáb 9am-2pm' },
  { ciudad: 'Santo Domingo', direccion: 'Av. Winston Churchill, Piantini, D.N.', telefono: '+1 (809) 987-6543', email: 'sd@dinco.com', horario: 'Lun-Vie 8am-6pm · Sáb 9am-2pm' },
  { ciudad: 'Cabarete', direccion: 'Carretera Principal, Cabarete, Puerto Plata', telefono: '+1 (809) 456-7890', email: 'cabarete@dinco.com', horario: 'Lun-Vie 9am-5pm · Sáb 10am-1pm' },
]

export default function Contacto() {
  const [enviado, setEnviado] = useState(false)
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '', asunto: '', mensaje: '' })

  const actualizar = (campo: string, valor: string) => setForm((prev) => ({ ...prev, [campo]: valor }))

  const enviar = () => setEnviado(true)

  return (
    <main>
      <Navbar />

      {/* HERO */}
      <section className="pt-32 pb-16 px-6 bg-[#0056B3]">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block bg-[#FF2A39] text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-widest uppercase mb-4">
            Estamos aquí para ayudarte
          </span>
          <h1 className="text-5xl font-black text-white mb-4">Contáctanos</h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto">
            Nuestro equipo de agentes está disponible para responder todas tus preguntas
          </p>
        </div>
      </section>

      {/* CONTENIDO PRINCIPAL */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* FORMULARIO */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            {!enviado ? (
              <>
                <h2 className="text-2xl font-black text-gray-900 mb-6">Envíanos un mensaje</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Nombre</label>
                      <input
                        type="text"
                        value={form.nombre}
                        onChange={(e) => actualizar('nombre', e.target.value)}
                        placeholder="Tu nombre"
                        className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#0056B3] transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Teléfono</label>
                      <input
                        type="tel"
                        value={form.telefono}
                        onChange={(e) => actualizar('telefono', e.target.value)}
                        placeholder="+1 (809) 000-0000"
                        className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#0056B3] transition-colors text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Correo electrónico</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => actualizar('email', e.target.value)}
                      placeholder="tu@email.com"
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#0056B3] transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Asunto</label>
                    <select
                      value={form.asunto}
                      onChange={(e) => actualizar('asunto', e.target.value)}
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#0056B3] transition-colors text-sm text-gray-700"
                    >
                      <option value="">Selecciona un asunto</option>
                      <option value="compra">Quiero comprar una propiedad</option>
                      <option value="renta">Quiero rentar una propiedad</option>
                      <option value="vender">Quiero vender mi propiedad</option>
                      <option value="inversion">Asesoría de inversión</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Mensaje</label>
                    <textarea
                      value={form.mensaje}
                      onChange={(e) => actualizar('mensaje', e.target.value)}
                      placeholder="Cuéntanos en qué podemos ayudarte..."
                      rows={5}
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#0056B3] transition-colors text-sm resize-none"
                    />
                  </div>
                  <button
                    onClick={enviar}
                    className="w-full bg-[#0056B3] hover:bg-[#FF2A39] text-white font-black py-4 rounded-xl transition-all duration-300"
                  >
                    Enviar mensaje
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-3">¡Mensaje enviado!</h3>
                <p className="text-gray-500">Un agente te contactará en menos de 24 horas.</p>
              </div>
            )}
          </div>

          {/* INFORMACIÓN */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-6">Nuestras oficinas</h2>
              <div className="space-y-4">
                {oficinas.map((oficina) => (
                  <div key={oficina.ciudad} className="bg-white rounded-2xl p-6 shadow-md">
                    <h3 className="font-black text-[#0056B3] text-lg mb-3">{oficina.ciudad}</h3>
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
              className="block bg-green-500 hover:bg-green-600 text-white font-black py-4 px-6 rounded-2xl text-center transition-colors duration-300 shadow-lg"
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

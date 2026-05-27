'use client'
import { useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

const PASOS = [
  { num: 1, label: 'Oferta', desc: 'Propón tu precio' },
  { num: 2, label: 'Documentos', desc: 'Sube tus archivos' },
  { num: 3, label: 'Revisión', desc: 'DINCO valida' },
  { num: 4, label: 'Firma', desc: 'Contrato digital' },
  { num: 5, label: 'Pago', desc: 'Cierre final' },
]

const DOCS_REQUERIDOS = [
  { id: 'id', label: 'Cédula o Pasaporte', requerido: true, subido: false },
  { id: 'fondos', label: 'Prueba de fondos / Pre-aprobación bancaria', requerido: true, subido: false },
  { id: 'escrituras', label: 'Escrituras o Título (si aplica)', requerido: false, subido: false },
  { id: 'impuestos', label: 'Constancia de impuestos al día', requerido: true, subido: false },
]

export default function Negociacion() {
  const [paso, setPaso] = useState(1)
  const [oferta, setOferta] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [docs, setDocs] = useState(DOCS_REQUERIDOS)

  const toggleDoc = (id: string) => {
    setDocs(prev => prev.map(d => d.id === id ? { ...d, subido: !d.subido } : d))
  }

  return (
    <main>
      <Navbar />

      {/* HERO */}
      <section className="pt-32 pb-12 px-6 bg-[#0056B3]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-[#FF2A39] text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-widest uppercase mb-4">
            Proceso 100% digital
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-3">
            Cierre de negociación
          </h1>
          <p className="text-white/75 text-lg">
            Gestiona toda la transacción desde aquí — sin visitas innecesarias
          </p>
        </div>
      </section>

      {/* INDICADOR DE PASOS */}
      <section className="bg-white border-b border-gray-100 py-6 px-6 sticky top-0 z-40 shadow-sm">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            {PASOS.map((p, i) => (
              <div key={p.num} className="flex items-center flex-1">
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-sm transition-all duration-300 ${
                    paso > p.num
                      ? 'bg-green-500 text-white'
                      : paso === p.num
                      ? 'bg-[#0056B3] text-white shadow-lg shadow-blue-200'
                      : 'bg-gray-100 text-gray-400'
                    }`}>
                    {paso > p.num ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : p.num}
                  </div>
                  <span className={`text-xs font-bold mt-1 hidden md:block transition-colors ${
                    paso >= p.num ? 'text-[#0056B3]' : 'text-gray-400'
                    }`}>{p.label}</span>
                </div>
                {i < PASOS.length - 1 && (
                  <div className={`flex-1 h-0.5 mx-2 mb-4 transition-all duration-500 ${
                    paso > p.num ? 'bg-green-400' : 'bg-gray-200'
                    }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* FORMULARIO PRINCIPAL */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">

                {/* PASO 1 — OFERTA */}
                {paso === 1 && (
                  <div>
                    <h2 className="text-2xl font-black text-gray-900 mb-2">Tu oferta</h2>
                    <p className="text-gray-500 text-sm mb-6">Propón el precio que consideras justo. El propietario puede aceptar, rechazar o hacer una contrapropuesta.</p>

                    <div className="bg-gray-50 rounded-2xl p-5 mb-6 flex items-center gap-4">
                      <div
                        className="w-16 h-16 rounded-xl bg-cover bg-center shrink-0"
                        style={{ backgroundImage: 'url(https://unsplash.com)' }}
                      />
                      <div>
                        <h3 className="font-black text-gray-900">Villa frente al mar</h3>
                        <p className="text-[#0056B3] font-black text-lg">US$ 285,000</p>
                        <p className="text-gray-400 text-xs">Puerto Plata · Venta</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Tu oferta (US$)</label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">US$</span>
                          <input
                            type="text"
                            value={oferta}
                            onChange={e => setOferta(e.target.value)}
                            placeholder="270,000"
                            className="w-full border-2 border-gray-200 focus:border-[#0056B3] rounded-xl pl-12 pr-4 py-3.5 text-sm outline-none transition-colors font-bold"
                          />
                        </div>
                        <p className="text-gray-400 text-xs mt-1">Precio listado: US$ 285,000</p>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Mensaje al propietario (opcional)</label>
                        <textarea
                          value={mensaje}
                          onChange={e => setMensaje(e.target.value)}
                          placeholder="Explica las razones de tu oferta o cualquier condición especial..."
                          rows={4}
                          className="w-full border-2 border-gray-200 focus:border-[#0056B3] rounded-xl px-4 py-3 text-sm outline-none transition-colors resize-none"
                        />
                      </div>

                      <div className="bg-blue-50 rounded-2xl p-4">
                        <p className="text-[#0056B3] font-bold text-sm mb-2">¿Qué pasa después?</p>
                        <div className="space-y-1.5 text-xs text-gray-600">
                          <p>✓ El propietario recibe tu oferta en menos de 1 hora</p>
                          <p>✓ Tiene 48h para responder</p>
                          <p>✓ Si acepta, pasamos al proceso de documentación</p>
                          <p>✓ Tu agente DINCO te acompaña en todo momento</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* PASO 2 — DOCUMENTOS */}
                {paso === 2 && (
                  <div>
                    <h2 className="text-2xl font-black text-gray-900 mb-2">Documentación requerida</h2>
                    <p className="text-gray-500 text-sm mb-6">Sube los documentos necesarios para procesar la transacción</p>

                    <div className="space-y-3 mb-6">
                      {docs.map((doc) => (
                        <div
                          key={doc.id}
                          className={`flex items-center justify-between p-4 rounded-2xl border-2 transition-all duration-200 ${
                            doc.subido ? 'border-green-200 bg-green-50' : 'border-gray-200 bg-gray-50'
                            }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="font-bold text-gray-800 text-sm">{doc.label}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

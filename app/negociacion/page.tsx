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
  {
    id: 'fondos',
    label: 'Prueba de fondos / Pre-aprobación bancaria',
    requerido: true,
    subido: false,
  },
  {
    id: 'escrituras',
    label: 'Escrituras o Título (si aplica)',
    requerido: false,
    subido: false,
  },
  {
    id: 'impuestos',
    label: 'Constancia de impuestos al día',
    requerido: true,
    subido: false,
  },
]

export default function Negociacion() {
  const [paso, setPaso] = useState(1)
  const [oferta, setOferta] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [docs, setDocs] = useState(DOCS_REQUERIDOS)

  const toggleDoc = (id: string) => {
    setDocs((prev) =>
      prev.map((d) => (d.id === id ? { ...d, subido: !d.subido } : d)),
    )
  }

  return (
    <main>
      <Navbar />

      {/* HERO */}
      <section className="bg-[#0056B3] px-6 pt-32 pb-12">
        <div className="mx-auto max-w-4xl text-center">
          <span className="mb-4 inline-block rounded-full bg-[#FF2A39] px-4 py-1.5 text-xs font-bold tracking-widest text-white uppercase">
            Proceso 100% digital
          </span>
          <h1 className="mb-3 text-4xl font-black text-white md:text-5xl">
            Cierre de negociación
          </h1>
          <p className="text-lg text-white/75">
            Gestiona toda la transacción desde aquí — sin visitas innecesarias
          </p>
        </div>
      </section>

      {/* INDICADOR DE PASOS */}
      <section className="sticky top-0 z-40 border-b border-gray-100 bg-white px-6 py-6 shadow-sm">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center justify-between">
            {PASOS.map((p, i) => (
              <div key={p.num} className="flex flex-1 items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-black transition-all duration-300 ${
                      paso > p.num
                        ? 'bg-green-500 text-white'
                        : paso === p.num
                          ? 'bg-[#0056B3] text-white shadow-lg shadow-blue-200'
                          : 'bg-gray-100 text-gray-400'
                    }`}
                  >
                    {paso > p.num ? (
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    ) : (
                      p.num
                    )}
                  </div>
                  <span
                    className={`mt-1 hidden text-xs font-bold transition-colors md:block ${
                      paso >= p.num ? 'text-[#0056B3]' : 'text-gray-400'
                    }`}
                  >
                    {p.label}
                  </span>
                </div>
                {i < PASOS.length - 1 && (
                  <div
                    className={`mx-2 mb-4 h-0.5 flex-1 transition-all duration-500 ${
                      paso > p.num ? 'bg-green-400' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* FORMULARIO PRINCIPAL */}
            <div className="lg:col-span-2">
              <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
                {/* PASO 1 — OFERTA */}
                {paso === 1 && (
                  <div>
                    <h2 className="mb-2 text-2xl font-black text-gray-900">
                      Tu oferta
                    </h2>
                    <p className="mb-6 text-sm text-gray-500">
                      Propón el precio que consideras justo. El propietario
                      puede aceptar, rechazar o hacer una contrapropuesta.
                    </p>

                    <div className="mb-6 flex items-center gap-4 rounded-2xl bg-gray-50 p-5">
                      <div
                        className="h-16 w-16 shrink-0 rounded-xl bg-cover bg-center"
                        style={{ backgroundImage: 'url(https://unsplash.com)' }}
                      />
                      <div>
                        <h3 className="font-black text-gray-900">
                          Villa frente al mar
                        </h3>
                        <p className="text-lg font-black text-[#0056B3]">
                          US$ 285,000
                        </p>
                        <p className="text-xs text-gray-400">
                          Puerto Plata · Venta
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="mb-2 block text-sm font-bold text-gray-700">
                          Tu oferta (US$)
                        </label>
                        <div className="relative">
                          <span className="absolute top-1/2 left-4 -translate-y-1/2 font-bold text-gray-400">
                            US$
                          </span>
                          <input
                            type="text"
                            value={oferta}
                            onChange={(e) => setOferta(e.target.value)}
                            placeholder="270,000"
                            className="w-full rounded-xl border-2 border-gray-200 py-3.5 pr-4 pl-12 text-sm font-bold transition-colors outline-none focus:border-[#0056B3]"
                          />
                        </div>
                        <p className="mt-1 text-xs text-gray-400">
                          Precio listado: US$ 285,000
                        </p>
                      </div>
                      <div>
                        <label className="mb-2 block text-sm font-bold text-gray-700">
                          Mensaje al propietario (opcional)
                        </label>
                        <textarea
                          value={mensaje}
                          onChange={(e) => setMensaje(e.target.value)}
                          placeholder="Explica las razones de tu oferta o cualquier condición especial..."
                          rows={4}
                          className="w-full resize-none rounded-xl border-2 border-gray-200 px-4 py-3 text-sm transition-colors outline-none focus:border-[#0056B3]"
                        />
                      </div>

                      <div className="rounded-2xl bg-blue-50 p-4">
                        <p className="mb-2 text-sm font-bold text-[#0056B3]">
                          ¿Qué pasa después?
                        </p>
                        <div className="space-y-1.5 text-xs text-gray-600">
                          <p>
                            ✓ El propietario recibe tu oferta en menos de 1 hora
                          </p>
                          <p>✓ Tiene 48h para responder</p>
                          <p>
                            ✓ Si acepta, pasamos al proceso de documentación
                          </p>
                          <p>✓ Tu agente DINCO te acompaña en todo momento</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* PASO 2 — DOCUMENTOS */}
                {paso === 2 && (
                  <div>
                    <h2 className="mb-2 text-2xl font-black text-gray-900">
                      Documentación requerida
                    </h2>
                    <p className="mb-6 text-sm text-gray-500">
                      Sube los documentos necesarios para procesar la
                      transacción
                    </p>

                    <div className="mb-6 space-y-3">
                      {docs.map((doc) => (
                        <div
                          key={doc.id}
                          className={`flex items-center justify-between rounded-2xl border-2 p-4 transition-all duration-200 ${
                            doc.subido
                              ? 'border-green-200 bg-green-50'
                              : 'border-gray-200 bg-gray-50'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-bold text-gray-800">
                              {doc.label}
                            </span>
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

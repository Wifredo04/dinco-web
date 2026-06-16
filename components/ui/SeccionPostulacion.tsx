import Link from 'next/link'

export default function SeccionPostulacion() {
  return (
    <section className="relative overflow-hidden bg-[#0056B3] px-6 py-20">
      {/* FONDO DECORATIVO */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 h-96 w-96 translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
        <div className="absolute bottom-0 left-0 h-64 w-64 -translate-x-1/2 translate-y-1/2 rounded-full bg-[#FF2A39]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* TEXTO */}
          <div>
            <span className="mb-6 inline-block rounded-full bg-[#FF2A39] px-4 py-1.5 text-xs font-bold tracking-widest text-white uppercase">
              Propietarios internacionales
            </span>
            <h2 className="mb-6 text-4xl leading-tight font-black text-white md:text-5xl">
              ¿Tienes una propiedad fuera de República Dominicana?
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-white/75">
              Publica, vende, renta o promociona tu propiedad a través de DINCO
              y llega a miles de compradores e inversores en todo el mundo.
              Nuestros agentes especializados te guiarán en cada paso.
            </p>

            {/* BENEFICIOS */}
            <div className="mb-10 space-y-4">
              {[
                'Asignación automática al catálogo de tu región',
                'Agente DINCO dedicado para tu zona',
                'Visibilidad internacional sin comisión adelantada',
                'Proceso 100% digital desde cualquier país',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FF2A39]">
                    <svg
                      className="h-3 w-3 text-white"
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
                  </div>
                  <p className="font-medium text-white/85">{item}</p>
                </div>
              ))}
            </div>

            <Link
              href="/postulacion"
              className="inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 text-lg font-black text-[#0056B3] shadow-xl transition-all duration-300 hover:bg-[#FF2A39] hover:text-white"
            >
              Publicar mi propiedad
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          {/* PASOS */}
          <div className="grid grid-cols-1 gap-4">
            {[
              {
                paso: '01',
                titulo: 'Selecciona tu país',
                desc: 'Elige el país donde está ubicada tu propiedad',
              },
              {
                paso: '02',
                titulo: 'Tipo de operación',
                desc: 'Indica si deseas vender, rentar o promocionar',
              },
              {
                paso: '03',
                titulo: 'Datos de la propiedad',
                desc: 'Completa el formulario con los detalles y fotos',
              },
              {
                paso: '04',
                titulo: 'Agente asignado',
                desc: 'DINCO te asigna un agente experto en tu región',
              },
            ].map((item) => (
              <div
                key={item.paso}
                className="flex items-center gap-5 rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
              >
                <span className="w-14 shrink-0 text-4xl font-black text-white/20">
                  {item.paso}
                </span>
                <div>
                  <h3 className="text-lg font-black text-white">
                    {item.titulo}
                  </h3>
                  <p className="text-sm text-white/65">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

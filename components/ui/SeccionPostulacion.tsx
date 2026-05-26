import Link from 'next/link'

export default function SeccionPostulacion() {
  return (
    <section className="py-20 px-6 bg-[#0056B3] relative overflow-hidden">

      {/* FONDO DECORATIVO */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FF2A39] rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* TEXTO */}
          <div>
            <span className="inline-block bg-[#FF2A39] text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-widest uppercase mb-6">
              Propietarios internacionales
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              ¿Tienes una propiedad fuera de República Dominicana?
            </h2>
            <p className="text-white/75 text-lg mb-8 leading-relaxed">
              Publica, vende, renta o promociona tu propiedad a través de DINCO y llega a miles de compradores e inversores en todo el mundo. Nuestros agentes especializados te guiarán en cada paso.
            </p>

            {/* BENEFICIOS */}
            <div className="space-y-4 mb-10">
              {[
                'Asignación automática al catálogo de tu región',
                'Agente DINCO dedicado para tu zona',
                'Visibilidad internacional sin comisión adelantada',
                'Proceso 100% digital desde cualquier país',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#FF2A39] flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-white/85 font-medium">{item}</p>
                </div>
              ))}
            </div>

            <Link
              href="/postulacion"
              className="inline-flex items-center gap-3 bg-white text-[#0056B3] font-black px-8 py-4 rounded-xl hover:bg-[#FF2A39] hover:text-white transition-all duration-300 shadow-xl text-lg"
            >
              Publicar mi propiedad
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* PASOS */}
          <div className="grid grid-cols-1 gap-4">
            {[
              { paso: '01', titulo: 'Selecciona tu país', desc: 'Elige el país donde está ubicada tu propiedad' },
              { paso: '02', titulo: 'Tipo de operación', desc: 'Indica si deseas vender, rentar o promocionar' },
              { paso: '03', titulo: 'Datos de la propiedad', desc: 'Completa el formulario con los detalles y fotos' },
              { paso: '04', titulo: 'Agente asignado', desc: 'DINCO te asigna un agente experto en tu región' },
            ].map((item) => (
              <div key={item.paso} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 flex items-center gap-5 hover:bg-white/20 transition-all duration-300">
                <span className="text-4xl font-black text-white/20 w-14 shrink-0">{item.paso}</span>
                <div>
                  <h3 className="text-white font-black text-lg">{item.titulo}</h3>
                  <p className="text-white/65 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
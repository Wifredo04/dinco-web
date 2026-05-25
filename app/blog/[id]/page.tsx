import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function ArticuloBlog() {
  return (
    <main>
      <Navbar />

      <section className="pt-24 pb-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">

          {/* BREADCRUMB */}
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-8">
            <Link href="/" className="hover:text-[#0056B3] transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#0056B3] transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-gray-700">Guía para comprar en RD</span>
          </div>

          {/* CATEGORÍA Y FECHA */}
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-[#FF2A39] text-white text-xs font-bold px-3 py-1 rounded-full">
              Guía del comprador
            </span>
            <span className="text-gray-400 text-sm">15 Mayo 2025</span>
            <span className="text-gray-400 text-sm">·</span>
            <span className="text-gray-400 text-sm">8 min lectura</span>
          </div>

          {/* TÍTULO */}
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            Guía completa para comprar propiedad en República Dominicana siendo extranjero
          </h1>

          {/* IMAGEN */}
          <div
            className="h-80 bg-cover bg-center rounded-3xl mb-10"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80)' }}
          />

          {/* CONTENIDO */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              República Dominicana es uno de los destinos más atractivos del Caribe para la inversión inmobiliaria. Su economía estable, clima tropical, playas de clase mundial y legislación favorable hacen de este país una opción ideal para compradores internacionales.
            </p>

            <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">¿Pueden los extranjeros comprar propiedades en RD?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Sí. La ley dominicana permite a los ciudadanos extranjeros comprar, vender y poseer propiedades con los mismos derechos que los ciudadanos nacionales. No se requiere residencia ni visa especial para ser propietario.
            </p>

            <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">Documentos necesarios</h2>
            <ul className="space-y-2 mb-6">
              {['Pasaporte vigente', 'Certificado de no deuda (si aplica)', 'Prueba de fondos o pre-aprobación bancaria', 'Número de RNC (Registro Nacional del Contribuyente)', 'Contrato de compraventa firmado por ambas partes'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-600">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">Impuestos al comprar</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Al adquirir una propiedad en República Dominicana debes considerar los siguientes impuestos y gastos:
            </p>
            <div className="bg-gray-50 rounded-2xl p-6 mb-6">
              {[
                { concepto: 'Impuesto de transferencia', valor: '3% del valor de la propiedad' },
                { concepto: 'Impuesto anual sobre la propiedad (IPI)', valor: '1% del valor catastral' },
                { concepto: 'Honorarios del notario', valor: '0.5% a 1% del valor' },
                { concepto: 'Registro en el título', valor: 'Variable según la zona' },
              ].map((item) => (
                <div key={item.concepto} className="flex justify-between py-3 border-b border-gray-200 last:border-0">
                  <span className="text-gray-600 font-medium">{item.concepto}</span>
                  <span className="text-[#0056B3] font-black">{item.valor}</span>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">El papel del agente inmobiliario</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Contar con un agente certificado como los de DINCO es fundamental para navegar el proceso de compra con seguridad. Un agente te ayuda a verificar el título de propiedad, negociar el precio, coordinar con el notario y asegurarse de que todo el proceso legal sea correcto.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-[#0056B3] rounded-3xl p-8 text-center mt-12">
            <h3 className="text-2xl font-black text-white mb-3">¿Listo para dar el siguiente paso?</h3>
            <p className="text-white/75 mb-6">Nuestros agentes te guían en todo el proceso sin costo adicional</p>
            <div className="flex flex-col md:flex-row gap-3 justify-center">
              <Link
                href="/propiedades"
                className="bg-white text-[#0056B3] font-black px-8 py-3 rounded-xl hover:bg-[#FF2A39] hover:text-white transition-all duration-300"
              >
                Ver propiedades
              </Link>
              <Link
                href="/contacto"
                className="bg-transparent border-2 border-white text-white font-black px-8 py-3 rounded-xl hover:bg-white hover:text-[#0056B3] transition-all duration-300"
              >
                Hablar con un agente
              </Link>
            </div>
          </div>

          {/* VOLVER */}
          <div className="mt-10 text-center">
            <Link href="/blog" className="inline-flex items-center gap-2 text-[#0056B3] font-bold hover:text-[#FF2A39] transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Volver al blog
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}
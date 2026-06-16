import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

export default function ArticuloBlog() {
  return (
    <main>
      <Navbar />

      <section className="bg-white px-6 pt-24 pb-16">
        <div className="mx-auto max-w-4xl">
          {/* BREADCRUMB */}
          <div className="mb-8 flex items-center gap-2 text-sm text-gray-400">
            <Link href="/" className="transition-colors hover:text-[#0056B3]">
              Inicio
            </Link>
            <span>/</span>
            <Link
              href="/blog"
              className="transition-colors hover:text-[#0056B3]"
            >
              Blog
            </Link>
            <span>/</span>
            <span className="text-gray-700">Guía para comprar en RD</span>
          </div>

          {/* CATEGORÍA Y FECHA */}
          <div className="mb-4 flex items-center gap-3">
            <span className="rounded-full bg-[#FF2A39] px-3 py-1 text-xs font-bold text-white">
              Guía del comprador
            </span>
            <span className="text-sm text-gray-400">15 Mayo 2025</span>
            <span className="text-sm text-gray-400">·</span>
            <span className="text-sm text-gray-400">8 min lectura</span>
          </div>

          {/* TÍTULO */}
          <h1 className="mb-6 text-4xl leading-tight font-black text-gray-900 md:text-5xl">
            Guía completa para comprar propiedad en República Dominicana siendo
            extranjero
          </h1>

          {/* IMAGEN */}
          <div
            className="mb-10 h-80 rounded-3xl bg-cover bg-center"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80)',
            }}
          />

          {/* CONTENIDO */}
          <div className="prose prose-lg max-w-none">
            <p className="mb-6 text-lg leading-relaxed text-gray-600">
              República Dominicana es uno de los destinos más atractivos del
              Caribe para la inversión inmobiliaria. Su economía estable, clima
              tropical, playas de clase mundial y legislación favorable hacen de
              este país una opción ideal para compradores internacionales.
            </p>

            <h2 className="mt-10 mb-4 text-2xl font-black text-gray-900">
              ¿Pueden los extranjeros comprar propiedades en RD?
            </h2>
            <p className="mb-6 leading-relaxed text-gray-600">
              Sí. La ley dominicana permite a los ciudadanos extranjeros
              comprar, vender y poseer propiedades con los mismos derechos que
              los ciudadanos nacionales. No se requiere residencia ni visa
              especial para ser propietario.
            </p>

            <h2 className="mt-10 mb-4 text-2xl font-black text-gray-900">
              Documentos necesarios
            </h2>
            <ul className="mb-6 space-y-2">
              {[
                'Pasaporte vigente',
                'Certificado de no deuda (si aplica)',
                'Prueba de fondos o pre-aprobación bancaria',
                'Número de RNC (Registro Nacional del Contribuyente)',
                'Contrato de compraventa firmado por ambas partes',
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-gray-600"
                >
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100">
                    <svg
                      className="h-3 w-3 text-green-600"
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
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="mt-10 mb-4 text-2xl font-black text-gray-900">
              Impuestos al comprar
            </h2>
            <p className="mb-4 leading-relaxed text-gray-600">
              Al adquirir una propiedad en República Dominicana debes considerar
              los siguientes impuestos y gastos:
            </p>
            <div className="mb-6 rounded-2xl bg-gray-50 p-6">
              {[
                {
                  concepto: 'Impuesto de transferencia',
                  valor: '3% del valor de la propiedad',
                },
                {
                  concepto: 'Impuesto anual sobre la propiedad (IPI)',
                  valor: '1% del valor catastral',
                },
                {
                  concepto: 'Honorarios del notario',
                  valor: '0.5% a 1% del valor',
                },
                {
                  concepto: 'Registro en el título',
                  valor: 'Variable según la zona',
                },
              ].map((item) => (
                <div
                  key={item.concepto}
                  className="flex justify-between border-b border-gray-200 py-3 last:border-0"
                >
                  <span className="font-medium text-gray-600">
                    {item.concepto}
                  </span>
                  <span className="font-black text-[#0056B3]">
                    {item.valor}
                  </span>
                </div>
              ))}
            </div>

            <h2 className="mt-10 mb-4 text-2xl font-black text-gray-900">
              El papel del agente inmobiliario
            </h2>
            <p className="mb-6 leading-relaxed text-gray-600">
              Contar con un agente certificado como los de DINCO es fundamental
              para navegar el proceso de compra con seguridad. Un agente te
              ayuda a verificar el título de propiedad, negociar el precio,
              coordinar con el notario y asegurarse de que todo el proceso legal
              sea correcto.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-3xl bg-[#0056B3] p-8 text-center">
            <h3 className="mb-3 text-2xl font-black text-white">
              ¿Listo para dar el siguiente paso?
            </h3>
            <p className="mb-6 text-white/75">
              Nuestros agentes te guían en todo el proceso sin costo adicional
            </p>
            <div className="flex flex-col justify-center gap-3 md:flex-row">
              <Link
                href="/propiedades"
                className="rounded-xl bg-white px-8 py-3 font-black text-[#0056B3] transition-all duration-300 hover:bg-[#FF2A39] hover:text-white"
              >
                Ver propiedades
              </Link>
              <Link
                href="/contacto"
                className="rounded-xl border-2 border-white bg-transparent px-8 py-3 font-black text-white transition-all duration-300 hover:bg-white hover:text-[#0056B3]"
              >
                Hablar con un agente
              </Link>
            </div>
          </div>

          {/* VOLVER */}
          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-bold text-[#0056B3] transition-colors hover:text-[#FF2A39]"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
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

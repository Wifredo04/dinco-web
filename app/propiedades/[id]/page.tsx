import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

const ICONOS = {
  ubicacion:
    'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z',
  habitacion:
    'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
  bano: 'M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z',
  metro:
    'M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4',
  garaje:
    'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
  check: 'M5 13l4 4L19 7',
  flecha: 'M17 8l4 4m0 0l-4 4m4-4H3',
  whatsapp:
    'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z',
  email:
    'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  calendario:
    'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
}

const CARACTERISTICAS = [
  { label: 'Habitaciones', valor: '4', icono: ICONOS.habitacion },
  { label: 'Baños', valor: '3', icono: ICONOS.bano },
  { label: 'Metros²', valor: '320', icono: ICONOS.metro },
  { label: 'Garajes', valor: '2', icono: ICONOS.garaje },
]

const AMENIDADES = [
  'Piscina privada',
  'Acceso a la playa',
  'Jardín tropical',
  'Energía solar',
  'Seguridad 24/7',
  'Garaje doble',
  'Cocina equipada',
  'Terraza panorámica',
  'Wi-Fi incluido',
]

const IMAGENES = [
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&q=80',
  'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&q=80',
]

function Icono({
  path,
  className = 'w-5 h-5',
}: {
  path: string
  className?: string
}) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d={path}
      />
    </svg>
  )
}

function IconoFill({
  path,
  className = 'w-5 h-5',
}: {
  path: string
  className?: string
}) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d={path} />
    </svg>
  )
}

export default function FichaPropiedad() {
  return (
    <main>
      <Navbar />

      <section className="bg-white px-6 pt-24 pb-12">
        <div className="mx-auto max-w-7xl">
          {/* BREADCRUMB */}
          <div className="mb-6 flex items-center gap-2 text-sm text-gray-400">
            <Link href="/" className="transition-colors hover:text-[#0056B3]">
              Inicio
            </Link>
            <span>/</span>
            <Link
              href="/puerto-plata"
              className="transition-colors hover:text-[#0056B3]"
            >
              Puerto Plata
            </Link>
            <span>/</span>
            <span className="text-gray-700">Villa frente al mar</span>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            {/* COLUMNA PRINCIPAL */}
            <div className="lg:col-span-2">
              {/* GALERÍA */}
              <div className="mb-8 grid h-80 grid-cols-3 gap-3">
                <div
                  className="col-span-2 rounded-2xl bg-cover bg-center"
                  style={{ backgroundImage: `url(${IMAGENES[0]})` }}
                />
                <div className="grid grid-rows-2 gap-3">
                  <div
                    className="rounded-2xl bg-cover bg-center"
                    style={{ backgroundImage: `url(${IMAGENES[1]})` }}
                  />
                  <div
                    className="relative overflow-hidden rounded-2xl bg-cover bg-center"
                    style={{ backgroundImage: `url(${IMAGENES[2]})` }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                      <span className="text-sm font-bold text-white">
                        +8 fotos
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* TÍTULO */}
              <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="mb-2 flex gap-2">
                    <span className="rounded-full bg-[#0056B3] px-3 py-1 text-xs font-bold text-white">
                      Venta
                    </span>
                    <span className="rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-yellow-900">
                      Destacada
                    </span>
                  </div>
                  <h1 className="text-3xl font-black text-gray-900">
                    Villa frente al mar
                  </h1>
                  <div className="mt-2 flex items-center gap-1 text-sm text-gray-400">
                    <Icono
                      path={ICONOS.ubicacion}
                      className="h-4 w-4 text-[#FF2A39]"
                    />
                    Puerto Plata, República Dominicana
                  </div>
                </div>
                <p className="text-4xl font-black text-[#0056B3]">
                  US$ 285,000
                </p>
              </div>

              {/* CARACTERÍSTICAS */}
              <div className="mb-8 grid grid-cols-4 gap-4 rounded-2xl bg-gray-50 p-6">
                {CARACTERISTICAS.map((item) => (
                  <div key={item.label} className="text-center">
                    <Icono
                      path={item.icono}
                      className="mx-auto mb-2 h-6 w-6 text-[#0056B3]"
                    />
                    <p className="text-2xl font-black text-gray-900">
                      {item.valor}
                    </p>
                    <p className="text-xs text-gray-400">{item.label}</p>
                  </div>
                ))}
              </div>

              {/* DESCRIPCIÓN */}
              <div className="mb-8">
                <h2 className="mb-4 text-2xl font-black text-gray-900">
                  Descripción
                </h2>
                <p className="leading-relaxed text-gray-600">
                  Espectacular villa frente al mar ubicada en la costa norte de
                  Puerto Plata. Esta propiedad de lujo cuenta con acabados de
                  primera calidad, piscina privada, jardines tropicales y acceso
                  directo a la playa. Ideal para familia o inversión turística.
                  Incluye sistema de energía solar, cisterna propia y generador
                  eléctrico.
                </p>
              </div>

              {/* AMENIDADES */}
              <div className="mb-8">
                <h2 className="mb-4 text-2xl font-black text-gray-900">
                  Amenidades
                </h2>
                <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                  {AMENIDADES.map((amenidad) => (
                    <div
                      key={amenidad}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100">
                        <Icono
                          path={ICONOS.check}
                          className="h-3 w-3 text-green-600"
                        />
                      </div>
                      {amenidad}
                    </div>
                  ))}
                </div>
              </div>

              {/* MAPA */}
              <div className="mb-8">
                <h2 className="mb-4 text-2xl font-black text-gray-900">
                  Ubicación
                </h2>
                <div className="flex h-64 items-center justify-center rounded-2xl bg-gray-200">
                  <p className="font-medium text-gray-400">
                    Mapa interactivo — Google Maps
                  </p>
                </div>
              </div>
            </div>

            {/* COLUMNA LATERAL */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-4">
                {/* AGENTE */}
                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg">
                  <div className="mb-6 flex items-center gap-4">
                    <div
                      className="h-16 w-16 rounded-full border-2 border-[#0056B3] bg-cover bg-center"
                      style={{
                        backgroundImage:
                          'url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80)',
                      }}
                    />
                    <div>
                      <p className="font-black text-gray-900">Carlos Durán</p>
                      <p className="text-sm text-[#0056B3]">
                        Agente Senior · Puerto Plata
                      </p>
                      <div className="mt-1 flex items-center gap-1">
                        <div className="h-2 w-2 rounded-full bg-green-400" />
                        <span className="text-xs font-medium text-green-600">
                          Disponible ahora
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <a
                      href="https://wa.me/18091234567"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-500 py-3 font-bold text-white transition-colors duration-300 hover:bg-green-600"
                    >
                      <IconoFill path={ICONOS.whatsapp} className="h-5 w-5" />
                      WhatsApp
                    </a>
                    <a
                      href="mailto:carlos@dinco.com"
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0056B3] py-3 font-bold text-white transition-colors duration-300 hover:bg-[#003d82]"
                    >
                      <Icono
                        path={ICONOS.email}
                        className="h-5 w-5 text-white"
                      />
                      Enviar email
                    </a>
                    <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#FF2A39] py-3 font-bold text-white transition-colors duration-300 hover:bg-[#cc0015]">
                      <Icono
                        path={ICONOS.calendario}
                        className="h-5 w-5 text-white"
                      />
                      Agendar visita
                    </button>
                  </div>
                </div>

                {/* NEGOCIACIÓN */}
                <div className="rounded-2xl bg-[#0056B3] p-6 text-center text-white">
                  <h3 className="mb-2 text-lg font-black">
                    ¿Listo para comprar?
                  </h3>
                  <p className="mb-4 text-sm text-white/75">
                    Inicia el proceso de negociación de forma 100% digital
                  </p>
                  <button className="w-full rounded-xl bg-white py-3 font-black text-[#0056B3] transition-all duration-300 hover:bg-[#FF2A39] hover:text-white">
                    Iniciar negociación
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

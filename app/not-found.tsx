import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0056B3] px-6">
      <div className="max-w-lg text-center">
        <div
          className="mb-8 h-64 w-full rounded-3xl bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80)',
          }}
        />
        <p className="mb-2 text-sm font-black tracking-widest text-[#FF2A39] uppercase">
          Error 404
        </p>
        <h1 className="mb-4 text-5xl font-black text-white">
          Página no encontrada
        </h1>
        <p className="mb-8 text-lg text-white/70">
          La página que buscas no existe o fue movida. Pero tenemos más de 600
          propiedades esperándote.
        </p>
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="rounded-xl bg-white px-8 py-4 font-black text-[#0056B3] transition-all duration-300 hover:bg-[#FF2A39] hover:text-white"
          >
            Ir al inicio
          </Link>
          <Link
            href="/propiedades"
            className="rounded-xl border-2 border-white bg-transparent px-8 py-4 font-black text-white transition-all duration-300 hover:bg-white hover:text-[#0056B3]"
          >
            Ver propiedades
          </Link>
        </div>
      </div>
    </div>
  )
}

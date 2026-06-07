import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0056B3] flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <div
          className="w-full h-64 bg-cover bg-center rounded-3xl mb-8 opacity-20"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80)' }}
        />
        <p className="text-[#FF2A39] font-black text-sm tracking-widest uppercase mb-2">Error 404</p>
        <h1 className="text-5xl font-black text-white mb-4">
          Página no encontrada
        </h1>
        <p className="text-white/70 text-lg mb-8">
          La página que buscas no existe o fue movida. Pero tenemos más de 600 propiedades esperándote.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="bg-white text-[#0056B3] font-black px-8 py-4 rounded-xl hover:bg-[#FF2A39] hover:text-white transition-all duration-300"
          >
            Ir al inicio
          </Link>
          <Link
            href="/propiedades"
            className="bg-transparent border-2 border-white text-white font-black px-8 py-4 rounded-xl hover:bg-white hover:text-[#0056B3] transition-all duration-300"
          >
            Ver propiedades
          </Link>
        </div>
      </div>
    </div>
  )
}

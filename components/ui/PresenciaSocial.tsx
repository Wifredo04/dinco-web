'use client'
import { useState } from 'react'

export default function PresenciaSocial() {
  const [chatAbierto, setChatAbierto] = useState(false)

  return (
    <>
      {/* WHATSAPP FLOTANTE */}
      <a
        href="https://wa.me/18091234567?text=Hola,%20me%20interesa%20una%20propiedad%20en%20DINCO"
        target="_blank"
        rel="noopener noreferrer"
        className="group fixed bottom-6 left-6 z-50 flex items-center gap-3 rounded-full bg-green-500 p-4 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-green-600 hover:shadow-green-500/50"
      >
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span className="max-w-0 overflow-hidden text-sm font-bold whitespace-nowrap transition-all duration-300 group-hover:max-w-xs">
          Chatea con un agente
        </span>
      </a>

      {/* BOTÓN CHAT */}
      <button
        onClick={() => setChatAbierto(!chatAbierto)}
        className="fixed right-6 bottom-6 z-50 rounded-full bg-[#0056B3] p-4 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-[#FF2A39]"
      >
        {chatAbierto ? (
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        )}
      </button>

      {/* PANEL CHAT */}
      {chatAbierto && (
        <div className="fixed right-6 bottom-24 z-50 w-80 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-2xl">
          {/* HEADER */}
          <div className="flex items-center gap-3 bg-[#0056B3] p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
              <svg
                className="h-5 w-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold text-white">Agente DINCO</p>
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-green-400" />
                <p className="text-xs text-white/70">En línea ahora</p>
              </div>
            </div>
          </div>

          {/* MENSAJE */}
          <div className="bg-gray-50 p-4">
            <div className="rounded-xl bg-white p-3 shadow-sm">
              <p className="text-sm text-gray-700">
                ¡Hola! 👋 Soy tu agente DINCO. ¿En qué región te interesa una
                propiedad?
              </p>
              <p className="mt-1 text-xs text-gray-400">Ahora mismo</p>
            </div>
          </div>

          {/* OPCIONES RÁPIDAS */}
          <div className="space-y-2 p-4">
            {['Puerto Plata', 'Cabarete', 'Sosúa', 'Santo Domingo'].map(
              (region) => (
                <a
                  key={region}
                  href={`https://wa.me/18091234567?text=Me interesa una propiedad en ${region}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full rounded-xl border border-[#0056B3] px-4 py-2 text-left text-sm text-[#0056B3] transition-all duration-200 hover:bg-[#0056B3] hover:text-white"
                >
                  {region}
                </a>
              ),
            )}
          </div>
        </div>
      )}
    </>
  )
}

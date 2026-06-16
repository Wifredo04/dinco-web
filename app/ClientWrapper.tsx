'use client'
import React from 'react'
import { useLayout } from '@/context/layoutcontext'

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const { dimensiones, modoSimulador } = useLayout()
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-start overflow-x-hidden bg-white transition-all duration-500">
      {modoSimulador && (
        <div className="fixed top-24 left-1/2 z-50 -translate-x-1/2 animate-bounce rounded-full bg-amber-500 px-4 py-1.5 font-mono text-xs font-medium text-zinc-950 shadow-lg">
          Auditor�a de Interfaz: {dimensiones.nombre}
        </div>
      )}
      <div
        style={{
          width: dimensiones.width,
          height: modoSimulador ? dimensiones.height : 'auto',
          maxHeight: modoSimulador ? '85vh' : 'none',
        }}
        className={`relative flex flex-grow flex-col transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${modoSimulador ? 'mt-28 h-full overflow-y-auto rounded-2xl border-4 border-zinc-200 bg-white shadow-xl' : 'min-h-screen w-full'}`}
      >
        <div className="pointer-events-none fixed top-0 right-0 left-0 z-40 h-32 bg-gradient-to-b from-white via-white/80 to-transparent" />
        <div className="pointer-events-none fixed top-0 left-1/2 z-40 h-20 w-2/3 -translate-x-1/2 bg-amber-500/5 blur-[100px]" />
        <div className="relative z-10 flex h-full w-full flex-grow flex-col pt-4">
          {children}
        </div>
      </div>
    </div>
  )
}

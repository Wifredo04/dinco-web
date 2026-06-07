'use client';
import React from 'react';
import { useLayout } from '@/context/layoutcontext';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const { dimensiones, modoSimulador } = useLayout();
  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center justify-start overflow-x-hidden transition-all duration-500">
      {modoSimulador && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-amber-500 text-zinc-950 font-mono text-xs px-4 py-1.5 rounded-full font-medium shadow-lg animate-bounce">
          Auditor�a de Interfaz: {dimensiones.nombre}
        </div>
      )}
      <div style={{ width: dimensiones.width, height: modoSimulador ? dimensiones.height : 'auto', maxHeight: modoSimulador ? '85vh' : 'none' }} className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] relative flex flex-col flex-grow ${modoSimulador ? 'mt-28 rounded-2xl border-4 border-zinc-200 shadow-xl overflow-y-auto bg-white h-full' : 'w-full min-h-screen'}`}>
        <div className="fixed top-0 left-0 right-0 h-32 bg-gradient-to-b from-white via-white/80 to-transparent z-40 pointer-events-none" />
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-2/3 h-20 bg-amber-500/5 blur-[100px] z-40 pointer-events-none" />
        <div className="relative pt-4 w-full h-full flex flex-col flex-grow z-10">{children}</div>
      </div>
    </div>
  );
}

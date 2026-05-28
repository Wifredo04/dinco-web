'use client';
import React, { createContext, useContext, useState } from 'react';

export interface Dimensiones {
  width: string;
  height: string;
  nombre: string;
}

interface LayoutContextType {
  dimensiones: Dimensiones;
  cambiarDimensiones: (w: string, h: string, nombre: string) => void;
  modoSimulador: boolean;
  setModoSimulador: (val: boolean) => void;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export function LayoutProvider({ children }: { children: React.ReactNode }) {
  const [modoSimulador, setModoSimulador] = useState(false);
  const [dimensiones, setDimensiones] = useState<Dimensiones>({
    width: '100%',
    height: '100vh',
    nombre: 'PC'
  });

  const cambiarDimensiones = (width: string, height: string, nombre: string) => {
    if (width === '100%') {
      setModoSimulador(false);
    } else {
      setModoSimulador(true);
    }
    setDimensiones({ width, height, nombre });
  };

  return (
    <LayoutContext.Provider value={{ dimensiones, cambiarDimensiones, modoSimulador, setModoSimulador }}>
      {children}
    </LayoutContext.Provider>
  );
}

export function useLayout() {
  const context = useContext(LayoutContext);
  if (!context) throw new Error('useLayout debe usarse dentro de un LayoutProvider');
  return context;
}
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function PropiedadesPage() {
  // 🟢 BASE DE DATOS MODULAR: Vinculada a tus rutas institucionales reales con imágenes comerciales de alta resolución
  const catalogo = [
    { id: 1, titulo: "Villa frente al mar", region: "Puerto Plata", href: "/puerto-plata", precio: "US$ 285,000", tag: "Venta", info: "4 hab. • 3 baños • 320 m²", img: "https://unsplash.com" },
    { id: 2, titulo: "Apartamento beachfront", region: "Cabarete", href: "/cabarete", precio: "US$ 145,000", tag: "Venta", info: "2 hab. • 2 baños • 95 m²", img: "https://unsplash.com" },
    { id: 3, titulo: "Villa de lujo con piscina", region: "Sosúa", href: "/sosua", precio: "US$ 420,000", tag: "Venta", info: "5 hab. • 4 baños • 480 m²", img: "https://unsplash.com" },
    { id: 4, titulo: "Penthouse Ejecutivo", region: "Santo Domingo", href: "/santo-domingo", precio: "US$ 3,500 / mes", tag: "Renta", info: "3 hab. • 2 baños • 210 m²", img: "https://unsplash.com" },
    { id: 5, titulo: "Casa colonial restaurada", region: "Santo Domingo", href: "/santo-domingo", precio: "US$ 550,000", tag: "Venta", info: "3 hab. • 3.5 baños • 290 m²", img: "https://unsplash.com" },
    { id: 6, titulo: "Terreno frente al mar", region: "Samaná", href: "/samana", precio: "US$ 890,000", tag: "Venta", info: "Lote de 2,400 m² • Listo para construir", img: "https://unsplash.com" }
  ];

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen text-zinc-900 px-6 max-w-7xl mx-auto transition-colors duration-500">
      
      {/* 🟢 REDISEÑO DE FILTROS: Eliminamos la barra azul rígida por una consola de lujo integrada en negro asfalto */}
      <div className="mb-12 bg-zinc-950 p-5 rounded-2xl flex flex-col sm:flex-row gap-4 items-center justify-between border border-zinc-900 shadow-2xl">
        <div className="flex flex-wrap gap-4 items-center w-full sm:w-auto">
          <select className="bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs rounded-xl px-4 py-3 outline-none focus:border-amber-500 transition-colors cursor-pointer w-full sm:w-48">
            <option>Todas las operaciones</option>
            <option>Venta</option>
            <option>Renta</option>
          </select>
          <select className="bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs rounded-xl px-4 py-3 outline-none focus:border-amber-500 transition-colors cursor-pointer w-full sm:w-48">
            <option>Todas las regiones</option>
            <option>Samaná</option>
            <option>Santo Domingo</option>
            <option>Sosúa</option>
            <option>Puerto Plata</option>
          </select>
        </div>
        <button className="bg-amber-500 hover:bg-amber-600 text-zinc-950 text-xs font-bold uppercase tracking-widest px-8 py-3 rounded-xl transition-all shadow-lg w-full sm:w-auto">
          Buscar Propiedades
        </button>
      </div>

      <div className="mb-8 flex justify-between items-center border-b border-zinc-100 pb-4">
        <span className="text-zinc-500 text-sm font-light">Mostrando <strong className="text-zinc-900 font-medium">{catalogo.length} propiedades</strong></span>
        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-400 font-normal">Ordenar por:</span>
          <select className="bg-transparent text-xs text-zinc-700 font-medium outline-none cursor-pointer">
            <option>Más recientes</option>
            <option>Precio: menor a mayor</option>
            <option>Precio: mayor a menor</option>
          </select>
        </div>
      </div>

      {/* 🟢 ENMARCACIÓN ARQUITECTÓNICA TRIDIMENSIONAL EN GRILLA RESPONSIVE COMPLETA */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {catalogo.map((prop) => (
          <div 
            key={prop.id} 
            className="relative bg-zinc-950 rounded-2xl p-[2px] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] hover:-translate-y-1"
          >
            <div className="w-full h-full bg-white rounded-[14px] overflow-hidden flex flex-col justify-between">
              
              {/* Contenedor de Imagen Comercial Conectado a Galería */}
              <Link href={prop.href} className="block relative h-56 bg-zinc-900 overflow-hidden border-b-2 border-zinc-950">
                <img 
                  src={prop.img} 
                  alt={prop.titulo} 
                  className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                <span className="absolute top-4 left-4 text-[9px] uppercase font-bold tracking-widest bg-zinc-950 text-white px-2.5 py-1 rounded shadow-md">{prop.tag}</span>
              </Link>

              {/* Ficha Descriptiva Interna */}
              <div className="p-5 flex flex-col justify-between min-h-[165px] bg-white">
                <div>
                  <span className="text-zinc-500 text-xs font-semibold">📍 {prop.region}</span>
                  <Link href={prop.href} className="block mt-2">
                    <h3 className="text-base font-normal tracking-wide text-zinc-900 hover:text-amber-600 transition-colors duration-300">
                      {prop.titulo}
                    </h3>
                  </Link>
                  <p className="text-xs text-zinc-400 mt-1 font-light tracking-wide">{prop.info}</p>
                </div>

                {/* Pie de Ficha con Botón de Expansión Líquida */}
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-zinc-100">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-medium">Inversión</span>
                    <span className="text-base font-bold text-zinc-950 font-mono tracking-tight">{prop.precio}</span>
                  </div>

                  <Link 
                    href={prop.href} 
                    className="w-9 h-9 rounded-full bg-zinc-950 text-white flex items-center justify-center transition-all duration-500 ease-out group-hover:w-26 group-hover:bg-amber-500 group-hover:text-zinc-950 relative overflow-hidden"
                  >
                    <span className="absolute left-3.5 text-[10px] font-bold tracking-wider opacity-0 transition-opacity duration-300 group-hover:opacity-100 whitespace-nowrap">EXPLORAR</span>
                    <span className="font-mono text-sm transition-transform duration-500 group-hover:translate-x-8">→</span>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
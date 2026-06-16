'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function PropiedadesPage() {
  // ?? BASE DE DATOS MODULAR: Vinculada a tus rutas institucionales reales con im�genes comerciales de alta resoluci�n
  const catalogo = [
    {
      id: 1,
      titulo: 'Villa frente al mar',
      region: 'Puerto Plata',
      href: '/puerto-plata',
      precio: 'US$ 285,000',
      tag: 'Venta',
      info: '4 hab. � 3 ba�os � 320 m�',
      img: 'https://unsplash.com',
    },
    {
      id: 2,
      titulo: 'Apartamento beachfront',
      region: 'Cabarete',
      href: '/cabarete',
      precio: 'US$ 145,000',
      tag: 'Venta',
      info: '2 hab. � 2 ba�os � 95 m�',
      img: 'https://unsplash.com',
    },
    {
      id: 3,
      titulo: 'Villa de lujo con piscina',
      region: 'Sos�a',
      href: '/sosua',
      precio: 'US$ 420,000',
      tag: 'Venta',
      info: '5 hab. � 4 ba�os � 480 m�',
      img: 'https://unsplash.com',
    },
    {
      id: 4,
      titulo: 'Penthouse Ejecutivo',
      region: 'Santo Domingo',
      href: '/santo-domingo',
      precio: 'US$ 3,500 / mes',
      tag: 'Renta',
      info: '3 hab. � 2 ba�os � 210 m�',
      img: 'https://unsplash.com',
    },
    {
      id: 5,
      titulo: 'Casa colonial restaurada',
      region: 'Santo Domingo',
      href: '/santo-domingo',
      precio: 'US$ 550,000',
      tag: 'Venta',
      info: '3 hab. � 3.5 ba�os � 290 m�',
      img: 'https://unsplash.com',
    },
    {
      id: 6,
      titulo: 'Terreno frente al mar',
      region: 'Saman�',
      href: '/samana',
      precio: 'US$ 890,000',
      tag: 'Venta',
      info: 'Lote de 2,400 m� � Listo para construir',
      img: 'https://unsplash.com',
    },
  ]

  return (
    <div className="mx-auto min-h-screen max-w-7xl bg-white px-6 pt-32 pb-24 text-zinc-900 transition-colors duration-500">
      {/* ?? REDISE�O DE FILTROS: Eliminamos la barra azul r�gida por una consola de lujo integrada en negro asfalto */}
      <div className="mb-12 flex flex-col items-center justify-between gap-4 rounded-2xl border border-zinc-900 bg-zinc-950 p-5 shadow-2xl sm:flex-row">
        <div className="flex w-full flex-wrap items-center gap-4 sm:w-auto">
          <select className="w-full cursor-pointer rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-xs text-zinc-300 transition-colors outline-none focus:border-amber-500 sm:w-48">
            <option>Todas las operaciones</option>
            <option>Venta</option>
            <option>Renta</option>
          </select>
          <select className="w-full cursor-pointer rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-xs text-zinc-300 transition-colors outline-none focus:border-amber-500 sm:w-48">
            <option>Todas las regiones</option>
            <option>Saman�</option>
            <option>Santo Domingo</option>
            <option>Sos�a</option>
            <option>Puerto Plata</option>
          </select>
        </div>
        <button className="w-full rounded-xl bg-amber-500 px-8 py-3 text-xs font-bold tracking-widest text-zinc-950 uppercase shadow-lg transition-all hover:bg-amber-600 sm:w-auto">
          Buscar Propiedades
        </button>
      </div>

      <div className="mb-8 flex items-center justify-between border-b border-zinc-100 pb-4">
        <span className="text-sm font-light text-zinc-500">
          Mostrando{' '}
          <strong className="font-medium text-zinc-900">
            {catalogo.length} propiedades
          </strong>
        </span>
        <div className="flex items-center gap-2">
          <span className="text-xs font-normal text-zinc-400">
            Ordenar por:
          </span>
          <select className="cursor-pointer bg-transparent text-xs font-medium text-zinc-700 outline-none">
            <option>M�s recientes</option>
            <option>Precio: menor a mayor</option>
            <option>Precio: mayor a menor</option>
          </select>
        </div>
      </div>

      {/* ?? ENMARCACI�N ARQUITECT�NICA TRIDIMENSIONAL EN GRILLA RESPONSIVE COMPLETA */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {catalogo.map((prop) => (
          <div
            key={prop.id}
            className="group relative rounded-2xl bg-zinc-950 p-[2px] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)]"
          >
            <div className="flex h-full w-full flex-col justify-between overflow-hidden rounded-[14px] bg-white">
              {/* Contenedor de Imagen Comercial Conectado a Galer�a */}
              <Link
                href={prop.href}
                className="relative block h-56 overflow-hidden border-b-2 border-zinc-950 bg-zinc-900"
              >
                <img
                  src={prop.img}
                  alt={prop.titulo}
                  className="h-full w-full scale-100 object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                <span className="absolute top-4 left-4 rounded bg-zinc-950 px-2.5 py-1 text-[9px] font-bold tracking-widest text-white uppercase shadow-md">
                  {prop.tag}
                </span>
              </Link>

              {/* Ficha Descriptiva Interna */}
              <div className="flex min-h-[165px] flex-col justify-between bg-white p-5">
                <div>
                  <span className="text-xs font-semibold text-zinc-500">
                    ?? {prop.region}
                  </span>
                  <Link href={prop.href} className="mt-2 block">
                    <h3 className="text-base font-normal tracking-wide text-zinc-900 transition-colors duration-300 hover:text-amber-600">
                      {prop.titulo}
                    </h3>
                  </Link>
                  <p className="mt-1 text-xs font-light tracking-wide text-zinc-400">
                    {prop.info}
                  </p>
                </div>

                {/* Pie de Ficha con Bot�n de Expansi�n L�quida */}
                <div className="mt-4 flex items-center justify-between border-t border-zinc-100 pt-4">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-medium tracking-widest text-zinc-400 uppercase">
                      Inversi�n
                    </span>
                    <span className="font-mono text-base font-bold tracking-tight text-zinc-950">
                      {prop.precio}
                    </span>
                  </div>

                  <Link
                    href={prop.href}
                    className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-zinc-950 text-white transition-all duration-500 ease-out group-hover:w-26 group-hover:bg-amber-500 group-hover:text-zinc-950"
                  >
                    <span className="absolute left-3.5 text-[10px] font-bold tracking-wider whitespace-nowrap opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      EXPLORAR
                    </span>
                    <span className="font-mono text-sm transition-transform duration-500 group-hover:translate-x-8">
                      ?
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

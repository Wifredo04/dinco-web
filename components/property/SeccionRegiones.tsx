'use client';
import { useRef } from 'react';
import Link from 'next/link';

export default function SeccionRegiones() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const propiedades = [
    { id: 1, titulo: "Villa Coral Luxury", region: "Samaná", href: "/samana", precio: "US$ 285,000", tags: ["Venta", "Premium"], info: "4 hab. • 3 baños • 320 m²", img: "https://unsplash.com" },
    { id: 2, titulo: "Apartamento Vista Alta", region: "Samaná", href: "/samana", precio: "US$ 145,000", tags: ["Venta"], info: "2 hab. • 2 baños • 95 m²", img: "https://unsplash.com" },
    { id: 3, titulo: "Penthouse Corporativo", region: "Santo Domingo", href: "/santo-domingo", precio: "US$ 3,500 / mes", tags: ["Renta", "Premium"], info: "3 hab. • 2 baños • 210 m²", img: "https://unsplash.com" },
    { id: 4, titulo: "Villa Ocean Residence", region: "Sosúa", href: "/sosua", precio: "US$ 420,000", tags: ["Venta", "Destacada"], info: "5 hab. • 4 baños • 480 m²", img: "https://unsplash.com" }
  ];

  return (
    <section className="py-24 bg-white text-zinc-900 select-none overflow-hidden w-full transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* ENCABEZADO CON DISEÑO EDITORIAL */}
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-amber-600 font-mono text-xs uppercase tracking-[0.2em] block mb-2 font-semibold">Portafolio Global</span>
            <h2 className="text-3xl md:text-5xl font-extralight tracking-tight text-zinc-950">Propiedades Destacadas</h2>
          </div>
          
          {/* Controles de deslizamiento cinemático */}
          <div className="hidden md:flex items-center gap-4">
            <button onClick={() => sliderRef.current?.scrollBy({ left: -370, behavior: 'smooth' })} className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-zinc-950 hover:border-zinc-950 transition-all duration-500 ease-out text-lg">
              ←
            </button>
            <button onClick={() => sliderRef.current?.scrollBy({ left: 370, behavior: 'smooth' })} className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-zinc-950 hover:border-zinc-950 transition-all duration-500 ease-out text-lg">
              →
            </button>
          </div>
        </div>

        {/* SLIDER DE ALTA DISPONIBILIDAD */}
        <div 
          ref={sliderRef}
          className="flex flex-row gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scroll-smooth scrollbar-none"
          style={{ scrollbarWidth: 'none' }}
        >
          {propiedades.map((prop) => (
            <div 
              key={prop.id}
              className="w-[310px] sm:w-[365px] shrink-0 snap-start relative bg-zinc-950 rounded-2xl p-[2px] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] hover:-translate-y-1"
            >
              {/* CONTENEDOR INTERNO BLANCO ENMARCADO */}
              <div className="w-full h-full bg-white rounded-[14px] overflow-hidden flex flex-col justify-between">
                
                {/* ZONA DE REVELADO CINEMÁTICO (IMAGEN) */}
                <div className="relative h-56 w-full overflow-hidden bg-zinc-100 border-b border-zinc-100">
                  <img 
                    src={prop.img} 
                    alt={prop.titulo}
                    className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                  {/* Overlay gradiente oscuro sutil inferior en la foto */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                  
                  {/* Badges Flotantes Minimalistas */}
                  <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                    {prop.tags.map(t => (
                      <span key={t} className={`text-[9px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-md shadow-sm ${
                        t === 'Premium' || t === 'Destacada' ? 'bg-zinc-950 text-white' : 'bg-amber-500 text-zinc-950'
                      }`}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* FICHA TÉCNICA Y CONTENIDO DESCRIPTIVO */}
                <div className="p-6 flex flex-col justify-between min-h-[170px] relative bg-white z-10">
                  <div>
                    <span className="text-amber-600 font-mono text-[10px] uppercase tracking-wider font-semibold">
                      📍 {prop.region}
                    </span>
                    <Link href={prop.href} className="block mt-2">
                      <h3 className="text-base font-normal tracking-wide text-zinc-900 group-hover:text-amber-600 transition-colors duration-300">
                        {prop.titulo}
                      </h3>
                    </Link>
                    <p className="text-xs text-zinc-400 mt-1 font-light tracking-wide">{prop.info}</p>
                  </div>

                  {/* PIE DE LA CARD CON LLAMADA A LA ACCIÓN INTERACTIVA */}
                  <div className="flex justify-between items-center mt-5 pt-4 border-t border-zinc-100">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-medium">Inversión</span>
                      <span className="text-base font-bold text-zinc-950 font-mono tracking-tight">{prop.precio}</span>
                    </div>

                    {/* Botón de expansión líquida con redirección dinámica */}
                    <Link 
                      href={prop.href} 
                      className="w-10 h-10 rounded-full bg-zinc-950 text-white flex items-center justify-center transition-all duration-500 ease-out group-hover:w-28 group-hover:bg-amber-500 group-hover:text-zinc-950 relative overflow-hidden"
                    >
                      <span className="absolute left-4 text-xs font-bold tracking-wider opacity-0 transition-opacity duration-300 group-hover:opacity-100 whitespace-nowrap">
                        EXPLORAR
                      </span>
                      <span className="font-mono text-sm transition-transform duration-500 group-hover:translate-x-9">
                        →
                      </span>
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
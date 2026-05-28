'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLayout } from '@/context/layoutcontext';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { dimensiones, cambiarDimensiones } = useLayout();

  const DISPOSITIVOS = [
    { id: 'pc', nombre: 'PC', w: '100%', h: '100vh', desc: '🖥️ Pantalla Completa' },
    { id: 'movil', nombre: 'Movil', w: '393px', h: '852px', desc: '📱 iPhone 15 Pro' },
    { id: 'tablet', nombre: 'Tablet', w: '768px', h: '1024px', desc: '📟 iPad Mini' }
  ];
  const activoActual = DISPOSITIVOS.find(d => d.desc === dimensiones.nombre) || DISPOSITIVOS[0];

  useEffect(() => {
    const handleScroll = () => { setScrolled(window.scrollY > 20); };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const MENU_ITEMS = [
    { label: "Propiedades", href: "/propiedades" },
    { label: "Regiones", submenu: [{ label: "Samaná", href: "/samana" }, { label: "Santo Domingo", href: "/santo-domingo" }, { label: "Sosúa", href: "/sosua" }] },
    { label: "Agentes", href: "/agentes" },
    { label: "Blog / SEO", href: "/blog" }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${scrolled ? 'bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-900/40 py-3 px-8 shadow-xl' : 'bg-black/40 backdrop-blur-md py-5 px-8 border-b border-transparent'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center w-full relative">
        <Link href="/"><Image src="/nuevo_dc.svg" alt="DINCO" width={125} height={40} priority className="object-contain w-auto h-auto" /></Link>
        <div className="hidden lg:flex items-center gap-6">
          {MENU_ITEMS.map((item) => (
            <div key={item.label} className="relative" onMouseEnter={() => item.submenu && setActiveSubmenu(item.label)} onMouseLeave={() => setActiveSubmenu(null)}>
              <Link href={item.href || '#'} className="relative text-[13px] font-semibold tracking-wide py-2 flex items-center gap-1 text-white/90 hover:text-amber-500 group">
                {item.label} {item.submenu && <span className="text-[8px] opacity-60">▼</span>}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-amber-500 transition-all duration-300 ease-out group-hover:w-full" />
              </Link>
              {item.submenu && activeSubmenu === item.label && (
                <div className="absolute top-full left-0 mt-1 w-44 bg-zinc-950 border border-zinc-800 rounded-xl p-1.5 shadow-2xl z-50 flex flex-col gap-0.5">
                  {item.submenu.map((sub) => <Link key={sub.href} href={sub.href} className="block px-3 py-2 text-xs font-normal text-zinc-300 hover:text-white hover:bg-zinc-900 rounded-lg">{sub.label}</Link>)}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="hidden lg:flex items-center gap-5 shrink-0">
          <Link href="/dashboard" className="text-xs font-medium text-white/80 hover:text-white transition-colors py-1">Mi panel</Link>
          <Link href="/publicar" className="text-[10px] font-semibold uppercase tracking-wider bg-red-600 hover:bg-red-700 text-white rounded-full px-4 py-2.5">Publicar propiedad</Link>
          <div className="relative inline-block text-left border-l border-white/20 pl-4 ml-1">
            <button onClick={() => setDropdownOpen(!dropdownOpen)} className="px-3 py-1.5 bg-white/10 border border-white/20 text-[10px] font-mono tracking-wider text-white rounded-full flex items-center gap-1.5 group">
              <svg className="w-3.5 h-3.5 text-amber-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.644M12 4.873c4.917 0 9.47 2.518 11.963 6.754a1.008 1.008 0 010 .644c-2.493 4.236-7.046 6.754-11.963 6.754a11.954 11.954 0 01-11.963-6.754 10.054 10.054 0 010-.644z" /><circle cx="12" cy="12" r="3" /></svg>
              <span className="uppercase font-bold tracking-widest">{activoActual.nombre}</span>
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-44 bg-zinc-950 border border-zinc-800 rounded-xl p-1 z-50 flex flex-col gap-0.5">
                {DISPOSITIVOS.filter(disp => disp.id !== activoActual.id).map((disp) => <button key={disp.id} onClick={() => { cambiarDimensiones(disp.w, disp.h, disp.desc); setDropdownOpen(false); }} className="w-full text-left px-3 py-2 text-xs text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg">{disp.desc}</button>)}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
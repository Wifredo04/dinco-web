// Footer.tsx — Pie de página DINCO
// CÓMO EDITAR: Busca las secciones marcadas con [EDITAR]

import Link from 'next/link'

// [EDITAR] — COLUMNAS DEL FOOTER
// Para agregar una columna nueva: añade un objeto al array
// Para agregar un enlace: añade { label, href } al array links
const COLUMNAS = [
  {
    titulo: 'Propiedades',
    links: [
      { label: 'En venta', href: '/propiedades?operacion=venta' },
      { label: 'En renta', href: '/propiedades?operacion=renta' },
      { label: 'Proyectos nuevos', href: '/propiedades?tipo=nuevo' },
      { label: 'Propiedades destacadas', href: '/propiedades?destacadas=true' },
    ],
  },
  {
    titulo: 'Regiones',
    links: [
      { label: 'Puerto Plata', href: '/puerto-plata' },
      { label: 'Cabarete', href: '/cabarete' },
      { label: 'Sosúa', href: '/sosua' },
      { label: 'Santo Domingo', href: '/santo-domingo' },
      { label: 'Samaná', href: '/samana' },
      { label: 'Monte Cristi', href: '/monte-cristi' },
    ],
  },
  {
    titulo: 'Empresa',
    links: [
      { label: 'Nosotros', href: '/nosotros' },
      { label: 'Agentes', href: '/agentes' },
      { label: 'Contacto', href: '/contacto' },
      { label: 'Publicar propiedad', href: '/postulacion' },
    ],
  },
]

// [EDITAR] — REDES SOCIALES
// Para cambiar el ícono: reemplaza el path del SVG
// Para cambiar el enlace: edita href
const REDES = [
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    // Ícono SVG de Facebook
    icono: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icono: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/18091234567',
    icono: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z',
  },
]

export default function Footer() {
  return (
    <footer>

      {/* FRANJA NEWSLETTER
          [EDITAR] bg-[#0056B3]: color de fondo de la franja
          Para ocultar esta sección comenta todo este bloque */}
      <div className="bg-[#0056B3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Texto del newsletter */}
          <div>
            {/* [EDITAR] Cambia el título y subtítulo del newsletter */}
            <h3 className="font-serif text-xl font-bold text-white mb-1">
              Recibe propiedades exclusivas
            </h3>
            <p className="text-white/65 text-sm font-serif">
              Sé el primero en conocer las mejores oportunidades
            </p>
          </div>

          {/* Formulario de suscripción */}
          <div className="flex gap-2 w-full md:w-auto">
            {/* [EDITAR] placeholder: texto de ayuda del campo */}
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 md:w-64 px-4 py-2.5 text-sm font-serif bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-sm outline-none focus:border-white/50 transition-colors"
            />
            {/* [EDITAR] Texto del botón de suscripción */}
            <button className="px-5 py-2.5 bg-black text-white text-xs uppercase tracking-widest font-serif hover:bg-[#0B1A30] transition-colors rounded-sm whitespace-nowrap">
              Suscribirme
            </button>
          </div>

        </div>
      </div>

      {/* CUERPO PRINCIPAL DEL FOOTER
          [EDITAR] bg-[#000000]: color de fondo del footer */}
      <div className="bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* COLUMNA MARCA — Logo y descripción
                [EDITAR] Cambia el texto de descripción de la empresa */}
            <div>
              {/* Logo en el footer */}
              <img
                src="/nuevo_dc.svg"
                alt="DINCO"
                className="h-10 w-auto mb-4 invert"
                // invert hace que el logo negro se vea blanco
                // sobre el fondo negro del footer
              />
              {/* Descripción corta de la empresa */}
              <p className="text-white/40 text-sm font-serif leading-relaxed mb-6">
                {/* [EDITAR] Cambia este texto */}
                Inmobiliaria y Constructora con más de 12 años
                conectando personas con propiedades de lujo en
                República Dominicana y el mundo.
              </p>

              {/* REDES SOCIALES */}
              <div className="flex gap-3">
                {REDES.map((red) => (
                  <a
                    key={red.label}
                    href={red.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={red.label}
                    // [EDITAR] hover:border-[#00D2FF]: color borde al hover
                    className="w-8 h-8 border border-white/10 rounded-sm flex items-center justify-center text-white/30 hover:text-[#00D2FF] hover:border-[#00D2FF]/40 transition-colors duration-200"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d={red.icono} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* COLUMNAS DE ENLACES
                Se generan automáticamente del array COLUMNAS */}
            {COLUMNAS.map((col) => (
              <div key={col.titulo}>
                {/* Título de la columna
                    [EDITAR] tracking-widest: espaciado entre letras */}
                <h4 className="text-white/90 text-xs uppercase tracking-widest font-serif mb-4 pb-2 border-b border-white/8">
                  {col.titulo}
                </h4>
                {/* Lista de enlaces */}
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        // [EDITAR] hover:text-[#00D2FF]: color al pasar el mouse
                        className="text-white/35 hover:text-[#00D2FF] text-sm font-serif transition-colors duration-150 flex items-center gap-2 group"
                      >
                        {/* Línea decorativa que aparece al hover */}
                        <span className="w-0 group-hover:w-3 h-px bg-[#00D2FF] transition-all duration-200" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>

          {/* INFORMACIÓN DE CONTACTO
              [EDITAR] Cambia dirección, teléfono y email */}
          <div className="mt-12 pt-8 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              // [EDITAR] Datos de contacto de cada oficina
              { icono: '📍', texto: 'Puerto Plata, República Dominicana' },
              { icono: '📞', texto: '+1 (809) 123-4567' },
              { icono: '✉️', texto: 'info@dinco.com.do' },
            ].map((item) => (
              <div key={item.texto} className="flex items-center gap-2 text-white/30 text-sm font-serif">
                <span>{item.icono}</span>
                <span>{item.texto}</span>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* BARRA LEGAL INFERIOR
          [EDITAR] Cambia el año y el texto de derechos */}
      <div className="bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">

          {/* Copyright */}
          <p className="text-white/20 text-xs font-serif tracking-wide">
            {/* [EDITAR] Cambia el año si es necesario */}
            © {new Date().getFullYear()} DINCO Inmobiliaria & Constructora. Todos los derechos reservados.
          </p>

          {/* Enlaces legales */}
          <div className="flex gap-4">
            {/* [EDITAR] Para agregar un enlace legal copia una etiqueta Link */}
            <Link href="/terminos" className="text-white/20 hover:text-white/50 text-xs font-serif transition-colors">
              Términos y condiciones
            </Link>
            <Link href="/privacidad" className="text-white/20 hover:text-white/50 text-xs font-serif transition-colors">
              Privacidad
            </Link>
          </div>

        </div>
      </div>

    </footer>
  )
}

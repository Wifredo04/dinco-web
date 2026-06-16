/* ============================================
   ARCHIVO: app/layout.tsx
   QUÉ ES: Estructura global del sitio
   DÓNDE ACTÚA: En absolutamente todas las páginas
   CÓMO EDITAR:
   - Para cambiar el título del sitio en el navegador
     busca "title" en el objeto metadata
   - Para cambiar la descripción SEO busca "description"
   - Para agregar nuevos idiomas edita lang="es"
   - Para cambiar las fuentes ve a globals.css
   ============================================ */

import type { Metadata } from 'next'
import './globals.css'

/* ============================================
   METADATA — SEO Y REDES SOCIALES
   Estos datos aparecen en Google y cuando
   alguien comparte el sitio en redes sociales
   CÓMO EDITAR: Cambia los textos directamente
   ============================================ */
export const metadata: Metadata = {
  /* Título que aparece en la pestaña del navegador
     %s se reemplaza con el título de cada página */
  title: {
    default: 'DINCO — Inmobiliaria & Constructora',
    template: '%s | DINCO Inmobiliaria',
  },

  /* Descripción que aparece en resultados de Google */
  description:
    'Plataforma global de venta, renta y promoción de propiedades en República Dominicana. Más de 12 años conectando personas con propiedades de lujo.',

  /* Palabras clave para SEO
     Agrega más separadas por comas */
  keywords: [
    'inmobiliaria República Dominicana',
    'propiedades Puerto Plata',
    'villas Cabarete',
    'apartamentos Sosúa',
    'inversión inmobiliaria RD',
    'DINCO inmobiliaria',
  ],

  /* Datos para cuando comparten en redes sociales */
  openGraph: {
    title: 'DINCO — Inmobiliaria & Constructora',
    description:
      'Plataforma global de negocios inmobiliarios en República Dominicana',
    locale: 'es_DO',
    type: 'website',
    siteName: 'DINCO Inmobiliaria',
  },

  /* Configuración de robots de búsqueda */
  robots: {
    index: true,
    follow: true,
  },
}

/* ============================================
   COMPONENTE PROVEEDOR DE MODO
   Maneja el cambio entre modo oscuro y claro
   Se instala aquí para que funcione en todo el sitio
   ============================================ */
function ProveedorModo({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Script que carga el modo guardado antes de que
          la página aparezca — evita el parpadeo de colores */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                var modo = localStorage.getItem('dinco-modo') || 'oscuro';
                document.documentElement.setAttribute('data-modo', modo);
              } catch(e) {}
            })();
          `,
        }}
      />
      {children}
    </>
  )
}

/* ============================================
   LAYOUT RAÍZ — ESTRUCTURA BASE
   CÓMO EDITAR:
   - lang="es" define el idioma del sitio
   - className en <body> aplica estilos base
   - Para agregar scripts globales ponlos antes
     del cierre de </body>
   ============================================ */
export default function LayoutRaiz({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      /* data-modo se cambia dinámicamente con JavaScript
         'oscuro' es el valor predeterminado del sitio */
      suppressHydrationWarning
    >
      <head>
        {/* Precarga la fuente Cardo para evitar parpadeo
            Edita el href si cambias la fuente oficial */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>

      <body className="flex min-h-screen flex-col">
        {/* Proveedor de modo oscuro/claro */}
        <ProveedorModo>
          {/* children representa el contenido de cada página
              El Navbar y Footer se agregan en cada página
              individualmente para mejor control */}
          {children}
        </ProveedorModo>
      </body>
    </html>
  )
}

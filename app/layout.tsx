import './globals.css';
import { LayoutProvider } from '../context/layoutcontext';
import Navbar from '@/components/layout/Navbar';
import ClientWrapper from './ClientWrapper';

export const metadata = {
  title: 'DINCO Inmobiliaria & Constructora | Plataforma Internacional',
  description: 'Portal inmobiliario exclusivo premium en República Dominicana.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <title>DINCO Inmobiliaria</title>
      </head>
      <body className="bg-zinc-950 text-white min-h-screen antialiased">
        <LayoutProvider>
          <Navbar />
          <ClientWrapper>
            <main className="flex-grow w-full">{children}</main>
          </ClientWrapper>
        </LayoutProvider>
      </body>
    </html>
  );
}
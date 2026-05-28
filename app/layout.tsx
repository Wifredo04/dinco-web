import './globals.css';
import { LayoutProvider } from '../context/layoutcontext';
import Navbar from '@/components/layout/Navbar';
import ClientWrapper from './ClientWrapper';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-zinc-950 text-white min-h-screen antialiased">
        <LayoutProvider>
          <Navbar />
          <ClientWrapper><main className="flex-grow w-full flex flex-col">{children}</main></ClientWrapper>
        </LayoutProvider>
      </body>
    </html>
  );
}
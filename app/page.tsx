import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/ui/Hero'
import SeccionRegiones from '@/components/ui/SeccionRegiones'
import PropiedadesDestacadas from '@/components/property/PropiedadesDestacadas'
import SeccionAgentes from '@/components/ui/SeccionAgentes'
import SeccionPostulacion from '@/components/ui/SeccionPostulacion'
import Testimonios from '@/components/ui/Testimonios'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SeccionRegiones />
      <PropiedadesDestacadas />
      <SeccionAgentes />
      <SeccionPostulacion />
      <Testimonios />
      <Footer />
    </main>
  )
}
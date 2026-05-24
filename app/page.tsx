import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import SeccionRegiones from '@/components/SeccionRegiones'
import PropiedadesDestacadas from '@/components/PropiedadesDestacadas'
import SeccionAgentes from '@/components/SeccionAgentes'
import SeccionPostulacion from '@/components/SeccionPostulacion'
import Testimonios from '@/components/Testimonios'
import Footer from '@/components/Footer'

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
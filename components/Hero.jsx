import Image from 'next/image'
import Navbar from './Navbar'

export default function Hero() {
  return (
    <section className="relative h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900">
      <Navbar />
      
      {/* Hero Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero_home.jpg"
          alt="Noelia Camino - Profesional de la belleza"
          fill
          className="object-cover object-center opacity-90"
          priority
        />
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-slate-800/40 to-teal-900/60"></div>
      </div>
    </section>
  )
}
import Image from 'next/image'
import Navbar from './Navbar'

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Navbar />
      
      {/* Hero Image Container */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero_home.jpg"
          alt="Noelia Camino - Profesional de la belleza"
          fill
          className="object-cover object-center max-md:object-[30%_center] opacity-90"
          priority
          quality={75}
          sizes="100vw"
        />
        
        {/* Overlay optimizado: Desktop First */}
        {/* En escritorio el gradiente es suave, en móvil lo oscurecemos un poco más para legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 max-md:bg-black/40"></div>
      </div>
    </section>
  )
}
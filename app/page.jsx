import Hero from '@/components/Hero'
import AboutSection from '@/components/AboutSection'
import ServiceYellowCard from '@/components/ServiceYellowCard'
import ServiceWhiteCard from '@/components/ServiceWhiteCard'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <Hero />

      {/* ABOUT SECTION - Más de 25 años */}
      <AboutSection />

      {/* SERVICE 1: MICROPIGMENTACIÓN - Yellow top, image bottom */}
      <ServiceYellowCard
        title={<>MICROPIGMENTACIÓN <span className="text-white font-semibold">DE CEJAS</span></>}
        description={<>La micropigmentación de cejas es un tratamiento estético semipermanente que permite <span className="font-semibold">realzar, corregir y embellecer</span> la forma natural de las cejas, adaptándose al tipo de piel y al estilo de cada persona</>}
        imageSrc="/images/microbalding-detalle2.png"
        imageAlt="Micropigmentación de cejas"
        href="/services/eyebrow-micropigmentation"
      />

      {/* SERVICE 2: MAQUILLAJE - Image top, white bottom */}
      <ServiceWhiteCard
        title={<>MAQUILLAJE <span className="text-gold font-semibold">PROFESIONAL Y DE NOVIAS</span></>}
        description="La micropigmentación de cejas es un tratamiento estético semipermanente que permite realzar, corregir y embellecer la forma natural de las cejas, adaptándose al tipo de piel y al estilo de cada persona."
        imageSrc="/images/novias_1.jpg"
        imageAlt="Maquillaje profesional y de novias"
        href="/services/professional-makeup"
      />

      {/* SERVICE 3: TERAPIAS FACIALES - Yellow top, image bottom */}
      <ServiceYellowCard
        title={<>TERAPIAS <span className="text-white font-semibold">FACIALES</span></>}
        description="La micropigmentación de cejas es un tratamiento estético semipermanente que permite realzar, corregir y embellecer la forma natural de las cejas, adaptándose al tipo de piel y al estilo de cada persona."
        imageSrc="/images/image9.jpeg"
        imageAlt="Terapias faciales"
        href="/services/facial-therapies"
      />

      {/* SERVICE 4: MANICURA - Image top, white bottom */}
      <ServiceWhiteCard
        title={<>MANICURA Y <span className="text-gold">PEDICURA</span></>}
        description="La micropigmentación de cejas es un tratamiento estético semipermanente que permite realzar, corregir y embellecer la forma natural de las cejas, adaptándose al tipo de piel y al estilo de cada persona."
        imageSrc="/images/manicura-cortas.png"
        imageAlt="Manicura y pedicura"
        href="/services/manicure-pedicure"
      />

    </div>
  )
}
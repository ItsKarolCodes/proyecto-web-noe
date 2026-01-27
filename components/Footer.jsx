import Image from 'next/image'

export default function Footer() {
  return (
    <footer id="contacto" className="gold-section py-52 md:py-70 flex items-center justify-center">
      <div className="relative w-64 h-24 md:w-80 md:h-28 fade-in">
        <Image
          src="/icons/LOGO_NEGRO.png"
          alt="Noelia Camino"
          fill
          className="object-contain"
          priority
        />
      </div>
    </footer>
  )
}
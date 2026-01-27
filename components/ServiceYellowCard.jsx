import Image from 'next/image'
import Link from 'next/link'

export default function ServiceYellowCard({ title, description, imageSrc, imageAlt, href }) {
  return (
    <section className="bg-white">
      {/* Cabecera superior dorada con título grande */}
      <div className="gold-section py-12 md:py-[100px] px-6 flex flex-col items-center text-center">
        <h1 className="pt-15 max-md:pt-5 max-md:text-2xl">
          {title}
        </h1>
      </div>

      {/* Imagen del servicio con mayor altura en escritorio */}
      <div className="relative h-80 md:h-[600px] bg-gray-200 border-y-4 border-black">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Bloque inferior dorado con descripción y botones */}
      <div className="gold-section py-[100px] max-md:py-12 flex flex-col items-center text-center">

        {/* Párrafo */}
        <p className="max-w-[60ch] max-md:max-w-[90%] text-2xl max-md:text-base mb-20 max-md:mb-10 mx-auto tracking-wide">
          {description}
        </p>

        {/* Botonera centrada */}
        <div className="flex items-center justify-center gap-12 max-md:gap-4 mt-10">
          <Link
            href={href}
            className="btn-primary text-2xl max-md:text-lg tracking-[0.5em] max-md:tracking-[0.2em] py-6 px-16 max-md:py-4 max-md:px-8"
          >
            SABER MÁS
          </Link>
          
          <a
            href="https://wa.me/34646703415"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full hover:scale-110 transition-transform duration-300"
            aria-label="Contactar por WhatsApp"
          >
            <img
              src="/icons/whatsapp.png"
              alt="WhatsApp"
              width={50}
              height={50}
            />
          </a>
        </div>
      </div>
    </section>
  )
}
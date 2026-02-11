import Image from 'next/image'
import Link from 'next/link'

export default function ServiceWhiteCard({ title, description, imageSrc, imageAlt, href }) {
  return (
    <section className="bg-white">
      {/* Cabecera blanca */}
      <div className="py-[100px] max-md:py-14 px-8 flex flex-col items-center text-center">
        <h2 className="text-3xl max-md:text-xl font-title uppercase tracking-widest leading-tight">
          {title}
        </h2>
      </div>

      {/* Imagen */}
      <div className="relative h-[600px] max-md:h-72 bg-gray-200 border-y-4 border-black">
        <Image src={imageSrc} alt={imageAlt} fill className="object-cover" priority />
      </div>

      {/* Bloque inferior blanco */}
      <div className="py-[100px] max-md:py-14 px-6 flex flex-col items-center text-center">
        <p className="font-body text-center text-xl max-md:text-base max-w-[60ch] max-md:max-w-[90%] mx-auto mb-16 max-md:mb-8 tracking-wide leading-relaxed">
          {description}
        </p>

        <div className="flex items-center justify-center gap-12 max-md:gap-6">
          <Link href={href} className="btn-primary hover:scale-105">
            SABER MÁS
          </Link>
          <a
            href="https://wa.me/34646703415"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center hover:scale-110 hover:drop-shadow-lg transition-all duration-300"
            aria-label="Contactar por WhatsApp"
          >
            <img
              src="/icons/whatsapp.png"
              alt="WhatsApp"
              /* Escritorio: w-[56px] (aprox. la altura del botón .btn-primary)
                 Móvil: w-[40px] (más equilibrado con el botón pequeño)
              */
              className="w-[56px] h-[56px] max-md:w-[40px] max-md:h-[40px] object-contain"
            />
          </a>
        </div>
      </div>
    </section>
  )
}
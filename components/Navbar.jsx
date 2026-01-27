'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <nav className="absolute top-0 inset-x-0 z-50 py-8 md:py-12 flex justify-center">
        <div className="w-[90%] md:w-[80%] flex justify-between items-center">

          <Link
            href="/"
            className="cursor-pointer relative w-32 h-12 md:w-48 md:h-20"
            onClick={() => setIsMenuOpen(false)}
          >
            {/* Si el menú está abierto, aplicamos un filtro para que el logo blanco se vea negro */}
            <Image
              src="/icons/LOGO_BLANCO.png"
              alt="Noelia Camino Logo"
              fill
              className={`object-contain transition-all duration-300 ${isMenuOpen ? 'brightness-0' : ''}`}
              priority
            />
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="z-50 cursor-pointer group flex items-center"
            aria-label="Menu"
          >
            {isMenuOpen ? (
              /* La X de cerrar siempre en negro sobre el fondo dorado */
              <div className="relative w-10 h-10 md:w-12 md:h-12">
                <span className="absolute top-1/2 left-0 w-full h-0.5 bg-black transform rotate-45"></span>
                <span className="absolute top-1/2 left-0 w-full h-0.5 bg-black transform -rotate-45"></span>
              </div>
            ) : (
              /* El botón hamburguesa en dorado sobre el fondo de la web */
              <div className="flex flex-col gap-2 md:gap-3 items-end">
                <span className="block w-10 md:w-14 h-0.5 bg-[#C9B400]"></span>
                <span className="block w-8 md:w-12 h-0.5 bg-[#C9B400]"></span>
                <span className="block w-10 md:w-14 h-0.5 bg-[#C9B400]"></span>
              </div>
            )}
          </button>
        </div>
      </nav>

      {/* Menú Desplegable: Fondo dorado sólido y Texto negro */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#C9B400] z-40 flex items-center justify-center fade-in">
          <div className="text-center space-y-10">
            {[
              { name: 'inicio', href: '/' },
              { name: 'micropigmentación', href: '/services/eyebrow-micropigmentation' },
              { name: 'maquillaje', href: '/services/professional-makeup' },
              { name: 'terapias faciales', href: '/services/facial-therapies' },
              { name: 'manicura y pedicura', href: '/services/manicure-pedicure' }
            ].map((section) => (
              <Link
                key={section.name}
                href={section.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-black text-3xl md:text-5xl hover:opacity-50 font-title font-light tracking-[0.2em] capitalize transition-all duration-300"
              >
                {section.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
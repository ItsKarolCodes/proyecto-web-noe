import Link from 'next/link';
import Image from 'next/image'



export default function Footer() {
  return (
    <footer className="bg-black py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        {/* 1. NOMBRE DE LA MARCA */}
        <div className="mb-12 text-center">
          <Link href="/" className="relative block w-40 h-16 md:w-56 md:h-24 mx-auto">
            <Image
              src="/icons/TXT_AMARILLO.png" // Uso el blanco porque el fondo es negro
              alt="Noelia Camino Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>
            
        </div>

        {/* 2. MENÚ EN COLUMNA VERTICAL (Tu código integrado) */}
        <nav className="flex flex-col items-center space-y-3 md:space-y-3 mb-16">
          {[
            { name: 'inicio', href: '/' },
            { name: 'micropigmentación', href: '/services/eyebrow-micropigmentation' },
            { name: 'maquillaje', href: '/services/professional-makeup' },
            { name: 'terapias faciales', href: '/services/facial-therapies' },
            { name: 'manicura y pedicura', href: '/services/manicure-pedicure' },
            { name: 'contacto', href: '/contact' }
          ].map((section) => (
            <Link
              key={section.name}
              href={section.href}
              className="text-gold text-base max-md:text-sm hover:opacity-50 font-title font-medium tracking-[0.3em] uppercase transition-all duration-300 text-center"
            >
              {section.name}
            </Link>
          ))}
        </nav>

        {/* 3. REDES SOCIALES */}
        <div className="flex items-center gap-10 mb-12">
          
          {/* Instagram */}
          <a 
            href="https://www.instagram.com/noeliacamino_aquibelleza" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group transition-all duration-300 hover:scale-110 invert"
            aria-label="Instagram"
          >
            <div className="p-4 rounded-full border border-black group-hover:bg-black transition-colors duration-300">
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-6 h-6 text-black group-hover:text-white"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </div>
          </a>

          {/* TikTok */}
          <a 
            href="https://www.tiktok.com/@noeliacamino_aquibelleza" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group transition-all duration-300 hover:scale-110 invert"
            aria-label="TikTok"
          >
            <div className="p-4 rounded-full border border-black group-hover:bg-black transition-colors duration-300">
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-6 h-6 text-black group-hover:text-white"
              >
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
              </svg>
            </div>
          </a>
        </div>

        {/* 4. COPYRIGHT */}
        <div className="pt-8 border-t border-gold w-full max-w-xs text-center">
          <p className="font-body text-base max-md:text-xs text-white uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} Noelia Camino <br className="md:hidden" /> 
             Estética Avanzada
          </p>
        </div>

      </div>
    </footer>
  );
}
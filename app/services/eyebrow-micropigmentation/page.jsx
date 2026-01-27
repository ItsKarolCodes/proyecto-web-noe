import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Micropigmentación de Cejas - Noelia Camino',
  description: 'Microblading y Shading. Tratamiento estético semipermanente para cejas perfectas y naturales.',
}

export default function MicropigmentationPage() {
  return (
    <div className="w-full bg-gold"> {/* Mantenemos el fondo dorado sólido */}
      <Navbar />

      {/* HERO SECTION - Estilo Imagen 1 adaptado */}
      <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/microbalding-detalle2.png"
            alt="Micropigmentación"
            fill
            className="object-cover mix-blend-multiply" // Mezclamos la imagen con el dorado
            priority
          />
        </div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-3xl md:text-4xl text-white tracking-wider">
            Micropigmentación de cejas
          </h1>
        </div>
      </section>

      {/* MI PASIÓN SECTION - Estética de tarjetas con mucho aire */}
      <section className="gold-section py-[120px] px-8">
        {/* Contenedor principal con flex col e items-center para centrado total */}
        <div className="flex flex-col items-center justify-center w-full mx-auto">

          {/* Título Principal */}
          <h2 className="font-title text-3xl md:text-5xl text-white mb-[100px] tracking-[0.2em] uppercase text-center fade-in">
            Mi Pasión
          </h2>
          <p className="font-body text-lg md:text-2xl">
                La micropigmentación de cejas es un tratamiento estético semipermanente que permite realzar, corregir y embellecer la forma natural de las cejas.
          </p>

          <div className="flex flex-col gap-[100px] w-full">

            {/* Bloque 1 */}
            <div className="flex flex-col items-center text-center">
              <span className="font-title text-6xl mb-8 font-bold leading-none">1</span>
              <p className="font-body text-white text-lg md:text-2xl leading-[1.8] max-w-2xl">
                La micropigmentación de cejas es un tratamiento estético semipermanente que permite realzar, corregir y embellecer la forma natural de las cejas.
              </p>
            </div>

            {/* Bloque 2 */}
            <div className="flex flex-col items-center text-center">
              <span className="font-title text-white/40 text-6xl mb-8 font-light italic leading-none">2</span>
              <p className="font-body text-white text-lg md:text-2xl leading-[1.8] max-w-2xl">
                Se recomienda una revisión entre los 12 y 18 meses para mantener el color y la definición perfectos.
              </p>
            </div>

            {/* Bloque 3 */}
            <div className="flex flex-col items-center text-center">
              <span className="font-title text-white/40 text-6xl mb-8 font-light italic leading-none">3</span>
              <p className="font-body text-white text-lg md:text-2xl leading-[1.8] max-w-2xl">
                Realizamos un diseño personalizado basado exclusivamente en tus facciones y armonía facial.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* TÉCNICA PELO A PELO */}
      <section className="bg-white py-[120px] px-8 flex flex-col items-center text-center">
        <h2 className="font-title text-3xl md:text-4xl mb-[60px] tracking-widest uppercase fade-in">
          Técnica pelo a pelo con <span className="gold-text">Dermógrafo</span>
        </h2>

        <p className="font-body text-gray-600 text-lg md:text-xl max-w-2xl mb-[80px] leading-relaxed">
          Procedimiento avanzado que ofrece un acabado natural, definido y duradero.
          El dermógrafo deposita pigmento en las capas superficiales de la piel, creando finos trazos que imitan el vello real.
        </p>

        <div className="flex flex-col items-center text-center relative h-80 md:h-[500px] bg-gray-200">
          <Image
            src="/images/microbalding-detalle2.png"
            alt="Técnica pelo a pelo con dermógrafo"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* IDEAL PARA - Grid minimalista */}
      <section className="bg-gray-50 py-[120px] px-8">
        <div className="container-custom max-w-5xl text-center flex flex-col items-center">
          <h2 className="font-title text-3xl md:text-4xl mb-[100px] tracking-widest uppercase">
            Ideal <span className="gold-text">para:</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-16">
            {[
              { t: "Rellenar", d: "Cejas poco pobladas o con calvas." },
              { t: "Corregir", d: "Asimetrías y falta de definición." },
              { t: "Rediseñar", d: "La forma adaptada a tus facciones." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <h3 className="font-title text-lg mb-6 gold-text uppercase tracking-widest">{item.t}</h3>
                <p className="font-body text-gray-500 leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MICROBLADING SECTION */}
      <section className="gold-section py-[120px] px-8 flex flex-col items-center text-center">
        <h2 className="font-title text-4xl md:text-5xl text-white mb-[80px] tracking-[0.2em] uppercase">
          Microblading
        </h2>

        <p className="font-body text-white text-lg md:text-xl max-w-2xl mb-[100px] leading-relaxed">
          Técnica manual pelo a pelo con pen o tebori. Permite cambiar forma, color y densidad con resultados inmediatos.
        </p>

        <div className="relative w-full max-w-5xl h-[500px] mb-[80px]">
          <Image
            src="/images/image5.jpeg"
            alt="Microblading proceso"
            fill
            className="object-cover"
          />
        </div>

        <div className="font-body text-white/90 space-y-6 text-lg max-w-xl border-t border-white/20 pt-12">
          <p><strong>Duración:</strong> 12–18 meses según piel y cuidados.</p>
          <p><strong>Material:</strong> Pigmentos hipoalergénicos de alta calidad.</p>
        </div>
      </section>

      {/* RESULTADOS - El cierre de la página */}
      <section className="bg-white py-[120px] px-8 flex flex-col items-center text-center">
        <h2 className="font-title text-4xl md:text-5xl mb-[100px] tracking-[0.2em] uppercase">
          Resultados que enamoran
        </h2>

        <div className="grid md:grid-cols-2 gap-4 max-w-5xl mb-[120px]">
          {/* Aquí irían tus imágenes de Antes/Después reales */}
          <div className="bg-gray-100 aspect-square"></div>
          <div className="bg-gray-100 aspect-square"></div>
        </div>

        <p className="font-body text-gray-600 text-lg md:text-xl max-w-2xl mb-[80px] leading-[2]">
          Cada tratamiento se realiza de forma personalizada, cuidando cada detalle para resaltar tu mirada con cejas
          perfectas, simétricas y naturales.
        </p>

        <Link href="/#contacto" className="btn-primary">
          RESERVA TU CITA
        </Link>
      </section>

      <Footer />
    </div>
  )
}
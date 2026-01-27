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
          {/* El Filtro Degradado */}
          <div className="absolute inset-0 bg-black/80" />
        </div>

        <div className="relative z-10 text-center px-6">
          <h1 className="font-sfpro text-4xl max-md:text-2xl text-white font-bold tracking-wider uppercase">
            Micropigmentación de cejas
          </h1>
        </div>
      </section>

      {/* MI PASIÓN SECTION - Estética de tarjetas con mucho aire */}
      <section className="gold-section py-[120px] px-8">
        {/* Contenedor principal con flex col e items-center para centrado total */}
        <div className="flex flex-col items-center justify-center w-[70%] max-md:w-[90%] mx-auto">

          {/* Título Principal */}
          <h2 className="text-5xl mb-8 text-white fade-in max-md:text-4xl uppercase">
            Mi Pasión
          </h2>
          <p className="font-body text-center mb-14 max-md:mb-3 mx-auto">
            La micropigmentación de cejas es un tratamiento estético semipermanente que permite realzar, corregir y embellecer la forma natural de las cejas, adaptandose al tipo de piel y al estilo de cada persona.
          </p>

          <div className="flex flex-col items-center text-center w-full px-6">

            {/* Bloque 1 */}
            <div className="flex flex-col items-center text-center">
              <span className="font-title text-6xl font-bold leading-none">1</span>
              <p className="font-body text-white mb-8 text-2xl max-md:text-lg leading-relaxed max-w-4xl max-md:max-w-full mx-auto uppercase tracking-wider">
                REALIZAMOS UN DISEÑO PERSONALIZADO SEGÚN TUS FACCIONES.
              </p>
            </div>

            {/* Bloque 2 */}
            <div className="flex flex-col items-center text-center">
              <span className="font-title text-6xl  font-bold leading-none">2</span>
              <p className="font-body text-white mb-8 text-2xl max-md:text-lg leading-relaxed max-w-4xl max-md:max-w-full mx-auto uppercase tracking-wider">
                COMENZAMOS EL TRATAMIENTO (.2H), APLICANDO CREMA ANESTÉSICA SI ES NECESARIO PARA TU COMODIDAD.
              </p>
            </div>

            {/* Bloque 3 */}
            <div className="flex flex-col items-center text-center">
              <span className="font-title text-6xl font-bold leading-none">3</span>
              <p className="font-body text-white mb-8 text-2xl max-md:text-lg leading-relaxed max-w-4xl max-md:max-w-full mx-auto uppercase tracking-wider">
                PASADOS 30 A 45 DIAS, SE REALIZA UNA REVISIÓN PARA VALORAR LA EVOLUCIÓN DEL PIGMENTO Y PERFECCIONAR EL RESULTADO.
              </p>
            </div>

            <p className="font-body text-center max-md:mb-3 mx-auto pt-15">
              Se recomienda una revisión entre los 12 y 18 meses para mantener el color y la definición perfectos.
            </p>
          </div>
        </div>
      </section>


      {/* TÉCNICA PELO A PELO */}
      <section className="bg-white py-[120px] flex flex-col items-center text-center">
        <h2 className="font-title text-3xl md:text-4xl mb-[60px] tracking-widest uppercase fade-in">
          Técnica pelo a pelo con <span className="gold-text">Dermógrafo</span>
        </h2>

        <p className="font-body text-gray-600 text-lg md:text-xl max-w-2xl mb-[80px] leading-relaxed">
          Procedimiento avanzado que ofrece un acabado natural, definido y duradero.
          El dermógrafo deposita pigmento en las capas superficiales de la piel, creando finos trazos que imitan el vello real.
        </p>


        <p className="font-body text-gray-600 text-lg md:text-xl max-w-2xl mb-[80px] leading-relaxed">
          Se recomienda una revisión entre los 12 y 18 meses para mantener el color y la definición perfectos.
        </p>

        {/* Contenedor: w-screen ocupa el ancho total del monitor e h-screen la altura total si lo deseas */}
        <div className="relative block w-full h-80 md:h-[600px] bg-gray-200 border-y-4 border-black overflow-hidden">
          <Image
            src="/images/micro.png"
            alt="Técnica de micropigmentación"
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover opacity-100" // Forzamos opacidad 100
            priority={true}
          />
        </div>
      </section>


      {/* IDEAL PARA - Grid minimalista */}
      <section className=" bg-white pt-20 pb-32 max-md:pb-16 px-8 flex flex-col items-center text-center">
        <div className=" flex flex-col items-center text-center">
          <h2 className="text-gold text-4xl max-md:text-2xl mb-[60px] tracking-widest uppercase fade-in">
            Ideal para:
          </h2>

          <h3 className="text-3xl mb-8  fade-in max-md:text-4xl">RELLENAR CEJAS POCO POBLADAS</h3>
          <h3 className="text-3xl mb-8  fade-in max-md:text-4xl">CORREGIR ASIMETRÍAS</h3>
          <h3 className="text-3xl mb-8  fade-in max-md:text-4xl">REDISEÑAR LA FORMA</h3>
        </div>

        {/* Recuadro dorado  */}
        <div className="border-2 border-gold rounded-[2.5rem] p-10 max-md:p-6 max-w-4xl mx-auto mt-10 max-md:mt-6">

          {/* Texto centrado con interlineado fluido */}
          <p className="font-body text-xl max-md:text-base leading-relaxed text-center text-gray-800">
            <span className="block mb-2 max-md:mb-1">
              Duración: 12–18 meses según piel y cuidados.
            </span>
            <span className="block">
              Material: pigmentos hipoalergénicos de alta calidad, higiene y seguridad garantizadas.
            </span>
          </p>

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

        <div className="relative w-full h-80 md:h-[600px] border-y-4 border-black">
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

      {/* SHADING / SOMBREADO*/}
      <section className="gold-section py-[120px] px-8 flex flex-col items-center text-center">
        <h2 className="font-title text-4xl md:text-5xl text-white mb-[80px] tracking-[0.2em] uppercase">
          SHADING / SOMBREADO
        </h2>

        <p className="font-body text-white text-lg md:text-xl max-w-2xl mb-[100px] leading-relaxed">
          Técnica que aporta densidad y definición mediante efecto degradado o pixelado.
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
          <p>Recomendada para pieles grasas donde el microblading retiene peor el pigmento.</p>
          <p> Duración del procedimiento: 1 a 1,5h.</p>
          <p>Se usa dermógrafo para un acabado suave, difuminado y muy natural.</p>
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

        <p className="font-body text-gray-600 text-lg md:text-xl max-w-2xl mb-[80px] leading-[2]">
          La combinación de técnicas y la elección adecuada según el tipo de piel garantizan un resultado duradero, seguro y totalmente adaptado a ti.
        </p>

      </section>

      <Footer />
    </div>
  )
}
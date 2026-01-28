"use client";

import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Comparador from '@/components/Comparador';


export default function SeccionResultados() {
  const casos = [
    { id: 1, antes: "/images/antes1.jpg", despues: "/images/despues1.jpg" },
    { id: 2, antes: "/images/antes2.jpg", despues: "/images/despues2.jpg" },
    { id: 3, antes: "/images/antes3.jpg", despues: "/images/despues3.jpg" },
    { id: 4, antes: "/images/antes4.jpg", despues: "/images/despues4.jpg" },
    { id: 5, antes: "/images/antes5.jpg", despues: "/images/despues5.jpg" },
    { id: 6, antes: "/images/antes6.jpg", despues: "/images/despues6.jpg" },
    { id: 7, antes: "/images/antes7.jpg", despues: "/images/despues7.jpg" },
    { id: 8, antes: "/images/antes8.jpg", despues: "/images/despues8.jpg" },
    { id: 9, antes: "/images/antes9.jpg", despues: "/images/despues9.jpg" },
  ];

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
        <div className="flex flex-col items-center justify-center w-full mx-auto">

          {/* Título Principal */}
          <h2 className="text-5xl mb-8 text-white fade-in max-md:text-4xl uppercase">
            Mi Pasión
          </h2>

          {/* Párrafo introductorio un poco más ancho */}
          <p className="font-body text-center mb-14 max-md:mb-3 mx-auto max-w-4xl">
            La micropigmentación de cejas es un tratamiento estético semipermanente que permite realzar, corregir y embellecer la forma natural de las cejas...
          </p>

          <div className="flex flex-col items-center text-center w-full px-6">

            {/* Bloque 1 - Ancho incrementado */}
            <div className="flex flex-col items-center text-center">
              <span className="font-title text-6xl font-bold leading-none">1</span>
              <p className="font-body text-white mb-8 text-2xl max-md:text-lg leading-relaxed max-w-4xl mx-auto uppercase tracking-wider">
                REALIZAMOS UN DISEÑO PERSONALIZADO SEGÚN TUS FACCIONES.
              </p>
            </div>

            {/* Bloque 2 - Ancho incrementado */}
            <div className="flex flex-col items-center text-center">
              <span className="font-title text-6xl font-bold leading-none">2</span>
              <p className="font-body text-white mb-8 text-2xl max-md:text-lg leading-relaxed max-w-4xl mx-auto uppercase tracking-wider">
                COMENZAMOS EL TRATAMIENTO (.2H), APLICANDO CREMA ANESTÉSICA SI ES NECESARIO PARA TU COMODIDAD.
              </p>
            </div>

            {/* Bloque 3 - Ancho incrementado */}
            <div className="flex flex-col items-center text-center">
              <span className="font-title text-6xl font-bold leading-none">3</span>
              <p className="font-body text-white mb-8 text-2xl max-md:text-lg leading-relaxed max-w-4xl mx-auto uppercase tracking-wider">
                PASADOS 30 A 45 DIAS, SE REALIZA UNA REVISIÓN PARA VALORAR LA EVOLUCIÓN DEL PIGMENTO Y PERFECCIONAR EL RESULTADO.
              </p>
            </div>

            {/* Párrafo Final */}
            <p className="font-body text-center max-md:mb-3 mx-auto pt-15 max-w-4xl">
              Se recomienda una revisión entre los 12 y 18 meses para mantener el color y la definición perfectos.
            </p>
          </div>
        </div>
      </section>


      {/* TÉCNICA PELO A PELO */}
      <section className="bg-white py-[120px] max-md:py-[60px] flex flex-col items-center text-center">
        {/* Título incrementado a 5xl en desktop */}
        <h2 className="font-title text-5xl max-md:text-2xl mb-[60px] max-md:mb-[30px] tracking-widest uppercase fade-in">
          Técnica pelo a pelo con <span className="gold-text">Dermógrafo</span>
        </h2>

        {/* Párrafos incrementados a 2xl en desktop */}
        <p className="font-body text-center text-2xl max-md:text-base mb-14 max-md:mb-6 mx-auto max-w-4xl max-md:max-w-[80%] leading-relaxed">
          Procedimiento avanzado que ofrece un acabado natural, definido y duradero.
          El dermógrafo deposita pigmento en las capas superficiales de la piel, creando finos trazos que imitan el vello real.
        </p>

        <p className="font-body text-center text-2xl max-md:text-base mb-14 max-md:mb-10 mx-auto max-w-4xl max-md:max-w-[80%] leading-relaxed">
          Se recomienda una revisión entre los 12 y 18 meses para mantener el color y la definición perfectos.
        </p>

        <div className="relative block w-full h-[600px] max-md:h-[300px] bg-gray-200 border-y-4 border-black overflow-hidden">
          <Image
            src="/images/micro.png"
            alt="Técnica de micropigmentación"
            fill
            sizes="100vw"
            className="object-cover opacity-100"
            priority={true}
          />
        </div>
      </section>


      {/* IDEAL PARA - Grid minimalista */}
      <section className="bg-white pb-32 max-md:pb-16 flex flex-col items-center text-center">
        <div className="flex flex-col items-center text-center px-8">
          {/* Título incrementado */}
          <h2 className="text-gold text-5xl max-md:text-2xl mb-[60px] max-md:mb-10 tracking-widest uppercase fade-in">
            Ideal para:
          </h2>

          {/* Subtítulos más grandes en desktop */}
          <h3 className="text-5xl max-md:text-xl mb-8 max-md:mb-4 fade-in uppercase font-semibold">RELLENAR CEJAS POCO POBLADAS</h3>
          <h3 className="text-5xl max-md:text-xl mb-8 max-md:mb-4 fade-in uppercase font-semibold">CORREGIR ASIMETRÍAS</h3>
          <h3 className="text-5xl max-md:text-xl mb-8 max-md:mb-8 fade-in uppercase font-semibold">REDISEÑAR LA FORMA</h3>
        </div>

        <div className="border-2 border-gold rounded-[2.5rem] p-10 max-md:p-8 max-w-4xl max-md:max-w-[80%] mx-auto mt-10 max-md:mt-4">
          <p className="font-body text-2xl max-md:text-sm leading-relaxed text-center text-gray-800">
            <span className="block mb-4 max-md:mb-1">
              Duración: 12–18 meses según piel y cuidados.
            </span>
            <span className="block">
              Material: pigmentos hipoalergénicos de alta calidad, higiene y seguridad garantizadas.
            </span>
          </p>
        </div>
      </section>

      {/* MICROBLADING SECTION */}
      <section className="bg-gold py-[120px] max-md:py-[60px] flex flex-col items-center text-center">
        {/* Título incrementado */}
        <h2 className="font-title text-white text-5xl max-md:text-2xl mb-[60px] max-md:mb-[30px] tracking-widest uppercase fade-in">
          Microblading
        </h2>

        <p className="font-body text-center text-2xl max-md:text-base mb-14 max-md:mb-6 mx-auto max-w-4xl max-md:max-w-[80%] leading-relaxed">
          Técnica manual pelo a pelo con pen o tebori (microcuchilla desechable de agujas finas)
        </p>

        <div className="relative block w-full h-[600px] max-md:h-[300px] bg-gray-200 border-y-4 border-black overflow-hidden">
          <Image
            src="/images/micro.png"
            alt="Técnica de micropigmentación"
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover opacity-100"
            priority={true}
          />
        </div>

        <div className="border-2 border-white rounded-[2.5rem] p-10 max-md:p-8 max-w-4xl max-md:max-w-[80%] mx-auto mt-20 max-md:mt-10">
          <p className="font-body text-2xl max-md:text-sm leading-relaxed text-center text-gray-800">
            <span className="block mb-4 max-md:mb-1">
              Duración: 12–18 meses según piel y cuidados.
            </span>
            <span className="block">
              Material: pigmentos hipoalergénicos de alta calidad, higiene y seguridad garantizadas.
            </span>
          </p>
        </div>
        
        <p className="font-body text-center text-2xl max-md:text-base mt-14 max-md:mt-6 mx-auto max-w-4xl max-md:max-w-[80%] leading-relaxed text-white">
          Permite cambiar forma, color y densidad con resultados inmediatos y duración de 18-24 meses.
        </p>
      </section>

      {/* SHADING / SOMBREADO*/}
     <section className="bg-white py-[120px] max-md:py-[60px] flex flex-col items-center text-center">
        <h2 className="font-title text-gold text-5xl max-md:text-2xl mb-[60px] max-md:mb-[30px] tracking-widest uppercase fade-in">
          SHADING / SOMBREADO
        </h2>

        <p className="font-body text-center text-2xl max-md:text-base mb-14 max-md:mb-6 mx-auto max-w-4xl max-md:max-w-[80%] leading-relaxed">
          Técnica que aporta densidad y definición mediante efecto degradado o pixelado
        </p>

        <div className="relative block w-full h-[600px] max-md:h-[300px] bg-gray-200 border-y-4 border-black overflow-hidden">
          <Image
            src="/images/microbalding.png"
            alt="Técnica de micropigmentación"
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover opacity-100"
            priority={true}
          />
        </div>

        <div className="border-2 border-gold rounded-[2.5rem] p-10 max-md:p-8 max-w-4xl max-md:max-w-[80%] mx-auto mt-20 max-md:mt-10">
          <p className="font-body text-2xl max-md:text-sm leading-relaxed text-center text-gray-800">
            <span className="block mb-4 max-md:mb-1">
              Recomendado para pieles grasas donde el Microblading retiene peor el pigmento
            </span>
            <span className="block">
              Duración del procedimiento: 1 a 1.5 h.
            </span>
          </p>
        </div>
        <p className="font-body text-center text-2xl max-md:text-base mt-14 max-md:mt-6 mx-auto max-w-4xl max-md:max-w-[80%] leading-relaxed">
          Se usa dermógrafo para un acabado suave, difuminado y muy natural.
        </p>
      </section>


      {/* RESULTADOS - El cierre de la página */}
      <section className="bg-gold py-[120px] px-8 flex flex-col items-center text-center">
        <h2 className="font-title text-5xl md:text-6xl text-white mb-[80px] tracking-[0.2em] uppercase">
          Resultados que enamoran
        </h2>

        <p className="font-body text-center text-2xl mb-14 max-md:mb-3 mx-auto max-w-4xl max-md:max-w-[80%] text-white">
          Cada tratamiento se realiza de forma personalizada, cuidando cada detalle para resaltar tu mirada con cejas
          perfectas, simétricas y naturales.
        </p>

        <p className="font-body text-center text-2xl mb-14 max-md:mb-3 mx-auto max-w-4xl max-md:max-w-[80%] text-white">
          La combinación de técnicas y la elección adecuada según el tipo de piel garantizan un resultado duradero, seguro y totalmente adaptado a ti.
        </p>

        {/* COMPARADOR  */}
        <section className="bg-gray-50 py-24 px-4 md:px-10">
  <div className="max-w-[1600px] mx-auto">

    <h2 className="text-center font-title text-3xl md:text-5xl mb-20 uppercase tracking-[0.2em]">
      Resultados <span className="gold-text">Reales</span>
    </h2>

    {/* Volvemos a 3 columnas pero con poco espacio entre ellas para ganar tamaño */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
      {casos.map((caso) => (
        <div key={caso.id} className="w-full group">
          
          {/* Tarjeta: Eliminamos bordes extraños y forzamos que la imagen llene el contenedor */}
          <div className="bg-white rounded-[2rem] shadow-2xl border-[3px] border-black overflow-hidden transition-all duration-500 group-hover:border-gold-text">
            
            {/* CAMBIO CLAVE: 
               1. w-full para usar todo el ancho de la columna.
               2. aspect-[3/4] o aspect-[4/5] para que sea alta como en tu ejemplo.
            */}
            <div className="relative w-full aspect-[3/4]"> 
              <Comparador
                antes={caso.antes}
                despues={caso.despues}
              />
            </div>

          </div>

          <p className="text-center mt-6 font-body text-gray-400 uppercase tracking-[0.15em] text-xs md:text-sm">
            Técnica Pelo a Pelo - Caso {caso.id}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>

      </section>

      <Footer />
    </div>
  )
}
"use client";

import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Comparador from '@/components/Comparador';


export default function SeccionResultados() {
  const casos = [
    { id: 1, antes: "/images/anaA.JPEG", despues: "/images/anaB.JPEG" },
    { id: 2, antes: "/images/asuntaA2.JPEG", despues: "/images/asuntaB2.JPEG" },
    { id: 3, antes: "/images/cristinaA.JPEG", despues: "/images/cristinaB.JPEG" },
    { id: 4, antes: "/images/ladiAlado.JPEG", despues: "/images/ladiBlado.JPEG" },
    { id: 5, antes: "/images/sraAcara.JPEG", despues: "/images/sraBcara.JPEG" },
    { id: 6, antes: "/images/patiA.JPEG", despues: "/images/patiB.JPEG" }
  ];

  return (
    <div className="w-full bg-gold"> {/* Mantenemos el fondo dorado sólido */}

      {/* HERO SECTION - Estilo Imagen 1 adaptado */}
      <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/microbalding-detalle2.png"
            alt="Micropigmentación"
            fill
            className="object-cover mix-blend-multiply" // Mezclamos la imagen con el dorado
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={75}
            loading="lazy"
          />
          {/* El Filtro Degradado */}
          <div className="absolute inset-0 bg-black/80" />
        </div>

        <div className="relative z-10 text-center px-6">
          <h1 className="font-sfpro text-5xl max-md:text-2xl text-white font tracking-wider">
            <span className="uppercase">Micropigmentación</span>{' '}
            <span className="text-gold lowercase font-medium">de cejas</span>
          </h1>

          <p className="font-sfpro text-2xl max-md:text-xl text-gray-300 max-w-2xl mx-auto pt-8 md:pt-12 leading-relaxed tracking-wide">
            Especialistas en técnicas de vanguardia para resaltar tu belleza natural
            con precisión artesanal y resultados duraderos.
          </p>
        </div>
      </section>

      {/* MI PASIÓN SECTION - Estética de tarjetas con mucho aire */}
      <section className="bg-gold flex flex-col items-center">
        {/* Contenedor con espaciado simétrico idéntico al resto de la web */}
        <div className="py-[120px] max-md:py-[60px] px-8 flex flex-col items-center w-full max-w-7xl mx-auto">

          {/* Título Principal */}
          <h2 className="font-title text-3xl text-white mb-[60px] max-md:mb-10 tracking-widest uppercase text-center fade-in">
            Mi Pasión
          </h2>

          {/* Párrafo introductorio */}
          <p className="font-body text-center text-xl max-md:text-base mb-16 max-md:mb-10 mx-auto max-w-4xl leading-relaxed">
            La micropigmentación de cejas es un tratamiento estético semipermanente que permite realzar, corregir y embellecer la forma natural de las cejas...
          </p>

          {/* Contenedor de Pasos */}
          <div className="flex flex-col items-center text-center w-full space-y-12 max-md:space-y-8">

            {/* Bloque 1 */}
            <div className="flex flex-col items-center">
              <span className="font-title text-5xl font-bold leading-none mb-4">1</span>
              <p className="font-body text-white text-xl max-md:text-base leading-relaxed max-w-4xl uppercase tracking-wider">
                REALIZAMOS UN DISEÑO PERSONALIZADO SEGÚN TUS FACCIONES.
              </p>
            </div>

            {/* Bloque 2 */}
            <div className="flex flex-col items-center">
              <span className="font-title text-5xl font-bold leading-none mb-4">2</span>
              <p className="font-body text-white text-xl max-md:text-base leading-relaxed max-w-4xl uppercase tracking-wider">
                COMENZAMOS EL TRATAMIENTO (2H APX.), APLICANDO CREMA ANESTÉSICA SI ES NECESARIO PARA TU COMODIDAD.
              </p>
            </div>

            {/* Bloque 3 */}
            <div className="flex flex-col items-center">
              <span className="font-title text-5xl font-bold leading-none mb-4">3</span>
              <p className="font-body text-white text-xl max-md:text-base leading-relaxed max-w-4xl uppercase tracking-wider">
                PASADOS 30 A 45 DIAS, SE REALIZA UNA REVISIÓN PARA VALORAR LA EVOLUCIÓN DEL PIGMENTO Y PERFECCIONAR EL RESULTADO.
              </p>
            </div>

            {/* Párrafo Final - Sin margen inferior extra para respetar el padding de la sección */}
            <p className="font-body text-center text-base max-md:text-sm mx-auto max-w-4xl pt-10 border-t border-white/20 mt-6">
              Se recomienda realizar una revisión entre los 12 y 18 meses después del procedimiento
              para valorar el estado del pigmento y, si es necesario, realizar un refresh para mantener
              el color y la definición perfectos.
            </p>
          </div>
        </div>
      </section>


      {/* TÉCNICA PELO A PELO */}
      <section className="bg-white flex flex-col items-center text-center">
        {/* Espaciador Superior (Mismo tamaño que el inferior) */}
        <div className="py-[120px] max-md:py-[60px] w-full flex flex-col items-center">

          {/* Título */}
          <h2 className="font-title text-3xl max-md:text-xl mb-[60px] max-md:mb-[30px] tracking-widest uppercase fade-in">
            Técnica pelo a pelo con <span className="gold-text">Dermógrafo</span>
          </h2>

          {/* Párrafo 1 */}
          <p className="font-body text-xl max-md:text-base mb-14 max-md:mb-6 mx-auto max-w-4xl max-md:max-w-[80%] leading-relaxed">
            Procedimiento avanzado que ofrece un acabado natural, definido y duradero.
            El dermógrafo deposita pigmento en las capas superficiales de la piel, creando finos trazos que imitan el vello real.
          </p>

          {/* Párrafo 2 - Eliminamos el mb-14 para que no añada espacio extra al final */}
          <p className="font-body text-xl max-md:text-base mx-auto max-w-4xl max-md:max-w-[80%] leading-relaxed">
            Se recomienda una revisión entre los 12 y 18 meses para mantener el color y la definición perfectos.
          </p>

        </div>

        {/* Imagen */}
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
      <section className="bg-white flex flex-col items-center text-center">
        {/* Contenedor con espaciado vertical idéntico (Arriba y Abajo) */}
        <div className="py-[120px] max-md:py-[60px] px-8 flex flex-col items-center w-full">

          {/* Título */}
          <h2 className="text-gold text-3xl max-md:text-xl mb-[60px] max-md:mb-10 tracking-widest uppercase fade-in">
            Ideal para:
          </h2>

          {/* Subtítulos */}
          <div className="space-y-8 max-md:space-y-4 mb-14 max-md:mb-8">
            <h3 className="text-2xl max-md:text-lg fade-in uppercase font-semibold">RELLENAR CEJAS POCO POBLADAS</h3>
            <h3 className="text-2xl max-md:text-lg fade-in uppercase font-semibold">CORREGIR ASIMETRÍAS</h3>
            <h3 className="text-2xl max-md:text-lg fade-in uppercase font-semibold">REDISEÑAR LA FORMA</h3>
          </div>

          {/* Recuadro Dorado - Sin margen inferior extra para mantener la simetría */}
          <div className="border-2 border-gold rounded-[2.5rem] p-10 max-md:p-8 max-w-4xl max-md:max-w-[90%] mx-auto">
            <p className="font-body text-xl max-md:text-sm leading-relaxed text-center text-gray-800">
              <span className="block mb-4 max-md:mb-1">
                Duración: 12–18 meses según piel y cuidados.
              </span>
              <span className="block">
                Material: pigmentos hipoalergénicos de alta calidad, higiene y seguridad garantizadas.
              </span>
            </p>
          </div>

        </div>
      </section>

      {/* MICROBLADING SECTION */}
      <section className="bg-gold flex flex-col items-center text-center">
        {/* BLOQUE SUPERIOR: Título y Párrafo previo a la imagen */}
        <div className="py-[120px] max-md:py-[60px] px-8 flex flex-col items-center w-full">
          <h2 className="font-title text-white text-3xl max-md:text-xl mb-[60px] max-md:mb-[30px] tracking-widest uppercase fade-in">
            Microblading
          </h2>

          {/* Eliminamos el mb-14 para que el padding del contenedor sea el que mande */}
          <p className="font-body text-xl max-md:text-base mx-auto max-w-4xl max-md:max-w-[80%] leading-relaxed">
            Técnica manual pelo a pelo con pen o tebori (microcuchilla desechable de agujas finas)
          </p>
        </div>

        {/* IMAGEN: Ocupa el ancho total, rompiendo el padding del texto */}
        <div className="relative block w-full h-[600px] max-md:h-[300px] bg-gray-200 border-y-4 border-black overflow-hidden">
          <Image
            src="/images/microbalding-detalle.png"
            alt="Técnica de micropigmentación"
            fill
            sizes="100vw"
            className="object-cover opacity-100"
            priority={true}
          />
        </div>

        {/* BLOQUE INFERIOR: Recuadro y Párrafo final */}
        <div className="py-[120px] max-md:py-[60px] px-8 flex flex-col items-center w-full">
          {/* Recuadro Blanco */}
          <div className="border-2 border-white rounded-[2.5rem] p-10 max-md:p-8 max-w-4xl max-md:max-w-[90%] mx-auto mb-14 max-md:mb-8">
            <p className="font-body text-xl max-md:text-sm leading-relaxed text-center text-gray-800">
              <span className="block mb-4 max-md:mb-1">
                Duración: 12–18 meses según piel y cuidados.
              </span>
              <span className="block">
                Material: pigmentos hipoalergénicos de alta calidad, higiene y seguridad garantizadas.
              </span>
            </p>
          </div>

          {/* Párrafo Final - Sin margen inferior para que el padding del div sea el cierre perfecto */}
          <p className="font-body text-xl max-md:text-base mx-auto max-w-4xl max-md:max-w-[80%] leading-relaxed text-white">
            Permite cambiar forma, color y densidad con resultados inmediatos y duración de 18-24 meses.
          </p>
        </div>
      </section>

      {/* SHADING / SOMBREADO*/}
      <section className="bg-white flex flex-col items-center text-center">
        {/* BLOQUE SUPERIOR: Título y descripción antes de la imagen */}
        <div className="py-[120px] max-md:py-[60px] px-8 flex flex-col items-center w-full">
          <h2 className="font-title text-gold text-3xl max-md:text-xl mb-[60px] max-md:mb-[30px] tracking-widest uppercase fade-in">
            SHADING / SOMBREADO
          </h2>

          <p className="font-body text-xl max-md:text-base mx-auto max-w-4xl max-md:max-w-[80%] leading-relaxed">
            Técnica que aporta densidad y definición mediante efecto degradado o pixelado
          </p>
        </div>

        {/* IMAGEN: Ancho total con bordes negros */}
        <div className="relative block w-full h-[600px] max-md:h-[300px] bg-gray-200 border-y-4 border-black overflow-hidden">
          <Image
            src="/images/microbalding.png"
            alt="Técnica de micropigmentación"
            fill
            sizes="100vw"
            className="object-cover opacity-100"
            priority={true}
          />
        </div>

        {/* BLOQUE INFERIOR: Recuadro dorado y texto final */}
        <div className="py-[120px] max-md:py-[60px] px-8 flex flex-col items-center w-full">
          {/* Recuadro Dorado */}
          <div className="border-2 border-gold rounded-[2.5rem] p-10 max-md:p-8 max-w-4xl max-md:max-w-[90%] mx-auto mb-14 max-md:mb-8">
            <p className="font-body text-xl max-md:text-sm leading-relaxed text-center text-gray-800">
              <span className="block mb-4 max-md:mb-1 uppercase font-semibold text-gold">
                Recomendado para pieles grasas
              </span>
              <span className="block text-gray-600 italic">
                Donde el Microblading retiene peor el pigmento.
              </span>
              <span className="block mt-4 border-t border-gold/20 pt-4">
                Duración del procedimiento: 1 a 1.5 h.
              </span>
            </p>
          </div>

          {/* Párrafo Final */}
          <p className="font-body text-xl max-md:text-base mx-auto max-w-4xl max-md:max-w-[80%] leading-relaxed">
            Se usa dermógrafo para un acabado suave, difuminado y muy natural.
          </p>
        </div>
      </section>


      {/* RESULTADOS - El cierre de la página */}
      <section className="bg-gold flex flex-col items-center text-center">
        {/* Contenedor principal con el mismo espaciado simétrico */}
        <div className="py-[120px] max-md:py-[60px] px-8 flex flex-col items-center w-full">

          {/* Título: Ajustado mb a 60px para consistencia */}
          <h2 className="font-title text-3xl text-white mb-[60px] max-md:mb-10 tracking-[0.2em] uppercase text-center max-md:text-xl fade-in">
            Resultados que enamoran
          </h2>

          {/* Bloque de párrafos: Eliminamos mb-14 del último para que el padding sea perfecto */}
          <div className="space-y-10 max-md:space-y-6">
            <p className="font-body text-black text-xl mx-auto max-w-4xl max-md:text-lg leading-relaxed">
              Cada tratamiento se realiza de forma personalizada, cuidando cada detalle para resaltar tu mirada con <span className='font-bold'>cejas perfectas, simétricas y naturales.</span>
            </p>

            <p className="font-body text-black text-xl mx-auto max-w-4xl max-md:text-lg leading-relaxed">
              La combinación de técnicas y la elección adecuada según el tipo de piel garantizan un resultado <span className='font-bold'>duradero, seguro y totalmente adaptado a ti.</span>
            </p>
          </div>

        </div>

        {/* SECCIÓN COMPARADOR: Ahora ocupa el ancho completo (w-full) */}
        <section className="bg-gray-50 py-24 w-full md:px-20">
          <div className="w-full max-w-[1920px] mx-auto">

            <h2 className="text-center font-title text-xl md:text-3xl mb-24 uppercase tracking-[0.2em]">
              Resultados <span className="gold-text">Reales</span>
            </h2>

            {/* Grid ajustado: 2 columnas en Desktop para que las fotos sean GIGANTES */}
            <div className="grid grid-cols-2 lg:grid-cols-2 gap-12 max-md:grid-cols-1 max-md:px-8">
              {casos.map((caso) => (
                <div key={caso.id} className="w-full group">

                  {/* Tarjeta con borde negro grueso y mayor tamaño */}
                  <div className="bg-white rounded-[2rem] shadow-2xl border-[4px] border-black overflow-hidden transition-all duration-500 group-hover:border-gold">

                    {/* Aspect Ratio 4/5 para que las fotos sean más altas y grandes */}
                    <div className="relative w-full aspect-[4/5] md:aspect-[16/10]">
                      <Comparador
                        antes={caso.antes}
                        despues={caso.despues}
                      />
                    </div>

                  </div>

                  <p className="text-center mt-8 font-body text-gray-400 uppercase tracking-[0.2em] text-sm md:text-base">
                    Técnica Pelo a Pelo - Caso {caso.id}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>
      </section>

    </div>
  )
}
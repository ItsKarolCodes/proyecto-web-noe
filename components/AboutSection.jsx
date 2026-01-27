export default function AboutSection() {
  return (
    <section id="inicio" className=" pt-[120px] pb-5 bg-white flex flex-col justify-between items-center">
      <div className="max-w-5xl flex flex-col items-center text-center px-8">

        {/* Título: Recuperamos el tamaño grande y la fuente Poppins */}
        <h2 className="text-5xl mb-8  fade-in">
          Más de <span className="gold-text"> <span className="font-bold">25</span> años </span>
        </h2>

        {/* Párrafo destacado: Tamaño grande para impacto visual */}
        <p className=" text-gray-900 mb-10 max-w-[15ch] md:max-w-[25ch] mb-[80px]">
          dedicada al cuidado personal, la belleza y el bienestar.
        </p>


        {/* Firma/Presentación: Estilo limpio y espaciado */}
        <p className="font-body">
          Soy Noelia Camino, apasionada del arte de cuidar.
        </p>

        {/* Cuerpo de texto: Tamaño específico (14px móvil / 16px escritorio) */}
        <p className="font-body mb-14">
          Desde hace más de 25 años, acompaño a mujeres y hombres en su proceso de verse y sentirse mejor.
          Me formo constantemente, pruebo nuevas técnicas y productos para ofrecer resultados naturales, duraderos y adaptados a cada persona.
        </p>

        {/* BLOQUE INFERIOR: La línea que quieres al final */}
      <div className="w-full pt-20">
        <div className="flex items-center justify-center">
          {/* Línea Izquierda */}
          <div className="flex-grow h-[1px] bg-[var(--color-gold)]"></div>

          {/* Texto Central */}
          <h2 className="text-center text-xl md:text-3xl text-gray-800 tracking-[0.1em] font-poppins">
            SERVICIOS  <span className="text-gold">/</span> ESPECIALIDADES
          </h2>

          {/* Línea Derecha */}
          <div className="flex-grow h-[1px] bg-[var(--color-gold)] "></div>
        </div>
      </div>
      </div>
    </section>
  )
}
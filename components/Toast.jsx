'use client';

export default function Toast({ mensaje, subtitulo, visible, alCerrar }) {
  return (
    <div className={`fixed bottom-10 left-1/2 -translate-x-1/2 z-50 transition-all duration-700 ease-in-out ${
      visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
    }`}>
      <div className="bg-white border-l-4 border-[#D4AF37] shadow-[0_10px_40px_rgba(0,0,0,0.08)] px-8 py-4 rounded-r-2xl flex items-center gap-4 min-w-[320px]">
        {/* Icono de check */}
        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
          <svg className="w-3 h-3 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <div className="flex flex-col">
          <p className="font-body text-xs uppercase tracking-[0.2em] text-black font-semibold">
            {mensaje}
          </p>
          <p className="font-body text-[10px] text-gray-400 uppercase tracking-widest mt-1">
            {subtitulo}
          </p>
        </div>

        {/* Botón cerrar */}
        <button 
          onClick={alCerrar}
          className="ml-auto text-gray-300 hover:text-black transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
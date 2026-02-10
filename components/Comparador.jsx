"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const ComparadorHorizontal = ({ antes, despues }) => {
    const [sliderPos, setSliderPos] = useState(50);

    const handleMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        // Capturamos la posición Y (vertical)
        const y = e.clientY || (e.touches && e.touches[0].clientY);
        if (!y) return;

        const relativeY = y - rect.top;
        const percentage = Math.max(0, Math.min(100, (relativeY / rect.height) * 100));
        setSliderPos(percentage);
    };

    return (
        <div
    /* Quitamos max-w-[600px] para que ocupe todo el espacio del Grid.
       Quitamos aspect-square porque el tamaño lo manda el padre.
       Usamos h-full para que rellene la tarjeta de arriba a abajo.
    */
    className="relative w-full h-full overflow-hidden select-none group"
    onMouseMove={handleMove}
    onTouchMove={handleMove}
>
    {/* Imagen DESPUÉS (Fondo) */}
    <Image
        src={despues}
        alt="Después"
        fill
        className="object-cover"
        /* Aumentamos sizes para que Next.js no baje la calidad en pantallas grandes */
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
    />

    {/* Imagen ANTES (Cortina) */}
    <div
        className="absolute inset-0 z-10 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 0 ${100 - sliderPos}% 0)` }}
    >
        <Image
            src={antes}
            alt="Antes"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
            className="object-cover"
        />
    </div>

            {/* Línea divisoria HORIZONTAL */}
            <div
                className="absolute left-0 right-0 z-20 h-1 bg-white/80 backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.3)] pointer-events-none"
                style={{ top: `${sliderPos}%` }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xl border-2 border-[#D4AF37]">
                    <div className="flex flex-col gap-0.5 leading-none items-center">
                        <span className="text-[#D4AF37] font-bold text-[10px] scale-y-125">▲</span>
                        <span className="text-[#D4AF37] font-bold text-[10px] scale-y-125">▼</span>
                    </div>
                </div>
            </div>

            {/* Etiquetas */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
                <span className="bg-black/40 backdrop-blur-md text-white px-4 py-1 rounded-full text-xs uppercase tracking-widest border border-white/10">Antes</span>
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
                <span className="bg-[#D4AF37]/90 text-white px-4 py-1 rounded-full text-xs uppercase tracking-widest">Después</span>
            </div>
        </div>
    );
};

export default ComparadorHorizontal;
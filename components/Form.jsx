'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Toast from '@/components/Toast'

export default function Formulario() {
  const [enviando, setEnviando] = useState(false);
  const [mostrarToast, setMostrarToast] = useState(false);

  // Esta es la función que procesa el formulario
  const manejarEnvio = async (e) => {
    e.preventDefault(); // Evita que la página se recargue
    setEnviando(true);

    // 1. Extraemos los datos del formulario de forma limpia
    const formData = new FormData(e.target);
    const datos = {
      nombre: formData.get('nombre'),
      email: formData.get('email'),
      telefono: formData.get('telefono'),
      mensaje: formData.get('mensaje'),
    };

    try {
      // 2. Enviamos los datos a la ruta API que crearemos en app/api/send/route.js
      const respuesta = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos),
      });

      if (respuesta.ok) {
        setMostrarToast(true); // Activamos la notificación
        // Limpia los campos del formulario
        e.target.reset();
        // La ocultamos automáticamente tras 5 segundo
        setTimeout(() => setMostrarToast(false), 5000);
      } else {
        const errorData = await respuesta.json();
        alert(`Error: ${errorData.message || 'No se pudo enviar el formulario'}`);
      }
    } catch (error) {
      console.error("Error de red:", error);
      alert('Hubo un problema de conexión con el servidor.');
    } finally {
      // 3. Volvemos a habilitar el botón pase lo que pase
      setEnviando(false);
    }
  };

  return (
    <div className="w-full bg-white flex flex-col">
  <main className="flex-grow flex items-center justify-center pt-32 pb-24 md:pt-40 md:pb-32 px-6 bg-gray-50/30">

    <div className="max-w-3xl w-full bg-gray-100 p-8 md:py-12 md:px-20 rounded-[2.5rem] md:rounded-[3rem] shadow-[0_10px_30px_rgba(0,0,0,0.05)] border-[1px] border-gray-200 transition-all">

      <div className="text-center mb-10">
        <h2 className="font-title text-xl md:text-2xl text-black uppercase tracking-[0.25em] mb-4">
          Contacta con <span className="gold-text">nosotras</span>
        </h2>
        <div className="w-24 h-[1px] bg-gold mx-auto mb-6"></div>
        <p className="font-body text-gray-400 text-[7px] md:text-base uppercase tracking-[0.3em] leading-relaxed">
          Tu transformación comienza con un diseño exclusivo.
        </p>
      </div>

      <form onSubmit={manejarEnvio} className="space-y-6 md:space-y-8">
        {/* Nombre */}
        <div className="relative group">
          <label className="block font-body text-xl max-md:text-base uppercase tracking-[0.2em] text-gray-800 mb-2 group-focus-within:text-gold transition-colors">
            Nombre y Apellidos
          </label>
          <input
            type="text"
            name="nombre"
            required
            className="w-full text-xl max-md:text-base bg-transparent border-b border-gray-200 py-2 outline-none focus:border-gold transition-all font-body text-gray-800 placeholder:text-gray-400"
            placeholder="Ej. Noelia Camino"
          />
        </div>

        {/* Email */}
        <div className="relative group">
          <label className="block font-body text-xl max-md:text-base uppercase tracking-[0.2em] text-gray-800 mb-2 group-focus-within:text-gold transition-colors">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full text-xl max-md:text-base bg-transparent border-b border-gray-200 py-2 outline-none focus:border-gold transition-all font-body text-gray-800 placeholder:text-gray-400"
            placeholder="tu@email.com"
          />
        </div>

        {/* Teléfono */}
        <div className="relative group">
          <label className="block font-body text-xl max-md:text-base uppercase tracking-[0.2em] text-gray-800 mb-2 group-focus-within:text-gold transition-colors">
            Teléfono
          </label>
          <input
            type="tel"
            name="telefono"
            required
            className="w-full text-xl max-md:text-base bg-transparent border-b border-gray-200 py-2 outline-none focus:border-gold transition-all font-body text-gray-800 placeholder:text-gray-400"
            placeholder="+34 000 000 000"
          />
        </div>

        {/* Mensaje */}
        <div className="relative group">
          <label className="block font-body text-xl max-md:text-base uppercase tracking-[0.2em] text-gray-800 mb-2 group-focus-within:text-gold transition-colors">
            Mensaje 
          </label>
          <textarea
            name="mensaje"
            rows="3"
            className="w-full text-xl max-md:text-base bg-transparent border-b border-gray-200 py-2 outline-none focus:border-gold transition-all font-body text-gray-800 placeholder:text-gray-400 resize-none"
            placeholder="¿En qué podemos ayudarte?"
          ></textarea>
        </div>

        <div className="pt-6">
          <button
            type="submit"
            disabled={enviando}
            className="w-full py-5 bg-black text-white font-body uppercase tracking-[0.4em] text-[10px] md:text-xs rounded-full hover:bg-[#D4AF37] hover:scale-[1.02] active:scale-[0.98] transition-all duration-500 shadow-xl disabled:opacity-50"
          >
            {enviando ? 'Enviando Solicitud...' : 'Enviar'}
          </button>
        </div>
      </form>

      <Toast
        mensaje="Solicitud recibida"
        subtitulo="Te contactaremos a la mayor brevedad"
        visible={mostrarToast}
        alCerrar={() => setMostrarToast(false)}
      />
    </div>
  </main>
</div>
  );
}
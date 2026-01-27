
import localFont from 'next/font/local'
import './globals.css'

// 1. Configuración de Poppins (Títulos y Menú)
const poppins = localFont({
  src: [
    { path: '../public/fonts/Poppins-Light.ttf', weight: '300', style: 'normal' },
    { path: '../public/fonts/Poppins-Regular.ttf', weight: '400', style: 'normal' },
    { path: '../public/fonts/Poppins-Medium.ttf', weight: '500', style: 'normal' },
    { path: '../public/fonts/Poppins-SemiBold.ttf', weight: '600', style: 'normal' },
    { path: '../public/fonts/Poppins-Bold.ttf', weight: '700', style: 'normal' },
  ],
  variable: '--font-poppins',
})

// 2. Configuración de SF Pro (Cuerpo de texto)
// Asegúrate de que el archivo esté en la carpeta /public/fonts/
const sfPro = localFont({
  src: [
    { path: '../public/fonts/SFPRODISPLAYREGULAR.otf', weight: '400', style: 'normal' },
    { path: '../public/fonts/SFPRODISPLAYMEDIUM.otf', weight: '500', style: 'normal' },
    { path: '../public/fonts/SFPRODISPLAYBOLD.otf', weight: '700', style: 'normal' },
    // Si necesitas la versión fina que mencionaste antes:
    { path: '../public/fonts/SFPRODISPLAYTHINITALIC.otf', weight: '100', style: 'italic' },
  ],
  variable: '--font-sfpro',
})

export const metadata = {
  title: 'Noelia Camino - Micropigmentación de Cejas | Belleza y Bienestar',
  description: 'Más de 25 años de experiencia en micropigmentación de cejas, maquillaje profesional, manicura y terapias faciales.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      {/* 3. Aplicamos ambas variables al body */}
      <body className={`${poppins.variable} ${sfPro.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
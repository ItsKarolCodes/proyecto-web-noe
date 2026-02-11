import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Inicializamos Resend con tu clave secreta
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    // 1. Recibimos los datos que vienen del formulario
    const { nombre, email, telefono, mensaje } = await req.json();

    // 2. Enviamos el correo usando Resend
    const data = await resend.emails.send({
      from: 'Web Noelia Camino <onboarding@resend.dev>', // Email de prueba por defecto
      to: ['cgonzba@gmail.com'], 
      subject: `Nueva solicitud: ${nombre}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #D4AF37; text-transform: uppercase; tracking: 0.1em;">Nueva solicitud</h2>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Nombre:</strong> ${nombre}</p>
          <p><strong>Email de la clienta:</strong> ${email}</p>
          <p><strong>Mensaje de la clienta:</strong> ${mensaje}</p>
          <p><strong>Teléfono:</strong> ${telefono}</p>
          <br />
          <p style="font-size: 12px; color: #999;">Este mensaje ha sido enviado desde el formulario de contacto de tu sitio web.</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error en el servidor:", error);
    return NextResponse.json({ error: "Error al enviar el email" }, { status: 500 });
  }
}
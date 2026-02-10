import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  try {
    const data = await request?.json?.()

    // Validate required fields
    if (!data?.name?.trim?.() || !data?.email?.trim?.() || !data?.message?.trim?.()) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Save to database
    const contactMessage = await db?.contactMessage?.create?.({
      data: {
        name: data?.name?.trim?.() ?? '',
        email: data?.email?.trim?.() ?? '',
        subject: data?.subject?.trim?.() || null,
        message: data?.message?.trim?.() ?? '',
        status: 'unread'
      }
    })

    // Send notification email
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e40af; border-bottom: 3px solid #0891b2; padding-bottom: 12px; margin-bottom: 24px;">
          Nuevo Mensaje de Contacto
        </h2>
        <div style="background: #f8fafc; padding: 24px; border-radius: 8px; margin: 24px 0;">
          <p style="margin: 12px 0;"><strong style="color: #1e293b;">Nombre:</strong> <span style="color: #475569;">${data?.name ?? ''}</span></p>
          <p style="margin: 12px 0;"><strong style="color: #1e293b;">Email:</strong> <a href="mailto:${data?.email ?? ''}" style="color: #0891b2; text-decoration: none;">${data?.email ?? ''}</a></p>
          ${data?.subject ? `<p style="margin: 12px 0;"><strong style="color: #1e293b;">Asunto:</strong> <span style="color: #475569;">${data?.subject ?? ''}</span></p>` : ''}
          <p style="margin: 12px 0 8px 0;"><strong style="color: #1e293b;">Mensaje:</strong></p>
          <div style="background: white; padding: 16px; border-radius: 6px; border-left: 4px solid #0891b2;">
            <p style="color: #334155; line-height: 1.6; margin: 0;">${(data?.message ?? '').replace(/\n/g, '<br>')}</p>
          </div>
        </div>
        <div style="background: #1e40af; color: white; padding: 16px; border-radius: 8px; margin: 24px 0;">
          <p style="margin: 0; font-size: 14px;"><strong>ID del Mensaje:</strong> ${contactMessage?.id ?? ''}</p>
          <p style="margin: 8px 0 0 0; font-size: 14px;"><strong>Fecha:</strong> ${new Date()?.toLocaleString?.('es-CL', { timeZone: 'America/Santiago' }) ?? ''}</p>
        </div>
        <p style="color: #64748b; font-size: 12px; text-align: center; margin-top: 24px;">
          Este mensaje fue enviado desde tu portafolio web profesional.
        </p>
      </div>
    `

    const appUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000'
    const appName = 'Portfolio Claudio Vera'

    try {
      const emailResponse = await fetch('https://apps.abacus.ai/api/sendNotificationEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          deployment_token: process.env.ABACUSAI_API_KEY,
          app_id: process.env.WEB_APP_ID,
          notification_id: process.env.NOTIF_ID_MENSAJE_DE_CONTACTO,
          subject: `Nuevo mensaje de contacto de ${data?.name ?? 'Usuario'}`,
          body: htmlBody,
          is_html: true,
          recipient_email: 'tatoveradiaz@gmail.com',
          sender_email: `noreply@${new URL(appUrl)?.hostname ?? 'localhost'}`,
          sender_alias: appName
        })
      })

      const emailResult = await emailResponse?.json?.()
      if (!emailResult?.success && !emailResult?.notification_disabled) {
        console.error('Failed to send email notification:', emailResult?.message)
      }
    } catch (emailError) {
      console.error('Email notification error:', emailError)
      // Don't fail the request if email fails
    }

    return NextResponse.json({
      success: true,
      message: 'Message received successfully',
      id: contactMessage?.id
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
}
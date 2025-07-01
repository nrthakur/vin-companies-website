import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, projectType, budget, timeline, message, company } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Create email content based on company
    const isEngineering = company === 'engineering'
    const companyName = isEngineering ? 'Vin Engineering Inc.' : 'Vin General Contracting Inc.'
    const subject = `New ${isEngineering ? 'Engineering' : 'Construction'} Inquiry from ${name}`

    let emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Company:</strong> ${companyName}</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Project Type:</strong> ${projectType || 'Not specified'}</p>
    `

    if (budget) {
      emailContent += `<p><strong>Budget:</strong> ${budget}</p>`
    }

    if (timeline) {
      emailContent += `<p><strong>Timeline:</strong> ${timeline}</p>`
    }

    emailContent += `
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
      
      <hr>
      <p><em>This email was sent from the ${companyName} contact form.</em></p>
    `

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'VIN Companies <onboarding@resend.dev>', // This will be the default until you verify your domain
      to: ['nikunjrt@icloud.com'], // Changed to your verified Resend email
      subject: subject,
      html: emailContent,
      replyTo: email, // This allows you to reply directly to the customer
    })

    console.log('Email sent successfully:', data)

    return NextResponse.json({ 
      success: true, 
      message: 'Email sent successfully',
      data: data 
    })

  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email. Please try again.' },
      { status: 500 }
    )
  }
}

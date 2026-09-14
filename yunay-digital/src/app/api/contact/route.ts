import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, subject, message, projectType, budget } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create customer enquiry folder and file
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const folderName = `${name.replace(/[^a-zA-Z0-9]/g, '_')}_${timestamp}`;
    const enquiriesDir = path.join(process.cwd(), 'data', 'customer-enquiries', folderName);
    
    try {
      await mkdir(enquiriesDir, { recursive: true });
      
      const enquiryData = {
        timestamp: new Date().toISOString(),
        name,
        email,
        phone: phone || '',
        company: company || '',
        subject,
        message,
        projectType: projectType || '',
        budget: budget || '',
        status: 'new'
      };
      
      const fileName = `contact_${name.replace(/[^a-zA-Z0-9]/g, '_')}_${timestamp}.json`;
      await writeFile(
        path.join(enquiriesDir, fileName),
        JSON.stringify(enquiryData, null, 2)
      );
    } catch (fileError) {
      console.error('Error saving enquiry:', fileError);
      // Continue with email sending even if file saving fails
    }

    // Create email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'your-email@gmail.com',
        pass: process.env.EMAIL_PASS || 'your-app-password'
      }
    });

    // Enhanced HTML email template with better styling and logo
    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission - Yunay Digital</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
        <div style="max-width: 600px; margin: 0 auto; background-color: white;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #059669, #0891b2, #3b82f6); padding: 30px 20px; text-align: center;">
            <!-- Enhanced Logo -->
            <div style="margin-bottom: 20px;">
              <div style="display: inline-block; background: white; padding: 15px 25px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.2);">
                <div style="display: flex; align-items: center; gap: 15px;">
                  <!-- Logo Icon -->
                  <div style="position: relative; width: 50px; height: 50px;">
                    <div style="position: absolute; top: 5px; left: 5px; width: 12px; height: 12px; background: #10b981; border-radius: 50%; box-shadow: 0 2px 4px rgba(16,185,129,0.3);"></div>
                    <div style="position: absolute; top: 15px; right: 8px; width: 10px; height: 10px; background: #14b8a6; border-radius: 50%; box-shadow: 0 2px 4px rgba(20,184,166,0.3);"></div>
                    <div style="position: absolute; bottom: 8px; left: 15px; width: 14px; height: 14px; background: #06b6d4; border-radius: 50%; box-shadow: 0 2px 4px rgba(6,182,212,0.3);"></div>
                    <div style="position: absolute; bottom: 15px; right: 5px; width: 8px; height: 8px; background: #059669; border-radius: 50%; opacity: 0.7;"></div>
                    <div style="position: absolute; top: 35px; left: 25px; width: 6px; height: 6px; background: #10b981; border-radius: 50%; opacity: 0.6;"></div>
                  </div>
                  <!-- Logo Text -->
                  <div style="text-align: left;">
                    <div style="font-size: 18px; font-weight: bold; color: #059669; line-height: 1; margin-bottom: 3px; font-family: Arial, sans-serif;">YD SERVICES</div>
                    <div style="font-size: 11px; color: #374151; font-weight: 600; letter-spacing: 0.5px; font-family: Arial, sans-serif;">PRIVATE LIMITED</div>
                  </div>
                </div>
              </div>
            </div>
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">New Contact Form Submission</h1>
            <p style="color: #e0f2fe; margin: 8px 0 0 0; font-size: 16px;">Yunay Digital Services Private Limited</p>
            <div style="width: 60px; height: 3px; background: white; margin: 15px auto 0; border-radius: 2px;"></div>
          </div>
          
          <!-- Content -->
          <div style="padding: 40px 30px; background: #f9fafb;">
            <h2 style="color: #1f2937; margin-bottom: 25px; font-size: 22px;">Contact Details</h2>
            
            <div style="background: white; padding: 25px; border-radius: 12px; margin-bottom: 25px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 0; font-weight: bold; color: #374151; width: 140px; border-bottom: 1px solid #f3f4f6;">Name:</td>
                  <td style="padding: 12px 0; color: #1f2937; border-bottom: 1px solid #f3f4f6;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; font-weight: bold; color: #374151; border-bottom: 1px solid #f3f4f6;">Email:</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6;"><a href="mailto:${email}" style="color: #059669; text-decoration: none;">${email}</a></td>
                </tr>
                ${phone ? `
                <tr>
                  <td style="padding: 12px 0; font-weight: bold; color: #374151; border-bottom: 1px solid #f3f4f6;">Phone:</td>
                  <td style="padding: 12px 0; color: #1f2937; border-bottom: 1px solid #f3f4f6;">${phone}</td>
                </tr>
                ` : ''}
                ${company ? `
                <tr>
                  <td style="padding: 12px 0; font-weight: bold; color: #374151; border-bottom: 1px solid #f3f4f6;">Company:</td>
                  <td style="padding: 12px 0; color: #1f2937; border-bottom: 1px solid #f3f4f6;">${company}</td>
                </tr>
                ` : ''}
                ${projectType ? `
                <tr>
                  <td style="padding: 12px 0; font-weight: bold; color: #374151; border-bottom: 1px solid #f3f4f6;">Project Type:</td>
                  <td style="padding: 12px 0; color: #1f2937; border-bottom: 1px solid #f3f4f6;">${projectType}</td>
                </tr>
                ` : ''}
                ${budget ? `
                <tr>
                  <td style="padding: 12px 0; font-weight: bold; color: #374151; border-bottom: 1px solid #f3f4f6;">Budget:</td>
                  <td style="padding: 12px 0; color: #1f2937; border-bottom: 1px solid #f3f4f6;">${budget}</td>
                </tr>
                ` : ''}
                <tr>
                  <td style="padding: 12px 0; font-weight: bold; color: #374151;">Subject:</td>
                  <td style="padding: 12px 0; color: #1f2937;">${subject}</td>
                </tr>
              </table>
            </div>
            
            <div style="background: white; padding: 25px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
              <h3 style="color: #1f2937; margin: 0 0 15px 0; font-size: 18px;">Message:</h3>
              <div style="background: #f8fafc; padding: 20px; border-radius: 8px; border-left: 4px solid #059669;">
                <p style="color: #374151; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
            
            <div style="margin-top: 25px; padding: 20px; background: #ecfdf5; border-radius: 8px; border-left: 4px solid #10b981;">
              <p style="margin: 0; color: #065f46; font-size: 14px;">
                <strong>📧 Contact Form Submission</strong><br>
                Submitted on: ${new Date().toLocaleString()}<br>
                Source: Yunay Digital Website
              </p>
            </div>
          </div>
          
          <!-- Footer -->
          <div style="background: #1f2937; padding: 30px 20px; text-align: center;">
            <!-- Footer Logo -->
            <div style="margin-bottom: 20px;">
              <div style="display: inline-block; background: rgba(255,255,255,0.1); padding: 12px 20px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.2);">
                <div style="display: flex; align-items: center; gap: 12px; justify-content: center;">
                  <!-- Footer Logo Icon -->
                  <div style="position: relative; width: 35px; height: 35px;">
                    <div style="position: absolute; top: 3px; left: 3px; width: 8px; height: 8px; background: #10b981; border-radius: 50%;"></div>
                    <div style="position: absolute; top: 10px; right: 5px; width: 7px; height: 7px; background: #14b8a6; border-radius: 50%;"></div>
                    <div style="position: absolute; bottom: 5px; left: 10px; width: 10px; height: 10px; background: #06b6d4; border-radius: 50%;"></div>
                    <div style="position: absolute; bottom: 10px; right: 3px; width: 6px; height: 6px; background: #059669; border-radius: 50%; opacity: 0.7;"></div>
                    <div style="position: absolute; top: 25px; left: 18px; width: 4px; height: 4px; background: #10b981; border-radius: 50%; opacity: 0.6;"></div>
                  </div>
                  <!-- Footer Logo Text -->
                  <div style="text-align: left;">
                    <div style="font-size: 14px; font-weight: bold; color: white; line-height: 1; margin-bottom: 2px;">YD SERVICES</div>
                    <div style="font-size: 9px; color: #d1d5db; font-weight: 600; letter-spacing: 0.3px;">PRIVATE LIMITED</div>
                  </div>
                </div>
              </div>
              <h3 style="color: white; margin: 15px 0 8px 0; font-size: 20px;">Yunay Digital Services Private Limited</h3>
              <p style="color: #9ca3af; margin: 0; font-size: 14px;">Building the future of technology</p>
            </div>
            
            <div style="border-top: 1px solid #374151; padding-top: 20px; margin-top: 20px;">
              <p style="color: #9ca3af; margin: 0 0 8px 0; font-size: 13px;">
                📧 contact@yunaydigital.com | 📞 +91 79-77704812
              </p>
              <p style="color: #9ca3af; margin: 0 0 15px 0; font-size: 13px;">
                🌐 <a href="https://yunaydigital.com" style="color: #10b981; text-decoration: none;">yunaydigital.com</a>
              </p>
              <p style="color: #6b7280; margin: 0; font-size: 12px;">
                © ${new Date().getFullYear()} Yunay Digital Services Private Limited. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER || 'noreply@yunaydigital.com',
      to: 'contact@yunaydigital.com',
      subject: `🔔 New Contact Form Submission: ${subject}`,
      html: emailHtml,
      replyTo: email
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Enhanced auto-reply with better header and footer
    const autoReplyHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You - Yunay Digital</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
        <div style="max-width: 600px; margin: 0 auto; background-color: white;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #059669, #0891b2, #3b82f6); padding: 30px 20px; text-align: center;">
            <!-- Enhanced Logo -->
            <div style="margin-bottom: 20px;">
              <div style="display: inline-block; background: white; padding: 15px 25px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.2);">
                <div style="display: flex; align-items: center; gap: 15px;">
                  <!-- Logo Icon -->
                  <div style="position: relative; width: 50px; height: 50px;">
                    <div style="position: absolute; top: 5px; left: 5px; width: 12px; height: 12px; background: #10b981; border-radius: 50%; box-shadow: 0 2px 4px rgba(16,185,129,0.3);"></div>
                    <div style="position: absolute; top: 15px; right: 8px; width: 10px; height: 10px; background: #14b8a6; border-radius: 50%; box-shadow: 0 2px 4px rgba(20,184,166,0.3);"></div>
                    <div style="position: absolute; bottom: 8px; left: 15px; width: 14px; height: 14px; background: #06b6d4; border-radius: 50%; box-shadow: 0 2px 4px rgba(6,182,212,0.3);"></div>
                    <div style="position: absolute; bottom: 15px; right: 5px; width: 8px; height: 8px; background: #059669; border-radius: 50%; opacity: 0.7;"></div>
                    <div style="position: absolute; top: 35px; left: 25px; width: 6px; height: 6px; background: #10b981; border-radius: 50%; opacity: 0.6;"></div>
                  </div>
                  <!-- Logo Text -->
                  <div style="text-align: left;">
                    <div style="font-size: 18px; font-weight: bold; color: #059669; line-height: 1; margin-bottom: 3px; font-family: Arial, sans-serif;">YD SERVICES</div>
                    <div style="font-size: 11px; color: #374151; font-weight: 600; letter-spacing: 0.5px; font-family: Arial, sans-serif;">PRIVATE LIMITED</div>
                  </div>
                </div>
              </div>
            </div>
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">Thank You for Contacting Us!</h1>
            <p style="color: #e0f2fe; margin: 8px 0 0 0; font-size: 16px;">Yunay Digital Services Private Limited</p>
            <div style="width: 60px; height: 3px; background: white; margin: 15px auto 0; border-radius: 2px;"></div>
          </div>
          
          <!-- Content -->
          <div style="padding: 40px 30px; background: #f9fafb;">
            <h2 style="color: #1f2937; margin-bottom: 20px;">Hi ${name},</h2>
            
            <p style="color: #374151; line-height: 1.7; font-size: 16px; margin-bottom: 25px;">
              Thank you for reaching out to us! We've received your message and our team will get back to you within <strong>24 hours</strong>.
            </p>
            
            <div style="background: white; padding: 25px; border-radius: 12px; margin: 25px 0; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
              <h3 style="color: #1f2937; margin: 0 0 15px 0; font-size: 18px;">📋 Your Message Summary</h3>
              <p style="color: #374151; margin-bottom: 15px;"><strong>Subject:</strong> ${subject}</p>
              <div style="background: #f8fafc; padding: 20px; border-radius: 8px; border-left: 3px solid #059669;">
                <p style="color: #374151; margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
            
            <div style="background: linear-gradient(135deg, #ecfdf5, #f0fdf4); padding: 25px; border-radius: 12px; margin: 25px 0; border: 1px solid #d1fae5;">
              <h3 style="color: #065f46; margin: 0 0 15px 0; font-size: 18px;">🚀 What's Next?</h3>
              <ul style="color: #374151; line-height: 1.7; margin: 0; padding-left: 20px;">
                <li>Our team will review your inquiry carefully</li>
                <li>We'll prepare a customized response for your needs</li>
                <li>You'll receive a detailed reply within 24 hours</li>
                <li>We may schedule a consultation call if needed</li>
              </ul>
            </div>
            
            <p style="color: #374151; line-height: 1.7; font-size: 16px; margin-bottom: 30px;">
              In the meantime, feel free to explore our <strong>services</strong> and <strong>portfolio</strong> on our website, or check out our latest <strong>blog posts</strong> for industry insights.
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://yunaydigital.com" style="background: linear-gradient(135deg, #059669, #0891b2); color: white; padding: 15px 35px; text-decoration: none; border-radius: 30px; font-weight: bold; font-size: 16px; display: inline-block; box-shadow: 0 4px 12px rgba(5, 150, 105, 0.3);">
                🌐 Visit Our Website
              </a>
            </div>
            
            <div style="text-align: center; margin: 20px 0;">
              <a href="https://yunaydigital.com/blog" style="color: #059669; text-decoration: none; font-weight: 500; margin: 0 15px;">📚 Read Our Blog</a>
              <a href="https://yunaydigital.com/services" style="color: #059669; text-decoration: none; font-weight: 500; margin: 0 15px;">⚡ Our Services</a>
              <a href="https://yunaydigital.com/works" style="color: #059669; text-decoration: none; font-weight: 500; margin: 0 15px;">💼 Portfolio</a>
            </div>
            
            <p style="color: #374151; line-height: 1.7; font-size: 16px; margin-top: 30px;">
              Best regards,<br>
              <strong style="color: #1f2937;">The Yunay Digital Team</strong>
            </p>
          </div>
          
          <!-- Footer -->
          <div style="background: #1f2937; padding: 30px 20px; text-align: center;">
            <!-- Footer Logo -->
            <div style="margin-bottom: 20px;">
              <div style="display: inline-block; background: rgba(255,255,255,0.1); padding: 12px 20px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.2);">
                <div style="display: flex; align-items: center; gap: 12px; justify-content: center;">
                  <!-- Footer Logo Icon -->
                  <div style="position: relative; width: 35px; height: 35px;">
                    <div style="position: absolute; top: 3px; left: 3px; width: 8px; height: 8px; background: #10b981; border-radius: 50%;"></div>
                    <div style="position: absolute; top: 10px; right: 5px; width: 7px; height: 7px; background: #14b8a6; border-radius: 50%;"></div>
                    <div style="position: absolute; bottom: 5px; left: 10px; width: 10px; height: 10px; background: #06b6d4; border-radius: 50%;"></div>
                    <div style="position: absolute; bottom: 10px; right: 3px; width: 6px; height: 6px; background: #059669; border-radius: 50%; opacity: 0.7;"></div>
                    <div style="position: absolute; top: 25px; left: 18px; width: 4px; height: 4px; background: #10b981; border-radius: 50%; opacity: 0.6;"></div>
                  </div>
                  <!-- Footer Logo Text -->
                  <div style="text-align: left;">
                    <div style="font-size: 14px; font-weight: bold; color: white; line-height: 1; margin-bottom: 2px;">YD SERVICES</div>
                    <div style="font-size: 9px; color: #d1d5db; font-weight: 600; letter-spacing: 0.3px;">PRIVATE LIMITED</div>
                  </div>
                </div>
              </div>
              <h3 style="color: white; margin: 15px 0 8px 0; font-size: 20px;">Yunay Digital Services Private Limited</h3>
              <p style="color: #9ca3af; margin: 0; font-size: 14px;">Building the future of technology</p>
            </div>
            
            <div style="border-top: 1px solid #374151; padding-top: 20px; margin-top: 20px;">
              <p style="color: #9ca3af; margin: 0 0 8px 0; font-size: 13px;">
                📧 contact@yunaydigital.com | 📞 +91 79-77704812
              </p>
              <p style="color: #9ca3af; margin: 0 0 15px 0; font-size: 13px;">
                🌐 <a href="https://yunaydigital.com" style="color: #10b981; text-decoration: none;">yunaydigital.com</a>
              </p>
              <div style="margin: 15px 0;">
                <a href="#" style="color: #9ca3af; text-decoration: none; margin: 0 8px; font-size: 12px;">LinkedIn</a>
                <a href="#" style="color: #9ca3af; text-decoration: none; margin: 0 8px; font-size: 12px;">Twitter</a>
                <a href="#" style="color: #9ca3af; text-decoration: none; margin: 0 8px; font-size: 12px;">GitHub</a>
              </div>
              <p style="color: #6b7280; margin: 0; font-size: 12px;">
                © ${new Date().getFullYear()} Yunay Digital Services Private Limited. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    const autoReplyOptions = {
      from: process.env.EMAIL_USER || 'noreply@yunaydigital.com',
      to: email,
      subject: '✅ Thank you for contacting Yunay Digital!',
      html: autoReplyHtml
    };

    await transporter.sendMail(autoReplyOptions);

    return NextResponse.json(
      { message: 'Email sent successfully and enquiry saved' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 
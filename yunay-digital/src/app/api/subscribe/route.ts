import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { writeFile, readFile, mkdir } from 'fs/promises';
import path from 'path';

// Interface for subscriber data
interface Subscriber {
  email: string;
  subscribedAt: string;
  status: 'active' | 'unsubscribed';
  id: string;
}

// Create transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validation
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Create data directory and subscribers file
    const dataDir = path.join(process.cwd(), 'data');
    const subscribersDir = path.join(dataDir, 'subscribers');
    const subscribersFile = path.join(subscribersDir, 'subscribers.json');
    
    try {
      await mkdir(subscribersDir, { recursive: true });
    } catch (error) {
      // Directory might already exist
    }

    // Read existing subscribers or create new array
    let subscribers: Subscriber[] = [];
    try {
      const existingData = await readFile(subscribersFile, 'utf-8');
      subscribers = JSON.parse(existingData);
    } catch (error) {
      // File doesn't exist yet, start with empty array
      subscribers = [];
    }

    // Check if email already exists
    const existingSubscriber = subscribers.find(sub => sub.email.toLowerCase() === email.toLowerCase());
    if (existingSubscriber) {
      if (existingSubscriber.status === 'active') {
        return NextResponse.json(
          { error: 'Email is already subscribed to our newsletter' },
          { status: 400 }
        );
      } else {
        // Reactivate subscription
        existingSubscriber.status = 'active';
        existingSubscriber.subscribedAt = new Date().toISOString();
      }
    } else {
      // Add new subscriber
      const newSubscriber: Subscriber = {
        email: email.toLowerCase(),
        subscribedAt: new Date().toISOString(),
        status: 'active',
        id: `sub_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      };
      subscribers.push(newSubscriber);
    }

    // Save updated subscribers list
    await writeFile(subscribersFile, JSON.stringify(subscribers, null, 2));

    // Also create individual subscriber folder
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const subscriberFolder = path.join(subscribersDir, 'individual', `${email.replace(/[^a-zA-Z0-9@.]/g, '_')}_${timestamp}`);
    
    try {
      await mkdir(subscriberFolder, { recursive: true });
      
      const subscriberData = {
        email,
        subscribedAt: new Date().toISOString(),
        ip: request.headers.get('x-forwarded-for') || 'unknown',
        userAgent: request.headers.get('user-agent') || 'unknown',
        source: 'website_footer',
        status: 'active'
      };
      
      await writeFile(
        path.join(subscriberFolder, `subscriber_${email.replace(/[^a-zA-Z0-9@.]/g, '_')}.json`),
        JSON.stringify(subscriberData, null, 2)
      );
    } catch (fileError) {
      console.error('Error saving individual subscriber data:', fileError);
    }

    // Enhanced HTML email template for admin notification
    const adminEmailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Newsletter Subscription - Yunay Digital</title>
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
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">New Newsletter Subscription</h1>
            <p style="color: #e0f2fe; margin: 8px 0 0 0; font-size: 16px;">Yunay Digital Services Private Limited</p>
            <div style="width: 60px; height: 3px; background: white; margin: 15px auto 0; border-radius: 2px;"></div>
          </div>
          
          <!-- Content -->
          <div style="padding: 40px 30px; background: #f9fafb;">
            <h2 style="color: #1f2937; margin-bottom: 25px; font-size: 22px;">Subscription Details</h2>
            
            <div style="background: white; padding: 25px; border-radius: 12px; margin-bottom: 25px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 0; font-weight: bold; color: #374151; width: 140px; border-bottom: 1px solid #f3f4f6;">Email:</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6;"><a href="mailto:${email}" style="color: #059669; text-decoration: none;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; font-weight: bold; color: #374151;">Subscribed on:</td>
                  <td style="padding: 12px 0; color: #1f2937;">${new Date().toLocaleString()}</td>
                </tr>
              </table>
            </div>
            
            <div style="margin-top: 25px; padding: 20px; background: #ecfdf5; border-radius: 8px; border-left: 4px solid #10b981;">
              <p style="margin: 0; color: #065f46; font-size: 14px;">
                <strong>📧 Newsletter Subscription</strong><br>
                A new user has subscribed to your newsletter.<br>
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

    // Enhanced welcome email for subscriber
    const welcomeEmailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to Yunay Digital Newsletter</title>
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
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">Welcome to Our Newsletter!</h1>
            <p style="color: #e0f2fe; margin: 8px 0 0 0; font-size: 16px;">Yunay Digital Services Private Limited</p>
            <div style="width: 60px; height: 3px; background: white; margin: 15px auto 0; border-radius: 2px;"></div>
          </div>
          
          <!-- Content -->
          <div style="padding: 40px 30px; background: #f9fafb;">
            <h2 style="color: #1f2937; margin-bottom: 20px;">Thank you for subscribing!</h2>
            
            <p style="color: #374151; line-height: 1.7; font-size: 16px; margin-bottom: 25px;">
              Welcome to the <strong>Yunay Digital newsletter</strong>! You're now part of our community and will receive the latest insights on cutting-edge technology and industry trends.
            </p>
            
            <div style="background: white; padding: 25px; border-radius: 12px; margin: 25px 0; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
              <h3 style="color: #1f2937; margin: 0 0 15px 0; font-size: 18px;">🎯 What to Expect</h3>
              <ul style="color: #374151; line-height: 1.7; margin: 0; padding-left: 20px;">
                <li><strong>Weekly Tech Insights:</strong> Latest trends in software development</li>
                <li><strong>Industry Updates:</strong> News from the world of technology</li>
                <li><strong>Expert Tips:</strong> Best practices and development techniques</li>
                <li><strong>Company Updates:</strong> Our latest projects and achievements</li>
                <li><strong>Exclusive Content:</strong> Special offers and early access to resources</li>
              </ul>
            </div>
            
            <div style="background: linear-gradient(135deg, #ecfdf5, #f0fdf4); padding: 25px; border-radius: 12px; margin: 25px 0; border: 1px solid #d1fae5;">
              <h3 style="color: #065f46; margin: 0 0 15px 0; font-size: 18px;">🚀 Get Started</h3>
              <p style="color: #374151; line-height: 1.7; margin: 0;">
                While you wait for your first newsletter, explore our website to learn more about our services, check out our portfolio, or read our latest blog posts for valuable insights.
              </p>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://yunaydigital.com" style="background: linear-gradient(135deg, #059669, #0891b2); color: white; padding: 15px 35px; text-decoration: none; border-radius: 30px; font-weight: bold; font-size: 16px; display: inline-block; box-shadow: 0 4px 12px rgba(5, 150, 105, 0.3);">
                🌐 Explore Our Website
              </a>
            </div>
            
            <div style="text-align: center; margin: 20px 0;">
              <a href="https://yunaydigital.com/blog" style="color: #059669; text-decoration: none; font-weight: 500; margin: 0 15px;">📚 Read Our Blog</a>
              <a href="https://yunaydigital.com/services" style="color: #059669; text-decoration: none; font-weight: 500; margin: 0 15px;">⚡ Our Services</a>
              <a href="https://yunaydigital.com/works" style="color: #059669; text-decoration: none; font-weight: 500; margin: 0 15px;">💼 Portfolio</a>
            </div>
            
            <p style="color: #374151; line-height: 1.7; font-size: 16px; margin-top: 30px;">
              Thank you for joining our community!<br>
              <strong style="color: #1f2937;">The Yunay Digital Team</strong>
            </p>
            
            <div style="margin-top: 30px; padding: 20px; background: #f8fafc; border-radius: 8px; border: 1px solid #e5e7eb;">
              <p style="color: #6b7280; font-size: 14px; margin: 0; text-align: center;">
                You're receiving this email because you subscribed to our newsletter at yunaydigital.com.<br>
                If you no longer wish to receive these emails, you can <a href="#" style="color: #059669; text-decoration: none;">unsubscribe here</a>.
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

    // Send admin notification
    const adminMailOptions = {
      from: process.env.EMAIL_USER || 'noreply@yunaydigital.com',
      to: 'contact@yunaydigital.com',
      subject: '🔔 New Newsletter Subscription - Yunay Digital',
      html: adminEmailHtml
    };

    // Send welcome email to subscriber
    const welcomeMailOptions = {
      from: process.env.EMAIL_USER || 'noreply@yunaydigital.com',
      to: email,
      subject: '🎉 Welcome to Yunay Digital Newsletter!',
      html: welcomeEmailHtml
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(welcomeMailOptions)
    ]);

    return NextResponse.json(
      { message: 'Successfully subscribed to newsletter!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing subscription:', error);
    return NextResponse.json(
      { error: 'Failed to process subscription' },
      { status: 500 }
    );
  }
}

// GET endpoint to retrieve subscriber statistics
export async function GET() {
  try {
    const subscribersFile = path.join(process.cwd(), 'data', 'subscribers', 'subscribers.json');
    
    let subscribers: Subscriber[] = [];
    try {
      const data = await readFile(subscribersFile, 'utf-8');
      subscribers = JSON.parse(data);
    } catch (error) {
      // File doesn't exist yet
    }

    const activeSubscribers = subscribers.filter(s => s.status === 'active').length;
    const totalSubscribers = subscribers.length;
    
    return NextResponse.json({
      activeSubscribers,
      totalSubscribers,
      unsubscribed: totalSubscribers - activeSubscribers
    });

  } catch (error) {
    console.error('Error fetching subscriber stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch subscriber statistics' },
      { status: 500 }
    );
  }
} 
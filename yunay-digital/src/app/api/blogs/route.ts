import { NextRequest, NextResponse } from 'next/server';
import { readFile, writeFile, mkdir } from 'fs/promises';
import path from 'path';
import nodemailer from 'nodemailer';

// Dev.to API interfaces
interface DevToArticle {
  type_of: string;
  id: number;
  title: string;
  description: string;
  readable_publish_date: string;
  slug: string;
  path: string;
  url: string;
  comments_count: number;
  public_reactions_count: number;
  positive_reactions_count: number;
  cover_image: string | null;
  social_image: string;
  published_timestamp: string;
  reading_time_minutes: number;
  tag_list: string[];
  tags: string;
  user: {
    name: string;
    username: string;
    twitter_username: string | null;
    github_username: string | null;
    profile_image: string;
    profile_image_90: string;
  };
}

interface Subscriber {
  email: string;
  subscribedAt: string;
  status: 'active' | 'unsubscribed';
  id: string;
}

// GET endpoint to fetch blogs from dev.to
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const tag = searchParams.get('tag');
    const per_page = searchParams.get('per_page') || '20';
    
    // Fetch articles from dev.to API
    let apiUrl = 'https://dev.to/api/articles/latest';
    if (tag && tag !== '') {
      apiUrl = `https://dev.to/api/articles?tag=${tag}&per_page=${per_page}&top=7`;
    } else {
      apiUrl += `?per_page=${per_page}`;
    }
    
    const response = await fetch(apiUrl, {
      headers: {
        'Accept': 'application/vnd.forem.api-v1+json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch articles from dev.to');
    }

    const articles: DevToArticle[] = await response.json();

    return NextResponse.json({
      success: true,
      articles: articles,
      total: articles.length
    });

  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog articles' },
      { status: 500 }
    );
  }
}

// POST endpoint to send latest blogs to subscribers
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { articleIds, subject, customMessage, sendToSubscribers = true } = body;

    // Read subscribers from JSON file
    const subscribersFile = path.join(process.cwd(), 'data', 'subscribers', 'subscribers.json');
    let subscribers: Subscriber[] = [];
    
    try {
      const data = await readFile(subscribersFile, 'utf-8');
      subscribers = JSON.parse(data);
    } catch (error) {
      return NextResponse.json(
        { error: 'No subscribers found' },
        { status: 404 }
      );
    }

    const activeSubscribers = subscribers.filter(s => s.status === 'active');
    
    if (activeSubscribers.length === 0) {
      return NextResponse.json(
        { error: 'No active subscribers found' },
        { status: 404 }
      );
    }

    // Fetch specific articles if articleIds provided, otherwise get latest
    let articles: DevToArticle[] = [];
    
    if (articleIds && articleIds.length > 0) {
      // Fetch specific articles by IDs
      const articlePromises = articleIds.map(async (id: number) => {
        const response = await fetch(`https://dev.to/api/articles/${id}`, {
          headers: {
            'Accept': 'application/vnd.forem.api-v1+json',
          },
        });
        if (response.ok) {
          return response.json();
        }
        return null;
      });
      
      const articleResults = await Promise.all(articlePromises);
      articles = articleResults.filter(article => article !== null);
    } else {
      // Fetch latest articles
      const response = await fetch('https://dev.to/api/articles/latest?per_page=5', {
        headers: {
          'Accept': 'application/vnd.forem.api-v1+json',
        },
      });
      
      if (response.ok) {
        articles = await response.json();
      }
    }

    if (articles.length === 0) {
      return NextResponse.json(
        { error: 'No articles found to send' },
        { status: 404 }
      );
    }

    // Create email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'noreply@yunaydigital.com',
        pass: process.env.EMAIL_PASS || 'your-app-password'
      }
    });

    // Generate newsletter HTML
    const generateNewsletterHTML = (articles: DevToArticle[], subscriberEmail: string) => `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${subject || 'Latest Tech Insights'} - Yunay Digital Newsletter</title>
        <style>
          @media only screen and (max-width: 600px) {
            .container { width: 100% !important; }
            .article-card { padding: 20px !important; margin-bottom: 20px !important; }
            .flex-container { flex-direction: column !important; }
            .button { display: block !important; margin: 10px 0 !important; }
          }
        </style>
      </head>
      <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8fafc; line-height: 1.6;">
        <div class="container" style="max-width: 600px; margin: 0 auto; background-color: white; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
          
          <!-- Header with Logo -->
          <div style="background: linear-gradient(135deg, #059669 0%, #0891b2 50%, #3b82f6 100%); padding: 40px 30px; text-align: center; position: relative; overflow: hidden;">
            <div style="position: absolute; top: -50px; left: -50px; width: 100px; height: 100px; background: rgba(255,255,255,0.1); border-radius: 50%; z-index: 1;"></div>
            <div style="position: absolute; bottom: -30px; right: -30px; width: 80px; height: 80px; background: rgba(255,255,255,0.1); border-radius: 50%; z-index: 1;"></div>
            
            <!-- Enhanced Logo -->
            <div style="position: relative; z-index: 2;">
              <div style="display: inline-block; background: white; padding: 15px 25px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.2); margin-bottom: 20px;">
                <div style="display: flex; align-items: center; gap: 15px;">
                  <!-- Logo Icon -->
                  <div style="position: relative; width: 40px; height: 40px;">
                    <div style="position: absolute; top: 3px; left: 3px; width: 10px; height: 10px; background: #10b981; border-radius: 50%; box-shadow: 0 2px 4px rgba(16,185,129,0.3);"></div>
                    <div style="position: absolute; top: 12px; right: 6px; width: 8px; height: 8px; background: #14b8a6; border-radius: 50%; box-shadow: 0 2px 4px rgba(20,184,166,0.3);"></div>
                    <div style="position: absolute; bottom: 6px; left: 12px; width: 12px; height: 12px; background: #06b6d4; border-radius: 50%; box-shadow: 0 2px 4px rgba(6,182,212,0.3);"></div>
                    <div style="position: absolute; bottom: 12px; right: 3px; width: 6px; height: 6px; background: #059669; border-radius: 50%; opacity: 0.7;"></div>
                    <div style="position: absolute; top: 28px; left: 20px; width: 5px; height: 5px; background: #10b981; border-radius: 50%; opacity: 0.6;"></div>
                  </div>
                  <!-- Logo Text -->
                  <div style="text-align: left;">
                    <div style="font-size: 16px; font-weight: bold; color: #059669; line-height: 1; margin-bottom: 2px; font-family: Arial, sans-serif;">YD SERVICES</div>
                    <div style="font-size: 10px; color: #374151; font-weight: 600; letter-spacing: 0.5px; font-family: Arial, sans-serif;">PRIVATE LIMITED</div>
                  </div>
                </div>
              </div>
              <h1 style="color: white; margin: 0; font-size: 32px; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">
                📚 ${subject || 'Latest Tech Insights'}
              </h1>
              <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 18px; font-weight: 300;">
                Yunay Digital Newsletter
              </p>
              <div style="width: 80px; height: 4px; background: rgba(255,255,255,0.8); margin: 20px auto 0; border-radius: 2px;"></div>
            </div>
          </div>
          
          <!-- Content -->
          <div style="padding: 40px 30px; background: white;">
            ${customMessage ? `
            <div style="background: linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%); padding: 30px; border-radius: 16px; margin-bottom: 40px; border: 2px solid #d1fae5; position: relative; overflow: hidden;">
              <div style="position: absolute; top: -20px; right: -20px; width: 40px; height: 40px; background: rgba(5, 150, 105, 0.1); border-radius: 50%;"></div>
              <div style="position: relative; z-index: 2;">
                <h3 style="color: #059669; margin: 0 0 15px 0; font-size: 20px; font-weight: 600;">💡 From Our Team</h3>
                <p style="color: #374151; line-height: 1.8; margin: 0; font-size: 16px;">${customMessage}</p>
              </div>
            </div>
            ` : ''}
            
            <h2 style="color: #1f2937; margin-bottom: 30px; font-size: 28px; font-weight: 600; text-align: center;">
              🔥 Trending Tech Articles
            </h2>
            
            ${articles.map((article, index) => `
              <div class="article-card" style="background: linear-gradient(135deg, #ffffff 0%, #f9fafb 100%); padding: 30px; border-radius: 20px; margin-bottom: 30px; box-shadow: 0 8px 25px rgba(0,0,0,0.08); border: 1px solid #e5e7eb; position: relative; overflow: hidden; transition: transform 0.3s ease;">
                <div style="position: absolute; top: -30px; right: -30px; width: 60px; height: 60px; background: linear-gradient(135deg, #059669, #0891b2); opacity: 0.1; border-radius: 50%;"></div>
                
                ${article.cover_image || article.social_image ? `
                <div style="margin-bottom: 25px; position: relative; z-index: 2;">
                  <img src="${article.cover_image || article.social_image}" alt="${article.title}" style="width: 100%; height: 220px; object-fit: cover; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
                </div>
                ` : ''}
                
                <div style="position: relative; z-index: 2;">
                  <h3 style="color: #1f2937; margin: 0 0 15px 0; font-size: 22px; line-height: 1.4; font-weight: 600;">
                    <a href="${article.url}" style="color: #1f2937; text-decoration: none; hover: color: #059669;">${article.title}</a>
                  </h3>
                  
                  <p style="color: #6b7280; line-height: 1.7; margin-bottom: 20px; font-size: 16px;">${article.description}</p>
                  
                  <div class="flex-container" style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; flex-wrap: wrap;">
                    <div style="display: flex; align-items: center; margin-bottom: 10px;">
                      <img src="${article.user.profile_image_90 || article.user.profile_image}" alt="${article.user.name}" style="width: 40px; height: 40px; border-radius: 50%; margin-right: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                      <div>
                        <div style="color: #1f2937; font-weight: 600; font-size: 15px;">${article.user.name}</div>
                        <div style="color: #6b7280; font-size: 13px;">@${article.user.username}</div>
                      </div>
                    </div>
                    
                    <div style="display: flex; align-items: center; gap: 15px; font-size: 13px; color: #6b7280; font-weight: 500;">
                      <span style="display: flex; align-items: center;">⏱️ ${article.reading_time_minutes} min</span>
                      <span style="display: flex; align-items: center;">❤️ ${article.positive_reactions_count}</span>
                      <span style="display: flex; align-items: center;">💬 ${article.comments_count}</span>
                    </div>
                  </div>
                  
                  <div style="margin-bottom: 25px;">
                    ${article.tag_list.slice(0, 4).map(tag => 
                      `<span style="display: inline-block; background: linear-gradient(135deg, #f3f4f6, #e5e7eb); color: #374151; padding: 6px 14px; border-radius: 25px; font-size: 12px; font-weight: 500; margin-right: 8px; margin-bottom: 8px; border: 1px solid #d1d5db;">#${tag}</span>`
                    ).join('')}
                  </div>
                  
                  <div style="text-align: center;">
                    <a href="${article.url}" class="button" style="background: linear-gradient(135deg, #059669 0%, #0891b2 100%); color: white; padding: 14px 30px; text-decoration: none; border-radius: 30px; font-weight: 600; font-size: 15px; display: inline-block; box-shadow: 0 4px 15px rgba(5, 150, 105, 0.3); transition: all 0.3s ease;">
                      📖 Read Full Article
                    </a>
                  </div>
                </div>
              </div>
            `).join('')}
            
            <!-- Call to Action -->
            <div style="background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%); padding: 30px; border-radius: 20px; border: 2px solid #f59e0b; margin: 40px 0; text-align: center; position: relative; overflow: hidden;">
              <div style="position: absolute; top: -20px; left: -20px; width: 40px; height: 40px; background: rgba(245, 158, 11, 0.2); border-radius: 50%;"></div>
              <div style="position: relative; z-index: 2;">
                <h3 style="color: #92400e; margin: 0 0 15px 0; font-size: 22px; font-weight: 600;">💡 Stay Connected</h3>
                <p style="margin: 0 0 20px 0; color: #92400e; font-size: 16px; line-height: 1.6;">
                  Join thousands of developers and tech enthusiasts. Get weekly insights delivered to your inbox!
                </p>
                <a href="https://yunaydigital.com/blog" style="background: #f59e0b; color: white; padding: 12px 25px; text-decoration: none; border-radius: 25px; font-weight: 600; font-size: 14px; display: inline-block; box-shadow: 0 3px 10px rgba(245, 158, 11, 0.3);">
                  🚀 Explore More Articles
                </a>
              </div>
            </div>
            
            <!-- Action Buttons -->
            <div style="text-align: center; margin: 40px 0;">
              <a href="https://yunaydigital.com/blog" class="button" style="background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); color: white; padding: 16px 35px; text-decoration: none; border-radius: 30px; font-weight: 700; font-size: 16px; display: inline-block; margin-right: 15px; margin-bottom: 10px; box-shadow: 0 6px 20px rgba(59, 130, 246, 0.3);">
                📚 Visit Our Blog
              </a>
              <a href="https://yunaydigital.com/services" class="button" style="background: transparent; color: #059669; padding: 16px 35px; text-decoration: none; border-radius: 30px; font-weight: 700; font-size: 16px; display: inline-block; border: 3px solid #059669; margin-bottom: 10px;">
                🚀 Our Services
              </a>
            </div>
          </div>
          
          <!-- Footer -->
          <div style="background: linear-gradient(135deg, #1f2937 0%, #374151 100%); padding: 30px; text-align: center; color: white;">
            <!-- Enhanced Footer Logo -->
            <div style="margin-bottom: 20px;">
              <div style="display: inline-block; background: rgba(255,255,255,0.1); padding: 12px 20px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.2);">
                <div style="display: flex; align-items: center; gap: 12px; justify-content: center;">
                  <!-- Footer Logo Icon -->
                  <div style="position: relative; width: 30px; height: 30px;">
                    <div style="position: absolute; top: 2px; left: 2px; width: 7px; height: 7px; background: #10b981; border-radius: 50%;"></div>
                    <div style="position: absolute; top: 8px; right: 4px; width: 6px; height: 6px; background: #14b8a6; border-radius: 50%;"></div>
                    <div style="position: absolute; bottom: 4px; left: 8px; width: 9px; height: 9px; background: #06b6d4; border-radius: 50%;"></div>
                    <div style="position: absolute; bottom: 8px; right: 2px; width: 5px; height: 5px; background: #059669; border-radius: 50%; opacity: 0.7;"></div>
                    <div style="position: absolute; top: 20px; left: 15px; width: 4px; height: 4px; background: #10b981; border-radius: 50%; opacity: 0.6;"></div>
                  </div>
                  <!-- Footer Logo Text -->
                  <div style="text-align: left;">
                    <div style="font-size: 13px; font-weight: bold; color: white; line-height: 1; margin-bottom: 1px;">YD SERVICES</div>
                    <div style="font-size: 8px; color: #d1d5db; font-weight: 600; letter-spacing: 0.3px;">PRIVATE LIMITED</div>
                  </div>
                </div>
              </div>
            </div>
            
            <h3 style="margin: 0 0 10px 0; font-size: 18px; font-weight: 600;">Yunay Digital Services Private Limited</h3>
            <p style="margin: 0 0 15px 0; color: #d1d5db; font-size: 14px;">Innovative Digital Solutions</p>
            
            <div style="margin: 20px 0; padding: 15px 0; border-top: 1px solid #4b5563; border-bottom: 1px solid #4b5563;">
              <p style="margin: 0; color: #d1d5db; font-size: 13px;">
                📧 <a href="mailto:contact@yunaydigital.com" style="color: #10b981; text-decoration: none;">contact@yunaydigital.com</a> | 
                🌐 <a href="https://yunaydigital.com" style="color: #10b981; text-decoration: none;">yunaydigital.com</a>
              </p>
            </div>
            
            <p style="margin: 15px 0 0 0; color: #9ca3af; font-size: 12px;">
              You're receiving this because you subscribed to our newsletter.<br>
              <a href="mailto:${subscriberEmail}?subject=Unsubscribe&body=Please unsubscribe me" style="color: #f87171; text-decoration: none;">Unsubscribe</a> | 
              <a href="https://yunaydigital.com/privacy" style="color: #60a5fa; text-decoration: none;">Privacy Policy</a>
            </p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send emails to all active subscribers
    const emailPromises = activeSubscribers.map(async (subscriber) => {
      const mailOptions = {
        from: {
          name: 'Yunay Digital',
          address: process.env.EMAIL_USER || 'noreply@yunaydigital.com'
        },
        to: subscriber.email,
        subject: subject || `🚀 Latest Tech Insights - ${new Date().toLocaleDateString()}`,
        html: generateNewsletterHTML(articles, subscriber.email)
      };

      return transporter.sendMail(mailOptions);
    });

    // Wait for all emails to be sent
    await Promise.all(emailPromises);

    // Log newsletter send event
    const logData = {
      timestamp: new Date().toISOString(),
      articleCount: articles.length,
      subscriberCount: activeSubscribers.length,
      subject: subject || 'Latest Tech Insights',
      articleIds: articles.map(a => a.id),
      success: true
    };

    // Save newsletter log
    const logDir = path.join(process.cwd(), 'data', 'newsletter-logs');
    try {
      await mkdir(logDir, { recursive: true });
      const logFile = path.join(logDir, `newsletter-${Date.now()}.json`);
      await writeFile(logFile, JSON.stringify(logData, null, 2));
    } catch (error) {
      console.error('Error saving newsletter log:', error);
    }

    return NextResponse.json({
      success: true,
      message: `Newsletter sent to ${activeSubscribers.length} subscribers`,
      articleCount: articles.length,
      subscriberCount: activeSubscribers.length
    });

  } catch (error) {
    console.error('Error sending newsletter:', error);
    return NextResponse.json(
      { error: 'Failed to send newsletter' },
      { status: 500 }
    );
  }
} 
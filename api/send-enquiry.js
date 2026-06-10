/* global process */
export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, phone, email, service, message } = req.body;

    // Validate required fields
    if (!name || !phone || !email) {
      return res.status(400).json({ error: 'Name, phone, and email are required.' });
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return res.status(500).json({ error: 'Email service not configured.' });
    }

    const currentDate = new Date().toLocaleDateString('en-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Asia/Kolkata'
    });

    // Professional HTML email template matching VV Safety brand
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Enquiry - VV Safety Fire and Safety</title>
</head>
<body style="margin:0; padding:0; background-color:#0f0f14; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color:#0f0f14;">
    <tr>
      <td style="padding: 40px 20px;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="margin:0 auto; max-width:600px;">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #dc2626 0%, #ef4444 50%, #f97316 100%); border-radius: 16px 16px 0 0; padding: 32px 40px; text-align: center;">
              <img src="https://vvfiresafety.com/logo.png" alt="VV Safety Logo" width="60" height="60" style="display:block; margin: 0 auto 12px auto; border-radius: 12px;" />
              <h1 style="margin:0; color:#ffffff; font-size:22px; font-weight:700; letter-spacing:0.5px;">
                🔔 New Customer Enquiry
              </h1>
              <p style="margin:8px 0 0; color:rgba(255,255,255,0.85); font-size:13px; font-weight:400;">
                Received on ${currentDate}
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background-color:#1a1a24; padding: 0;">
              
              <!-- Greeting -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td style="padding: 32px 40px 20px;">
                    <p style="margin:0; color:#e2e2e8; font-size:15px; line-height:1.6;">
                      A new enquiry has been submitted through the <strong style="color:#ef4444;">VV Fire Safety</strong> website. Below are the details:
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Customer Details Card -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td style="padding: 0 40px;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color:#12121a; border: 1px solid rgba(239,68,68,0.2); border-radius:12px; overflow:hidden;">
                      
                      <!-- Section Title -->
                      <tr>
                        <td colspan="2" style="background: linear-gradient(90deg, rgba(239,68,68,0.15), transparent); padding: 14px 24px; border-bottom: 1px solid rgba(239,68,68,0.15);">
                          <p style="margin:0; color:#ef4444; font-size:13px; font-weight:600; text-transform:uppercase; letter-spacing:1.5px;">
                            👤 Customer Information
                          </p>
                        </td>
                      </tr>

                      <!-- Name -->
                      <tr>
                        <td style="padding: 16px 24px 8px; width:130px; vertical-align:top;">
                          <p style="margin:0; color:#9ca3af; font-size:12px; font-weight:600; text-transform:uppercase; letter-spacing:1px;">Name</p>
                        </td>
                        <td style="padding: 16px 24px 8px; vertical-align:top;">
                          <p style="margin:0; color:#ffffff; font-size:15px; font-weight:600;">${escapeHtml(name)}</p>
                        </td>
                      </tr>

                      <!-- Phone -->
                      <tr>
                        <td style="padding: 8px 24px; width:130px; vertical-align:top;">
                          <p style="margin:0; color:#9ca3af; font-size:12px; font-weight:600; text-transform:uppercase; letter-spacing:1px;">Phone</p>
                        </td>
                        <td style="padding: 8px 24px; vertical-align:top;">
                          <a href="tel:${escapeHtml(phone)}" style="color:#60a5fa; font-size:15px; font-weight:500; text-decoration:none;">${escapeHtml(phone)}</a>
                        </td>
                      </tr>

                      <!-- Email -->
                      <tr>
                        <td style="padding: 8px 24px; width:130px; vertical-align:top;">
                          <p style="margin:0; color:#9ca3af; font-size:12px; font-weight:600; text-transform:uppercase; letter-spacing:1px;">Email</p>
                        </td>
                        <td style="padding: 8px 24px; vertical-align:top;">
                          <a href="mailto:${escapeHtml(email)}" style="color:#60a5fa; font-size:15px; font-weight:500; text-decoration:none;">${escapeHtml(email)}</a>
                        </td>
                      </tr>

                      <!-- Divider -->
                      <tr>
                        <td colspan="2" style="padding: 8px 24px;">
                          <hr style="border:none; border-top:1px solid rgba(255,255,255,0.06); margin:0;" />
                        </td>
                      </tr>

                      <!-- Service Section Title -->
                      <tr>
                        <td colspan="2" style="background: linear-gradient(90deg, rgba(249,115,22,0.15), transparent); padding: 14px 24px; border-top: 1px solid rgba(249,115,22,0.1);">
                          <p style="margin:0; color:#f97316; font-size:13px; font-weight:600; text-transform:uppercase; letter-spacing:1.5px;">
                            🔧 Enquiry Details
                          </p>
                        </td>
                      </tr>

                      <!-- Service Requested -->
                      <tr>
                        <td style="padding: 16px 24px 8px; width:130px; vertical-align:top;">
                          <p style="margin:0; color:#9ca3af; font-size:12px; font-weight:600; text-transform:uppercase; letter-spacing:1px;">Service</p>
                        </td>
                        <td style="padding: 16px 24px 8px; vertical-align:top;">
                          <span style="display:inline-block; background: linear-gradient(135deg, rgba(239,68,68,0.2), rgba(249,115,22,0.2)); color:#fbbf24; font-size:13px; font-weight:600; padding:6px 16px; border-radius:20px; border:1px solid rgba(251,191,36,0.3);">
                            ${escapeHtml(service)}
                          </span>
                        </td>
                      </tr>

                      <!-- Message -->
                      <tr>
                        <td style="padding: 8px 24px 20px; width:130px; vertical-align:top;">
                          <p style="margin:0; color:#9ca3af; font-size:12px; font-weight:600; text-transform:uppercase; letter-spacing:1px;">Message</p>
                        </td>
                        <td style="padding: 8px 24px 20px; vertical-align:top;">
                          <p style="margin:0; color:#d1d5db; font-size:14px; line-height:1.7; background-color:rgba(255,255,255,0.03); padding:12px 16px; border-radius:8px; border-left: 3px solid #ef4444;">
                            ${message ? escapeHtml(message) : '<em style="color:#6b7280;">No additional message provided</em>'}
                          </p>
                        </td>
                      </tr>

                    </table>
                  </td>
                </tr>
              </table>

              <!-- Quick Action Buttons -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td style="padding: 28px 40px 12px;">
                    <p style="margin:0 0 16px; color:#9ca3af; font-size:12px; font-weight:600; text-transform:uppercase; letter-spacing:1.5px;">⚡ Quick Actions</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 0 40px 32px;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <!-- Call Button -->
                        <td style="padding-right:12px;">
                          <a href="tel:${escapeHtml(phone)}" style="display:inline-block; background:#16a34a; color:#ffffff; font-size:13px; font-weight:600; padding:12px 24px; border-radius:8px; text-decoration:none;">
                            📞 Call Customer
                          </a>
                        </td>
                        <!-- Email Button -->
                        <td style="padding-right:12px;">
                          <a href="mailto:${escapeHtml(email)}?subject=Re: Your Enquiry - VV Fire Safety&body=Dear ${encodeURIComponent(name)},%0D%0A%0D%0AThank you for reaching out to Varatha Vinayagar Safety %26 Fire.%0D%0A%0D%0A" style="display:inline-block; background:#2563eb; color:#ffffff; font-size:13px; font-weight:600; padding:12px 24px; border-radius:8px; text-decoration:none;">
                            ✉️ Reply via Email
                          </a>
                        </td>
                        <!-- WhatsApp Button -->
                        <td>
                          <a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hello ' + name + ', Thank you for contacting Varatha Vinayagar Safety & Fire. We received your enquiry about ' + service + '. We will get back to you shortly!')}" style="display:inline-block; background:#25d366; color:#ffffff; font-size:13px; font-weight:600; padding:12px 24px; border-radius:8px; text-decoration:none;">
                            💬 WhatsApp
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#12121a; border-radius: 0 0 16px 16px; padding: 24px 40px; border-top: 1px solid rgba(255,255,255,0.06);">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td style="text-align:center;">
                    <p style="margin:0; color:#6b7280; font-size:12px; line-height:1.6;">
                      This is an automated notification from <strong style="color:#9ca3af;">VV Fire Safety</strong> website.<br/>
                      © ${new Date().getFullYear()} Varatha Vinayagar Safety & Fire. All rights reserved.
                    </p>
                    <p style="margin:10px 0 0; color:#4b5563; font-size:11px;">
                      112Q/3, Muthukrishnapuram 2nd Street, Tuticorin - 628002, Tamil Nadu
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

    // Send email via Resend API
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'VV Fire Safety <onboarding@resend.dev>',
        to: ['varathavinayagar1989@gmail.com'],
        subject: `🔔 New Enquiry: ${service} — from ${name}`,
        html: htmlContent,
        reply_to: email,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Resend API error:', data);
      return res.status(500).json({ error: 'Failed to send email. Please try again.' });
    }

    return res.status(200).json({ success: true, message: 'Enquiry sent successfully!' });

  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ error: 'Internal server error. Please try again later.' });
  }
}

// Utility to prevent XSS in email content
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

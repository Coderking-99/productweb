# EmailJS Setup Instructions for Shobhaladdu.in

Follow these steps to enable real email notifications for your website.

## 1. Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## 2. Create Email Service

1. In EmailJS dashboard, click "Email Services"
2. Click "Add New Service"
3. Choose your email provider:
   - **Gmail** (recommended for personal use)
   - **Outlook** (if you prefer Microsoft)
   - **SendGrid** (for professional use)
4. Follow the setup instructions for your chosen service
5. Copy the **Service ID** (you'll need this)

## 3. Create Email Templates

### Template 1: Customer Receipt
1. Click "Email Templates" → "Create New Template"
2. Use this template content:

**Subject:** Order Confirmation #{{order_number}} - Shobhaladdu.in

**Body:**
```
Dear {{customer_name}},

Thank you for your order from Shobhaladdu.in!

Order Details:
- Order Number: {{order_number}}
- Date: {{order_date}} at {{order_time}}

Items Ordered:
{{order_items}}

Total Amount: ₹{{total_amount}}
Payment Method: {{payment_method}}

Delivery Address:
{{customer_address}}
{{customer_city}}

Phone: {{customer_phone}}

Special Instructions: {{special_instructions}}

We will contact you shortly to confirm delivery details.

Thank you for choosing Shobhaladdu.in!

Best regards,
Shobhaladdu.in Team
```

3. Save the template and copy the **Template ID**

### Template 2: Store Notification (Optional)
1. Create another template for your notifications
2. Subject: New Order #{{order_number}} - {{customer_name}}
3. Send order details to your email

## 4. Update Your Website

Replace these values in `js/script.js`:

```javascript
// Replace these with your actual EmailJS credentials
const EMAILJS_CONFIG = {
    serviceID: 'service_xxxxxxx',     // Your Service ID
    templateID: 'template_xxxxxxx',   // Your Customer Template ID
    publicKey: 'xxxxxxxxxxxxxxxx'    // Your Public Key
};

// In the emailjs.init() function
emailjs.init('xxxxxxxxxxxxxxxx'); // Your Public Key
```

## 5. Get Your Credentials

### Public Key:
1. Go to "Account" → "General"
2. Copy your **Public Key**

### Service ID:
1. Go to "Email Services"
2. Copy the ID of your created service

### Template ID:
1. Go to "Email Templates"  
2. Copy the ID of your template

## 6. Test Your Setup

1. Place a test order on your website
2. Check if emails are sent to:
   - Customer's email address
   - Your email (Shubhamdesai080@outlook.com)

## 7. EmailJS Free Tier Limits

- **200 emails per month** (free tier)
- For more emails, upgrade to paid plan
- Perfect for starting your business!

## Troubleshooting

### Emails not sending?
1. Check EmailJS dashboard for error logs
2. Verify all IDs are correctly copied
3. Check spam folders
4. Ensure email service is connected properly

### Gmail Issues?
- Enable "Less secure app access" in Gmail settings
- Or use App Passwords for better security

## Security Note

- EmailJS handles email sending securely
- Customer emails are sent directly from EmailJS
- No email credentials stored in your website code

Once configured, your customers will receive professional order confirmations, and you'll get notified of every new order!
# Email Setup Instructions

## Setting up Resend for Contact Forms

### 1. Create a Resend Account
1. Go to [resend.com](https://resend.com)
2. Sign up for a free account
3. Verify your email address

### 2. Get Your API Key
1. Go to the [API Keys page](https://resend.com/api-keys)
2. Click "Create API Key"
3. Give it a name like "VIN Companies Website"
4. Copy the generated API key

### 3. Add API Key to Environment Variables
1. Open the `.env.local` file in your project root
2. Replace `your_resend_api_key_here` with your actual API key:
   ```
   RESEND_API_KEY=re_your_actual_api_key_here
   ```

### 4. Restart Your Development Server
```bash
npm run dev
```

## How It Works

### Contact Form Submissions
- Forms on `/engineering/contact` and `/contracting/contact` now send real emails
- Emails are sent to: `nikunjrt@icloud.com` (your verified Resend email)
- Users get a confirmation message after successful submission
- Forms are reset after successful submission

**Note**: Resend requires emails to be sent to your verified email address unless you verify a custom domain.

### Email Content Includes:
- **Engineering Forms**: Name, Email, Phone, Project Type, Message
- **Contracting Forms**: Name, Email, Phone, Project Type, Budget, Timeline, Message
- **Reply-To**: Set to the customer's email for easy responses

### Free Tier Limits
- Resend free tier: 3,000 emails/month, 100 emails/day
- Perfect for a business contact form
- From address will be `onboarding@resend.dev` until you verify your own domain

### Optional: Verify Your Own Domain
To send emails from your own domain (e.g., `contact@vingcinc.com`):
1. Add your domain in Resend dashboard
2. Add the required DNS records
3. Update the API route to use your verified domain

## Testing
1. Fill out either contact form
2. Check your email at nikunj.rthakur@gmail.com
3. Verify the form data appears correctly in the email

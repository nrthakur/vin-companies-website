# Deployment Instructions

## For Netlify Deployment

### 1. Environment Variables Setup
When deploying to Netlify, you need to set the environment variable in the Netlify dashboard:

1. Go to your Netlify site dashboard
2. Navigate to **Site settings** > **Environment variables**
3. Add a new environment variable:
   - **Key**: `RESEND_API_KEY`
   - **Value**: `re_GMAHPB1p_NvBHZyWVtMpbfqeyduVf2yrq`

### 2. Build Settings
- **Build command**: `npm run build`
- **Publish directory**: `.next`
- **Node.js version**: 18.x

### 3. Required Files
- ✅ `netlify.toml` - Already created with proper configuration
- ✅ `app/api/contact/route.ts` - Fixed with proper error handling

### 4. Testing After Deployment
1. Visit your deployed site
2. Test the contact forms:
   - `/engineering/contact`
   - `/contracting/contact`
3. Submit a test form
4. Check for email at `nikunjrt@icloud.com`

## For Vercel Deployment

### Environment Variables
Add the same environment variable in Vercel dashboard:
- **Key**: `RESEND_API_KEY`
- **Value**: `re_GMAHPB1p_NvBHZyWVtMpbfqeyduVf2yrq`

## Troubleshooting

### If you see "Missing API key" error:
1. Verify the environment variable is set in your deployment platform
2. Ensure the variable name is exactly `RESEND_API_KEY`
3. Redeploy after adding the environment variable

### If emails don't send:
1. Check the deployment logs for errors
2. Verify the API key is valid in your Resend dashboard
3. Ensure you're sending to your verified email (`nikunjrt@icloud.com`)

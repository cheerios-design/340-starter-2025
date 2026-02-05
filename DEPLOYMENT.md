# Deployment Instructions for Render.com

## Prerequisites
- Your code pushed to GitHub repository
- A Render.com account (can sign up with GitHub)

## Steps to Deploy

### 1. Push Your Code to GitHub
Make sure all your latest changes are committed and pushed:
```bash
git add .
git commit -m "Complete Week 4 assignment with authentication"
git push origin main
```

### 2. Login to Render.com
1. Go to https://render.com
2. Click "Sign Up" or "Sign In"
3. Sign in with your GitHub account

### 3. Create a New Web Service
1. From the Render dashboard, click "New +"
2. Select "Web Service"
3. Connect your GitHub repository (authorize if needed)
4. Select your `340-starter-2025` repository

### 4. Configure the Web Service
Fill in the following settings:

- **Name**: `cse340-app` (or your preferred name)
- **Region**: Choose closest to you
- **Branch**: `main`
- **Root Directory**: (leave blank)
- **Runtime**: `Node`
- **Build Command**: `npm install`
- **Start Command**: `npm start`
- **Instance Type**: `Free`

### 5. Add Environment Variables
Click "Advanced" or scroll to "Environment Variables" section and add:

1. **NODE_ENV**
   - Value: `production`

2. **SESSION_SECRET**
   - Copy the value from your local `.env` file
   - Value: `85fa6adc63b8679881d9261df8d133cee0199a2409124a7d7afca1f89c8b126b71a4a69e37278d05df1314fe57554973dceca65ac604f83af2b441998565acc5`

3. **ACCESS_TOKEN_SECRET**
   - Copy the value from your local `.env` file
   - Value: `d3f4u1t5ecr3tk3yf0rj5t0k3n5ign1ng`
   - **IMPORTANT**: You should generate a new, more secure token for production:
     ```bash
     node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
     ```

4. **DATABASE_URL**
   - Use the **Internal Database URL** (without `-a` at the end)
   - Format: `postgresql://username:password@host/database`
   - Get this from your Render PostgreSQL database settings
   - Example: `postgresql://cse340_db_render_user:ugBBzSM88IrUGvr1t6kHBqcmeH7xlDyL@dpg-d5rnh89r0fns73e99e20-oregon-postgres.render.com/cse340_db_render`

### 6. Deploy
1. Click "Create Web Service"
2. Render will automatically:
   - Clone your repository
   - Install dependencies
   - Start your application
3. Monitor the deployment logs
4. Once complete, you'll see "Your service is live 🎉"

### 7. Test Your Deployment
1. Click the URL provided by Render (e.g., `https://cse340-app.onrender.com`)
2. Test the following:
   - Home page loads
   - Navigation works
   - "My Account" link → Login page
   - Register a new account
   - Login with the new account
   - Account management page displays
   - Logout works

## Important Notes

### Database Connection
- **Local development**: Use External Database URL (with `-a`)
- **Production (Render)**: Use Internal Database URL (without `-a`)
- This is already configured in your `.env` file

### Automatic Redeployment
- Render automatically redeploys when you push to GitHub
- You can also manually redeploy from the Render dashboard

### Free Tier Limitations
- Services spin down after 15 minutes of inactivity
- First request after idle may take 30-60 seconds
- This is normal for free tier

### Environment Variables Security
- **NEVER** commit `.env` file to GitHub
- Always use Render's Environment Variables for production
- Regenerate secrets for production (don't use development secrets)

## Updating Environment Variables

If you need to update environment variables after deployment:

1. Go to your web service in Render dashboard
2. Click "Environment" in the left sidebar
3. Add or modify variables
4. Click "Save Changes"
5. Render will automatically redeploy

## Troubleshooting

### Service won't start
- Check the deployment logs for errors
- Verify all environment variables are set correctly
- Ensure DATABASE_URL uses the internal URL

### Database connection errors
- Verify DATABASE_URL is correct
- Check that your database is running on Render
- Ensure you're using the internal database URL (without `-a`)

### Session/Cookie issues
- Verify SESSION_SECRET and ACCESS_TOKEN_SECRET are set
- Check that cookie-parser is installed: `npm install cookie-parser`

## Testing Checklist

- [ ] Home page loads correctly
- [ ] Navigation bar displays properly
- [ ] Flash messages work
- [ ] Registration form validates (client-side)
- [ ] Registration form validates (server-side)
- [ ] New accounts are created in database
- [ ] Passwords are hashed in database
- [ ] Login form validates
- [ ] Users can login with correct credentials
- [ ] Users cannot login with incorrect credentials
- [ ] Account management page shows user info
- [ ] Logout clears session
- [ ] Header updates based on login status

## Additional Resources

- [Render Documentation](https://render.com/docs)
- [Node.js Deployment Guide](https://render.com/docs/deploy-node-express-app)
- [Environment Variables](https://render.com/docs/environment-variables)

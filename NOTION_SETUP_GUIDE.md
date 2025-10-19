# Notion Blog Integration Setup Guide

This guide will help you connect your Notion database to your portfolio blog.

## Step 1: Create a Notion Integration

1. Go to https://www.notion.so/my-integrations
2. Click **"+ New integration"**
3. Fill in the details:
   - **Name**: `Portfolio Blog` (or any name you prefer)
   - **Associated workspace**: Select your workspace
   - **Type**: Internal integration
4. Under **"Content Capabilities"**, make sure **"Read content"** is checked
5. Click **"Submit"**
6. You'll see an **"Internal Integration Secret"** - this starts with `secret_`
7. Click **"Show"** and **"Copy"** this secret token

## Step 2: Share Your Database with the Integration

1. Go to your **"Blog Posts"** database in Notion
2. Click the **"..."** menu button in the top right corner of the database
3. Scroll down and click **"Add connections"** (or **"Connections"**)
4. Find and select your **"Portfolio Blog"** integration
5. Click **"Confirm"**
6. Your database is now shared with the integration!

## Step 3: Get Your Database ID

You already have this from the URL you provided:
- Database ID: `1ac77f1f-aee6-8003-a538-c677d2f182a7`

To verify or get it again:
1. Open your "Blog Posts" database
2. Look at the URL in your browser
3. The database ID is the part after the last `/` and before the `?`
4. Example: `https://www.notion.so/[workspace]/[DATABASE_ID]?v=...`

## Step 4: Update Your Environment Variables

Create or update your `.env.local` file in the root of your project:

```env
# EmailJS credentials (keep these as they are)
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=BW12oiGgE44xMbpFa
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_pxm4vry
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_zrzpglu

# Notion Integration
NOTION_INTEGRATION_TOKEN=secret_YOUR_INTEGRATION_SECRET_HERE
NOTION_DATABASE_ID=1ac77f1f-aee6-8003-a538-c677d2f182a7
```

**Replace** `secret_YOUR_INTEGRATION_SECRET_HERE` with the actual secret you copied in Step 1.

## Step 5: Set Up Your Notion Database Structure

Your "Blog Posts" database needs these properties:

| Property Name | Property Type | Description |
|---------------|---------------|-------------|
| **Name** | Title | The title of your blog post (this is the default title property) |
| **Date** | Date | When the post was published |
| **Content Summary** | Text | A short description/excerpt of the post |
| **Featured Image** (optional) | Files & media | Cover image for the post |

### How to Add Properties:

1. Open your "Blog Posts" database
2. Click the **"+"** button next to the last column
3. Select the property type
4. Name it exactly as shown above (case-sensitive!)

## Step 6: Create Your First Blog Post

1. Click **"+ New"** in your database
2. Fill in:
   - **Name**: Your blog post title (e.g., "Bridging the Bias: Ensuring Fairness in Large Language Models")
   - **Date**: Select today's date or your desired publish date
   - **Content Summary**: Write a brief description
   - **Featured Image** (optional): Add a cover image
3. Click into the page and write your blog post content using Notion's editor
4. The post will automatically appear on your portfolio blog!

## Step 7: Test Your Setup

1. Stop your development server if it's running (Ctrl+C)
2. Start it again:
   ```bash
   npm run dev
   ```
3. Open your browser and go to `http://localhost:3000/blog`
4. You should see your blog posts!

## Troubleshooting

### "API token is invalid" Error

This means either:
- The integration token in `.env.local` is incorrect
- The database hasn't been shared with the integration

**Solution**:
1. Double-check you copied the full integration secret (starts with `secret_`)
2. Make sure there are no extra spaces in the `.env.local` file
3. Verify you shared the database with the integration (Step 2)
4. Try regenerating the integration secret and updating `.env.local`

### "No Blog Posts Found"

This means:
- Your database is empty, OR
- The database structure doesn't match the expected properties

**Solution**:
1. Add at least one blog post with all required fields
2. Make sure property names match exactly: "Name", "Date", "Content Summary"

### Changes Not Showing

**Solution**:
- Restart your development server after changing `.env.local`
- Environment variables are only loaded when the server starts

## Deploying to Vercel

When you deploy to Vercel, you need to add the environment variables there too:

1. Go to your Vercel project dashboard
2. Click **"Settings"** > **"Environment Variables"**
3. Add:
   - `NOTION_INTEGRATION_TOKEN` with your integration secret
   - `NOTION_DATABASE_ID` with your database ID
4. Select **"Production"**, **"Preview"**, and **"Development"** environments
5. Click **"Save"**
6. Redeploy your application

## Need Help?

If you're still having issues:
1. Check the browser console for error messages
2. Check your terminal for server logs
3. Verify all steps above are completed
4. Make sure your integration has "Read content" permission

Good luck with your blog! 🎉


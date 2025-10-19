# Notion Blog Setup Checklist

Use this checklist to ensure everything is configured correctly.

## ☐ Step 1: Create Notion Integration

- [ ] Go to https://www.notion.so/my-integrations
- [ ] Click "+ New integration"
- [ ] Name it "Portfolio Blog" (or similar)
- [ ] Select your workspace
- [ ] Under "Content Capabilities", check "Read content"
- [ ] Click "Submit"
- [ ] Copy the "Internal Integration Secret" (starts with `secret_`)
- [ ] Save it somewhere safe (you'll need it in Step 3)

**✓ Checkpoint:** You should have a secret token that looks like: `secret_abc123...`

---

## ☐ Step 2: Share Database with Integration

- [ ] Open your "Blog Posts" database in Notion
- [ ] Click the "..." (three dots) menu in the top right
- [ ] Click "Add connections" (or "Connections")
- [ ] Find and select your "Portfolio Blog" integration
- [ ] Click "Confirm"
- [ ] Verify the integration appears in the connections list

**✓ Checkpoint:** You should see "Portfolio Blog" listed under connections for your database.

---

## ☐ Step 3: Configure Environment Variables

- [ ] Open (or create) `.env.local` in your project root
- [ ] Add your EmailJS credentials (if not already there):
  ```env
  NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_key
  NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
  NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
  ```
- [ ] Add your Notion credentials:
  ```env
  NOTION_INTEGRATION_TOKEN=secret_your_token_here
  NOTION_DATABASE_ID=1ac77f1f-aee6-8003-a538-c677d2f182a7
  ```
- [ ] Replace `secret_your_token_here` with the token from Step 1
- [ ] Save the file
- [ ] Verify there are no extra spaces or quotes around the values

**✓ Checkpoint:** Your `.env.local` file has both `NOTION_INTEGRATION_TOKEN` and `NOTION_DATABASE_ID` set.

---

## ☐ Step 4: Set Up Database Structure

In your "Blog Posts" Notion database, ensure you have these properties:

- [ ] **Name** (Title type) - This is the default title property
- [ ] **Date** (Date type) - For publication date
- [ ] **Content Summary** (Text type) - For post description
- [ ] **Featured Image** (Files type) - Optional cover image

**To add a property:**
1. Click the "+" button next to the last column
2. Select the property type
3. Name it exactly as shown above (case-sensitive!)

**✓ Checkpoint:** All required properties exist and are named correctly.

---

## ☐ Step 5: Create Test Blog Post

- [ ] Click "+ New" in your Notion database
- [ ] Fill in the **Name** field with a title
- [ ] Set the **Date** to today's date
- [ ] Add text to **Content Summary**
- [ ] (Optional) Add a **Featured Image**
- [ ] Click into the page and add some content

**✓ Checkpoint:** You have at least one blog post with all required fields filled.

---

## ☐ Step 6: Test Locally

- [ ] Stop your development server if it's running (Ctrl+C in terminal)
- [ ] Start the server: `npm run dev`
- [ ] Open http://localhost:3000/blog in your browser
- [ ] Verify you can see your blog post(s)
- [ ] Click on a post to view the full content
- [ ] Check the browser console for any errors (F12 → Console tab)
- [ ] Check the terminal for any server errors

**✓ Checkpoint:** Your blog page loads and displays posts from Notion.

---

## ☐ Step 7: Deploy to Production (Vercel)

If you're deploying to Vercel:

- [ ] Go to your Vercel project dashboard
- [ ] Navigate to: Settings → Environment Variables
- [ ] Add `NOTION_INTEGRATION_TOKEN` with your integration secret
- [ ] Add `NOTION_DATABASE_ID` with value: `1ac77f1f-aee6-8003-a538-c677d2f182a7`
- [ ] Select all environments (Production, Preview, Development)
- [ ] Click "Save"
- [ ] Go to Deployments tab
- [ ] Click "Redeploy" on your latest deployment
- [ ] Wait for deployment to complete
- [ ] Visit your live site and test the blog

**✓ Checkpoint:** Your blog works on your live production site.

---

## Troubleshooting

If something doesn't work, check these common issues:

### ❌ "API token is invalid" Error
- [ ] Did you copy the full integration secret (including `secret_` prefix)?
- [ ] Are there extra spaces in your `.env.local` file?
- [ ] Did you share the database with the integration (Step 2)?
- [ ] Did you restart the development server after updating `.env.local`?

### ❌ "No Blog Posts Found"
- [ ] Do you have at least one post in your Notion database?
- [ ] Are all required fields (Name, Date, Content Summary) filled in?
- [ ] Are the property names spelled exactly right (case-sensitive)?
- [ ] Is the post in the same database you shared with the integration?

### ❌ Changes Not Showing
- [ ] Did you restart your development server?
- [ ] Did you clear your browser cache?
- [ ] Check browser console (F12) for errors
- [ ] Check terminal for server errors

### ❌ Deployment Issues
- [ ] Did you add environment variables to Vercel?
- [ ] Did you redeploy after adding the variables?
- [ ] Check the Vercel deployment logs for errors
- [ ] Verify the environment variables are set correctly in Vercel

---

## Quick Reference

**Your Database ID:** `1ac77f1f-aee6-8003-a538-c677d2f182a7`

**Your Database URL:** https://www.notion.so/1ac77f1faee68003a538c677d2f182a7

**Notion Integrations:** https://www.notion.so/my-integrations

**Need More Help?**
- Read: `NOTION_SETUP_GUIDE.md` (detailed guide)
- Read: `INTEGRATION_SUMMARY.md` (technical details)
- Read: `QUICK_START.md` (5-minute setup)

---

## All Done? 🎉

If all checkboxes are ☑️, congratulations! Your Notion blog is fully integrated with your portfolio.

You can now:
- ✅ Write blog posts in Notion
- ✅ They'll automatically appear on your portfolio
- ✅ Use Notion's powerful editor for formatting
- ✅ Add images, code blocks, and more
- ✅ Update posts and see changes immediately

Happy blogging! 📝


# Quick Start: Notion Blog Integration

## ⚡ TL;DR - 5 Minute Setup

### 1. Create Integration (2 minutes)
1. Visit: https://www.notion.so/my-integrations
2. Click "+ New integration"
3. Name it "Portfolio Blog", enable "Read content"
4. Copy the **Internal Integration Secret** (starts with `secret_`)

### 2. Share Database (1 minute)
1. Go to your "Blog Posts" database in Notion
2. Click "..." → "Add connections"
3. Select "Portfolio Blog"

### 3. Update Environment Variables (1 minute)
Edit your `.env.local` file:
```env
NOTION_INTEGRATION_TOKEN=secret_paste_your_token_here
NOTION_DATABASE_ID=1ac77f1f-aee6-8003-a538-c677d2f182a7
```

### 4. Restart Server (1 minute)
```bash
# Stop current server (Ctrl+C)
npm run dev
```

### 5. Test
Visit: http://localhost:3000/blog

---

## 📋 Required Database Properties

Your Notion database needs these columns:

- ✅ **Name** (Title) - Your blog post title
- ✅ **Date** (Date) - Publication date  
- ✅ **Content Summary** (Text) - Brief description
- 🎨 **Featured Image** (Files) - Optional cover image

---

## 🚀 Deploying to Vercel

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add:
   - `NOTION_INTEGRATION_TOKEN` = your secret
   - `NOTION_DATABASE_ID` = 1ac77f1f-aee6-8003-a538-c677d2f182a7
3. Save and redeploy

---

## ❓ Still Having Issues?

Read the full guide: `NOTION_SETUP_GUIDE.md`

Common fixes:
- ✅ Make sure you shared the database with your integration
- ✅ Check that the integration secret is correct (no extra spaces)
- ✅ Restart your dev server after updating `.env.local`
- ✅ Verify property names match exactly (case-sensitive)

---

**Your Database ID**: `1ac77f1f-aee6-8003-a538-c677d2f182a7`
**Your Database URL**: https://www.notion.so/1ac77f1faee68003a538c677d2f182a7


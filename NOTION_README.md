# 📚 Notion Blog Integration

Your portfolio now integrates with Notion to display blog posts! Write in Notion, publish automatically to your portfolio.

## 🚀 Quick Links

- **Just want to get started?** → Read `QUICK_START.md` (5 minutes)
- **Need detailed instructions?** → Read `NOTION_SETUP_GUIDE.md`
- **Want a checklist?** → Follow `SETUP_CHECKLIST.md`
- **Technical details?** → Read `INTEGRATION_SUMMARY.md`

## 📋 What You Need

1. A Notion account with a workspace
2. Your "Blog Posts" database (you already have this!)
3. 5 minutes to set up the integration

## ⚡ Ultra-Quick Setup

```bash
# 1. Create integration at: https://www.notion.so/my-integrations
# 2. Share your database with the integration
# 3. Add to .env.local:
NOTION_INTEGRATION_TOKEN=secret_your_token_here
NOTION_DATABASE_ID=1ac77f1f-aee6-8003-a538-c677d2f182a7

# 4. Restart server
npm run dev

# 5. Visit http://localhost:3000/blog
```

## 📖 Your Resources

| Document | Purpose | Time Required |
|----------|---------|---------------|
| `QUICK_START.md` | Fast setup, minimal explanation | 5 min |
| `SETUP_CHECKLIST.md` | Step-by-step checklist format | 10 min |
| `NOTION_SETUP_GUIDE.md` | Complete guide with screenshots instructions | 15 min |
| `INTEGRATION_SUMMARY.md` | Technical details and what changed | Reference |
| `env.example` | Environment variables template | Reference |

## 🎯 Current Status

**Your Database:**
- **ID:** `1ac77f1f-aee6-8003-a538-c677d2f182a7`
- **URL:** https://www.notion.so/1ac77f1faee68003a538c677d2f182a7
- **Blog Post:** "Bridging the Bias: Ensuring Fairness in Large Language Models" ✅

**What's Working:**
- ✅ Blog page UI is set up
- ✅ API routes are configured
- ✅ TypeScript errors fixed
- ✅ Error handling improved
- ✅ Full post rendering with `react-notion-x`

**What You Need:**
- ⚠️ Valid Notion integration token
- ⚠️ Database shared with integration

## 🔧 Required Database Properties

Your Notion database must have:

- **Name** (Title) - Post title
- **Date** (Date) - Publication date
- **Content Summary** (Text) - Short description
- **Featured Image** (Files) - Optional cover

## 🐛 Common Issues

### "API token is invalid"
→ Create a new integration and update `.env.local`

### "No Blog Posts Found"
→ Add posts with all required fields

### Changes not showing
→ Restart your dev server

## 📞 Need Help?

1. Check the browser console (F12)
2. Check the terminal for errors
3. Read the relevant guide above
4. Verify all steps in `SETUP_CHECKLIST.md`

## 🎉 Once Set Up

After setup, just:
1. Write posts in Notion
2. They appear automatically on your portfolio
3. No deployment needed!

---

**Start Here:** Open `QUICK_START.md` for the 5-minute setup guide.


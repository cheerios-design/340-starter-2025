# Assignment 2 - Quick Reference Summary

## ✅ What You Have Ready

### 📁 Two SQL Files Created:

1. **`assignment2.sql`** (Task 1)
   - Contains 6 CRUD queries only
   - Located in `database/` folder
   - Ready to demonstrate in video

2. **`database-build.sql`** (Task 2)
   - Complete database rebuild script
   - Creates type, tables, relationships, data
   - Includes queries 4 & 6 from Task 1 at the end
   - This is what you'll execute in the video

---

## 🎬 Video Requirements

**What to Record:**
1. Delete database on Render.com
2. Create new database on Render.com (pause video during creation)
3. Connect pgAdmin/SQLTools to new database
4. Execute `database-build.sql` (all at once)
5. Verify everything works:
   - Show 3 tables exist
   - Show classification has 5 rows
   - Show inventory has 15 rows
   - Show GM Hummer description = "a huge interior"
   - Show image paths = "/images/vehicles/..."

**Length:** Under 4 minutes  
**Upload:** YouTube as "Unlisted"  
**Narration:** Use your voice throughout

---

## 📝 Video Script Summary

**Introduction (15s):**
"Hi, I'm Sam Daramroei. This is Assignment 2 for CSE 340. I'll demonstrate deleting my database, recreating it, and rebuilding all structures using my SQL script."

**Delete Database (30s):**
"I'm logging into Render, clicking on my database, scrolling to the bottom, clicking Delete Database, and confirming the deletion."

**Create Database (30s + pause):**
"Now I'm creating a new database called 'cse340-db-new'. I'll pause the video while it's being created... [PAUSE] ...and it's ready."

**Connect & Execute (90s):**
"Opening pgAdmin, creating a new connection with my Render credentials... Connected. Now I'll open the Query Tool and paste my database-build script from VS Code... Executing all queries... Success! All queries ran without errors."

**Verify (60s):**
"Let me verify: The account_type enum was created. All three tables exist: account, classification, and inventory. Classification has 5 records. Inventory has 15 records. Checking the GM Hummer description... it says 'a huge interior'. Checking image paths... they include '/images/vehicles/'. All Task 1 queries executed correctly."

**Conclusion (10s):**
"Database successfully rebuilt. Both SQL files are in my GitHub repository. Thank you for watching."

---

## 📤 Submission Steps

1. **Record Video** → Follow VIDEO-GUIDE-SCRIPT.md
2. **Upload to YouTube** → Set as "Unlisted"
3. **Commit Files to Git:**
   ```powershell
   git add database/assignment2.sql database/database-build.sql
   git commit -m "Complete Assignment 2: SQL queries and database rebuild script"
   git push origin main
   ```
4. **Submit to Canvas:**
   - GitHub URL: `https://github.com/cheerios-design/340-starter-2025`
   - YouTube URL: `Your unlisted video link`

---

## 🔍 Quality Checks

**Before Recording:**
- [ ] Test `database-build.sql` - it must work perfectly
- [ ] Practice the video once without recording
- [ ] Close all unnecessary windows
- [ ] Test microphone

**Before Submitting:**
- [ ] Video is under 4 minutes
- [ ] Audio is clear
- [ ] All steps are shown
- [ ] Video URL works in incognito window
- [ ] Files are visible on GitHub

---

## 📊 Assignment 2 File Structure

```
h:\340-starter-2025\
└── database\
    ├── assignment2.sql          ✅ (Task 1: 6 queries)
    ├── database-build.sql       ✅ (Task 2: Complete rebuild)
    ├── VIDEO-GUIDE-SCRIPT.md    📖 (Detailed video guide)
    ├── SUBMISSION-CHECKLIST.md  📋 (Full checklist)
    └── [this file]              📄 (Quick reference)
```

---

## ⚡ Quick Tips

1. **Most Important:** The video must be under 4 minutes
2. **Don't Forget:** Pause video while database is being created
3. **Show Results:** Must show the modified data (Hummer description, image paths)
4. **Narrate:** Explain what you're doing as you do it
5. **Test First:** Do a complete dry run before recording

---

## 🎯 You're Ready!

✅ **SQL Files:** Complete  
✅ **Video Script:** Prepared  
✅ **Checklist:** Available  
✅ **Understanding:** Clear  

**Total Time Needed:** ~2 hours
- Practice: 30 min
- Record: 30-45 min
- Upload & Submit: 30-45 min

---

## 📞 Quick Help

**Issue:** Script doesn't run  
**Fix:** Check order - type must be first, then tables

**Issue:** Video too long  
**Fix:** Use condensed script in VIDEO-GUIDE-SCRIPT.md

**Issue:** Can't connect to database  
**Fix:** Verify credentials from Render, check firewall

**Issue:** Hummer description not changing  
**Fix:** Make sure Query 4 is at the end of database-build.sql

---

**Good luck! You've prepared well.** 🚀

# Assignment 2 - Complete Submission Checklist

**Student:** Sam Daramroei  
**Assignment:** CSE 340 - Assignment 2  
**Due Date:** Check Canvas

---

## 📋 TASK 1: SQL File Requirements

### File: `assignment2.sql`

- [x] **File exists** in `database/` folder
- [x] **Contains exactly 6 queries:**
  1. [x] Insert Tony Stark into account table
  2. [x] Update Tony Stark's account_type to 'Admin'
  3. [x] Delete Tony Stark from account table
  4. [x] Update GM Hummer description (using REPLACE function)
  5. [x] SELECT with INNER JOIN for Sport classification
  6. [x] Update all inventory image paths (using REPLACE function)
- [x] **All queries tested** and working
- [x] **Queries use single statements** (not multiple queries per task)
- [x] **Comments included** for clarity

**Status:** ✅ COMPLETE

---

## 📋 TASK 2: Database Build Script

### File: `database-build.sql`

- [x] **File exists** in `database/` folder
- [x] **Correct order of SQL statements:**
  1. [x] CREATE TYPE (account_type enum)
  2. [x] CREATE TABLE classification
  3. [x] CREATE TABLE inventory
  4. [x] CREATE TABLE account
  5. [x] ALTER TABLE (foreign key relationship)
  6. [x] INSERT classification data (5 records)
  7. [x] INSERT inventory data (15 records)
  8. [x] Copy of Query 4 from Task 1 (GM Hummer fix)
  9. [x] Copy of Query 6 from Task 1 (image paths fix)
- [x] **Script tested** - runs successfully as one execution
- [x] **No errors** when executed

**Status:** ✅ COMPLETE

---

## 📋 VIDEO REQUIREMENTS

### Before Recording

- [ ] **Practiced the entire process** at least once
- [ ] **Existing database ready** to delete on Render.com
- [ ] **Both SQL files complete** and tested
- [ ] **Recording software ready** (OBS, Zoom, Loom, etc.)
- [ ] **Microphone tested** - audio quality checked
- [ ] **Closed unnecessary applications** - clean screen
- [ ] **Do Not Disturb mode ON** - no notifications
- [ ] **Video guide reviewed** - know what to say

### Video Must Show

- [ ] **Your voice narrating** - Not silent, not TTS
- [ ] **Delete database** on Render.com
- [ ] **Create new database** on Render.com
- [ ] **Connect to database** (pgAdmin or SQLTools)
- [ ] **Execute database-build.sql** - all queries at once
- [ ] **Verify structures created:**
  - [ ] account_type enum exists
  - [ ] 3 tables exist (account, classification, inventory)
  - [ ] Foreign key relationship exists
- [ ] **Verify data inserted:**
  - [ ] Classification table has 5 records
  - [ ] Inventory table has 15 records
- [ ] **Verify Task 1 queries worked:**
  - [ ] GM Hummer description shows "a huge interior"
  - [ ] Image paths include "/vehicles/" (e.g., `/images/vehicles/camaro.jpg`)
- [ ] **Video length** under 4 minutes
- [ ] **Clear and professional** presentation

### After Recording

- [ ] **Video reviewed** - watched entire video
- [ ] **Audio clear** - voice audible throughout
- [ ] **All steps shown** - nothing missing
- [ ] **Under 4 minutes** total length
- [ ] **Dead space trimmed** (optional edit)
- [ ] **Exported as MP4** (or compatible format)

### YouTube Upload

- [ ] **Uploaded to YouTube**
- [ ] **Set as "Unlisted"** (NOT Public, NOT Private)
- [ ] **Title:** "CSE 340 Assignment 2 - Database Rebuild"
- [ ] **Description:** "Assignment 2 demonstration by Sam Daramroei"
- [ ] **YouTube URL copied** for submission
- [ ] **Link tested** in incognito/private window

**Video Status:** ⏳ PENDING

---

## 📋 GITHUB REPOSITORY

### Files to Commit

- [x] `database/assignment2.sql` - Task 1 queries (6 queries)
- [x] `database/database-build.sql` - Complete rebuild script
- [ ] Any other required project files

### Before Pushing to GitHub

- [ ] **All files committed** with clear commit message
- [ ] **Pushed to remote repository**
- [ ] **GitHub URL copied** for submission
- [ ] **Repository is PUBLIC** (or instructor has access)
- [ ] **Files visible** on GitHub website (verified)

**Commit Message Example:**
```
"Complete Assignment 2: Add SQL queries and database rebuild script"
```

**GitHub Status:** ⏳ PENDING

---

## 📋 CANVAS SUBMISSION

### What to Submit

- [ ] **YouTube video URL** (unlisted)
- [ ] **GitHub repository URL**
- [ ] **Submitted as COMMENT** in assignment (if required)

### Example Submission Comment:

```
Assignment 2 Submission - Sam Daramroei

GitHub Repository:
https://github.com/cheerios-design/340-starter-2025

YouTube Video (Unlisted):
https://youtu.be/YOUR_VIDEO_ID_HERE

Files included:
- database/assignment2.sql (Task 1 queries)
- database/database-build.sql (Complete rebuild script)

Video demonstrates:
- Database deletion and recreation on Render.com
- Connection to new database
- Execution of database-build.sql script
- Verification of all structures and data
- Confirmation of Task 1 query results
```

**Canvas Status:** ⏳ PENDING

---

## 📊 Grading Rubric Self-Check

### Objective 4: Database (80 points)

| Criteria | Points | Status |
|----------|--------|--------|
| Task 1 SQL file in correct location | 10 | ✅ |
| Tony Stark Insert works | 10 | ✅ |
| Tony Stark Update works | 10 | ✅ |
| Tony Stark Delete works | 10 | ✅ |
| Description Update works | 10 | ✅ |
| Select with Join works | 10 | ✅ |
| Image Update works | 10 | ✅ |
| Build script present and works | 10 | ✅ |
| **Objective 4 Total** | **80** | **80** |

### Objective 6: Professionalism (20 points)

| Criteria | Points | Status |
|----------|--------|--------|
| Video shows delete/restore process | 10 | ⏳ |
| Video complete, narrated, under 4 min | 10 | ⏳ |
| Files in GitHub database folder | 5 | ✅ |
| Video URL present and correct | 5 | ⏳ |
| **Objective 6 Total** | **20** | **15** |

### **TOTAL POSSIBLE POINTS: 100**

---

## ✅ FINAL PRE-SUBMISSION CHECKLIST

Before submitting to Canvas:

1. [ ] **Both SQL files complete and tested**
2. [ ] **Video recorded and uploaded to YouTube (unlisted)**
3. [ ] **Video link works in incognito window**
4. [ ] **Files pushed to GitHub**
5. [ ] **GitHub repository is accessible**
6. [ ] **Both URLs ready to paste**
7. [ ] **Reviewed grading rubric**
8. [ ] **Double-checked everything**

---

## 🎯 Current Status Summary

### ✅ COMPLETED
- Task 1: assignment2.sql with 6 queries
- Task 2: database-build.sql with complete rebuild
- Documentation files created
- Video guide and script prepared

### ⏳ TO DO
1. **Record video** (under 4 minutes)
   - Show database delete/restore process
   - Verify all data and structures
   - Show Task 1 query results
2. **Upload to YouTube** (unlisted)
3. **Commit and push to GitHub**
4. **Submit both URLs to Canvas**

---

## 📞 Need Help?

- **Technical Issues:** Contact TA or Brother Buhler
- **GitHub Help:** Review Week 1 materials
- **Video Recording:** See VIDEO-GUIDE-SCRIPT.md
- **SQL Questions:** Review assignment2.sql comments

---

## 🚀 You're Almost There!

**Files Ready:** ✅  
**Database Script Ready:** ✅  
**Video Script Ready:** ✅  

**Next Steps:**
1. Practice the video once
2. Record the video
3. Upload to YouTube
4. Push to GitHub
5. Submit to Canvas

**Estimated Time to Complete:** 1-2 hours  
**You've got this!** 🎓

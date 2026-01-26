# Assignment 2 Video Guide & Script

**Total Video Length:** Under 4 minutes  
**Recording Tool:** OBS Studio, Zoom, or similar screen recording software  
**Video Type:** Unlisted on YouTube

---

## 🎬 Video Structure Overview

1. **Introduction** (15 seconds)
2. **Part 1: Delete Database** (30 seconds)
3. **Part 2: Create New Database** (30 seconds - PAUSE VIDEO during creation)
4. **Part 3: Connect to Database** (45 seconds)
5. **Part 4: Run Database Build Script** (60 seconds)
6. **Part 5: Verify Database & Task 1 Results** (60 seconds)
7. **Conclusion** (10 seconds)

**Total Speaking Time:** ~3:30 minutes

---

## 📝 Complete Video Script

### INTRODUCTION (15 seconds)

**[Show your desktop/browser]**

> "Hello, this is Sam Daramroei. In this video, I'll demonstrate completing Assignment 2 for CSE 340. I'll show the process of deleting my Render database, recreating it, and rebuilding all tables and data using SQL scripts. Let's begin."

---

### PART 1: DELETE DATABASE (30 seconds)

**[Navigate to Render.com dashboard]**

> "First, I'm logging into my Render.com account. Here's my current database service."

**[Click on the database service]**

> "I'm clicking on the database to view its details."

**[Scroll to bottom of page]**

> "Now I'll scroll to the bottom where I can see the 'Delete Database' button."

**[Click Delete Database]**

> "I'm clicking 'Delete Database'."

**[Type confirmation and click confirm]**

> "I'll type the confirmation text and click to confirm deletion. The database is now being deleted."

---

### PART 2: CREATE NEW DATABASE (30 seconds + PAUSE)

**[Click "New +" button, then "PostgreSQL"]**

> "Next, I'll create a new database. I'm clicking 'New' and selecting 'PostgreSQL'."

**[Fill in database details]**

> "I'll name this database 'cse340-db-new' since the old name is still being cleared. I'm selecting the free tier in Oregon."

**[Scroll down and click "Create Database"]**

> "I'll scroll down and click 'Create Database'."

**[Database starts creating]**

> "The database is now being created. This usually takes about 3-5 minutes, so I'll pause the video here and resume once it's ready."

**⏸️ [PAUSE VIDEO WHILE DATABASE CREATES] ⏸️**

**[Resume when database shows "Available"]**

> "Welcome back. The database is now available. I can see it's active and ready for connections."

---

### PART 3: CONNECT TO DATABASE (45 seconds)

**[Show database connection details on Render]**

> "Now I need to connect to this database. I'll copy the connection details from Render."

**[Copy External Database URL or individual credentials]**

> "I'm copying the connection information."

**[Open pgAdmin or SQLTools]**

**Option A - If using pgAdmin:**

> "I'm opening pgAdmin. Let me create a new server connection."

**[Right-click Servers > Register > Server]**

> "I'll right-click on Servers, then Register, then Server."

**[Enter connection details in pgAdmin]**
- General Tab: Name = "CSE340 Render DB"
- Connection Tab: Host, Port, Database, Username, Password

> "I'm entering the connection details from Render: the hostname, port 5432, database name, username, and password. I'll also enable 'Save password'."

**[Click Save and connect]**

> "Clicking Save to establish the connection. Great, I'm now connected to the new database."

**Option B - If using SQLTools in VS Code:**

> "I'm opening VS Code with SQLTools. I'll create a new PostgreSQL connection using the credentials from Render."

**[Click SQLTools icon, Add New Connection, PostgreSQL]**

> "I'm adding the connection details and testing the connection. Perfect, it's connected."

---

### PART 4: RUN DATABASE BUILD SCRIPT (60 seconds)

**[Show VS Code with database folder open]**

> "Now I'll navigate to my project's database folder. Here you can see I have two SQL files: 'assignment2.sql' with my Task 1 queries, and 'database-build.sql' which contains all the code to rebuild the database."

**[Open database-build.sql]**

> "I'm opening the database-build.sql file. This file contains everything needed to rebuild the database in the correct order: the account_type enum, all three tables, the foreign key relationship, the classification data, the inventory data, and finally the data correction queries from Assignment 2."

**[Select all code in the file]**

**Option A - pgAdmin:**

**[In pgAdmin, right-click database > Query Tool]**

> "In pgAdmin, I'll right-click on my database and open the Query Tool."

**[Paste all code into Query Tool]**

> "I'm pasting all the SQL code from my database-build.sql file."

**[Click Execute/Refresh button]**

> "Now I'll click the Execute button to run all queries at once."

**[Show execution results]**

> "Excellent! All queries executed successfully. I can see the messages confirming that the type was created, tables were created, and data was inserted."

**Option B - SQLTools:**

**[In VS Code, with database-build.sql open]**

> "With the database-build.sql file open, I'll run this entire script."

**[Right-click > Run on Active Connection or use Command Palette]**

> "I'm executing all queries on the active connection."

**[Show success messages]**

> "Perfect! All queries ran successfully."

---

### PART 5: VERIFY DATABASE & TASK 1 RESULTS (60 seconds)

**[In pgAdmin or SQLTools, refresh and show database structure]**

**pgAdmin:**

> "Let me verify everything was created correctly. I'm refreshing the database structure."

**[Expand Database > Schemas > public > Types]**

> "Under Types, I can see the 'account_type' enum was created successfully."

**[Expand Tables]**

> "Under Tables, I can see all three tables: account, classification, and inventory."

**[Right-click classification table > View/Edit Data > All Rows]**

> "Let me view the classification table data. Perfect! I can see all 5 classifications: Custom, Sport, SUV, Truck, and Sedan."

**[Right-click inventory table > View/Edit Data > All Rows]**

> "Now checking the inventory table. Excellent! I can see all 15 vehicle records were inserted."

**[Scroll through inventory data, highlighting key points]**

> "I'll verify that the Task 1 queries executed correctly. Looking at the GM Hummer record..."

**[Find and show GM Hummer row]**

> "...I can see the description now says 'a huge interior' instead of 'small interiors'. This confirms Query 4 from Assignment 2 worked."

**[Show any vehicle's inv_image column]**

> "And looking at the image paths, I can see they now include '/vehicles/' in the path - for example, '/images/vehicles/hummer.jpg'. This confirms Query 6 worked correctly."

**[Optionally show account table is empty or just explain]**

> "The account table is empty, which is correct since we created the account, updated it, and then deleted it as part of Task 1."

**SQLTools:**

> "Let me verify the database with some queries."

**[Run query: SELECT * FROM classification;]**

> "Running SELECT * FROM classification. Great! I see all 5 classification records."

**[Run query: SELECT * FROM inventory WHERE inv_make = 'GM';]**

> "Now checking the GM Hummer with SELECT * FROM inventory WHERE inv_make = 'GM'. Perfect! The description shows 'a huge interior'."

**[Run query: SELECT inv_image, inv_thumbnail FROM inventory LIMIT 3;]**

> "And checking the image paths... Yes, they all include '/images/vehicles/' in the path."

---

### CONCLUSION (10 seconds)

**[Show VS Code with both SQL files visible in explorer]**

> "To summarize: I successfully deleted and recreated my Render database, connected to it, and ran my database-build script which created all structures and data. Both SQL files are in my GitHub repository. Thank you for watching."

**[Stop recording]**

---

## 🎯 Pre-Recording Checklist

Before you start recording:

- [ ] **Test the entire process** - Do a complete dry run first
- [ ] **Close unnecessary applications** - Only show relevant windows
- [ ] **Clear browser history/sensitive info** - Ensure no personal data visible
- [ ] **Check microphone** - Test audio quality
- [ ] **Prepare Render.com** - Have an existing database ready to delete
- [ ] **Have SQL files ready** - Both assignment2.sql and database-build.sql should be complete
- [ ] **Test database-build.sql** - Verify the script works perfectly
- [ ] **Zoom in if needed** - Make sure text is readable
- [ ] **Practice your script** - Say it out loud 2-3 times
- [ ] **Time yourself** - Ensure you can complete it in under 4 minutes

---

## 📹 Recording Tips

### Equipment/Software Setup
- **Use a good microphone** - Clear audio is crucial
- **Record in 1080p** - Make text readable
- **Use OBS Studio, Zoom, or Loom** - Free and reliable options
- **Close notifications** - Turn on "Do Not Disturb" mode

### While Recording
1. **Speak clearly and at a moderate pace** - Not too fast
2. **Explain what you're doing as you do it** - Narrate every action
3. **Use your mouse to point at things** - Help viewers follow along
4. **Don't rush** - Better to be clear than fast
5. **If you make a mistake** - Just pause, redo that section, and edit later
6. **Show, don't just tell** - Demonstrate every step

### Things to AVOID
- ❌ Don't show passwords (except in the SQL script where it's fake)
- ❌ Don't include long pauses or dead time
- ❌ Don't apologize or say "um" too much
- ❌ Don't go over 4 minutes total length
- ❌ Don't skip showing the final verification

---

## ✂️ Post-Recording Checklist

After recording:

- [ ] **Review the entire video** - Watch it beginning to end
- [ ] **Check audio levels** - Ensure you can hear clearly
- [ ] **Verify all steps are shown** - Nothing missing
- [ ] **Trim any dead space** - Cut out long waits
- [ ] **Add title card** (optional) - "CSE 340 - Assignment 2 - Sam Daramroei"
- [ ] **Export in MP4 format** - Best compatibility
- [ ] **Upload to YouTube as "Unlisted"** - Not public, not private
- [ ] **Set video title** - "CSE 340 Assignment 2 - Database Rebuild"
- [ ] **Copy the YouTube URL** - For Canvas submission
- [ ] **Test the link** - Make sure it works in an incognito window

---

## 🎬 Alternative Short Script (If Pressed for Time)

If you need a faster version, here's a condensed script:

**Introduction (10s):**
> "Hi, I'm Sam Daramroei. This is Assignment 2 for CSE 340. I'll delete my database, recreate it, and rebuild all structures using my SQL script."

**Delete & Create (40s total):**
> "Here's my database on Render. Scrolling down, clicking Delete Database, confirming. Now creating a new database... [PAUSE VIDEO]... and it's ready."

**Connect & Execute (60s):**
> "Opening pgAdmin, creating a connection with my Render credentials... connected. Opening Query Tool, pasting my database-build script from VS Code, executing all queries... Success!"

**Verify (50s):**
> "Verifying: account_type enum exists, three tables created, classification has 5 records, inventory has 15 records. GM Hummer description shows 'huge interior', image paths include '/vehicles/'. Task 1 queries executed correctly."

**Conclusion (5s):**
> "Database successfully rebuilt. Files are in my GitHub repository. Thank you."

---

## 📊 What Graders Are Looking For

According to the rubric, your video must show:

✅ **Database deletion process** - Render.com deletion  
✅ **Database recreation** - New database created  
✅ **Remote connection** - pgAdmin or SQLTools connected  
✅ **SQL script execution** - All queries run successfully  
✅ **Database structures exist** - Type, tables, relationships  
✅ **Data is present** - Classification and inventory populated  
✅ **Task 1 results verified** - Modified data shown (Hummer description, image paths)  
✅ **Narrated with your voice** - Not silent, not text-to-speech  
✅ **Under 4 minutes** - Concise and complete  
✅ **Clear and professional** - Easy to follow  

---

## 🚀 Ready to Record!

You now have:
1. ✅ **assignment2.sql** - 6 Task 1 queries
2. ✅ **database-build.sql** - Complete rebuild script
3. ✅ **This detailed script** - What to say and do
4. ✅ **Checklists** - Pre and post recording

### Next Steps:
1. Do a complete dry run (without recording)
2. Time yourself - make adjustments if over 4 minutes
3. Record the video following this script
4. Review and edit if needed
5. Upload to YouTube as Unlisted
6. Submit to Canvas with your GitHub URL

**You've got this! 🎓**

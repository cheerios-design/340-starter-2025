# Week 02 - Team Activity & Assignment 2 Summary

## 🎯 Overview

**Student:** Sam Daramroei  
**Team Partner:** Brother Buhler (Instructor)  
**Date Completed:** January 26, 2026

**Important:** The Team Activity and Assignment 2 work together:
- **Team Activity** = Practice building the database (preparation)
- **Assignment 2** = Use that database build code + additional queries (assessment)

---

## 📋 What Was Completed

### Team Activity ✅
Completed all steps from [Week 02 Team Activity](https://byui-cse.github.io/cse340-ww-course/week02/team-activity.html):

**Database Structure Created:**
- ✅ **account_type ENUM** - Custom type with values: Client, Employee, Admin
- ✅ **classification table** - Stores vehicle classification categories
- ✅ **inventory table** - Stores vehicle inventory with foreign key to classification
- ✅ **account table** - Stores user account information
- ✅ **Foreign key relationship** - Links inventory to classification

**Sample Data Inserted:**
- ✅ **5 classifications** - Custom, Sport, SUV, Truck, Sedan
- ✅ **15 vehicles** - Complete inventory data including makes, models, descriptions, images, and prices

**Team Discussion Questions:**
- ✅ All answers documented in [team-activity-notes.md](team-activity-notes.md)

### Assignment 2 ✅

**Task 1 - SQL Practice Queries** ([assignment2.sql](assignment2.sql)):
1. ✅ Insert Tony Stark account
2. ✅ Update Tony Stark to Admin
3. ✅ Delete Tony Stark account
4. ✅ Update GM Hummer description (using REPLACE)
5. ✅ SELECT with INNER JOIN for Sport vehicles
6. ✅ Update all image paths to include /vehicles/

**Task 2 - Database Rebuild** ([database-build.sql](database-build.sql)):
- ✅ Complete database build script (from Team Activity)
- ✅ Includes all database structures and data
- ✅ Includes copies of queries 4 & 6 from Task 1

---

## 📁 File Structure

```
database/
├── assignment2.sql              ← Task 1: 6 SQL practice queries
├── database-build.sql           ← Task 2: Complete database rebuild
├── team-activity-notes.md       ← Team Activity discussion answers
├── README.md                    ← This file
├── SQL-ORDER-REFERENCE.md       ← SQL execution order guide
├── VIDEO-GUIDE-SCRIPT.md        ← Assignment 2 video script
├── SUBMISSION-CHECKLIST.md      ← Assignment 2 submission checklist
└── QUICK-REFERENCE.md           ← Assignment 2 quick reference
```

---

## 🚀 How to Use These Files

### For Team Activity Quiz:
Use [team-activity-notes.md](team-activity-notes.md) to answer the Canvas quiz questions.

### For Assignment 2 Video:
1. Use [database-build.sql](database-build.sql) to rebuild your database
2. Follow [VIDEO-GUIDE-SCRIPT.md](VIDEO-GUIDE-SCRIPT.md) for recording
3. Reference [SUBMISSION-CHECKLIST.md](SUBMISSION-CHECKLIST.md) for requirements

### Running database-build.sql in pgAdmin:
1. Open pgAdmin and connect to your Render database
2. Right-click on your database → Query Tool
3. Open `database-build.sql` in VS Code
4. Copy ALL contents and paste into pgAdmin Query Tool
5. Click Execute/Refresh button
6. Verify all tables and data were created successfully

### Running in Terminal with psql:
```bash
psql -h your-database-host -U your-username -d your-database -f database/database-build.sql
```

**Note:** Use `database-build.sql` for complete rebuild, not `assignment2.sql` (which only has the 6 practice queries).

---

## 📊 Database Schema Overview

```
account_type (ENUM)
├── Client (default)
├── Employee
└── Admin

classification
├── classification_id (PK, auto-increment)
└── classification_name

inventory
├── inv_id (PK, auto-increment)
├── inv_make
├── inv_model
├── inv_year
├── inv_description
├── inv_image
├── inv_thumbnail
├── inv_price
├── inv_miles
├── inv_color
└── classification_id (FK → classification)

account
├── account_id (PK, auto-increment)
├── account_firstname
├── account_lastname
├── account_email
├── account_password
└── account_type (uses account_type ENUM, defaults to 'Client')
```

---

## ✅ Team Activity Checklist

- [x] Step 1: Prepared for meeting
- [x] Step 2: Began with prayer
- [x] Step 3: Reviewed learning activities
- [x] Step 4: Created database type (account_type ENUM)
  - [x] Discussed why to use ENUM vs VARCHAR
  - [x] Discussed why to save SQL code to file
- [x] Step 5: Created all tables
  - [x] Discussed foreign key constraint purpose
  - [x] Discussed default client type value
- [x] Step 6: Added data to tables
  - [x] Discussed auto-increment IDs
  - [x] Discussed committing data files to GitHub
- [x] Step 7: Determined next meeting lead (if applicable)

---

## 📝 Next Steps for Canvas Quiz

When taking the team activity quiz, reference [team-activity-notes.md](team-activity-notes.md) for the discussion question answers.

### Key Points to Remember:

1. **ENUM benefits:** Data integrity, performance, consistency, validation
2. **Save SQL code:** For rebuild, version control, deployment, documentation
3. **Foreign key purpose:** Referential integrity, prevents orphaned records, cascade updates
4. **Default account type:** 'Client'
5. **Auto-increment IDs:** Database generates them automatically
6. **Commit data files:** Yes for sample data, no for sensitive production data

---

## 🎯 Project Status

## 🎯 Status Summary

### Team Activity ✅ COMPLETE
- ✅ Database type created
- ✅ All tables created with proper relationships
- ✅ Sample data inserted
- ✅ Team discussion questions answered
- ✅ Ready for Canvas team activity quiz

### Assignment 2
- ✅ Task 1: SQL queries complete ([assignment2.sql](assignment2.sql))
- ✅ Task 2: Database build script complete ([database-build.sql](database-build.sql))
- ⏳ Video recording pending
- ⏳ GitHub submission pending
- ⏳ Canvas submission pending

---

## 📚 Resources

- [Team Activity Instructions](https://byui-cse.github.io/cse340-ww-course/week02/team-activity.html)
- [Assignment 2 Instructions](https://byui-cse.github.io/cse340-ww-content/assignments/assign2.html)
- [PostgreSQL Create Tables Guide](https://byui-cse.github.io/cse340-ww-content/views/postgresql-create-tables.html)
- [PostgreSQL Add Data Guide](https://byui-cse.github.io/cse340-ww-content/views/postgresql-add-data.html)

---

## 🎓 Summary

**Team Activity** taught you how to build the database → **Assignment 2** assesses your ability to use it!

Both are complete and ready for submission. Good work! 🚀


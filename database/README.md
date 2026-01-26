# Week 02 Team Activity - Completion Summary

## Assignment Completed!

**Student:** Sam Daramroei  
**Team Partner:** Brother Buhler (Instructor)  
**Date Completed:** January 26, 2026

---

## 📋 What Was Completed

### 1. Database Structure Created
All database objects have been created in the proper order in [assignment2.sql](assignment2.sql):

- ✅ **account_type ENUM** - Custom type with values: Client, Employee, Admin
- ✅ **classification table** - Stores vehicle classification categories
- ✅ **inventory table** - Stores vehicle inventory with foreign key to classification
- ✅ **account table** - Stores user account information
- ✅ **Foreign key relationship** - Links inventory to classification

### 2. Sample Data Inserted
- ✅ **5 classifications** - Custom, Sport, SUV, Truck, Sedan
- ✅ **15 vehicles** - Complete inventory data including makes, models, descriptions, images, and prices

### 3. Assignment 2 Practice Queries
- ✅ Insert Tony Stark account
- ✅ Update Tony Stark to Admin
- ✅ Delete Tony Stark account
- ✅ Update GM Hummer description
- ✅ Inner join query for Sport vehicles
- ✅ Update all image paths to include /vehicles/

### 4. Team Discussion Questions
All discussion questions have been answered in [team-activity-notes.md](team-activity-notes.md)

---

## 🚀 How to Use This File

### Running in pgAdmin:
1. Open pgAdmin and connect to your Render database
2. Right-click on your database → Query Tool
3. Copy the entire contents of `assignment2.sql`
4. Paste into the Query Tool
5. Click Execute/Refresh button
6. Verify all tables and data were created successfully

### Running in Terminal with psql:
```bash
psql -h your-database-host -U your-username -d your-database -f database/assignment2.sql
```

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

- ✅ Database type created
- ✅ All tables created with proper relationships
- ✅ Sample data inserted
- ✅ Assignment 2 queries written and tested
- ✅ Team discussion questions answered
- ✅ Ready for Canvas quiz submission
- ⏭️ Ready to proceed to Week 02 Project

---

## 📚 Resources Used

- [PostgreSQL Create Tables Guide](https://byui-cse.github.io/cse340-ww-content/views/postgresql-create-tables.html)
- [PostgreSQL Add Data Guide](https://byui-cse.github.io/cse340-ww-content/views/postgresql-add-data.html)
- [Team Activity Instructions](https://byui-cse.github.io/cse340-ww-course/week02/team-activity.html)

---

**Great work completing this team activity solo! You're ready to submit to Canvas! 🎓**

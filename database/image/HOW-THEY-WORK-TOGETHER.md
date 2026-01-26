# 📚 How Team Activity & Assignment 2 Work Together

## 🔗 The Relationship

**Team Activity and Assignment 2 are NOT separate assignments** - they work together as one cohesive learning experience!

### Team Activity (Practice/Learning)
- **Purpose:** Learn how to build database structures
- **What you do:** Create type, tables, relationships, insert data
- **Deliverable:** Answer discussion questions in Canvas quiz
- **Files created:** Database build code (saved for later use)

### Assignment 2 (Assessment/Application)
- **Purpose:** Demonstrate you can rebuild a database AND write SQL queries
- **What you do:** 
  - **Task 1:** Write 6 SQL practice queries
  - **Task 2:** Use the database build code from Team Activity to rebuild database
- **Deliverable:** Video + GitHub submission
- **Files created:** 
  - `assignment2.sql` (6 queries)
  - `database-build.sql` (reuses Team Activity code + adds Task 1 corrections)

---

## 🗂️ File Organization

### ✅ CORRECT Structure (What you have now):

```
database/
├── assignment2.sql          ← Assignment 2 Task 1: ONLY 6 queries
├── database-build.sql       ← Assignment 2 Task 2: Complete database rebuild
│                              (includes Team Activity code + corrections)
├── team-activity-notes.md   ← Team Activity: Discussion answers
└── [support files]          ← Guides, checklists, etc.
```

### ❌ Common Mistake (What NOT to do):

```
database/
├── assignment2.sql          ← Everything mixed together (wrong!)
└── team-activity-stuff.sql  ← Separate team activity file (unnecessary!)
```

---

## 📝 What Each File Contains

### `assignment2.sql` (71 lines)
**Purpose:** Assignment 2 Task 1 ONLY

```sql
-- 1. Insert Tony Stark
INSERT INTO account...

-- 2. Update Tony Stark to Admin
UPDATE account...

-- 3. Delete Tony Stark
DELETE FROM account...

-- 4. Update GM Hummer description
UPDATE inventory SET inv_description = REPLACE(...)

-- 5. SELECT with INNER JOIN for Sport
SELECT inv_make, inv_model, classification_name...

-- 6. Update all image paths
UPDATE inventory SET inv_image = REPLACE(...)
```

**Used for:** Testing queries, showing in documentation

---

### `database-build.sql` (350+ lines)
**Purpose:** Complete database rebuild (Team Activity work + Assignment 2 corrections)

```sql
-- Part 1: Create Type (Team Activity Step 4)
CREATE TYPE account_type AS ENUM...

-- Part 2: Create Tables (Team Activity Step 5)
CREATE TABLE classification...
CREATE TABLE inventory...
CREATE TABLE account...

-- Part 3: Create Relationships (Team Activity Step 5)
ALTER TABLE inventory ADD CONSTRAINT...

-- Part 4: Insert Data (Team Activity Step 6)
INSERT INTO classification...
INSERT INTO inventory...

-- Part 5: Data Corrections (Assignment 2 requirement)
-- Copy of Query 4 from assignment2.sql
UPDATE inventory SET inv_description = REPLACE(...)

-- Copy of Query 6 from assignment2.sql
UPDATE inventory SET inv_image = REPLACE(...)
```

**Used for:** Video demonstration, rebuilding database after deletion

---

## 🎯 Why This Structure?

### Assignment 2 Requirements State:

> "When done with the six queries, **copy and paste queries 4 and 6** from the assignment 2 file to the **database rebuild file**, at the bottom of that file."

This means:
1. ✅ `assignment2.sql` = Original 6 queries
2. ✅ `database-build.sql` = Team Activity code + copies of queries 4 & 6

### Why Copy Queries 4 & 6?

- **Query 4:** Fixes GM Hummer description ("small interiors" → "a huge interior")
- **Query 6:** Adds "/vehicles/" to image paths

These corrections ensure that when you rebuild your database in the future, the data is CORRECT from the start (not needing manual fixes).

---

## ✅ How They Don't Harm Each Other

### Team Activity ✅
- **Quiz submission:** Use `team-activity-notes.md` for answers
- **Code requirement:** Satisfied by `database-build.sql`
- **No conflicts:** Nothing is deleted or changed

### Assignment 2 ✅
- **Task 1:** Uses `assignment2.sql` (6 queries only)
- **Task 2:** Uses `database-build.sql` (includes Team Activity + corrections)
- **Video:** Shows database rebuild using `database-build.sql`
- **No conflicts:** Each file has its specific purpose

---

## 🎬 Video Demonstration Flow

When recording your Assignment 2 video:

1. **Delete database** on Render ← Proving you can restore it
2. **Create new database** on Render ← Fresh start
3. **Connect** to database ← Using pgAdmin/SQLTools
4. **Execute `database-build.sql`** ← ONE file rebuilds everything
5. **Verify results:** ← Show it worked
   - Tables exist (Team Activity work)
   - Data exists (Team Activity work)
   - GM Hummer fixed (Query 4 correction)
   - Image paths fixed (Query 6 correction)

The video demonstrates BOTH Team Activity understanding AND Assignment 2 completion!

---

## 📊 Timeline of Your Work

```
Week 02 Team Activity
  ↓
Created database structures
  ↓
Saved code in database-build.sql
  ↓
Answered discussion questions
  ↓
Submitted Team Activity quiz
  ↓
Assignment 2 - Task 1
  ↓
Wrote 6 SQL queries
  ↓
Saved in assignment2.sql
  ↓
Assignment 2 - Task 2
  ↓
Copied queries 4 & 6 to database-build.sql
  ↓
Record video showing rebuild
  ↓
Submit to Canvas
```

---

## 🎓 Key Takeaways

1. **Team Activity = Learning** → Builds your database knowledge
2. **Assignment 2 = Assessment** → Tests your ability to apply it
3. **They share code** → `database-build.sql` contains Team Activity structures
4. **No conflicts** → Each file serves its purpose
5. **Efficient** → Don't duplicate work, reuse what you built!

---

## ✅ Current Status: CORRECT!

Your files are properly organized:
- ✅ `assignment2.sql` = 6 queries only (Task 1)
- ✅ `database-build.sql` = Complete rebuild (Team Activity + Task 2)
- ✅ `team-activity-notes.md` = Discussion answers
- ✅ No conflicts, no problems

**You're all set!** 🚀

---

## ❓ Quick FAQ

**Q: Should I have a separate file for Team Activity?**  
A: No! The `database-build.sql` file IS your Team Activity code.

**Q: Why does assignment2.sql only have 6 queries?**  
A: Because Assignment 2 Task 1 requires exactly 6 queries. The database build code goes in a separate file.

**Q: Do I need two different databases?**  
A: No! One database. The Team Activity helps you build it, Assignment 2 proves you can rebuild it.

**Q: Will graders be confused?**  
A: No! This is the CORRECT way per the assignment instructions.

**Q: What if I already mixed everything together?**  
A: That's what we just fixed! Your files are now properly separated.

---

**Everything is working together perfectly!** ✨

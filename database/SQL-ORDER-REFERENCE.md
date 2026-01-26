# SQL Execution Order Reference

## ⚠️ IMPORTANT: Order Matters!

When rebuilding the database, the SQL statements must be executed in this exact order:

## Correct Order ✅

1. **CREATE TYPE** - Must be first
   - `account_type ENUM`

2. **CREATE TABLES** - In dependency order
   - `classification` (no dependencies)
   - `inventory` (references classification)
   - `account` (uses account_type)

3. **CREATE RELATIONSHIPS** - After tables exist
   - Foreign key: inventory → classification

4. **INSERT DATA** - After structure is complete
   - Classification data first
   - Inventory data second (depends on classification)
   - Account data last (if any)

5. **PRACTICE QUERIES** - After data exists
   - Assignment 2 queries

---

## Why This Order?

### Type Before Tables
```sql
-- ❌ WRONG - This will fail
CREATE TABLE account (...
    account_type account_type ...  -- ERROR: type doesn't exist yet!
);

-- ✅ CORRECT
CREATE TYPE account_type AS ENUM ('Client', 'Employee', 'Admin');
-- Now the table can use it:
CREATE TABLE account (...
    account_type account_type ...  -- Works!
);
```

### Parent Before Child Tables
```sql
-- ❌ WRONG - This will fail
CREATE TABLE inventory (...
    classification_id integer,
    FOREIGN KEY (classification_id) REFERENCES classification(classification_id)
    -- ERROR: classification table doesn't exist yet!
);

-- ✅ CORRECT
CREATE TABLE classification (...);  -- Parent first
CREATE TABLE inventory (...        -- Child second
    FOREIGN KEY references classification
);
```

### Tables Before Relationships
```sql
-- ❌ WRONG - This will fail
ALTER TABLE inventory ADD CONSTRAINT ...
-- ERROR: inventory table doesn't exist yet!

-- ✅ CORRECT
CREATE TABLE classification (...);
CREATE TABLE inventory (...);
-- Now add the relationship:
ALTER TABLE inventory ADD CONSTRAINT fk_classification ...
```

### Data After Structure
```sql
-- ❌ WRONG - This will fail
INSERT INTO classification VALUES ('Sport');
-- ERROR: classification table doesn't exist yet!

-- ✅ CORRECT
CREATE TABLE classification (...);
-- Now insert data:
INSERT INTO classification VALUES ('Sport');
```

### Parent Data Before Child Data
```sql
-- ❌ WRONG - This will fail
INSERT INTO inventory (..., classification_id) VALUES (..., 2);
-- ERROR: classification_id 2 doesn't exist in classification table!

-- ✅ CORRECT
INSERT INTO classification VALUES ('Sport');  -- This gets id=2
-- Now we can reference it:
INSERT INTO inventory (..., classification_id) VALUES (..., 2);
```

---

## 🎯 Quick Checklist for Running SQL File

Before executing `assignment2.sql`:

- [ ] Database exists and is connected
- [ ] No conflicting types/tables exist (or drop them first)
- [ ] Running entire file in one execution
- [ ] No syntax errors in pgAdmin/psql

After executing:

- [ ] Check Tables panel - should see: classification, inventory, account
- [ ] Check classification table - should have 5 rows
- [ ] Check inventory table - should have 15 rows
- [ ] Check ERD - should show relationship between classification and inventory
- [ ] Run a test query: `SELECT * FROM classification;`

---

## 🔧 If You Need to Rebuild

To completely rebuild the database (drop everything and start fresh):

```sql
-- Drop in reverse order
DROP TABLE IF EXISTS inventory CASCADE;
DROP TABLE IF EXISTS account CASCADE;
DROP TABLE IF EXISTS classification CASCADE;
DROP TYPE IF EXISTS account_type CASCADE;

-- Now run the entire assignment2.sql file
```

---

## 💡 Pro Tips

1. **Always run the entire file** - Don't run sections out of order
2. **Use IF NOT EXISTS** - Prevents errors if tables already exist
3. **Use CASCADE** - When dropping, this removes dependent objects
4. **Save after major steps** - Commit to GitHub after completing each section
5. **Test incrementally** - Verify each section works before moving on

---

## 📖 Additional Notes

- **IDENTITY vs SERIAL**: Both auto-increment, but IDENTITY is SQL standard
- **character varying vs VARCHAR**: PostgreSQL synonyms, both work the same
- **CASCADE vs NO ACTION**: CASCADE allows updates, NO ACTION prevents deletes
- **MATCH SIMPLE**: Default matching rule for foreign keys

---

This order is used in [assignment2.sql](assignment2.sql) and will rebuild the entire database successfully in one execution! 🚀

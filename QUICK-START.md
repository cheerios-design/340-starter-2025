# Quick Start Guide - Week 6 Enhancement
## Vehicle Reviews & Ratings System

### Setup Steps (Do this first!)

1. **Create the Database Table**
   
   You need to run the SQL script to create the reviews table in your database.
   
   **Option A - Using psql command line:**
   ```bash
   psql -d your_database_name -f database/reviews-table.sql
   ```
   
   **Option B - Using pgAdmin or database client:**
   - Open `database/reviews-table.sql`
   - Copy and paste the SQL commands into your database query tool
   - Execute the commands
   
   **Option C - Using Node.js:**
   ```bash
   # If you have database access through Node
   node -e "const pool = require('./database'); const fs = require('fs'); const sql = fs.readFileSync('./database/reviews-table.sql', 'utf8'); pool.query(sql).then(() => console.log('Table created')).catch(console.error)"
   ```

2. **Verify Installation**
   
   Check that the table was created:
   ```sql
   SELECT * FROM review;
   ```
   This should return an empty result (no errors).

3. **Start the Server**
   ```bash
   npm start
   # or for development
   npm run dev
   ```

---

### How to Test the Enhancement

#### 1. View Reviews (No login required)
1. Go to http://localhost:5500 (or your server URL)
2. Click any vehicle classification (Sport, SUV, etc.)
3. Click on any vehicle
4. Scroll down - you'll see "Customer Reviews" section
5. Since there are no reviews yet, it will say "No reviews yet"

#### 2. Add a Review (Login required)
1. **Log in** to your account (or register a new account)
2. Navigate to any vehicle detail page
3. Click the **"Write a Review"** button
4. Fill out the review form:
   - Select a rating (1-5 stars)
   - Write your review (minimum 10 characters)
   - Watch the character counter update
5. Click **"Submit Review"**
6. You should be redirected back to the vehicle page
7. Your review should now appear in the reviews section!

#### 3. Edit Your Review
1. On a vehicle page with your review, find your review
2. Click the **"Edit"** button
3. Modify the text or rating
4. Click **"Update Review"**
5. Changes should appear immediately

#### 4. Delete Your Review
1. Find your review on a vehicle page
2. Click the **"Delete"** button
3. You'll see a confirmation page
4. Click **"Yes, Delete Review"** to confirm
5. Review should be removed

#### 5. Manage All Your Reviews
1. Log in to your account
2. Go to **Account Management** (click your name in header)
3. Click **"Manage My Reviews"** link
4. You'll see a list of all your reviews
5. You can edit or delete any review from here
6. Click vehicle names to go to those vehicle pages

---

### Testing Validation

#### Test Character Requirements:
1. Try to submit a review with only 5 characters - should fail
2. Try to submit without selecting a rating - should fail
3. Type more than 1000 characters - character counter turns red
4. Submit a valid review (10+ chars, rating selected) - should work

#### Test Security:
1. Try to access `/review/add/1` without logging in - redirected to login
2. Try to edit another user's review - should be prevented
3. Try to delete another user's review - should be prevented

---

### Sample Test Reviews

Here are some sample reviews you can use for testing:

**5 Star Review:**
```
This vehicle is absolutely amazing! Drives like a dream and has all the features I was looking for. Highly recommend to anyone looking for a reliable and stylish vehicle.
```

**3 Star Review:**
```
Decent vehicle overall. Has some nice features but also a few issues. The interior is comfortable but the fuel economy could be better. Worth considering if the price is right.
```

**1 Star Review:**
```
Very disappointed with this vehicle. Multiple mechanical issues and poor customer service. Would not recommend this to anyone looking for a reliable car.
```

---

### What to Submit for Assignment

When submitting this assignment to Canvas, include:

1. **GitHub Repository Link**
2. **Deployed Render URL**
3. **Description** (copy and paste this):

```
Week 6 Enhancement: Vehicle Reviews & Ratings System

I've implemented a complete vehicle reviews and ratings system that allows users to:
- View customer reviews and ratings on any vehicle detail page
- Add reviews with 1-5 star ratings (requires login)
- Edit and delete their own reviews
- See an average rating for each vehicle
- Manage all their reviews from the account management page

To test the enhancement:
1. Navigate to any vehicle detail page (e.g., /inv/detail/1)
2. Log in to an account
3. Click "Write a Review" button
4. Submit a review with rating and text
5. View the review displayed on the vehicle page
6. Go to Account Management → "Manage My Reviews" to see all your reviews

Technical Implementation:
- Database: New 'review' table with foreign keys to inventory and account tables
- Model: 7 functions in review-model.js (CRUD operations + queries)
- Controller: 7 controller functions in reviewController.js
- Views: 4 new EJS views for add/edit/delete/list reviews
- Validation: Client-side and server-side validation (10-1000 chars, rating 1-5)
- Routes: 7 routes with authentication middleware
- Security: User authentication required, ownership verification for edit/delete
- Error Handling: Try-catch blocks, flash messages, proper error responses

All code follows MVC architecture and uses prepared statements to prevent SQL injection.
```

---

### Troubleshooting

**Problem: "Table doesn't exist" error**
- Solution: Make sure you ran the `reviews-table.sql` script

**Problem: "Cannot add review" even when logged in**
- Solution: Check that JWT token is valid, try logging out and back in

**Problem: Reviews not showing on vehicle page**
- Solution: Make sure the review was actually added (check database), refresh the page

**Problem: Can't edit or delete review**
- Solution: You can only edit/delete your own reviews. Make sure you're logged in as the user who created the review.

**Problem: Validation errors not showing**
- Solution: Make sure express-validator is installed (`npm install`)

---

### File Locations Reference

If you need to check or modify files:

**Database:**
- Table creation: `database/reviews-table.sql`

**Backend:**
- Model: `models/review-model.js`
- Controller: `controllers/reviewController.js`
- Validation: `utilities/review-validation.js`
- Routes: `routes/reviewRoute.js`

**Frontend:**
- Add review form: `views/review/add-review.ejs`
- Edit review form: `views/review/edit-review.ejs`
- Delete confirmation: `views/review/delete-confirm.ejs`
- User reviews list: `views/review/user-reviews.ejs`
- Vehicle detail (shows reviews): `views/inventory/detail.ejs`

**Styling:**
- All review styles: `public/css/styles.css` (bottom of file)

**Integration:**
- Route registration: `server.js`
- Review display function: `utilities/index.js`
- Updated controller: `controllers/invController.js`

---

### Next Steps After Testing

1. ✓ Test all functionality locally
2. ✓ Commit all changes to Git
3. ✓ Push to GitHub
4. ✓ Deploy to Render
5. ✓ Run database migration on Render (create review table)
6. ✓ Test on deployed site
7. ✓ Submit to Canvas with description

---

**Need Help?**
- Check the detailed documentation: `database/ENHANCEMENT-README.md`
- Review the testing checklist in the README
- Make sure all files were created in the correct locations
- Verify the database table was created successfully

**Good luck with your assignment! 🚀**

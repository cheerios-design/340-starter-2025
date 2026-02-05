# Assignment 4 - Testing Checklist

## Local Testing (Before Deployment)

### 1. Management View (`/inv/`)
- [ ] Navigate to http://localhost:5500/inv/
- [ ] Management view displays with title "Vehicle Management"
- [ ] Two cards/links are visible:
  - "Add New Classification"
  - "Add New Vehicle"
- [ ] Both links are clickable
- [ ] View meets frontend checklist standards

### 2. Add Classification Process

#### View Display
- [ ] Click "Add Classification" link
- [ ] Add classification form displays
- [ ] Form includes:
  - Classification name input field
  - Note about no spaces/special characters
  - Submit button
- [ ] "Return to Management" link present

#### Client-Side Validation
- [ ] Try submitting empty form - should show validation error
- [ ] Try entering "Test Class" (with space) - should show pattern error
- [ ] Try entering "Test@Class" (with special char) - should show pattern error
- [ ] Enter valid name like "SportCar" - should allow submission

#### Server-Side Validation
- [ ] Use novalidate bookmarklet to disable client validation
- [ ] Try submitting empty form - should return server validation errors
- [ ] Try invalid characters - should return server validation errors
- [ ] Errors display in view properly

#### Successful Addition
- [ ] Enter valid classification name (e.g., "Motorcycle")
- [ ] Submit form
- [ ] Should redirect to management view
- [ ] Success message displays
- [ ] **CRITICAL**: New classification appears in navigation bar immediately
- [ ] Navigate to database and verify new classification was inserted

### 3. Add Inventory Process

#### View Display
- [ ] Click "Add New Vehicle" link
- [ ] Add inventory form displays with all fields:
  - Classification dropdown (pre-populated)
  - Make
  - Model
  - Year
  - Description (textarea)
  - Image Path
  - Thumbnail Path
  - Price
  - Mileage
  - Color
- [ ] Classification dropdown shows all classifications
- [ ] Default image paths are pre-filled
- [ ] "Return to Management" link present

#### Client-Side Validation
- [ ] Try submitting empty form - all fields should validate
- [ ] Try invalid year (e.g., 1800) - should show error
- [ ] Try invalid price (negative) - should show error
- [ ] Try invalid mileage (negative) - should show error
- [ ] Enter valid data - should allow submission

#### Server-Side Validation
- [ ] Use novalidate bookmarklet
- [ ] Submit form with missing fields - server validation catches errors
- [ ] Submit with invalid data types - server validation catches errors
- [ ] Errors display properly in view

#### Form Stickiness
- [ ] Fill out entire form with valid data except leave one field empty
- [ ] Submit form (will fail validation)
- [ ] **CRITICAL**: All previously entered data should still be in the form
- [ ] Classification dropdown maintains selected value
- [ ] All text inputs maintain their values
- [ ] Fix the missing field and resubmit

#### Successful Addition
- [ ] Fill out complete form with valid data:
  - Classification: Choose existing
  - Make: Honda
  - Model: Civic
  - Year: 2024
  - Description: A reliable compact sedan
  - Image: /images/vehicles/no-image.png
  - Thumbnail: /images/vehicles/no-image-tn.png
  - Price: 25000
  - Miles: 15000
  - Color: Silver
- [ ] Submit form
- [ ] Should redirect to management view
- [ ] Success message displays showing make/model/year
- [ ] Navigate to the classification in the nav bar
- [ ] New vehicle appears in the classification view
- [ ] Click on new vehicle to see detail page
- [ ] All information displays correctly
- [ ] Verify in database that vehicle was inserted

### 4. Error Handling
- [ ] All routes have error handling middleware
- [ ] Try accessing invalid URLs - error page displays
- [ ] Database errors are caught and handled gracefully

### 5. Flash Messages
- [ ] Flash messages display properly in management view
- [ ] Messages disappear after page refresh
- [ ] Success and error messages styled differently

## Production Testing (After Deployment)

### Deployment Steps
1. [ ] Commit all changes to GitHub
2. [ ] Push to main branch
3. [ ] Verify Render.com auto-deploys
4. [ ] Or manually deploy from Render dashboard
5. [ ] Monitor deployment logs for errors

### Production Tests
- [ ] Repeat ALL tests above on production URL
- [ ] Test management view (`your-url.onrender.com/inv/`)
- [ ] Add a new classification on production
- [ ] Verify navigation updates immediately
- [ ] Add a new vehicle on production
- [ ] Verify it appears in classification view
- [ ] Test all validations work on production

## Grading Checklist

### Objective 1 (Frontend Standards)
- [ ] All views meet frontend checklist requirements
- [ ] Add inventory form is sticky when validation fails
- [ ] Forms are accessible and usable
- [ ] CSS styling is professional

### Objective 2 (Functionality)
- [ ] Management view delivery works
- [ ] Add classification process works end-to-end
- [ ] Add inventory process works end-to-end
- [ ] Flash messages pass through session correctly
- [ ] Messages display in appropriate views

### Objective 3 (MVC Architecture)
- [ ] Routes function appropriately
- [ ] Error handling middleware on all new routes
- [ ] Server-side validation middleware on POST routes
- [ ] Controllers contain application logic
- [ ] Models handle database operations
- [ ] buildClassificationList in utilities/index.js
- [ ] Views display information correctly

### Objective 4 (Database)
- [ ] Classification insertion uses parameterized statements
- [ ] Inventory insertion uses parameterized statements
- [ ] Functions return outcomes to controller
- [ ] No SQL injection vulnerabilities

### Objective 5 (Validation)
- [ ] Client-side validation on both forms
- [ ] Server-side validation on both forms
- [ ] Correct data types enforced
- [ ] Errors returned to appropriate views
- [ ] Form inputs are sticky (inventory only)

### Objective 6 (Submission)
- [ ] Render.com production URL submitted
- [ ] GitHub repository URL submitted
- [ ] Both URLs operational
- [ ] Submitted on time

## Common Issues to Check

### Navigation Not Updating
- [ ] getNav() function called after classification insert
- [ ] New nav passed to management view render
- [ ] Cache cleared in browser

### Form Not Sticky
- [ ] All form field values passed back in validation error response
- [ ] EJS uses `locals.fieldname || ''` syntax
- [ ] Classification dropdown rebuilt with selected value

### Validation Not Working
- [ ] validation-rules imported in routes
- [ ] Middleware applied to POST routes in correct order
- [ ] Error object passed to view render

### Database Errors
- [ ] SQL parameterized statements correct
- [ ] Number of parameters matches placeholders
- [ ] Data types match database schema

## Files to Review Before Submission
- [ ] views/inventory/management.ejs
- [ ] views/inventory/add-classification.ejs
- [ ] views/inventory/add-inventory.ejs
- [ ] controllers/invController.js
- [ ] models/inventory-model.js
- [ ] routes/inventoryRoute.js
- [ ] utilities/inventory-validation.js
- [ ] utilities/index.js (buildClassificationList)
- [ ] public/css/styles.css

## Final Submission
1. [ ] All tests pass locally
2. [ ] Code pushed to GitHub
3. [ ] Deployed to Render.com
4. [ ] All tests pass on production
5. [ ] Submit BOTH URLs in Canvas:
   - Production URL: https://your-app.onrender.com
   - GitHub URL: https://github.com/yourname/340-starter-2025

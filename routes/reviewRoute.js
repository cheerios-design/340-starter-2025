// Needed Resources 
const express = require("express")
const router = new express.Router() 
const reviewController = require("../controllers/reviewController")
const utilities = require("../utilities/")
const reviewValidate = require('../utilities/review-validation')
const { checkLogin } = require("../utilities/account-middleware")

// Route to build add review view
router.get("/add/:inv_id", checkLogin, utilities.handleErrors(reviewController.buildAddReview))

// Process add review
router.post(
  "/add",
  checkLogin,
  reviewValidate.reviewRules(),
  reviewValidate.checkReviewData,
  utilities.handleErrors(reviewController.addReview)
)

// Route to build edit review view
router.get("/edit/:review_id", checkLogin, utilities.handleErrors(reviewController.buildEditReview))

// Process update review
router.post(
  "/update",
  checkLogin,
  reviewValidate.updateReviewRules(),
  reviewValidate.checkUpdateReviewData,
  utilities.handleErrors(reviewController.updateReview)
)

// Route to build delete review confirmation view
router.get("/delete/:review_id", checkLogin, utilities.handleErrors(reviewController.buildDeleteReview))

// Process delete review
router.post(
  "/delete",
  checkLogin,
  utilities.handleErrors(reviewController.deleteReview)
)

// Route to view user's reviews
router.get("/my-reviews", checkLogin, utilities.handleErrors(reviewController.buildUserReviews))

module.exports = router

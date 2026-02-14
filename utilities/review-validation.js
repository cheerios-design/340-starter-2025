const utilities = require(".")
const { body, validationResult } = require("express-validator")
const reviewModel = require("../models/review-model")
const validate = {}

/*  **********************************
  *  Review Data Validation Rules
  * ********************************* */
validate.reviewRules = () => {
  return [
    // Review text is required and must be at least 10 characters
    body("review_text")
      .trim()
      .notEmpty()
      .isLength({ min: 10 })
      .withMessage("Review must be at least 10 characters long.")
      .isLength({ max: 1000 })
      .withMessage("Review must not exceed 1000 characters."),
    
    // Rating is required and must be between 1 and 5
    body("review_rating")
      .trim()
      .notEmpty()
      .withMessage("Please provide a rating.")
      .isInt({ min: 1, max: 5 })
      .withMessage("Rating must be between 1 and 5."),
    
    // inv_id is required and must be a valid integer
    body("inv_id")
      .trim()
      .notEmpty()
      .isInt()
      .withMessage("Invalid vehicle ID."),
  ]
}

/* ******************************
 * Check data and return errors or continue to add review
 * ***************************** */
validate.checkReviewData = async (req, res, next) => {
  const { review_text, review_rating, inv_id } = req.body
  let errors = []
  errors = validationResult(req)
  if (!errors.isEmpty()) {
    let nav = await utilities.getNav()
    const invModel = require("../models/inventory-model")
    const vehicleData = await invModel.getInventoryByInventoryId(inv_id)
    const vehicleName = `${vehicleData.inv_year} ${vehicleData.inv_make} ${vehicleData.inv_model}`
    
    res.render("review/add-review", {
      errors,
      title: `Review: ${vehicleName}`,
      nav,
      vehicleName,
      inv_id,
      review_text,
      review_rating,
    })
    return
  }
  next()
}

/*  **********************************
  *  Update Review Data Validation Rules
  * ********************************* */
validate.updateReviewRules = () => {
  return [
    // Review text is required and must be at least 10 characters
    body("review_text")
      .trim()
      .notEmpty()
      .isLength({ min: 10 })
      .withMessage("Review must be at least 10 characters long.")
      .isLength({ max: 1000 })
      .withMessage("Review must not exceed 1000 characters."),
    
    // Rating is required and must be between 1 and 5
    body("review_rating")
      .trim()
      .notEmpty()
      .withMessage("Please provide a rating.")
      .isInt({ min: 1, max: 5 })
      .withMessage("Rating must be between 1 and 5."),
    
    // review_id is required
    body("review_id")
      .trim()
      .notEmpty()
      .isInt()
      .withMessage("Invalid review ID."),
    
    // inv_id is required
    body("inv_id")
      .trim()
      .notEmpty()
      .isInt()
      .withMessage("Invalid vehicle ID."),
  ]
}

/* ******************************
 * Check data and return errors or continue to update review
 * ***************************** */
validate.checkUpdateReviewData = async (req, res, next) => {
  const { review_text, review_rating, review_id, inv_id } = req.body
  let errors = []
  errors = validationResult(req)
  if (!errors.isEmpty()) {
    let nav = await utilities.getNav()
    const reviewData = await reviewModel.getReviewById(review_id)
    const vehicleName = `${reviewData.inv_year} ${reviewData.inv_make} ${reviewData.inv_model}`
    
    res.render("review/edit-review", {
      errors,
      title: `Edit Review: ${vehicleName}`,
      nav,
      vehicleName,
      review_id,
      review_text,
      review_rating,
      inv_id,
    })
    return
  }
  next()
}

module.exports = validate

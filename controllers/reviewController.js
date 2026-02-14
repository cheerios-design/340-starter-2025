const reviewModel = require("../models/review-model")
const invModel = require("../models/inventory-model")
const utilities = require("../utilities/")

const reviewCont = {}

/* ***************************
 *  Build add review view
 * ************************** */
reviewCont.buildAddReview = async function (req, res, next) {
  const inv_id = req.params.inv_id
  const vehicleData = await invModel.getInventoryByInventoryId(inv_id)
  let nav = await utilities.getNav()
  const vehicleName = `${vehicleData.inv_year} ${vehicleData.inv_make} ${vehicleData.inv_model}`
  
  res.render("./review/add-review", {
    title: `Review: ${vehicleName}`,
    nav,
    errors: null,
    vehicleName,
    inv_id,
    review_text: "",
    review_rating: ""
  })
}

/* ***************************
 *  Process add review
 * ************************** */
reviewCont.addReview = async function (req, res, next) {
  const { review_text, review_rating, inv_id } = req.body
  const account_id = res.locals.accountData.account_id
  
  const result = await reviewModel.addReview(review_text, review_rating, inv_id, account_id)
  
  if (result) {
    req.flash(
      "notice",
      "Your review has been successfully submitted!"
    )
    res.redirect(`/inv/detail/${inv_id}`)
  } else {
    req.flash("notice", "Sorry, there was an error submitting your review.")
    res.status(501).redirect(`/review/add/${inv_id}`)
  }
}

/* ***************************
 *  Build edit review view
 * ************************** */
reviewCont.buildEditReview = async function (req, res, next) {
  const review_id = req.params.review_id
  let nav = await utilities.getNav()
  const reviewData = await reviewModel.getReviewById(review_id)
  
  // Check if the user owns this review
  if (reviewData.account_id !== res.locals.accountData.account_id) {
    req.flash("notice", "You do not have permission to edit this review.")
    return res.redirect(`/inv/detail/${reviewData.inv_id}`)
  }
  
  const vehicleName = `${reviewData.inv_year} ${reviewData.inv_make} ${reviewData.inv_model}`
  
  res.render("./review/edit-review", {
    title: `Edit Review: ${vehicleName}`,
    nav,
    errors: null,
    vehicleName,
    review_id: reviewData.review_id,
    review_text: reviewData.review_text,
    review_rating: reviewData.review_rating,
    inv_id: reviewData.inv_id
  })
}

/* ***************************
 *  Process update review
 * ************************** */
reviewCont.updateReview = async function (req, res, next) {
  const { review_id, review_text, review_rating, inv_id } = req.body
  
  const result = await reviewModel.updateReview(review_id, review_text, review_rating)
  
  if (result) {
    req.flash(
      "notice",
      "Your review has been successfully updated!"
    )
    res.redirect(`/inv/detail/${inv_id}`)
  } else {
    req.flash("notice", "Sorry, there was an error updating your review.")
    res.status(501).redirect(`/review/edit/${review_id}`)
  }
}

/* ***************************
 *  Build delete review confirmation view
 * ************************** */
reviewCont.buildDeleteReview = async function (req, res, next) {
  const review_id = req.params.review_id
  let nav = await utilities.getNav()
  const reviewData = await reviewModel.getReviewById(review_id)
  
  // Check if the user owns this review
  if (reviewData.account_id !== res.locals.accountData.account_id) {
    req.flash("notice", "You do not have permission to delete this review.")
    return res.redirect(`/inv/detail/${reviewData.inv_id}`)
  }
  
  const vehicleName = `${reviewData.inv_year} ${reviewData.inv_make} ${reviewData.inv_model}`
  
  res.render("./review/delete-confirm", {
    title: `Delete Review: ${vehicleName}`,
    nav,
    errors: null,
    vehicleName,
    review_id: reviewData.review_id,
    review_text: reviewData.review_text,
    review_rating: reviewData.review_rating,
    inv_id: reviewData.inv_id
  })
}

/* ***************************
 *  Process delete review
 * ************************** */
reviewCont.deleteReview = async function (req, res, next) {
  const { review_id, inv_id } = req.body
  
  const result = await reviewModel.deleteReview(review_id)
  
  if (result) {
    req.flash(
      "notice",
      "Your review has been successfully deleted."
    )
    res.redirect(`/inv/detail/${inv_id}`)
  } else {
    req.flash("notice", "Sorry, there was an error deleting your review.")
    res.status(501).redirect(`/review/delete/${review_id}`)
  }
}

/* ***************************
 *  Build user's reviews list view
 * ************************** */
reviewCont.buildUserReviews = async function (req, res, next) {
  const account_id = res.locals.accountData.account_id
  let nav = await utilities.getNav()
  const reviews = await reviewModel.getReviewsByAccountId(account_id)
  
  res.render("./review/user-reviews", {
    title: "My Reviews",
    nav,
    reviews,
    errors: null
  })
}

module.exports = reviewCont

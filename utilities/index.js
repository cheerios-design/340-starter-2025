const invModel = require("../models/inventory-model")
const Util = {}

/* ************************
 * Constructs the nav HTML unordered list
 ************************** */
Util.getNav = async function (req, res, next) {
  let data = await invModel.getClassifications()
  let list = "<ul>"
  list += '<li><a href="/" title="Home page">Home</a></li>'
  data.rows.forEach((row) => {
    list += "<li>"
    list +=
      '<a href="/inv/type/' +
      row.classification_id +
      '" title="See our inventory of ' +
      row.classification_name +
      ' vehicles">' +
      row.classification_name +
      "</a>"
    list += "</li>"
  })
  list += "</ul>"
  return list
}

/* **************************************
* Build the classification view HTML
* ************************************ */
Util.buildClassificationGrid = async function(data){
  let grid
  if(data.length > 0){
    grid = '<ul id="inv-display">'
    data.forEach(vehicle => { 
      grid += '<li>'
      grid +=  '<a href="../../inv/detail/'+ vehicle.inv_id 
      + '" title="View ' + vehicle.inv_make + ' '+ vehicle.inv_model 
      + 'details"><img src="' + vehicle.inv_thumbnail 
      +'" alt="Image of '+ vehicle.inv_make + ' ' + vehicle.inv_model 
      +' on CSE Motors" /></a>'
      grid += '<div class="namePrice">'
      grid += '<hr />'
      grid += '<h2>'
      grid += '<a href="../../inv/detail/' + vehicle.inv_id +'" title="View ' 
      + vehicle.inv_make + ' ' + vehicle.inv_model + ' details">' 
      + vehicle.inv_make + ' ' + vehicle.inv_model + '</a>'
      grid += '</h2>'
      grid += '<span>$' 
      + new Intl.NumberFormat('en-US').format(vehicle.inv_price) + '</span>'
      grid += '</div>'
      grid += '</li>'
    })
    grid += '</ul>'
  } else { 
    grid += '<p class="notice">Sorry, no matching vehicles could be found.</p>'
  }
  return grid
}

/* **************************************
* Build the vehicle detail view HTML
* ************************************ */
Util.buildVehicleDetail = function(vehicle){
  let detail = '<div id="vehicle-detail">'
  detail += '<div class="vehicle-image">'
  detail += '<img src="' + vehicle.inv_image + '" alt="Image of ' 
  + vehicle.inv_make + ' ' + vehicle.inv_model + '">'
  detail += '</div>'
  detail += '<div class="vehicle-info">'
  detail += '<h2>' + vehicle.inv_make + ' ' + vehicle.inv_model + ' Details</h2>'
  detail += '<p class="vehicle-price"><strong>Price: $' 
  + new Intl.NumberFormat('en-US').format(vehicle.inv_price) + '</strong></p>'
  detail += '<p><strong>Description:</strong> ' + vehicle.inv_description + '</p>'
  detail += '<p><strong>Color:</strong> ' + vehicle.inv_color + '</p>'
  detail += '<p><strong>Mileage:</strong> ' 
  + new Intl.NumberFormat('en-US').format(vehicle.inv_miles) + ' miles</p>'
  detail += '</div>'
  detail += '</div>'
  return detail
}

/* ************************
 * Build classification list for dropdown
 ************************** */
Util.buildClassificationList = async function (classification_id = null) {
  let data = await invModel.getClassifications()
  let classificationList =
    '<select name="classification_id" id="classificationList" required>'
  classificationList += "<option value=''>Choose a Classification</option>"
  data.rows.forEach((row) => {
    classificationList += '<option value="' + row.classification_id + '"'
    if (
      classification_id != null &&
      row.classification_id == classification_id
    ) {
      classificationList += " selected "
    }
    classificationList += ">" + row.classification_name + "</option>"
  })
  classificationList += "</select>"
  return classificationList
}

/* ****************************************
 * Middleware For Handling Errors
 * Wrap other function in this for 
 * General Error Handling
 **************************************** */
Util.handleErrors = fn => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next)

/* **************************************
* Build reviews display HTML
* ************************************ */
Util.buildReviewsDisplay = function(reviews, accountData, inv_id){
  let display = '<div id="reviews-section">'
  display += '<h2>Customer Reviews</h2>'
  
  if(reviews && reviews.length > 0){
    // Calculate average rating
    let totalRating = 0
    reviews.forEach(review => {
      totalRating += review.review_rating
    })
    let avgRating = (totalRating / reviews.length).toFixed(1)
    
    display += '<div class="reviews-summary">'
    display += '<p class="avg-rating"><strong>Average Rating:</strong> '
    for(let i = 0; i < Math.floor(avgRating); i++) {
      display += '★'
    }
    if(avgRating % 1 >= 0.5) {
      display += '★'
    }
    for(let i = Math.ceil(avgRating); i < 5; i++) {
      display += '☆'
    }
    display += ' (' + avgRating + '/5 from ' + reviews.length + ' review' + (reviews.length > 1 ? 's' : '') + ')</p>'
    display += '</div>'
    
    display += '<div class="reviews-list">'
    reviews.forEach(review => {
      display += '<div class="review-item">'
      display += '<div class="review-header">'
      display += '<p class="reviewer-name"><strong>' + review.account_firstname + '</strong></p>'
      display += '<p class="review-date">' + new Date(review.review_date).toLocaleDateString() + '</p>'
      display += '</div>'
      display += '<div class="review-rating">'
      for(let i = 0; i < review.review_rating; i++) {
        display += '★'
      }
      for(let i = review.review_rating; i < 5; i++) {
        display += '☆'
      }
      display += ' (' + review.review_rating + '/5)'
      display += '</div>'
      display += '<p class="review-text">' + review.review_text + '</p>'
      
      // Show edit/delete buttons if user owns this review
      if(accountData && accountData.account_id === review.account_id) {
        display += '<div class="review-actions">'
        display += '<a href="/review/edit/' + review.review_id + '" class="btn-small">Edit</a>'
        display += '<a href="/review/delete/' + review.review_id + '" class="btn-small btn-danger">Delete</a>'
        display += '</div>'
      }
      display += '</div>'
    })
    display += '</div>'
  } else {
    display += '<p class="no-reviews">No reviews yet. Be the first to review this vehicle!</p>'
  }
  
  // Add review button (only if logged in)
  if(accountData) {
    display += '<div class="add-review-btn">'
    display += '<a href="/review/add/' + inv_id + '" class="btn-primary">Write a Review</a>'
    display += '</div>'
  } else {
    display += '<p class="login-prompt"><a href="/account/login">Log in</a> to write a review.</p>'
  }
  
  display += '</div>'
  return display
}

module.exports = Util

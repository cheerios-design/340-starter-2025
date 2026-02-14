const pool = require("../database/")

/* ***************************
 *  Get all reviews for a specific vehicle
 * ************************** */
async function getReviewsByInventoryId(inv_id) {
  try {
    const data = await pool.query(
      `SELECT r.review_id, r.review_text, r.review_rating, r.review_date, 
              a.account_firstname, a.account_lastname, a.account_id
       FROM public.review AS r 
       JOIN public.account AS a 
       ON r.account_id = a.account_id 
       WHERE r.inv_id = $1
       ORDER BY r.review_date DESC`,
      [inv_id]
    )
    return data.rows
  } catch (error) {
    console.error("getReviewsByInventoryId error: " + error)
    throw error
  }
}

/* ***************************
 *  Get all reviews by a specific account
 * ************************** */
async function getReviewsByAccountId(account_id) {
  try {
    const data = await pool.query(
      `SELECT r.review_id, r.review_text, r.review_rating, r.review_date,
              i.inv_make, i.inv_model, i.inv_year, r.inv_id
       FROM public.review AS r 
       JOIN public.inventory AS i 
       ON r.inv_id = i.inv_id 
       WHERE r.account_id = $1
       ORDER BY r.review_date DESC`,
      [account_id]
    )
    return data.rows
  } catch (error) {
    console.error("getReviewsByAccountId error: " + error)
    throw error
  }
}

/* ***************************
 *  Get a specific review by review_id
 * ************************** */
async function getReviewById(review_id) {
  try {
    const data = await pool.query(
      `SELECT r.review_id, r.review_text, r.review_rating, r.review_date,
              r.inv_id, r.account_id,
              i.inv_make, i.inv_model, i.inv_year
       FROM public.review AS r 
       JOIN public.inventory AS i 
       ON r.inv_id = i.inv_id 
       WHERE r.review_id = $1`,
      [review_id]
    )
    return data.rows[0]
  } catch (error) {
    console.error("getReviewById error: " + error)
    throw error
  }
}

/* ***************************
 *  Add new review
 * ************************** */
async function addReview(review_text, review_rating, inv_id, account_id) {
  try {
    const sql = `INSERT INTO review (review_text, review_rating, inv_id, account_id) 
                 VALUES ($1, $2, $3, $4) 
                 RETURNING *`
    const result = await pool.query(sql, [review_text, review_rating, inv_id, account_id])
    return result.rows[0]
  } catch (error) {
    console.error("addReview error: " + error)
    return error.message
  }
}

/* ***************************
 *  Update review
 * ************************** */
async function updateReview(review_id, review_text, review_rating) {
  try {
    const sql = `UPDATE review 
                 SET review_text = $1, review_rating = $2 
                 WHERE review_id = $3 
                 RETURNING *`
    const result = await pool.query(sql, [review_text, review_rating, review_id])
    return result.rows[0]
  } catch (error) {
    console.error("updateReview error: " + error)
    return error.message
  }
}

/* ***************************
 *  Delete review
 * ************************** */
async function deleteReview(review_id) {
  try {
    const sql = "DELETE FROM review WHERE review_id = $1"
    const result = await pool.query(sql, [review_id])
    return result
  } catch (error) {
    console.error("deleteReview error: " + error)
    return error.message
  }
}

/* ***************************
 *  Get average rating for a vehicle
 * ************************** */
async function getAverageRating(inv_id) {
  try {
    const data = await pool.query(
      `SELECT ROUND(AVG(review_rating)::numeric, 1) as avg_rating, 
              COUNT(*) as review_count
       FROM public.review 
       WHERE inv_id = $1`,
      [inv_id]
    )
    return data.rows[0]
  } catch (error) {
    console.error("getAverageRating error: " + error)
    throw error
  }
}

module.exports = { 
  getReviewsByInventoryId, 
  getReviewsByAccountId, 
  getReviewById,
  addReview, 
  updateReview, 
  deleteReview,
  getAverageRating
}

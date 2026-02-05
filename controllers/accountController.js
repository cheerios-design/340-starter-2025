const utilities = require("../utilities/")
const accountModel = {}

/* ****************************************
*  Deliver login view
* *************************************** */
async function buildLogin(req, res, next) {
  let nav = await utilities.getNav()
  res.render("account/login", {
    title: "Login",
    nav,
    errors: null,
  })
}

/* ****************************************
*  Deliver registration view
* *************************************** */
async function buildRegister(req, res, next) {
  let nav = await utilities.getNav()
  res.render("account/register", {
    title: "Register",
    nav,
    errors: null,
  })
}

/* ****************************************
*  Process Registration
* *************************************** */
async function registerAccount(req, res) {
  let nav = await utilities.getNav()
  const { account_firstname, account_lastname, account_email, account_password } = req.body

  // For now, just redirect with a success message
  // In a real application, you would:
  // 1. Hash the password
  // 2. Insert into database
  // 3. Handle any errors
  
  req.flash(
    "notice",
    `Congratulations, you\'re registered ${account_firstname}. Please log in.`
  )
  res.status(201).render("account/login", {
    title: "Login",
    nav,
    errors: null,
  })
}

module.exports = { buildLogin, buildRegister, registerAccount }

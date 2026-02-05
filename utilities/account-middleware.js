const jwt = require("jsonwebtoken")
require("dotenv").config()

/* ****************************************
 * Check Login
 **************************************** */
function checkLogin(req, res, next) {
  if (res.locals.loggedin) {
    next()
  } else {
    req.flash("notice", "Please log in.")
    return res.redirect("/account/login")
  }
}

/* ****************************************
 * Middleware to check token validity
 **************************************** */
function checkJWTToken(req, res, next) {
  if (req.cookies.jwt) {
    jwt.verify(
      req.cookies.jwt,
      process.env.ACCESS_TOKEN_SECRET,
      function (err, accountData) {
        if (err) {
          req.flash("notice", "Please log in")
          res.clearCookie("jwt")
          return res.redirect("/account/login")
        }
        res.locals.accountData = accountData
        res.locals.loggedin = 1
        next()
      }
    )
  } else {
    next()
  }
}

module.exports = { checkJWTToken, checkLogin }

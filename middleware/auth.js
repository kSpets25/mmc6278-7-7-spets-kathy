function checkAuth(req, res, next) {
	if (req.session && req.session.loggedIn) {
		return next()
	}
	res.redirect('/login')

	// Check req.session.loggedIn to see if the user is logged in
	// If the user is logged in, call next()
	// If the user is not logged in, redirect to /login
}

module.exports = checkAuth

var numeral = require('numeral');
var bcrypt = require('bcrypt-nodejs');
var dateFormat = require('dateformat');

exports.index = function(req, res, next){
	res.render('pages/dashboard/index');
}

exports.loggedIn = function(req, res, next)
{
	if (req.session.user) { // req.session.passport._id

		next();

	} else {
		// Redirect routes
		res.redirect('/login');

	}

}

exports.dashboard = function(req, res) {
	
	
	res.render('pages/dashboard/index', {
		error : req.flash("error"),
		success: req.flash("success"),
		session:req.session,
		username: req.user.name
	 });
	 
}


// exports.signup = function(req, res) {

// 	if (req.session.user) {

// 		res.redirect('/home');

// 	} else {

// 		res.render('signup', {
// 			error : req.flash("error"),
// 			success: req.flash("success"),
// 			session:req.session
// 		});
// 	}

// }


exports.login = function(req, res) {


	
	if (req.session.user) {

		res.redirect('/dashboard');

	} else {

		res.render('pages/common/login', {
			error : req.flash("error"),
			success: req.flash("success"),
			session:req.session
		});

	}
	
}


    

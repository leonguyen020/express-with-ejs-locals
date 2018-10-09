var home = require('../app/controllers/home');

//you can include all your controllers

module.exports = function (app, passport) {

    app.get('/index',home.index);

    app.get('/login', home.login);
    // app.get('/signup', home.signup);

    app.get('/', home.loggedIn, home.dashboard);//home
    app.get('/dashboard', home.loggedIn, home.dashboard);//home

    // app.post('/signup', passport.authenticate('local-signup', {
    //     successRedirect: '/home', // redirect to the secure profile section
    //     failureRedirect: '/signup', // redirect back to the signup page if there is an error
    //     failureFlash: true // allow flash messages
    // }));
    // process the login form
    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/dashboard', // redirect to the secure profile section
        failureRedirect: '/login', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));

    app.get('/logout', function(req, res){
        req.session.destroy();
        res.redirect('/login');
    });


}

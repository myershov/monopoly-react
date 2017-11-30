var exports = module.exports = {},
    passport = require('passport'),
    Strategy = require('passport-local').Strategy,
    db = require('./db');

exports.init = function(app, io){
    passport.use(new Strategy(
        function(username, password, cb) {
            db.users.findByUsername(username, function(err, user) {
                if (err) { return cb(err); }
                if (!user) { return cb(null, false); }
                if (user.password !== password) { return cb(null, false); }
                return cb(null, user);
            });
        }
    ));

    passport.serializeUser(function(user, cb) {
        cb(null, user.id);
    });

    passport.deserializeUser(function(id, cb) {
        db.users.findById(id, function (err, user) {
            if (err) { return cb(err); }
            cb(null, user);
        });
    });

    app.use(require('morgan')('combined'));
    app.use(require('cookie-parser')());
    app.use(require('body-parser').urlencoded({ extended: true }));
    app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
    app.use(passport.initialize());
    app.use(passport.session());

    app.post('/login', passport.authenticate('local', { failureRedirect: '/login' }), function(req, res) {
        io.emit('save static user information', req.user);
        res.redirect('/#');
    });
};
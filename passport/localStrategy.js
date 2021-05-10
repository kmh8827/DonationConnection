const db = require('../models');
const LocalStrategy = require('passport-local').Strategy;

const strategy = new LocalStrategy(
    {
        usernameField: 'username'
    },
    (username, password, done) => {
        console.log('HI I AM LOCAL STRATEGY');
        db.User.findOne({ 'username': username }, (err, userMatch) => {
            if (err) return done(err);
            if (!userMatch) return done(null, false, { message: 'Incorrect Username, Please try again or Register a new User' });
            if (!userMatch.checkPassword(password)) return done(null, false, { message: 'Incorrect Password' })
            return done(null, userMatch);
        });
    }
);

module.exports = strategy;
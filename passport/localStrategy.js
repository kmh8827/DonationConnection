const db = require('../models');
const LocalStrategy = require('passport-local').Strategy;

const strategy = new LocalStrategy(
    (username, password, done) => {
        console.log('HI I AM LOCAL STRATEGY');
        console.log(username);
        console.log(password);
        db.Users.findOne({ 'username' : username }, (err, userMatch) => {
            console.log('USERMATCH',userMatch);
            if (err) return done(err);
            if (!userMatch) return done(null, false, { message: 'Incorrect Username, Please try again or Register a new User' });
            if (!userMatch.checkPassword(password)) return done(null, false, { message: 'Incorrect Password' })
            console.log('NOW LEAVING LOCAL STRATEGY');
            return done(null, userMatch);
        });
    }
);

module.exports = strategy;
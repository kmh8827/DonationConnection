const passport = require('passport');
const LocalStrategy = require('./localStrategy');
const db = require ('../models');

passport.serializeUser((user, done) => {
    console.log('SERIALIZE', user);
    done(null, { _id: user });
});

passport.deserializeUser((id, done) => {
    console.log('DESERIALIZE', id)
    db.Users.findOne(
        { _id: id },
        'firstName lastName username',
        (err, user) => {
            console.log('Deserialize user called');
            console.log(user);
            done( null, user);
        }
    );
});

// Register Strategies
passport.use(LocalStrategy);

module.exports = passport;
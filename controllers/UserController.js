const db = require('../models');

// Defining Methods for userController
module.exports = {
    // Checks to see if the user is still logged in
    getUser: (req, res, next) => {
        if (req.user) return res.json({ user: req.user });
        return res.json({ user: null });
    },
    // Registers a new user
    register: (req, res) => {
        const { firstName, lastName, username, email, password } = req.body;
        // Checks to see if the username already exists
        db.User.findOne({ 'username': username }, (err, userMatch) => {
            if (userMatch) {
                return res.json({ 
                    error: `Sorry, there is already someone with the username: ${username}` 
            });
        }
        // Checks to see if the user has sent all necessary information, no blanks
        if (firstName && lastName && email && username && password.length >= 8) {
        const newUser = new db.User({
            'firstName': firstName,
            'lastName': lastName,
            'username': username,
            'email': email,
            'password': password
        });
        // Saves the new user
        newUser.save((err, savedUser) => {
            if (err) return res.json(err);
            return res.json(savedUser);
        });
        }
    });
    },
    // Logs the user out
    logout: (req, res) => {
        if (req.user) {
            req.session.destroy();
            res.clearCookie('connect.sid'); //Clean-Up
            return res.json({ msg: 'logging you out' });
        }
        else return res.json({ msg: 'no user to log out!' });
    },
    // Passport authentication method 1
    auth: (req, res, next) => {
        next();
    },
    // Passport authentication method 2
    authenticate: (req, res) => {
        const user = JSON.parse(JSON.stringify(req.user));
        const cleanUser = Object.assign({}, user);
        if (cleanUser) delete cleanUser.password;
        res.json({ user: cleanUser });
    }
};
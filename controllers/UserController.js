const db = require('../models');

// Defining Methods for userController
module.exports = {
    getUser: (req, res, next) => {
        if (req.user) return res.json({ user: req.user });
        return res.json({ user: null });
    },
    register: (req, res) => {
        const { firstName, lastName, username, email, password } = req.body;
        // Add Validation
        db.User.findOne({ 'username': username }, (err, userMatch) => {
            if (userMatch) {
                return res.json({ 
                    error: `Sorry, there is already someone with the username: ${username}` 
            });
        }
        if (firstName && lastName && email && username && password.length >= 8) {
        const newUser = new db.User({
            'firstName': firstName,
            'lastName': lastName,
            'username': username,
            'email': email,
            'password': password
        });
        newUser.save((err, savedUser) => {
            if (err) return res.json(err);
            return res.json(savedUser);
        });
        }
    });
    },
    logout: (req, res) => {
        if (req.user) {
            req.session.destroy();
            res.clearCookie('connect.sid'); //Clean-Up
            return res.json({ msg: 'logging you out' });
        }
        else return res.json({ msg: 'no user to log out!' });
    },
    auth: (req, res, next) => {
        next();
    },
    authenticate: (req, res) => {
        const user = JSON.parse(JSON.stringify(req.user));
        const cleanUser = Object.assign({}, user);
        if (cleanUser) delete cleanUser.password;
        res.json({ user: cleanUser });
    }
};
const db = require('../models');

// Defining Methods for userController
module.exports = {
    getUser: (req, res, next) => {
        if (req.user) return res.json({ user: req.user });
        return res.json({ user: null });
    },
    register: (req, res) => {
        const { firstName, lastName, username, password } = req.body;
        // Add Validation
        db.User.findOne({ 'username': username }, (err, userMatch ) => {
            if (userMatch) return res.json({ error: `Sorry, there is already someone with the username: ${username}` });
        },
        const newUser = new db.User({
            'firstName': firstName,
            'lastName': lastName,
            'username': username,
            'password': password
        });
        newUser.save((err, savedUser) => {
            if (err) return res.json(err);
            return res.json(savedUser);
        });
    },
};
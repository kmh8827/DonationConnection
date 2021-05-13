const db = require('../models');

// Defining Methods for userController
module.exports = {
    getUser: (req, res, next) => {
        console.log('GETUSER HERE', req.user);
        if (req.user) return res.json({ user: req.user });
        return res.json({ user: null });
    },
    register: (req, res) => {
        const { firstName, lastName, username, password } = req.body;
        // Add Validation
        db.Users.findOne({ 'username': username }, (err, userMatch) => {
            if (userMatch) {
                return res.json({ 
                    error: `Sorry, there is already someone with the username: ${username}` 
            });
        }
        const newUser = new db.Users({
            'firstName': firstName,
            'lastName': lastName,
            'username': username,
            'password': password
        });
        newUser.save((err, savedUser) => {
            if (err) return res.json(err);
            return res.json(savedUser);
        });
    });
    },
    logout: (req, res) => {
        if (req.username) {
            req.session.destroy();
            res.clearCookie('connect.sid'); //Clean-Up
            return res.json({ msg: 'logging you out' });
        }
        else return res.json({ msg: 'no user to log out!' });
    },
    auth: (req, res, next) => {
        console.log('HI HI USERCONTROLELR AUTH HERE');
        next();
    },
    authenticate: (req, res) => {
        console.log('NOW ARRIVING AT AUTHENTICATE STATION');
        console.log(req.body);
        console.log(req.body.username);
        console.log(JSON.parse(JSON.stringify(req.user)));
        const user = JSON.parse(JSON.stringify(req.user));
        const cleanUser = Object.assign({}, user);
        if (cleanUser) delete cleanUser.password;
        res.json({ user: cleanUser });
    }
};
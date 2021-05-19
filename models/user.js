const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
    firstName: { type: String, trim: true, unique: false },
    lastName: { type: String, trim: true, unique: false },
    username: { type: String, trim: true, unique: true, require: true },
    email: { type: String, trim: true, unique: true, require: true },
    password: { type: String, trim: true, unique: false, require: true },
});

UserSchema.methods = {
    checkPassword: function(inputPassword) {
        console.log('inputPassword', inputPassword);
        console.log(this);
        return bcrypt.compareSync(inputPassword, this.password);
    },
    hashPassword: function(plainTextPassword) {
        return bcrypt.hashSync(plainTextPassword, 10);
    }
};

UserSchema.pre('save', function(next) {
    if (!this.password) next();
    else {
        this.password = this.hashPassword(this.password);
        next();
    }
})

const User = mongoose.model("User", UserSchema);

module.exports = User;
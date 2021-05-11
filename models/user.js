const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
    firstName: { type: String, trim: true, unique: false },
    lastName: { type: String, trim: true, unique: false },
    username: { type: String, trim: true, unique: false, require: false },
    password: { type: String, unique: false, required: false },
    donations: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Donation'
        }
    ]
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

const Users = mongoose.model("Users", UserSchema);

module.exports = Users;
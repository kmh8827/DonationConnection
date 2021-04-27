const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        trim: true
    },
    name: {
        firstname: {
            type: String,
            trim: true
        },
        lastname: {
            type: String,
            trim: true
        }
    },
    password: {
        type: String
    },
    location: {
        type: String
    }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
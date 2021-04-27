const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DonationsSchema = new Schema({
    companyName: {
        type: String,
        trim: true
    },
    perishable: {
        type: Boolean,
        default: 'yes'
    },
    expDate: {
        type: String,
        trim: true
    },
    pickup: {
        type: String,
        trim: true
    },
    address: {
        Type: String,
        trim: true
    },
    allergies: {
        type: Boolean,
        default: 'yes',
        allergyInfo: {
            type: String,
            trim: true
        }
    }
});

const Donations = mongoose.model("Donations", DonationsSchema);

module.exports = Donations;
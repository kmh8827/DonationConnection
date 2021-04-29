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
        type: String,
        trim: true
    },
    allergies: {
        options: ['egg', 'lactose', 'gluten', 'peanut', 'tree nut', 'shellfish', 'soy', 'other'],
        otherInfo: {
            type: String,
            trim: true
        }
    }
});

const Donations = mongoose.model("Donations", DonationsSchema);

module.exports = Donations;
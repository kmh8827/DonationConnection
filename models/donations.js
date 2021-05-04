const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DonationsSchema = new Schema({
    product: {
        type: String,
        trim: true
    },
    companyName: {
        type: String,
        trim: true
    },
    perishable: {
        type: String,
        default: true
    },
    expDate: {
        type: String,
        trim: true
    },
    availability: {
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
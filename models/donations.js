const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DonationsSchema = new Schema({
    product: {
        type: String,
        trim: true,
        required: true
    },
    companyName: {
        type: String,
        trim: true,
        required: true
    },
    perishable: {
        type: String,
        default: true,
    },
    expDate: {
        type: String,
        trim: true
    },
    availability: {
        type: String,
        trim: true,
        required: true
    },
    address: {
        type: String,
        trim: true,
        required: true
    },
    allergies: {
        type: String,
        trim: true,
        required: true
    }
});

const Donations = mongoose.model("Donations", DonationsSchema);

module.exports = Donations;
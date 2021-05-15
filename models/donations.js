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
        type: String
    },
    availability: {
        type: String,
        required: true
    },
    address: {
        type: String,
        trim: true,
        required: true
    },
    specialInstructions: {
        type: String
    },
    allergies: {
        type: String,
        trim: true
    },
    quantity: {
        type: Number,
    },
    userId: {
        type: String,
        trime: true,
        required: true
    }
});

const Donations = mongoose.model("Donations", DonationsSchema);

module.exports = Donations;
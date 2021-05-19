const router = require('express').Router();
const donationController = require('../../controllers/DonationController');

router.route('/available/:id')
    // Changes the avialable status to true, makes a donation available again, cancels the reservation placed on it
    .post(donationController.makeAvailable)
    
router.route('/complete/:id')
    // Changes the available status to complete, indicates that the pickup of donation is completed
    .post(donationController.completeDonation)

router.route('/give')
    // Gets an array of available donations to send to Pickup Page
    .get(donationController.findDonation)
    // Creates a new donation to be visible on the Pickup Page
    .post(donationController.addDonation)

router.route('/receive')
    // Gets a list of all available donations to reserve
    .get(donationController.findAll)

router.route('/receive/:id')
    // Changes the available status to false, allows a user to reserve a donation
    .post(donationController.reserve)

router.route('/remove/:id')
    // Removes a donation from the database, If the user no longer wants to display it
    .delete(donationController.remove)

router.route('/userDonations')
    // Displays the donations that are associated with the signed in User
    .post(donationController.findMine)

module.exports = router;
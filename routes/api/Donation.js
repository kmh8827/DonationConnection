const router = require('express').Router();
const donationController = require('../../controllers/DonationController');

router.route('/give')
    .get(donationController.findDonation)
    .post(donationController.addDonation)
    .delete(donationController.removeDonation);

router.route('/receive')
    .get(donationController.findAll)
    .post(donationController.reserve)

module.exports = router;
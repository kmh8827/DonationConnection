const router = require('express').Router();
const donationController = require('../../controllers/DonationController');

router.route('/available/:id')
    .post(donationController.makeAvailable)
    
router.route('/complete/:id')
    .post(donationController.completeDonation)

router.route('/give')
    .get(donationController.findDonation)
    .post(donationController.addDonation)

router.route('/receive')
    .get(donationController.findAll)

router.route('/receive/:id')
    .post(donationController.reserve)

router.route('/remove/:id')
    .delete(donationController.remove)

router.route('/userDonations')
    .post(donationController.findMine)

module.exports = router;
const router = require('express').Router();
const donationRoutes = require('./Donation');

router.use('/donations', donationRoutes);

module.exports = router;
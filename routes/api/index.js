const router = require('express').Router();
const donationRoutes = require('./Donation');
const userRoutes = require('./User');

router.use('/donations', donationRoutes);
router.use('/user', userRoutes);

module.exports = router;
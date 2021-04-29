const path = require('path');
const router = require('express').Router();
const authRoutes = require('./auth');
const apiRoutes = require('./api');

// Authentication Routes
router.use('/auth', authRoutes);

// API Routes
router.use('/api', apiRoutes);

// If no routes are hit, send to React Application
router.use((req, res) => {
    res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

module.exports = router;
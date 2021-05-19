const db = require('../models');

module.exports = {
    // Creates a new Donation
    addDonation: (req, res) => {
        db.Donations
            .create(req.body)
            .then(donations => res.json(donations))
            .catch(err => res.status(422).json(err));
    },
    // Changes a donations status to complete, transaction completed
    completeDonation: (req, res) => {
        db.Donations
            .findOneAndUpdate({ _id: req.params.id }, { 'availability': 'complete' }, { useFindAndModify: false })
            .then(donations => res.json(donations))
            .catch(err => res.status(422).json(err));
    },
    // Displays all donations
    findAll: (req, res) => {
        db.Donations
            .find()
            .sort({ date: -1 })
            .then(donations => res.json(donations))
            .catch(err => res.status(422).json(err));
    },
    // Find's a specific donation
    findDonation: (req, res) => {
        db.Donations
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    // Find's a user's posted Donations
    findMyPosted: (req, res) => {
        db.Donations
            .find({ userId: req.body.userId })
            .then(userPosted => res.json(userPosted))
            .catch(err => res.status(422).json(err));
    },
    findMyReserved: (req, res) => {
        console.log(req.body);
        db.Donations
            .find({ reservedBy: req.body.reservedBy })
            .then(userReserved => res.json(userReserved))
            .catch(err => res.status(422).json(err));
    },
    // Ends the reservation on a donation
    makeAvailable: (req, res) => {
        db.Donations
            .findOneAndUpdate({ _id: req.params.id }, { 'availability': 'true' }, { useFindAndModify: false })
            .then(donations => res.json(donations))
            .catch(err => res.status(422).json(err));
    },
    // Creates a reservation on a donation
    reserve: (req, res) => {
        db.Donations
            .findOneAndUpdate({ _id: req.params.id }, { 'availability': 'false', 'reservedBy': req.body.userId }, { useFindAndModify: false })
            .then(donations => (res.json(donations)))
            .catch(err => res.status(422).json(err));
    },
    // Removes a donation from the database
    remove: (req, res) => {
        db.Donations
            .findOneAndDelete({ _id: req.params.id })
            .catch(err => res.status(422).json(err));
    }
}

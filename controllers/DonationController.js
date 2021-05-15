const db = require('../models');

module.exports = {
    findAll: (req, res) => {
        db.Donations
            .find()
            .sort({ date: -1 })
            .then(donations => res.json(donations))
            .catch(err => res.status(422).json(err));
    },
    reserve: (req, res) => {
        db.Donations
            .findOneAndUpdate({ _id: req.params.id }, { 'availability': 'false' }, { useFindAndModify: false })
            .then(donations => res.json(donations))
            .catch(err => res.status(422).json(err));
    },
    addDonation: (req, res) => {
        console.log('REQ BODY IS ', req.body);
        db.Donations
            .create(req.body)
            .then(donations => res.json(donations))
            .catch(err => res.status(422).json(err));
    },
    removeDonation: (req, res) => {
        db.Donations
            .findById({ _id: req.params.id })
            .then(donation => donation.remove())
            .then(donations => res.json(donations))
            .catch(err => res.status(422).json(err));
    },
    findDonation: (req, res) => {
        db.Donations
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findMine: (req, res) => {
        db.Donations
            .find({ userId: req.body })
            .then(usersDonations => res.json(usersDonations))
            .catch(err => res.status(422).json(err));
    }
}
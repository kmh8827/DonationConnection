const ObjectId = require('mongoose').Types.ObjectId;
const db = require('../models');

module.exports = {
    findAll: (req, res) => {
        db.Donations
            .find()
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    reserve: (req, res) => {
        db.Donations
            .findOneAndUpdate({ _id: req.params.id }, { 'availability': 'false' }, { useFindAndModify: false })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    addDonation: (req, res) => {
        console.log('I MADE IT HERE YAY');
        // db.User
        //     .findOneAndUpdate({ _id: req.user_id }, { $push: { donation: new ObjectId(req.params.id) } }, { new: true })
        //     .then(() => {
        db.Donations
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        // });
    },
    removeDonation: (req, res) => {
        db.User
            .findOneAndUpdate({ _id: req.user_id }, { $push: { donation: new ObjectId(req.params.id) } }, { new: true })
            .then(() => {
                db.Donations
                    .findById({ _id: req.params.id })
                    .then(dbModel => dbModel.remove())
                    .then(dbModel => res.json(dbModel))
                    .catch(err => res.status(422).json(err));
            });
    },
    findDonation: (req, res) => {
        db.User
            .findOne({ _id: req.user_id })
            .then(() => {
                db.Donations
                    .findById(req.params.id)
                    .then(dbModel => res.json(dbModel))
                    .catch(err => res.status(422).json(err));
            });
    },
    sortDonation: (req, res) => {
        db.Donations
            .find({})
            .where(req.body).in(allergies)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
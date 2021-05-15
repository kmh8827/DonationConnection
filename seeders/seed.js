let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/donationDB", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let donationSeed = [
  {
    day: new Date().setDate(new Date().getDate() - 10),
    product: '12 Cases of Chicken Wings',
    companyName: 'KFC',
    perishable: 'true',
    expDate: '5-10-21',
    availability: 'true',
    address: '112 Olive St, Franklin NC 28734',
    allergies: 'egg',
    userId: '123'
  }
];

db.Donations.deleteMany({})
  .then(() => db.Donations.collection.insertMany(donationSeed))
  .then(data => {
    console.log(data.result.n, " record insterted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

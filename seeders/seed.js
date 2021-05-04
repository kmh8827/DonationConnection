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
    allergies: 'egg'

  },

  {
    day: new Date().setDate(new Date().getDate() - 10),
    product: '8 Cases of Chicken Nuggets',
    companyName: 'Zaxbys',
    perishable: 'true',
    expDate: '5-6-21',
    availability: 'true',
    address: '1008 Business dr, Franklin NC 28734',
    allergies: 'egg'
  },
  {
    day: new Date().setDate(new Date().getDate() - 10),
    product: '10 Apple Pies',
    companyName: 'Hardees',
    perishable: 'true',
    expDate: '5-8-21',
    availability: 'true',
    address: '206 Jones rd, Waynesville NC 28734',
    allergies: 'egg, lactose, gluten'
  },
  {
    day: new Date().setDate(new Date().getDate() - 10),
    product: '120 Bread Sticks',
    companyName: 'Olive Garden',
    perishable: 'true',
    expDate: '5-10-21',
    availability: 'true',
    address: '502 Depot St, Ashville NC 28734',
    allergies: 'Please ask us',

  },
  {
    day: new Date().setDate(new Date().getDate() - 10),
    product: '3 Steaks',
    companyName: 'Long Horn',
    perishable: 'true',
    expDate: '5-5-21',
    availability: 'true',
    address: '112 Olive St, Franklin NC 28734',
    allergies: 'egg',

  },
  {
    day: new Date().setDate(new Date().getDate() - 10),
    product: '20 Fries',
    companyName: 'Mc Donalds',
    perishable: 'true',
    expDate: '5-23-21',
    availability: 'true',
    address: '125 Olive St, Franklin NC 28734',
    allergies: 'egg',
  },
  {
    day: new Date().setDate(new Date().getDate() - 10),
    product: 'Baked Potatos',
    companyName: 'Wendys',
    perishable: 'true',
    expDate: '5-19-21',
    availability: 'true',
    address: '112 McCotter St, Franklin NC 28734',
    allergies: 'egg'


  },
  {
    day: new Date().setDate(new Date().getDate() - 10),
    companyName: 'Arbys',
    product: '1 Ham Sandwich',
    perishable: 'true',
    expDate: '5-14-21',
    availability: 'true',
    address: '112 James Rd St, Franklin NC 28734',
    allergies: 'egg'

  },
  {
    day: new Date().setDate(new Date().getDate() - 10),
    product: '3 Gallons of Tea',
    companyName: 'Chick-fil-la',
    perishable: 'true',
    expDate: '5-10-21',
    availability: 'true',
    address: '503 Main St, Waynesville NC 28734',
    allergies: 'egg'
  },
  {
    day: new Date().setDate(new Date().getDate() - 10),
    product: '3 Cheese Pizzas',
    companyName: 'Pizza Hut',
    perishable: 'true',
    expDate: '5-8-21',
    availability: 'true',
    address: '128 Main, Franklin NC 28734',
    allergies: 'gluten'
  },
  {
    day: new Date().setDate(new Date().getDate() - 10),
    product: '3 Cheese Pizzas',
    companyName: 'Papa Johns',
    perishable: 'true',
    expDate: '5-9-21',
    availability: 'true',
    address: '600 Main St, Franklin NC 28734',
    allergies: 'gluten'
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
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
    perishable: 'Yes',
    expDate: '5-10-21',
    availability: 'Yes',
    address: '112 Olive St, Franklin NC 28734',
    allergies: {
      options: ['egg'],
      otherInfo: ""
    }
  },

  {
    day: new Date().setDate(new Date().getDate() - 10),
    product: '8 Cases of Chicken Nuggets',
    companyName: 'Zaxbys',
    perishable: 'Yes',
    expDate: '5-6-21',
    availability: 'Yes',
    address: '1008 Business dr, Franklin NC 28734',
    allergies: {
      options: ['egg'],
      otherInfo: ""
    }
  },
  {
    day: new Date().setDate(new Date().getDate() - 10),
    product: '10 Apple Pies',
    companyName: 'Hardees',
    perishable: 'Yes',
    expDate: '5-8-21',
    availability: 'Yes',
    address: '206 Jones rd, Waynesville NC 28734',
    allergies: {
      options: ['egg', 'lactose', 'gluten'],
      otherInfo: ''
    }
  },
  {
    day: new Date().setDate(new Date().getDate() - 10),
    product: '120 Bread Sticks',
    companyName: 'Olive Garden',
    perishable: 'Yes',
    expDate: '5-10-21',
    availability: 'Yes',
    address: '502 Depot St, Ashville NC 28734',
    allergies: {
      options: ['other'],
      otherInfo: 'Please ask us'
    }
  },
  {
    day: new Date().setDate(new Date().getDate() - 10),
    product: '3 Steaks',
    companyName: 'Long Horn',
    perishable: 'Yes',
    expDate: '5-5-21',
    availability: 'Yes',
    address: '112 Olive St, Franklin NC 28734',
    allergies: {
      options: ['egg'],
      otherInfo: ""
    }
  },
  {
    day: new Date().setDate(new Date().getDate() - 10),
    product: '20 Fries',
    companyName: 'Mc Donalds',
    perishable: 'Yes',
    expDate: '5-23-21',
    availability: 'Yes',
    address: '125 Olive St, Franklin NC 28734',
    allergies: {
      options: ['egg'],
      otherInfo: ""
    }
  },
  {
    day: new Date().setDate(new Date().getDate() - 10),
    product: 'Baked Potatos',
    companyName: 'Wendys',
    perishable: 'Yes',
    expDate: '5-19-21',
    availability: 'Yes',
    address: '112 McCotter St, Franklin NC 28734',
    allergies: {
      options: ['egg'],
      otherInfo: ""
    }

  },
  {
    day: new Date().setDate(new Date().getDate() - 10),

    companyName: 'Arbys',
    product: '1 Ham Sandwich',
    perishable: 'Yes',
    expDate: '5-14-21',
    availability: 'Yes',
    address: '112 James Rd St, Franklin NC 28734',
    allergies: {
      options: ['egg'],
      otherInfo: ""
    }

  },
  {
    day: new Date().setDate(new Date().getDate() - 10),
    product: '3 Gallons of Tea',
    companyName: 'Chick-fil-la',
    perishable: 'Yes',
    expDate: '5-10-21',
    availability: 'Yes',
    address: '503 Main St, Waynesville NC 28734',
    allergies: {
      options: ['egg'],
      otherInfo: ""
    }
  },
  {
    day: new Date().setDate(new Date().getDate() - 10),
    product: '3 Cheese Pizzas',
    companyName: 'Pizza Hut',
    perishable: 'Yes',
    expDate: '5-8-21',
    availability: 'Yes',
    address: '128 Main, Franklin NC 28734',
    allergies: {
      options: ['gluten'],
      otherInfo: ""
    }
  },
  {
    day: new Date().setDate(new Date().getDate() - 10),
    product: '3 Cheese Pizzas',
    companyName: 'Papa Johns',
    perishable: 'Yes',
    expDate: '5-9-21',
    availability: 'Yes',
    address: '600 Main St, Franklin NC 28734',
    allergies: {
      options: ['gluten'],
      otherInfo: ""
    }
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
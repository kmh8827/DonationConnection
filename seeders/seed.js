let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/donationDB", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let donationSeed = [
  {
    day: new Date().setDate(new Date().getDate()-10),
    donation: [
        {
        companyName: 'KFC',
        perishable: 'yes',
        expDate: '5-10-21',
        availability: 'yes',
        address: '112 Olive St, Franklin NC 28734',
        allergies: {
            options: ['egg'],
            otherInfo: ""
        }
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-10),
    donation: [
        {
        companyName: 'Zaxbys',
        perishable: 'yes',
        expDate: '5-6-21',
        availability: 'yes',
        address: '1008 Business dr, Franklin NC 28734',
        allergies: {
            options: ['egg'],
            otherInfo: ""
        }
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-10),
    donation: [
        {
        companyName: 'Hardees',
        perishable: 'yes',
        expDate: '5-8-21',
        availability: 'yes',
        address: '206 Jones rd, Waynesville NC 28734',
        allergies: {
            options: ['egg','lactose','gluten'],
            otherInfo: ''
        }
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-10),
    donation: [
        {
        companyName: 'Olive Garden',
        perishable: 'yes',
        expDate: '5-10-21',
        availability: 'yes',
        address: '502 Depot St, Ashville NC 28734',
        allergies: {
            options: ['other'],
            otherInfo: 'Please ask us'
        }
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-10),
    donation: [
        {
        companyName: 'Long Horn',
        perishable: 'yes',
        expDate: '5-5-21',
        availability: 'yes',
        address: '112 Olive St, Franklin NC 28734',
        allergies: {
            options: ['egg'],
            otherInfo: ""
        }
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-10),
    donation: [
        {
        companyName: 'Mc Donalds',
        perishable: 'yes',
        expDate: '5-23-21',
        availability: 'yes',
        address: '125 Olive St, Franklin NC 28734',
        allergies: {
            options: ['egg'],
            otherInfo: ""
        }
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-10),
    donation: [
        {
        companyName: 'Wendys',
        perishable: 'yes',
        expDate: '5-19-21',
        availability: 'yes',
        address: '112 McCotter St, Franklin NC 28734',
        allergies: {
            options: ['egg'],
            otherInfo: ""
        }
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-10),
    donation: [
        {
        companyName: 'Arbys',
        perishable: 'yes',
        expDate: '5-14-21',
        availability: 'yes',
        address: '112 James Rd St, Franklin NC 28734',
        allergies: {
            options: ['egg'],
            otherInfo: ""
        }
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-10),
    donation: [
        {
        companyName: 'Chick-fil-la',
        perishable: 'yes',
        expDate: '5-10-21',
        availability: 'yes',
        address: '503 Main St, Waynesville NC 28734',
        allergies: {
            options: ['egg'],
            otherInfo: ""
        }
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-10),
    donation: [
        {
        companyName: 'Pizza Hut',
        perishable: 'yes',
        expDate: '5-8-21',
        availability: 'yes',
        address: '128 Main, Franklin NC 28734',
        allergies: {
            options: ['gluten'],
            otherInfo: ""
        }
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-10),
    donation: [
        {
        companyName: 'Papa Johns',
        perishable: 'yes',
        expDate: '5-9-21',
        availability: 'yes',
        address: '600 Main St, Franklin NC 28734',
        allergies: {
            options: ['gluten'],
            otherInfo: ""
        }
      }
    ]
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
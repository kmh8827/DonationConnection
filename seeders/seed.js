let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/donationDB", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let donationSeed = [
  {
    perishable: 'true',
    product: 'Chicken Wings',
    companyName: 'KFC',
    expDate: '5-20-21',
    availability: 'true',
    address: '112 Olive St, Franklin NC 28734',
    specialInstruction: "ask us",
    allergies: 'egg',
    quantity: 3,
    userId: '123'
  },
  {
    perishable: 'true',
    product: 'cheese Pizza',
    companyName: 'Papa Johns',
    expDate: '5-30-21',
    availability: 'true',
    address: '112 Main St, Franklin NC 28734',
    specialInstruction: "ask us",
    allergies: 'egg glutin',
    quantity: 5,
    userId: '123'
  },
  {
    perishable: 'true',
    product: 'Chicken Tenders',
    companyName: 'Zaxbys',
    expDate: '5-10-21',
    availability: 'true',
    address: '304 Depot St, NewBern NC',
    specialInstruction: 'ask us',
    allergies: 'egg',
    quantity: 4,
    userId: '123'
  },
  {
    perishable: 'true',
    product: 'Soup',
    companyName: 'Olive Garden',
    expDate: '5-29-21',
    availability: 'true',
    address: '502 Depot St, Ashville NC 28734',
    specialInstruction: 'ask us',
    allergies: 'glutin, eggs',
    quantity: 10,
    userId: '123'
  },
  {
    perishable: 'true',
    product: 'Apple Pies',
    companyName: 'Hardees',
    expDate: '5-25-21',
    availability: 'true',
    address: '507 Main St, Ashville NC 28734',
    specialInstruction: 'ask us',
    allergies: 'glutin, eggs',
    quantity: 20,
    userId: '123'
  },
  {
    perishable: 'true',
    product: 'Ribeye Steak',
    companyName: 'Long Horn',
    expDate: '5-22-21',
    availability: 'true',
    address: '103 Chapel St, Ashville NC 28734',
    specialInstruction: 'ask us',
    allergies: 'ask us',
    quantity: 3,
    userId: '123'
  },
  {
    perishable: 'true',
    product: 'McDouble',
    companyName: 'McDonalds',
    expDate: '5-22-21',
    availability: 'true',
    address: '505 Main St, Ashville NC 28734',
    specialInstruction: 'ask us',
    allergies: 'ask us',
    quantity: 11,
    userId: '123'
  },
  {
    perishable: 'true',
    product: '10 pc Nuggets',
    companyName: 'Wendys',
    expDate: '5-22-21',
    availability: 'true',
    address: '103 Chapel St, Ashville NC 28734',
    specialInstruction: 'ask us',
    allergies: 'ask us',
    quantity: 7,
    userId: '123'
  },
  {
    perishable: 'true',
    product: 'Roast beef sandich',
    companyName: 'Arbys',
    expDate: '5-22-21',
    availability: 'true',
    address: '109 James St, Ashville NC 28734',
    specialInstruction: 'ask us',
    allergies: 'ask us',
    quantity: 5,
    userId: '123'
  }];
  
  // old seeds
//   {
//     day: new Date().setDate(new Date().getDate() - 10),
//     product: '8 Cases of Chicken Nuggets',
//     companyName: 'Zaxbys',
//     perishable: 'true',
//     expDate: '5-6-21',
//     availability: 'true',
//     address: '1008 Business dr, Franklin NC 28734',
//     allergies: 'egg'
//   },
//   {
//     day: new Date().setDate(new Date().getDate() - 10),
//     product: '10 Apple Pies',
//     companyName: 'Hardees',
//     perishable: 'true',
//     expDate: '5-8-21',
//     availability: 'true',
//     address: '206 Jones rd, Waynesville NC 28734',
//     allergies: 'egg, lactose, gluten'
//   },
//   {
//     day: new Date().setDate(new Date().getDate() - 10),
//     product: '120 Bread Sticks',
//     companyName: 'Olive Garden',
//     perishable: 'true',
//     expDate: '5-10-21',
//     availability: 'true',
//     address: '502 Depot St, Ashville NC 28734',
//     allergies: 'Please ask us',

//   },
//   {
//     day: new Date().setDate(new Date().getDate() - 10),
//     product: '3 Steaks',
//     companyName: 'Long Horn',
//     perishable: 'true',
//     expDate: '5-5-21',
//     availability: 'true',
//     address: '112 Olive St, Franklin NC 28734',
//     allergies: 'egg',

//   },
//   {
//     day: new Date().setDate(new Date().getDate() - 10),
//     product: '20 Fries',
//     companyName: 'Mc Donalds',
//     perishable: 'true',
//     expDate: '5-23-21',
//     availability: 'true',
//     address: '125 Olive St, Franklin NC 28734',
//     allergies: 'egg',
//   },
//   {
//     day: new Date().setDate(new Date().getDate() - 10),
//     product: 'Baked Potatos',
//     companyName: 'Wendys',
//     perishable: 'true',
//     expDate: '5-19-21',
//     availability: 'true',
//     address: '112 McCotter St, Franklin NC 28734',
//     allergies: 'egg'


//   },
//   {
//     day: new Date().setDate(new Date().getDate() - 10),
//     companyName: 'Arbys',
//     product: '1 Ham Sandwich',
//     perishable: 'true',
//     expDate: '5-14-21',
//     availability: 'true',
//     address: '112 James Rd St, Franklin NC 28734',
//     allergies: 'egg'

//   },
//   {
//     day: new Date().setDate(new Date().getDate() - 10),
//     product: '3 Gallons of Tea',
//     companyName: 'Chick-fil-la',
//     perishable: 'true',
//     expDate: '5-10-21',
//     availability: 'true',
//     address: '503 Main St, Waynesville NC 28734',
//     allergies: 'egg'
//   },
//   {
//     day: new Date().setDate(new Date().getDate() - 10),
//     product: '3 Cheese Pizzas',
//     companyName: 'Pizza Hut',
//     perishable: 'true',
//     expDate: '5-8-21',
//     availability: 'true',
//     address: '128 Main, Franklin NC 28734',
//     allergies: 'gluten'
//   },
//   {
//     day: new Date().setDate(new Date().getDate() - 10),
//     product: '3 Cheese Pizzas',
//     companyName: 'Papa Johns',
//     perishable: 'true',
//     expDate: '5-9-21',
//     availability: 'true',
//     address: '600 Main St, Franklin NC 28734',
//     allergies: 'gluten',
//     userId: '123'
//   }
// ];

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

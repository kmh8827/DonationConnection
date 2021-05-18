// Loading Environmnetal Variables
if (process.env.NODE_ENV !== 'production') {
    console.log('loading dev environments');
    require('dotenv').config();
}
require('dotenv').config();

const express = require('express');
const session = require('express-session');
const passport = require('./passport');
const MongoStore = require('connect-mongo')(session);
const dbConnection = require('./db');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;

//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
    secret: process.env.APP_SECRET || 'this is the default pasphrase',
    store: new MongoStore({ mongooseConnection: dbConnection }),
    resave: false,
    saveUninitialized: false
}));

// Passport
app.use(passport.initialize());
app.use(passport.session());

if (process.env.NODE_ENV === 'production') {
    const path = require('path');
	// console.log('YOU ARE IN THE PRODUCTION ENV');
	app.use('/static', express.static(path.join(__dirname, '../client/build/static')));
	app.get('/', (req, res) => {
		res.sendFile(path.join(__dirname, '../client/build/'))
	});
  }  

// Adding API Routes
app.use(routes);

// Error Handler
app.use( (err, req, res, next) => {
    console.log('===== ERROR =====');
    console.error(err.stack);
    res.status(500);
});

app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
});

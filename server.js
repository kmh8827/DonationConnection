// Loading Environmnetal Variables
if (process.env.NODE_ENV !== 'production') {
    console.log('loading dev environments');
    require('dotenv').config();
}
require('dotenv').config();

const express = require('express');
const session = require('express-session');
const passport = require('./passport');
const MongoStore = requrie('connection-mongo')(session);
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

if (process.env.NODE_ENV === 'production') app.use(express.static('client/build'));

app.use(routes);

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/donation"
);

app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
});

require('dotenv').config();
const mongoose = require('mongoose');
const passport = require('./passportAuthentication');
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const dbRoute = process.env.MONGO_DB_CONNECTION;
const API_PORT = 3001;
const app = express();
const router = express.Router();
const usersRouter = require('./routes/usersRouter');
const dataRouter = require('./routes/dataRouter');
console.log(process.env.MONGO_DB_CONNECTION);

// our MongoDB database
// connects our back end code with the database
mongoose.connect(
  dbRoute,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  }
);

mongoose.set('debug', false);

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// (optional) only made for logging and bodyParser
//  parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));
// app.use(passport.initialize());
// app.use(passport.session());

app.use('/api', dataRouter);
app.use('/authentication', usersRouter);
// router.use('/api', router);
// router.use('/api', router);
// router.use('/api/authentication', usersRouter);


// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));

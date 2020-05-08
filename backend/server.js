require('dotenv').config();
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const Data = require("./data");

const API_PORT = 3001;
const app = express();
const router = express.Router();
const dbRoute = process.env.DB_CONNECTION;
// console.log(process.env.MONGODB_CONNECTION);

// this is our MongoDB database
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

// get method
// fetches all available data in our database
router.get("/getData", (req, res) => {
  Data.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

// update method
// overwrites existing data in our database
router.post("/updateData", (req, res) => {

  const { id, update } = req.body;

  Data.findOneAndUpdate(id, update, err => {

    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// delete method
// removes existing data in our database
router.delete("/deleteData", (req, res) => {
  const { id } = req.body;
  Data.findOneAndDelete(id, err => {
    if (err) return res.send(err);
    return res.json({ success: true });
  });
});

// create method
// adds new data in our database
router.post("/putData", (req, res) => {
  let data = new Data();
  console.log('add item in backent');

  const { id, name, code, comment, tags } = req.body;

  if ((!id && id !== 0) || !name) {
    return res.json({
      success: false,
      error: "INVALID INPUTS"
    });
  }

  data.name = name;
  data.code = code;
  data.comment = comment;
  data.tags = tags;
  data.id = id;

  data.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// append /api for our http requests
app.use("/api", router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));

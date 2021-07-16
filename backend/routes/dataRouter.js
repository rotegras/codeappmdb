const express = require('express');
const router = express.Router();
const Data = require('../models/data');

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

module.exports = router;

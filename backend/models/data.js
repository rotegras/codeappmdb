const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const DataSchema = new Schema(
  {
    id: Number,
    name: String,
    code: String,
    comment: String,
    tags: { type: [String], index: true } // field level
  },
  { timestamps: true }
);


// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Data", DataSchema);

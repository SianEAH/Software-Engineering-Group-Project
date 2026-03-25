const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    category: {
      type: String,
    },
    location: {
      type: String,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: ["lost", "found"],
      required: true,
    },
  },
  { timestamps: true } //https://www.geeksforgeeks.org/mongodb/mongoose-timestamps/
                        //saving the exact time/date of creation
);

module.exports = mongoose.model("Item", itemSchema);
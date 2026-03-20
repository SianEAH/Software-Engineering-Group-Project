const mongoose = require("mongoose");
const app = require("../../app");

const PORT = 3000;
const MONGO_URL = "mongodb+srv://sianemmahayes1997:QU1map5e2ReoZARI@fashionapplication.s4g7rwh.mongodb.net/lostFoundDB?";

mongoose
  .connect(MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
    console.log("Connected to MongoDB");
  })
  .catch((error) => console.log(error));
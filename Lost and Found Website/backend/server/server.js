const mongoose = require("mongoose");
const app = require("../../app");

const PORT = 3000;
const MONGO_URL = "#"; //Ask for credentials for MongoDB Atlas

mongoose
  .connect(MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
    console.log("Connected to MongoDB");
  })
  .catch((error) => console.log(error));

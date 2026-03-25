const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, "frontend")));

app.use("/api/items", require("./backend/routes/itemRoutes"));
app.use("/api/auth", require("./backend/routes/authRoutes"));

module.exports = app;
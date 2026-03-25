const express = require("express");
const router = express.Router();

const {
  getItems,
  createItem,
  deleteItem,
} = require("../controllers/itemController"); //these all need the itemController for logic handling

router.get("/", getItems);
router.post("/", createItem);
router.delete("/:id", deleteItem); //delete by ID

module.exports = router;
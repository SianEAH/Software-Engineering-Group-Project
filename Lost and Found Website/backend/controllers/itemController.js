//use exports for this file so it can be used by Routes

const Item = require("../models/Item");

//GET request all items
exports.getItems = async (req, res) => {
  try {
    const { status } = req.query; //get the status of the URL

    const filter = status ? { status } : {}; //if status exists, needed to filter the database
    const items = await Item.find(filter);

    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//Create item
exports.createItem = async (req, res) => {
  try {
    const newItem = new Item(req.body);
    const savedItem = await newItem.save();

    res.status(201).json(savedItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Delete item
exports.deleteItem = async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.json({ message: "Item has been deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const express = require("express");
const router = express.Router();
const Menu = require("../models/menu");

// Post method for Menu items
router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newMenuItem = new Menu(data);
    const response = await newMenuItem.save();
    console.log("Menu Data saved Succesfully");
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ err: "Internal Server Error" });
  }
});
// Get method for Menu items
router.get("/", async (req, res) => {
  try {
    const query_params = req.query;
    console.log(query_params, "query_params");
    let query = {};
    for (let i in query_params) {
      if (query_params[i]) {
        query[i] = query_params[i];
      }
    }
    let data = [];
    if (Object.keys(query_params).length) {
      data = await Menu.find(query);
    } else {
      data = await Menu.find();
    }
    console.log(query);

    console.log("Menu data fetched!!");
    res.status(200).json({ message: "Menu data is showing", data: data.length ? data : 'Empty' });
  } catch (err) {
    console.log("get Error :", err);
  }
});

//get menu item throught id
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const dataFind = await Menu.findById(id);

    if (!dataFind) {
      res.status(404).json({ error: "Not found through this id" });
    }
    res.status(200).json(dataFind);
    console.log("Data find through id", dataFind.name);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});
// Update the menu item through id
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = req.body;

    const response = await Menu.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });
    // If no response found
    if (!response) {
      return res.status(404).json({ error: "Not Found" });
    }
    console.log("Menu data Updated Succesfully");
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ err: "Internal Server Error" });
  }
});

//Delete the menu item through id
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const response = await Menu.findByIdAndDelete(id);
    if (!response) {
      return res.status(404).json({ error: "Menu Item not found" });
    }
    console.log("Deleted Succesfully");
    res.status(200).json({ message: "Deleted Succesfully" });
  } catch (err) {
    res.status(500).json({ err: "Internal Server Error" });
  }
});

module.exports = router;

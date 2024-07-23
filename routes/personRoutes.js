const express = require("express");
const router = express.Router();
const Person = require("../models/person");

// post route to add a person
router.post("/", async (req, res) => {
  //Async await and try catch
  try {
    const data = req.body; //assuming the request body contains data
    const newPerson = new Person(data);
    // Save in database through save() method mongodB
    const response = await newPerson.save();

    console.log("data saved succesfully -->");
    res.status(200).json(response);
    // res.status(200).send({ message: "data saved succesfully" });
  } catch (err) {
    console.log("API Error :", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get method to get the person
router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("data fetched!!");
    res.status(200).json(data);
  } catch (err) {
    console.log("get Error :", err);
    res.status(500).json({ error: "Internal Server GET Error" });
  }
});

// Parametrized get method for Person of Their work type basis
router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType; //Extract work type from URL
    if (workType == "chef" || workType == "manager" || workType == "waiter") {
      const response = await Person.find({ work: workType });
      console.log("Work Type data fetched!!");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Invalid Work Type" });
    }
  } catch (err) {
    console.log("Error we get", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//Update data of person
router.put("/:person_id", async (req, res) => {
  try {
    const personId = req.params.person_id; //Extract person id from URL
    const updatedPersonData = req.body; //updated data for the person

    const response = await Person.findByIdAndUpdate(
      personId,
      updatedPersonData,
      {
        new: true, // Return the updated Document
        runValidators: true, //Run Mongoose validation which are passed in schema
      }
    );
    // case 1: No document found
    if (!response) {
      return res.status(404).json({ error: "Person not found" });
    }

    console.log("Person data updated successfully!!");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/:person_id", async (req, res) => {
  try {
    const personId = req.params.person_id; // Extract the person id from URL
    const response = await Person.findByIdAndDelete(personId); // first it will find By Id and then it will delete

    if (!response) {
      return res.status(404).json({ error: "Person not exist by this Id" });
    }

    console.log("Person data deleted successfully!!");
    res.status(200).json({message: 'Person Data deleted Successfully!!'});
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;

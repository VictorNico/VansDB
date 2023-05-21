module.exports = app => {
  const constituants = require("../controllers/constituant.js");
  const express = require("express");

  let router = express.Router();

  // Create a new Tutorial
  router.post("/", constituants.create);

  // Retrieve all constituants
  router.get("/", constituants.findAll);

  // Retrieve a single Tutorial with id
  router.get("/:id", constituants.findOne);

  // Update a Tutorial with id
  router.put("/:id", constituants.update);

  // Delete a Tutorial with id
  router.delete("/:id", constituants.delete);

  // Delete all constituants
  router.delete("/", constituants.deleteAll);

  app.use('/api/constituants', router);
};
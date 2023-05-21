module.exports = app => {
  const ligneBudgetaires = require("../controllers/ligneBudgetaire.js");
  const express = require("express");

  let router = express.Router();

  // Create a new Tutorial
  router.post("/", ligneBudgetaires.create);

  // Retrieve all ligneBudgetaires
  router.get("/", ligneBudgetaires.findAll);

  // Retrieve a single Tutorial with id
  router.get("/:id", ligneBudgetaires.findOne);

  // Update a Tutorial with id
  router.put("/:id", ligneBudgetaires.update);

  // Delete a Tutorial with id
  router.delete("/:id", ligneBudgetaires.delete);

  // Delete all ligneBudgetaires
  router.delete("/", ligneBudgetaires.deleteAll);

  app.use('/api/ligneBudgetaires', router);
};
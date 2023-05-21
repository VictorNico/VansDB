module.exports = app => {
  import serviceBudgetaires from "../controllers/serviceBudgetaire.mjs";
  import express from "express";

  let router = express.Router();

  // Create a new Tutorial
  router.post("/", serviceBudgetaires.create);

  // Retrieve all serviceBudgetaires
  router.get("/", serviceBudgetaires.findAll);

  // Retrieve a single Tutorial with id
  router.get("/:id", serviceBudgetaires.findOne);

  // Update a Tutorial with id
  router.put("/:id", serviceBudgetaires.update);

  // Delete a Tutorial with id
  router.delete("/:id", serviceBudgetaires.delete);

  // Delete all serviceBudgetaires
  router.delete("/", serviceBudgetaires.deleteAll);

  app.use('/api/serviceBudgetaires', router);
};
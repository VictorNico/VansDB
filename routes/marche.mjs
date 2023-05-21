module.exports = app => {
  import marches from "../controllers/marche.mjs";
  import express from "express";

  let router = express.Router();

  // Create a new Tutorial
  router.post("/", marches.create);

  // Retrieve all marches
  router.get("/", marches.findAll);

  // Retrieve a single Tutorial with id
  router.get("/:id", marches.findOne);

  // Update a Tutorial with id
  router.put("/:id", marches.update);

  // Delete a Tutorial with id
  router.delete("/:id", marches.delete);

  // Delete all marches
  router.delete("/", marches.deleteAll);

  app.use('/api/marches', router);
};
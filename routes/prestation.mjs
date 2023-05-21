module.exports = app => {
  import prestations from "../controllers/prestation.mjs";
  import express from "express";

  let router = express.Router();

  // Create a new Tutorial
  router.post("/", prestations.create);

  // Retrieve all prestations
  router.get("/", prestations.findAll);

  // Retrieve a single Tutorial with id
  router.get("/:id", prestations.findOne);

  // Update a Tutorial with id
  router.put("/:id", prestations.update);

  // Delete a Tutorial with id
  router.delete("/:id", prestations.delete);

  // Delete all prestations
  router.delete("/", prestations.deleteAll);

  app.use('/api/prestations', router);
};
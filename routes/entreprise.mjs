module.exports = app => {
  import entreprises from "../controllers/entreprise.mjs";
  import express from "express";

  let router = express.Router();

  // Create a new Tutorial
  router.post("/", entreprises.create);

  // Retrieve all entreprises
  router.get("/", entreprises.findAll);

  // Retrieve a single Tutorial with id
  router.get("/:id", entreprises.findOne);

  // Update a Tutorial with id
  router.put("/:id", entreprises.update);

  // Delete a Tutorial with id
  router.delete("/:id", entreprises.delete);

  // Delete all entreprises
  router.delete("/", entreprises.deleteAll);

  app.use('/api/entreprises', router);
};
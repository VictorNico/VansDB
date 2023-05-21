module.exports = app => {
  import ligneBugetaires from "../controllers/ligneBugetaire.mjs";
  import express from "express";

  let router = express.Router();

  // Create a new Tutorial
  router.post("/", ligneBugetaires.create);

  // Retrieve all ligneBugetaires
  router.get("/", ligneBugetaires.findAll);

  // Retrieve a single Tutorial with id
  router.get("/:id", ligneBugetaires.findOne);

  // Update a Tutorial with id
  router.put("/:id", ligneBugetaires.update);

  // Delete a Tutorial with id
  router.delete("/:id", ligneBugetaires.delete);

  // Delete all ligneBugetaires
  router.delete("/", ligneBugetaires.deleteAll);

  app.use('/api/ligneBugetaires', router);
};
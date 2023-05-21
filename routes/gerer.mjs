module.exports = app => {
  import gerers from "../controllers/gerer.mjs";
  import express from "express";

  let router = express.Router();

  // Create a new Tutorial
  router.post("/", gerers.create);

  // Retrieve all gerers
  router.get("/", gerers.findAll);

  // Retrieve a single Tutorial with id
  router.get("/:id", gerers.findOne);

  // Update a Tutorial with id
  router.put("/:id", gerers.update);

  // Delete a Tutorial with id
  router.delete("/:id", gerers.delete);

  // Delete all gerers
  router.delete("/", gerers.deleteAll);

  app.use('/api/gerers', router);
};
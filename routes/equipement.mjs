module.exports = app => {
  import equipements from "../controllers/equipements.mjs";
  import express from "express";

  let router = express.Router();

  // Create a new Tutorial
  router.post("/", equipements.create);

  // Retrieve all equipements
  router.get("/", equipements.findAll);

  // Retrieve a single Tutorial with id
  router.get("/:id", equipements.findOne);

  // Update a Tutorial with id
  router.put("/:id", equipements.update);

  // Delete a Tutorial with id
  router.delete("/:id", equipements.delete);

  // Delete all equipements
  router.delete("/", equipements.deleteAll);

  app.use('/api/equipements', router);
};
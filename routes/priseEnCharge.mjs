module.exports = app => {
  import priseEnCharges from "../controllers/priseEnCharge.mjs";
  import express from "express";

  let router = express.Router();

  // Create a new Tutorial
  router.post("/", priseEnCharges.create);

  // Retrieve all priseEnCharges
  router.get("/", priseEnCharges.findAll);

  // Retrieve a single Tutorial with id
  router.get("/:id", priseEnCharges.findOne);

  // Update a Tutorial with id
  router.put("/:id", priseEnCharges.update);

  // Delete a Tutorial with id
  router.delete("/:id", priseEnCharges.delete);

  // Delete all priseEnCharges
  router.delete("/", priseEnCharges.deleteAll);

  app.use('/api/priseEnCharges', router);
};
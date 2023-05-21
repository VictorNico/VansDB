module.exports = app => {
  const locals = require("../controllers/local.js");
  const express = require("express");

  let router = express.Router();

  // Create a new Tutorial
  router.post("/", locals.create);

  // Retrieve all locals
  router.get("/", locals.findAll);

  // Retrieve a single Tutorial with id
  router.get("/:id", locals.findOne);

  // Update a Tutorial with id
  router.put("/:id", locals.update);

  // Delete a Tutorial with id
  router.delete("/:id", locals.delete);

  // Delete all locals
  router.delete("/", locals.deleteAll);

  app.use('/api/locals', router);
};
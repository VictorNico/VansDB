const PriseEnCharge = require("../models/priseEnCharge.js")

// Create and Save a new PriseEnCharge
exports.create = (req, res) => {
  // Validate request
  if (!req.body.nom) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a PriseEnCharge
  const priseEnCharge = new PriseEnCharge({
    ...req.body
  });

  // Save PriseEnCharge in the database
  priseEnCharge
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the PriseEnCharge."
      });
    });
};

// Retrieve all PriseEnCharges from the database.
exports.findAll = (req, res) => {
  PriseEnCharge.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving PriseEnCharge."
      });
    });
};

// Find a single PriseEnCharge with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    PriseEnCharge.findOne({_id:id})
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving PriseEnCharge."
        });
    });
};

// Update a PriseEnCharge by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
      }

      const id = req.params.id;

      PriseEnCharge.updateOne({_id:id}, req.body)
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `Cannot update PriseEnCharge with id=${id}. Maybe PriseEnCharge was not found!`
            });
          } else res.send({ message: "PriseEnCharge was updated successfully." });
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating PriseEnCharge with id=" + id
          });
        });
};

// Delete a PriseEnCharge with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    PriseEnCharge.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete PriseEnCharge with id=${id}. Maybe PriseEnCharge was not found!`
        });
      } else {
        res.send({
          message: "PriseEnCharge was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete PriseEnCharge with id=" + id
      });
    });
};

// Delete all PriseEnCharges from the database.
exports.deleteAll = (req, res) => {
    Tutorial.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Tutorials were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials."
      });
    });
};

// for more details read https://mongoosejs.com/
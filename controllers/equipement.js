const Equipement = require("../models/equipement.js")

// Create and Save a new Equipement
exports.create = (req, res) => {
  // Validate request
  if (!req.body.nom) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Equipement
  const equipement = new Equipement({
    ...req.body
  });

  // Save Equipement in the database
  equipement
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Equipement."
      });
    });
};

// Retrieve all Equipements from the database.
exports.findAll = (req, res) => {
  Equipement.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Equipement."
      });
    });
};

// Find a single Equipement with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Equipement.findOne({_id:id})
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Equipement."
        });
    });
};

// Update a Equipement by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
      }

      const id = req.params.id;

      Equipement.updateOne({_id:id}, req.body)
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `Cannot update Equipement with id=${id}. Maybe Equipement was not found!`
            });
          } else res.send({ message: "Equipement was updated successfully." });
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating Equipement with id=" + id
          });
        });
};

// Delete a Equipement with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Equipement.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Equipement with id=${id}. Maybe Equipement was not found!`
        });
      } else {
        res.send({
          message: "Equipement was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Equipement with id=" + id
      });
    });
};

// Delete all Equipements from the database.
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
const Entreprise = require("../models/entreprise.js")

// Create and Save a new Entreprise
exports.create = (req, res) => {
  // Validate request
  if (!req.body.nom) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Entreprise
  const entreprise = new Entreprise({
    ...req.body
  });

  // Save Entreprise in the database
  entreprise
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Entreprise."
      });
    });
};

// Retrieve all Entreprises from the database.
exports.findAll = (req, res) => {
  Entreprise.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Entreprise."
      });
    });
};

// Find a single Entreprise with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Entreprise.findOne({_id:id})
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Entreprise."
        });
    });
};

// Update a Entreprise by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
      }

      const id = req.params.id;

      Entreprise.updateOne({_id:id}, req.body)
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `Cannot update Entreprise with id=${id}. Maybe Entreprise was not found!`
            });
          } else res.send({ message: "Entreprise was updated successfully." });
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating Entreprise with id=" + id
          });
        });
};

// Delete a Entreprise with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Entreprise.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Entreprise with id=${id}. Maybe Entreprise was not found!`
        });
      } else {
        res.send({
          message: "Entreprise was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Entreprise with id=" + id
      });
    });
};

// Delete all Entreprises from the database.
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
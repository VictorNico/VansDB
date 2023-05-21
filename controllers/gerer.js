const Gerer = require("../models/gerer.js")

// Create and Save a new Gerer
exports.create = (req, res) => {
  // Validate request
  if (!req.body.nom) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Gerer
  const gerer = new Gerer({
    ...req.body
  });

  // Save Gerer in the database
  gerer
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Gerer."
      });
    });
};

// Retrieve all Gerers from the database.
exports.findAll = (req, res) => {
  Gerer.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Gerer."
      });
    });
};

// Find a single Gerer with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Gerer.findOne({_id:id})
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Gerer."
        });
    });
};

// Update a Gerer by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
      }

      const id = req.params.id;

      Gerer.updateOne({_id:id}, req.body)
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `Cannot update Gerer with id=${id}. Maybe Gerer was not found!`
            });
          } else res.send({ message: "Gerer was updated successfully." });
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating Gerer with id=" + id
          });
        });
};

// Delete a Gerer with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Gerer.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Gerer with id=${id}. Maybe Gerer was not found!`
        });
      } else {
        res.send({
          message: "Gerer was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Gerer with id=" + id
      });
    });
};

// Delete all Gerers from the database.
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
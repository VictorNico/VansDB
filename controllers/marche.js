const Marche = require("../models/marche.js")

// Create and Save a new Marche
exports.create = (req, res) => {
  // Validate request
  if (!req.body.nom) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Marche
  const marche = new Marche({
    ...req.body
  });

  // Save Marche in the database
  marche
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Marche."
      });
    });
};

// Retrieve all Marches from the database.
exports.findAll = (req, res) => {
  Marche.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Marche."
      });
    });
};

// Find a single Marche with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Marche.findOne({_id:id})
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Marche."
        });
    });
};

// Update a Marche by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
      }

      const id = req.params.id;

      Marche.updateOne({_id:id}, req.body)
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `Cannot update Marche with id=${id}. Maybe Marche was not found!`
            });
          } else res.send({ message: "Marche was updated successfully." });
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating Marche with id=" + id
          });
        });
};

// Delete a Marche with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Marche.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Marche with id=${id}. Maybe Marche was not found!`
        });
      } else {
        res.send({
          message: "Marche was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Marche with id=" + id
      });
    });
};

// Delete all Marches from the database.
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
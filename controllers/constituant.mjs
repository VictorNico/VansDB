import Constituant from "../models/constituant.mjs"

// Create and Save a new Constituant
exports.create = (req, res) => {
  // Validate request
  if (!req.body.nom) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Constituant
  const constituant = new Constituant({
    ...req.body
  });

  // Save Constituant in the database
  constituant
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Constituant."
      });
    });
};

// Retrieve all Constituants from the database.
exports.findAll = (req, res) => {
  Constituant.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Constituant."
      });
    });
};

// Find a single Constituant with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Constituant.findOne({_id:id})
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Constituant."
        });
    });
};

// Update a Constituant by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
      }

      const id = req.params.id;

      Constituant.updateOne({_id:id}, req.body)
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `Cannot update Constituant with id=${id}. Maybe Constituant was not found!`
            });
          } else res.send({ message: "Constituant was updated successfully." });
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating Constituant with id=" + id
          });
        });
};

// Delete a Constituant with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Constituant.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Constituant with id=${id}. Maybe Constituant was not found!`
        });
      } else {
        res.send({
          message: "Constituant was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Constituant with id=" + id
      });
    });
};

// Delete all Constituants from the database.
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
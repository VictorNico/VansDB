import Prestation from "../models/prestation.mjs"

// Create and Save a new Prestation
exports.create = (req, res) => {
  // Validate request
  if (!req.body.nom) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Prestation
  const prestation = new Prestation({
    ...req.body
  });

  // Save Prestation in the database
  prestation
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Prestation."
      });
    });
};

// Retrieve all Prestations from the database.
exports.findAll = (req, res) => {
  Prestation.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Prestation."
      });
    });
};

// Find a single Prestation with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Prestation.findOne({_id:id})
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Prestation."
        });
    });
};

// Update a Prestation by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
      }

      const id = req.params.id;

      Prestation.updateOne({_id:id}, req.body)
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `Cannot update Prestation with id=${id}. Maybe Prestation was not found!`
            });
          } else res.send({ message: "Prestation was updated successfully." });
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating Prestation with id=" + id
          });
        });
};

// Delete a Prestation with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Prestation.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Prestation with id=${id}. Maybe Prestation was not found!`
        });
      } else {
        res.send({
          message: "Prestation was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Prestation with id=" + id
      });
    });
};

// Delete all Prestations from the database.
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
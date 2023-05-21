import LigneBugetaire from "../models/ligneBugetaire.mjs"

// Create and Save a new LigneBugetaire
exports.create = (req, res) => {
  // Validate request
  if (!req.body.nom) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a LigneBugetaire
  const ligneBugetaire = new LigneBugetaire({
    ...req.body
  });

  // Save LigneBugetaire in the database
  ligneBugetaire
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the LigneBugetaire."
      });
    });
};

// Retrieve all LigneBugetaires from the database.
exports.findAll = (req, res) => {
  LigneBugetaire.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving LigneBugetaire."
      });
    });
};

// Find a single LigneBugetaire with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    LigneBugetaire.findOne({_id:id})
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving LigneBugetaire."
        });
    });
};

// Update a LigneBugetaire by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
      }

      const id = req.params.id;

      LigneBugetaire.updateOne({_id:id}, req.body)
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `Cannot update LigneBugetaire with id=${id}. Maybe LigneBugetaire was not found!`
            });
          } else res.send({ message: "LigneBugetaire was updated successfully." });
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating LigneBugetaire with id=" + id
          });
        });
};

// Delete a LigneBugetaire with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    LigneBugetaire.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete LigneBugetaire with id=${id}. Maybe LigneBugetaire was not found!`
        });
      } else {
        res.send({
          message: "LigneBugetaire was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete LigneBugetaire with id=" + id
      });
    });
};

// Delete all LigneBugetaires from the database.
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
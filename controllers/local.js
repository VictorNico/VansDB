const Local = require("../models/local.js")

// Create and Save a new Local
exports.create = (req, res) => {
  // Validate request
  if (!req.body.nom) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Local
  const local = new Local({
    ...req.body
  });

  // Save Local in the database
  local
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Local."
      });
    });
};

// Retrieve all Locals from the database.
exports.findAll = (req, res) => {
  Local.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Local."
      });
    });
};

// Find a single Local with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Local.findOne({_id:id})
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Local."
        });
    });
};

// Update a Local by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
      }

      const id = req.params.id;

      Local.updateOne({_id:id}, req.body)
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `Cannot update Local with id=${id}. Maybe Local was not found!`
            });
          } else res.send({ message: "Local was updated successfully." });
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating Local with id=" + id
          });
        });
};

// Delete a Local with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Local.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Local with id=${id}. Maybe Local was not found!`
        });
      } else {
        res.send({
          message: "Local was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Local with id=" + id
      });
    });
};

// Delete all Locals from the database.
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
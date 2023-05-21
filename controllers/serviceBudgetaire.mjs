import ServiceBudgetaire from "../models/serviceBudgetaire.mjs"

// Create and Save a new ServiceBudgetaire
exports.create = (req, res) => {
  // Validate request
  if (!req.body.nom) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a ServiceBudgetaire
  const serviceBudgetaire = new ServiceBudgetaire({
    ...req.body
  });

  // Save ServiceBudgetaire in the database
  serviceBudgetaire
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the ServiceBudgetaire."
      });
    });
};

// Retrieve all ServiceBudgetaires from the database.
exports.findAll = (req, res) => {
  ServiceBudgetaire.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving ServiceBudgetaire."
      });
    });
};

// Find a single ServiceBudgetaire with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    ServiceBudgetaire.findOne({_id:id})
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving ServiceBudgetaire."
        });
    });
};

// Update a ServiceBudgetaire by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
      }

      const id = req.params.id;

      ServiceBudgetaire.updateOne({_id:id}, req.body)
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `Cannot update ServiceBudgetaire with id=${id}. Maybe ServiceBudgetaire was not found!`
            });
          } else res.send({ message: "ServiceBudgetaire was updated successfully." });
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating ServiceBudgetaire with id=" + id
          });
        });
};

// Delete a ServiceBudgetaire with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    ServiceBudgetaire.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete ServiceBudgetaire with id=${id}. Maybe ServiceBudgetaire was not found!`
        });
      } else {
        res.send({
          message: "ServiceBudgetaire was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete ServiceBudgetaire with id=" + id
      });
    });
};

// Delete all ServiceBudgetaires from the database.
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
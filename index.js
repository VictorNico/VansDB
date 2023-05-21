require("./loadEnvironment.js");
require("./db/conn.js");

const express = require("express");
const cors = require("cors");



const constituant_routes = require("./routes/constituant.js");
const entreprise_routes = require("./routes/entreprise.js");
const equipement_routes = require("./routes/equipement.js");
const gerer_routes = require("./routes/gerer.js");
const ligneBugetaire_routes = require("./routes/ligneBudgetaire.js");
const local_routes = require("./routes/local.js");
const marche_routes = require("./routes/marche.js");
const prestation_routes = require("./routes/prestation.js");
const priseEnCharge_routes = require("./routes/priseEnCharge.js");
const serviceBudgetaire_routes = require("./routes/serviceBudgetaire.js");

//const express = require("express");
//const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "*" // accept all client domain's
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to VansDB application." });
});

constituant_routes(app)
entreprise_routes(app)
equipement_routes(app)
gerer_routes(app)
ligneBugetaire_routes(app)
local_routes(app)
marche_routes(app)
prestation_routes(app)
priseEnCharge_routes(app)
serviceBudgetaire_routes(app)

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
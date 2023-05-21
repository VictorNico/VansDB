import mongoose from "mongoose";

const connectionString = process.env.ATLAS_URI || "";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  // useFindAndModify: false,
};

mongoose.connect(connectionString, options)
  .then(() => console.log('Conection à MongoDB réussie !'))
  .catch((error) => console.log('Conection à MongoDB échouée ! \n' + error));


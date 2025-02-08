const mongoose = require("mongoose");

const connexionDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connexion réussie !");
  } catch (error) {
    console.error(`Erreur lors de la connexion`, error);
  }
};

module.exports = connexionDB;

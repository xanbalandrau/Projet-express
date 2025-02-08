const User = require("../models/User");

const admin = async (req, res, next) => {
  try {
    if (req.user && req.user.role === "admin") {
      return next();
    }
    return res.status(403).json({
      message: "Vous n'avez pas les droits d'administration",
    });
  } catch (error) {
    res.status(500).json({ message: "Erreur du serveur (admin)", error });
  }
};

module.exports = admin;

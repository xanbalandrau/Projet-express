const JWT = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;

const auth = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      return res.status(401).json({ message: "Token manquant" });
    }

    const decodedToken = JWT.verify(token, JWT_SECRET);
    if (!decodedToken) {
      return res.status(401).json({ message: "Token invalide" });
    }
    req.user = await User.findById(decodedToken._id);
    next();
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur du serveur", error: error.message });
  }
};

module.exports = auth;

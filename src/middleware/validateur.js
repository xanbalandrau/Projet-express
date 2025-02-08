const { body } = require("express-validator");

exports.validateur = [
  body("name")
    .isLength({ min: 3 })
    .withMessage("Le nom doit avoir au moins 3 caractères"),
  body("email")
    .isEmail()
    .withMessage("Veuillez fournir une adresse email valide"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Le mot de passe doit avoir au moins 8 caractères"),
];

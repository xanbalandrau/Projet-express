const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.createUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res
        .status(400)
        .json({ message: "L'email est déjà attribué à un utilisateur" });
    }
    const newUser = new User({ name, email, password, role });
    await newUser.save();

    res.status(201).json({ message: "Utilisateur crée", user: newUser });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la création de l'utilisateur", error });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de la récupération des utilisateurs",
      error,
    });
  }
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, password } = req.body;
  try {
    const user = await User.findByIdAndUpdate(
      id,
      { name, password },
      {
        new: true,
      }
    );
    res.status(200).json({ message: "Utilisateur mis à jour", user });
  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de la mise à jour de l'utilisateur",
      error,
    });
  }
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndDelete(id);
    res.status(200).json({ message: "Utilisateur supprimé" });
  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de la suppression de l'utilisateur",
      error,
    });
  }
};

const createToken = (_id) => {
  const token = jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "3h" });
  return token;
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ message: "Cette utilisateur n'existe pas" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ message: "Email ou mot de passe incorrect" });
    }

    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, secure: true });

    res.status(201).json({ user, token });
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la connexion", error });
  }
};

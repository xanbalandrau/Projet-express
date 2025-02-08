const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const { validateur } = require("../middleware/validateur");

const {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
  loginUser,
} = require("../controllers/userControllers");

router.get("/", auth, admin, getAllUsers);
router.post("/register", validateur, createUser);
router.put("/:id", auth, updateUser);
router.delete("/:id", auth, deleteUser);
router.post("/login", validateur, loginUser);

module.exports = router;

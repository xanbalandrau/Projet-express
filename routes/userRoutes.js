const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

const {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
  loginUser,
} = require("../controllers/userControllers");

router.get("/", auth, admin, getAllUsers);
router.post("/register", createUser);
router.put("/:id", auth, updateUser);
router.delete("/:id", auth, deleteUser);
router.post("/login", loginUser);

module.exports = router;

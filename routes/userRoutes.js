const express = require("express");
const { getUser, updateUserProfile, deleteUserProfile } = require("../controllers/userController");
const authenticateToken = require("../middlewares/auth");

const router = express.Router();
router.get("/", authenticateToken, getUser);
router.put("/", authenticateToken, updateUserProfile);
router.delete("/", authenticateToken, deleteUserProfile);

module.exports = router;

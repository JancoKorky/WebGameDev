const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/login", userController.login);
router.get("/resetID/:userID", userController.resetID);
router.put("/score/:userID", userController.updateScore);

module.exports = router;

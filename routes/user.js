const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post('/login', userController.login);
router.get('/getPlayerDeck/:userID', userController.getPlayerDeck)
router.get('/getFestivalDeck/:userID', userController.getFestivalDeck)


module.exports = router;

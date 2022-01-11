const express = require("express");
const router = express.Router();
const playerDeckController = require("../controllers/playerDeckController");

router.post('/updatePlayerDeck/:userID', playerDeckController.updatePlayerDeck)

module.exports = router;
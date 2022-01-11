const express = require("express");
const router = express.Router();
const playerDeckController = require("../controllers/playerDeckController");

router.post('/updatePlayerDeck/:userID', playerDeckController.updatePlayerDeck)
router.get('/getPlayerDeck/:userID', playerDeckController.getPlayerDeck)

module.exports = router;
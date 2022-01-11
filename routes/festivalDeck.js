const express = require("express");
const router = express.Router();
const playerDeckController = require("../controllers/festivalDeckController");

router.post("/updateFestivalDeck/:userID", playerDeckController.updateFestivalDeck);

module.exports = router;

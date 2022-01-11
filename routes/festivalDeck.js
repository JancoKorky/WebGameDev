const express = require("express");
const router = express.Router();
const controller = require("../controllers/festivalDeckController");

router.post("/updateFestivalDeck/:userID", controller.updateFestivalDeck);
router.get('/getFestivalDeck/:userID', controller.getFestivalDeck)

module.exports = router;

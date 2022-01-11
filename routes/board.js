const express = require("express");
const router = express.Router();
const controller = require("../controllers/boardController");

router.post("/postBoard/:userID", controller.postBoard);
router.get("/getBoard/:userID", controller.getBoard);


module.exports = router;

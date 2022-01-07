const express = require("express");
const router = express.Router();
const testController = require("../controllers/test");

router.get('/posts', testController.getPosts);

module.exports = router;

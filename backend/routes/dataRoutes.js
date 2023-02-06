const express = require("express");
const {saveData, getData} = require("../controllers/saveData")

const router = express.Router();

router.post("/esp", saveData);
router.get("/esp", getData);

module.exports = router;
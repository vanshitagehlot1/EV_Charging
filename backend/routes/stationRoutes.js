const express = require("express");
const { getNearbyStations } = require("../controllers/stationController");
const router = express.Router();

router.get("/nearby", getNearbyStations);

module.exports = router;

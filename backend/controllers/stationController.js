const Station = require("../models/Station");

exports.getNearbyStations = async (req, res) => {
    const { lat, lng } = req.query;
    const stations = await Station.find();
    res.json(stations);
};

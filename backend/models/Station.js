const mongoose = require("mongoose");

const StationSchema = new mongoose.Schema({
    name: String,
    location: { lat: Number, lng: Number },
    slots: [{ time: String, available: Boolean }]
});

module.exports = mongoose.model("Station", StationSchema);

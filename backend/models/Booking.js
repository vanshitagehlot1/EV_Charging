const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    stationId: { type: mongoose.Schema.Types.ObjectId, ref: "Station", required: true },
    slotTime: { type: String, required: true },
    paymentStatus: { type: String, enum: ["Pending", "Completed", "Failed"], default: "Pending" },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Booking", BookingSchema);

const Booking = require("../models/Booking");

exports.createBooking = async (req, res) => {
    const { userId, stationId, slotTime } = req.body;
    const newBooking = new Booking({ userId, stationId, slotTime, paymentStatus: "Pending" });
    await newBooking.save();
    res.json(newBooking);
};

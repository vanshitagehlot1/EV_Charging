const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");

// Routes
const userRoutes = require("./routes/userRoutes.js");
const stationRoutes = require("./routes/stationRoutes.js");
const bookingRoutes = require("./routes/bookingRoutes.js");
const paymentRoutes = require("./routes/paymentRoutes.js");

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/stations", stationRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/payments", paymentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

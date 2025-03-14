const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
    try {
        // Connect to MongoDB using MONGO_URI from .env
        await mongoose.connect(process.env.MONGO_URI);

        console.log("✅ MongoDB Connected Successfully");
    } catch (error) {
        console.error("❌ Database Connection Error:", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;

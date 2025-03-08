const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.header("Authorization").replace("Bearer ", "");
        if (!token) {
            return res.status(401).json({ message: "Access denied. No token provided." });
        }

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.userId).select("-password");

        if (!req.user) {
            return res.status(401).json({ message: "Invalid token." });
        }

        next(); // Move to the next middleware
    } catch (error) {
        res.status(401).json({ message: "Invalid or expired token." });
    }
};

module.exports = authMiddleware;

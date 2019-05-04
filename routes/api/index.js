const router = require("express").Router();
const bookRoutes = require("./books");
const userRoutes = require("./users");
const appointmentRoutes = require("./appointments");

// Book routes
router.use("/books", bookRoutes);
router.use("/users", userRoutes);
router.use("/appointments", appointmentRoutes);

module.exports = router;

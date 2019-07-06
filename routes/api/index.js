const router = require("express").Router();
const recipeRoutes = require("./recipe");
const userRoutes = require("./user");

// Recipe routes
router.use("/recipe", recipeRoutes);
router.use("/user", userRoutes);

module.exports = router;
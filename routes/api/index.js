const router = require("express").Router();
const recipeRoutes = require("./recipe");

// Recipe routes
router.use("/recipe", recipeRoutes);
router.use("/user", userRoutes);

module.exports = router;
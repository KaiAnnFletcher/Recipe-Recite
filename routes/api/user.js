const router = require("express").Router();
const usersController = require("../../controllers/userscontroller");

router.route("/")
  .get(usersController.findOne)
  .post(usersController.create);

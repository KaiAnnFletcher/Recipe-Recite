const router = require("express").Router();
const usersController = require("../../controllers/userscontroller");
const User = require('../../models/user.js');

// POST route to register a user
router.post('/api/register', function(req, res) {
  const { email, password } = req.body;
  const user = new User({ email, password });
  user.save(function(err) {
    if (err) {
      res.status(500)
        .send("Error registering new user please try again.");
    } else {
      res.status(200).send("Welcome to the club!");
    }
  });
});

router.route("/")
  .get(usersController.findOne)
  .post(usersController.create);

module.exports = router;
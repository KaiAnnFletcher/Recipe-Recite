const router = require("express").Router();
const usersController = require("../../controllers/userscontroller");
const User = require('../../models/user.js');
const jwt = require('jsonwebtoken');
const withAuth = require('../../middleware');

router.post('/authenticate', function(req, res) {
  const { username, password } = req.body;
  User.findOne({ username }, function(err, user) {
    if (err) {
      console.error(err);
      res.status(500)
        .json({
        error: 'Internal error please try again'
      });
    } else if (!user) {
      res.status(401)
        .json({
          error: 'Incorrect username or password'
        });
    } else {
      user.isCorrectPassword(password, function(err, same) {
        if (err) {
          res.status(500)
            .json({
              error: 'Internal error please try again'
          });
        } else if (!same) {
          res.status(401)
            .json({
              error: 'Incorrect username or password'
          });
        } else {
          // Issue token
          const payload = { username };
          const token = jwt.sign(payload, process.env.SECRET, {
            expiresIn: '1h'
          });
          res.cookie('token', token, { httpOnly: true })
            .sendStatus(200);
        }
      });
    }
  });
});

// POST route to register a user
router.post('/register', function(req, res) {
  console.log(req.body);
  const { username, password } = req.body;
  const user = new User({ username, password });
  user.save(function(err) {
    if (err) {
      res.status(500)
        .send("Error registering new user please try again.");
    } else {
      res.status(200).send("Welcome to the club!");
    }
  });
});

router.get('/checkToken', withAuth, function(req, res) {
  res.sendStatus(200);
});

router.post('/bookmark', withAuth, function(req, res) {
  User.findOneAndUpdate({ username: req.username }, {$push: {favorites: req.body.id}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
});
module.exports = router;
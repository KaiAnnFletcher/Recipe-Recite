const router = require("express").Router();
const usersController = require("../../controllers/userscontroller");
const User = require('../../models/user.js');
const Recipe = require("../../models/recipe");
const jwt = require('jsonwebtoken');
const withAuth = require('../../middleware');

router.post('/authenticate', function(req, res) {
  const { username, password } = req.body;
  User.findOne({ username }, function(err, user) {
    if (err) {
      console.error(err);
      res.status(200)
        .send('Internal error please try again');
    } else if (!user) {
      res.status(200)
        .send('Incorrect username or password');
    } else {
      user.isCorrectPassword(password, function(err, same) {
        if (err) {
          res.status(200)
            .send( 'Internal error please try again');
        } else if (!same) {
          res.status(200)
            .send('Incorrect username or password');
        } else {
          // Issue token
          const payload = { username };
          const token = jwt.sign(payload, process.env.SECRET, {
            expiresIn: '1h'
          });
          res.cookie('token', token, { httpOnly: true })
            .sendStatus(201);
        }
      });
    }
  });
});

// POST route to register a user
router.post('/register', function(req, res) {
    const { username, password } = req.body;
    const user = new User({ username, password });
    User
      .findOne({username: username}, function(err, dbModel){
        if (dbModel) {
          res.status(200).send("User already exists")
        } else {
          user.save(function(err) {
            if (err) {
              res.status(200)
                .send("Error registering new user please try again.");
            } else {
              res.status(201).send("Successfully created user. Welcome!");
            }
          });
        }
      })

});

router.get('/checkToken', withAuth, function(req, res) {
  res.sendStatus(200);
});

router.get('/getUsername', withAuth, function(req, res) {
  res.json({username: req.username});
});

router.post('/bookmark', withAuth, function(req, res) {
  User.findOneAndUpdate({ username: req.username }, {$push: {favorites: req.body.id}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
});

router.get('/allBookmarks', withAuth, function(req, res) {
  let promises = [];
  User.findOne({ username: req.username }, "favorites")
      .then(favorites => {

      favorites.favorites.forEach(id => {
        const promise = Recipe
        .findById(id)
        promises.push(promise);
        
      })
      Promise.all(promises).then((data) => {
        res.json(data)
      })
      })
});

module.exports = router;
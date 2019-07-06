const router = require("express").Router();
const recipeController = require("../../controllers/recipesController");
const axios = require("axios");
const cheerio = require("cheerio");
const Recipe = require("../../models/recipe");

// A GET route for scraping the main allrecipe page
router.get("/scrape", function (req, res) {
  // First, we grab the body of the html with axios
  axios.get("https://www.allrecipes.com/").then(function (response) {
    // Then, we load that into cheerio and save it to $ for a shorthand selector
    //console.log(response);
    console.log("***** scraped allrecipe main page *****");
    var $ = cheerio.load(response.data);
    let output = [];
    let promises = [];
    //console.log($);
    // Now, we grab every h2 within an article tag, and do the following:
    $("article").each(function (i, element) {
      // Save an empty result object
      var result = {};

      // Add the text and href of every link, and save them as properties of the result object
      result.title = $(this)
        .children("div.fixed-recipe-card__info")
        .children("h3")
        .children("a")
        .text();
      result.title = result.title.trim();

      result.summary = $(this)
        .children("div.fixed-recipe-card__info")
        .children("a")
        .children("div.fixed-recipe-card__description")
        .text();

      result.link = $(this)
        .children("div.fixed-recipe-card__info")
        .children("h3")
        .children("a")
        .attr("href");


      result.thumbnail = $(this)
        .children("div.grid-card-image-container")
        .children("a")
        .children("img")
        .attr("data-original-src");

      result.author = $(this)
        .children("div.fixed-recipe-card__info")
        .children("div.fixed-recipe-card__profile")
        .children("a")
        .children("ul")
        .children("li")
        .children("h4")
        .text();


      if (result.title !== '') {
        result.linkid = result.link.match(/\d{4,6}/g)[0];
        const promise = Recipe
        .findOneAndUpdate(result, result, {upsert:true, new:true})
        promises.push(promise);
        // .then(dbModel => output.push(dbModel));
      }
    });
    Promise.all(promises).then((data) => {
      res.json(data)
    })

  });
});

//route to get instructions for a specific recipe for the text to speech
router.get("/scrape/:id", function (req, res) {
  axios.get("https://www.allrecipes.com/recipe/" + req.params.id + "/").then(function (response) {
    var $ = cheerio.load(response.data);
    var result = {};
    //result.instructions = $("div.directions--section").children("div.directions--section__steps").text();
    result.instructions = $("span.recipe-directions__list--item").text();
    result.instructions = result.instructions.replace(/  +/g, '  ').split("\n  ").slice(0, -1);

    res.json(result);
  });
});

router.get("/search/:search", function (req, res) {
  axios.get("https://www.allrecipes.com/search/results/?wt=" + req.params.search).then(function (response) {
    console.log("***** scraped specific page *****");
    var $ = cheerio.load(response.data);
    let output = [];
    let promises = [];
    //console.log($);
    // Now, we grab every h2 within an article tag, and do the following:
    $("article").each(function (i, element) {
      // Save an empty result object
      var result = {};

      // Add the text and href of every link, and save them as properties of the result object
      result.title = $(this)
        .children("div.fixed-recipe-card__info")
        .children("h3")
        .children("a")
        .text();
      result.title = result.title.trim();

      result.summary = $(this)
        .children("div.fixed-recipe-card__info")
        .children("a")
        .children("div.fixed-recipe-card__description")
        .text();

      result.link = $(this)
        .children("div.fixed-recipe-card__info")
        .children("h3")
        .children("a")
        .attr("href");


      result.thumbnail = $(this)
        .children("div.grid-card-image-container")
        .children("a")
        .children("img")
        .attr("data-original-src");

      result.author = $(this)
        .children("div.fixed-recipe-card__info")
        .children("div.fixed-recipe-card__profile")
        .children("a")
        .children("ul")
        .children("li")
        .children("h4")
        .text();



      if (result.title !== '') {
        result.linkid = result.link.match(/\d{4,6}/g)[0];
        const promise = Recipe
        .findOneAndUpdate(result, result, {upsert:true, new:true})
        promises.push(promise);
        // .then(dbModel => output.push(dbModel));
      }
    });
    Promise.all(promises).then((data) => {
      res.json(data)
    })
  })
})

router.route("/")
  .get(recipeController.findAll)
  .post(recipeController.create);

router
  .route("/:id")
  .get(recipeController.findById)
  .delete(recipeController.remove);


module.exports = router;
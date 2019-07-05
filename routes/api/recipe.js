const router = require("express").Router();
const recipeController = require("../../controllers/recipesController");

router.route("/")
  .get(recipeController.findAll)
  .post(recipeController.create);

router
  .route("/:id")
  .get(recipeController.findById)
  .put(recipeController.update)
  .delete(recipeController.remove);

  // A GET route for scraping the echoJS website
router.get("/scrape", function (req, res) {
  // First, we grab the body of the html with axios
  axios.get("https://www.allrecipes.com/").then(function (response) {
    // Then, we load that into cheerio and save it to $ for a shorthand selector
    console.log(response);
    console.log("**********************");
    var $ = cheerio.load(response.data);
    let output = [];
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


      if (result.title === '') {

      } else {
        output.push(result);
      }
      // Create a new Article using the `result` object built from scraping
      // db.Article.create(result)
      //   .then(function(dbArticle) {
      //     // View the added result in the console
      //     //console.log(dbArticle);
      //   })
      //   .catch(function(err) {
      //     // If an error occurred, log it
      //     console.log(err);
      //   });
    });
    console.log('fdfsdhskgd')
    console.log(output);
    // res.json(output)
    // Send a message to the client
    // res.send("Scrape Complete");
  });
});


module.exports = router;
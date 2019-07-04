import axios from "axios";
// import sampleData from "./sampleData.json";
import cheerio from "cheerio";
export default {
    scrapeAllRecipes: function () {
        axios.get("https://www.allrecipes.com/").then(function (response) {
            // Then, we load that into cheerio and save it to $ for a shorthand selector
            let $ = cheerio.load(response.data);

            let outputRecipes = [];

            $("article").each(function (i, element) {
                // Save an empty result object
                let result = {};

                // Add the text and href of every link, and save them as properties of the result object
                result.title = $(this)
                    .children("div.fixed-recipe-card__info")
                    .children("h3")
                    .children("a")
                    .text();

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
                outputRecipes.push(result);
            });

            //return the array with the recipes
            return outputRecipes;
        });
    },
    scrapeRecipeById: function (id) {
        axios.get("https://www.allrecipes.com/recipe/" + id).then(function (response) {
            var $ = cheerio.load(response.data);
            var result = {};
            result.instructions = $("div.directions--section").children("div.directions--section__steps").text();
            return result;
        });
    }
}

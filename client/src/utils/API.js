import axios from "axios";
// import sampleData from "./sampleData.json";
// import cheerio from "cheerio";

export default {
    scrapeAllRecipes: function () {
        return axios.get("/api/recipe/scrape");
    },
    scrapeRecipeById: function (id) {
        return axios.get("/api/recipe/scrape/" + id);
    },
    scrapeBySearch: function(searchString) {
        var parsedString = searchString.replace(/ /g, "%20");
        return axios.get("/api/recipe/search/" + parsedString);
    },
    getRecipeById: function (id) {
        return axios.get("/api/recipe/" + id)        
    }
}

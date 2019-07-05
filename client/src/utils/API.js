import axios from "axios";

export default {
    scrapeAllRecipes: function () {
        // console.log(axios.get("https://www.allrecipes.com/"));
        return axios.get("/api/recipe/scrape");
    },
    scrapeRecipeById: function (id) {
        return axios.get("https://www.allrecipes.com/recipe/" + id)
    }
}

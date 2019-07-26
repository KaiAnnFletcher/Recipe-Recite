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
    },
    registerUser: function (userData) {
        return axios.post("/api/user/register", userData);
    },
    loginUser: function (userData) {
        return axios.post("/api/user/authenticate", userData);
    },
    checkToken: function () {
        return axios.get("/api/user/checkToken");
    },
    getUsername: function () {
        return axios.get("/api/user/getUsername")
    },
    bookmark: function(entryData){
        return axios.post("/api/user/bookmark", entryData);
    },
    getBookmarks: function(){
        return axios.get("/api/user/allBookmarks");
    },
}

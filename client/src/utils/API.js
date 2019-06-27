import axios from "axios";

export default {
    scrapeAllRecipes: function(searchString) {
        return axios.get("http://www.echojs.com/");
    }
}
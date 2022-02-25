// Import prior to `module.exports` within `.eleventy.js`
const { DateTime } = require("luxon");
// Import Axios
const axios = require("axios");

module.exports = function (eleventyConfig) {
  // Passthrough Css file
  eleventyConfig.addPassthroughCopy("src/style.css");
  eleventyConfig.addPassthroughCopy("src/assets");

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  // API OMDB
  eleventyConfig.addCollection("articles", async (collection) => {
    const response = await axios({
      method: "get",
      // url: " http://www.omdbapi.com/?i=tt3896198&apikey=a4053176",
      url: " https://api.publicapis.org/entries",
    })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        // Handle error
      });
    return response ? response : [];
  });

  // Return your Object options:
  return {
    dir: {
      input: "src",
      //   output: "-site", // Default
      output: "public",
    },
  };
};

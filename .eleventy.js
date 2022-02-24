// Import prior to `module.exports` within `.eleventy.js`
const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  // Passthrough Css file
  eleventyConfig.addPassthroughCopy("src/style.css");
  eleventyConfig.addPassthroughCopy("src/assets");

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
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

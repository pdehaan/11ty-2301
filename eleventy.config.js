const markdownLib = require("markdown-it")({ html: true });
const mdAttrs = require("markdown-it-attrs");

/**
 * @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig
 * @returns {ReturnType<import("@11ty/eleventy/src/defaultConfig")>}
 */
module.exports = function (eleventyConfig) {
  // markdownLib.use(mdAttrs);
  eleventyConfig.setLibrary("md", markdownLib);
  eleventyConfig.amendLibrary("md", (markdownLib) => markdownLib.use(mdAttrs));

  eleventyConfig.addPairedShortcode("markdown", (content, inline = null) => {
    return inline
      ? markdownLib.renderInline(content)
      : markdownLib.render(content);
  });

  return {
    dir: {
      input: "src",
      output: "www",
    },
  };
};

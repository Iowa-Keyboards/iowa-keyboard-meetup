const plugins = require('./config/plugins')
const dateFilters = require('./config/filters/date')

module.exports = function (eleventyConfig) {
  const markdownIt = require("markdown-it")
  const markdownItFootnote = require("markdown-it-footnote")
  const markdownItAttrs = require("markdown-it-attrs")
  const markdownItAnchor = require('markdown-it-anchor')

  const options = {
    html: true,
    breaks: true,
    linkify: true
  }

  let markdownLib = markdownIt(options)
    .use(markdownItFootnote)
    .use(markdownItAttrs)
    .use(markdownItAnchor)

  eleventyConfig.setLibrary('md', markdownLib);

  // Liquid options
  eleventyConfig.setLiquidOptions({
    dynamicPartials: true,
    strict_filters: true,
    root: ["src/_includes"],
    extname: ".html"
  });

  // Passthroughs
  ['src/assets'].forEach(path => {
    eleventyConfig.addPassthroughCopy(path, {
      filter: path => !path.endsWith('.scss') && !path.startsWith('_')
    })
  })

  // Filters
  Object.keys(dateFilters).forEach(filterName => {
    eleventyConfig.addFilter(filterName, dateFilters[filterName])
  })

  // Plugins
  plugins.forEach(plugin => {
    eleventyConfig.addPlugin(require(plugin.name), { ...plugin.options })
  })

  const md = new markdownIt({
    html: true
  });
  
  eleventyConfig.addPairedShortcode("markdown", (content) => {
    return md.render(content);
  });

  return {
    dir: {
      input: "src",
      output: "_site",
    }
  }
}
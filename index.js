var riot = require('riot')
var pug = require('pug')
var loaderUtils = require("loader-utils")

module.exports = function(source) {
  var options = { pretty: true },
      config = {},
      query = loaderUtils.parseQuery(this.query)
  ;
  Object.keys(query).forEach(function(attr) {
  	config[attr] = query[attr];
  });
  options = Object.assign(options, config)

  source = pug.render(source, options)
  return 'var riot = require("riot");\n\n' + riot.compile(source)
};


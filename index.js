var riot = require('riot')
var pug = require('pug')

module.exports = function(source) {
  source = pug.render(source, { pretty: true })
  return 'var riot = require("riot");\n\n' + riot.compile(source)
};

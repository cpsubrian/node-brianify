var fs = require('fs');
var path = require('path');

module.exports = {
  "name" : prompt('name',
    typeof name === 'undefined' ? basename.replace(/^node-|[.-]js$/g, '') : name
  ),
  "version" : prompt('version',
    typeof version !== "undefined" ? version : '0.0.0'
  ),
  "description" : (function () {
    if (typeof description !== 'undefined' && description) {
      return description;
    }
    var value;
    try {
      var src = fs.readFileSync('README.md', 'utf8');
      value = src.split('\n').filter(function (line) {
        return (/\s+/).test(line) &&
               line.trim() !== basename.replace(/^node-/, '') &&
               !line.trim().match(/^#/);
      })[0]
        .trim()
        .replace(/^./, function (c) { return c.toLowerCase(); })
        .replace(/\.$/, '');
    }
    catch (e) {
      var d;
      try {
        // Wouldn't it be nice if that file mattered?
        d = fs.readFileSync('.git/description', 'utf8');
      } catch (e) {}
      if (d && d.trim() && !value) value = d;
    }
    return prompt('description', value);
  })(),

  "main" : "index.js",

  "dependencies" : {},

  "devDependencies" : { "mocha": "*" },

  "scripts" : {"test": "make test"},

  "repository" : {
    "type" : "git",
    "url" : "git://github.com/cpsubrian/" + basename + ".git"
  },

  "homepage" : "https://github.com/cpsubrian/" + basename,

  "keywords" : prompt(function (s) {
    if (!s) return undefined;
    if (Array.isArray(s)) s = s.join(' ');
    if (typeof s !== 'string') return s;
    return s.split(/[\s,]+/);
  }),

  "author" : {
    "name" : "Brian Link",
    "email": "cpsubrian@gmail.com"
  },

  "license" : "MIT"
};
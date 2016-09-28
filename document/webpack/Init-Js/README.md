this is a plugin to init project.

var InitJS = require('Init-Js');

var webpackConfig = {
  // ... config settings here ...
  plugins: [
    new InitJs({options: true})
  ]
};
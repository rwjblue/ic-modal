var makeModules = require('broccoli-dist-es6-module');
var templateFilter = require('ember-cli-htmlbars');

var eachTransform = require('ember-cli-htmlbars/ext/plugins/transform-each-in-to-hash');
var withTransform = require('ember-cli-htmlbars/ext/plugins/transform-with-as-to-hash');

var htmlbarsOptions = {
  disableComponentGeneration: true,

  plugins: {
    ast: [
      eachTransform,
      withTransform
    ]
  }
};

var templates = templateFilter('lib', {
  htmlbarsOptions: htmlbarsOptions
});

module.exports = makeModules(templates, {
  global: 'ic.modal',
  packageName: 'ic-modal',
  main: 'main',
  shim: {
    'ember': 'Ember'
  }
});


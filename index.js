/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-sticky',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/sticky/jquery.sticky.js');
  }
};

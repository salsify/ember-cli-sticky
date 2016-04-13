/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-sticky',

  included: function(app) {
    this._super.included(app);

    if (!process.env.EMBER_CLI_FASTBOOT) {
      // If this flag is present, the addon is being built in FastBoot
      // The jQuery plugin causes FastBoot to crash, so only import in
      // the browser build
      app.import(app.bowerDirectory + '/sticky/jquery.sticky.js');
    }
  }
};

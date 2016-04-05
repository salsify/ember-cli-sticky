/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-sticky',

  options: {
    nodeAssets: {
      'jquery-sticky': function() {
        // The jQuery plugin causes FastBoot to crash, so exclude there
        return {
          enabled: !process.env.EMBER_CLI_FASTBOOT,
          import: ['jquery.sticky.js']
        };
      }
    }
  }
};

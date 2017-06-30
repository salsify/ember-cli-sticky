/* jshint node: true */
'use strict';

const fastbootTransform = require('fastboot-transform');
module.exports = {
  name: 'ember-cli-sticky',

  options: {
    nodeAssets: {
      'jquery-sticky': function() {
        // The jQuery plugin causes FastBoot to crash, so exclude there
        return {
          import: ['jquery.sticky.js'],
          processTree(input) {
            return fastbootTransform(input);
          }
        };
      }
    }
  }
};

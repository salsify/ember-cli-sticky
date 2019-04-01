'use strict';

const fastbootTransform = require('fastboot-transform');
module.exports = {
  name: 'ember-cli-sticky',

  options: {
    nodeAssets: {
      'jquery-sticky': {
        import: {
          include: ['jquery.sticky.js'],
          // The jQuery plugin causes FastBoot to crash, so use fastboot-transform to exclude it
          processTree(input) {
            return fastbootTransform(input);
          }
        }
      }
    }
  }
};

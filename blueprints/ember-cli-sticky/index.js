module.exports = {
  description: 'Ember addon for Sticky.js'

  afterInstall: function() {
    return this.addBowerPackageToProject('sticky');
  }
};

module.exports = {
  description: 'Ember addon for Sticky.js',

  normalizeEntityName: function() {}, // no-op since we're just adding dependencies  

  afterInstall: function() {
    return this.addBowerPackageToProject('sticky');
  }
};

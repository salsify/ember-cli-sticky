import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: 'sticky',

  setupSticky: function() {
    this.$().sticky({topSpacing: 0});
  }.on('didInsertElement'),

  teardownSticky: function() {
    this.$().unstick();
  }.on('willDestroyElement'),
});

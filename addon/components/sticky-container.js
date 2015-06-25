import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: 'sticky',

  setupSticky: Ember.on('didInsertElement', function() {
    this.$().sticky({topSpacing: 0});
  }),

  teardownSticky: Ember.on('willDestroyElement', function() {
    this.$().unstick();
  }),
});

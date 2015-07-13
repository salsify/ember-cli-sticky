import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: 'sticky',
  topSpacing: 0,

  setupSticky: Ember.on('didInsertElement', function() {
    this.$().sticky({topSpacing: this.get('topSpacing')});
  }),

  teardownSticky: Ember.on('willDestroyElement', function() {
    this.$().unstick();
  }),
});

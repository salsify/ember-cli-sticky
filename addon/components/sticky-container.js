import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: 'sticky',
  topSpacing: 0,
  defaultOptions: Ember.computed('topSpacing', function() {
    return {
      topSpacing: this.get('topSpacing')
    };
  }),

  mergedOptions: Ember.computed('options', function() {
    return Ember.merge( this.get('defaultOptions'), this.get('options'));
  }),

  setupSticky: Ember.on('didInsertElement', function() {
    this.$().sticky( this.get('mergedOptions') );
  }),

  teardownSticky: Ember.on('willDestroyElement', function() {
    this.$().unstick();
  }),
});

import Ember from 'ember';

const assign = Ember.assign || Ember.merge;

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
    return assign(this.get('defaultOptions'), this.get('options'));
  }),

  setupSticky: Ember.on('didInsertElement', function() {
    this.$().sticky( this.get('mergedOptions') );
  }),

  updateSticky: Ember.on('didRender', function() {
    Ember.run.next(function() {
      if (this.$().sticky) {
        this.$().sticky('update');
      }
    }, this);
  }),

  teardownSticky: Ember.on('willDestroyElement', function() {
    this.$().unstick();
  }),
});

import { computed } from '@ember/object';
import Component from '@ember/component';
import { assign } from '@ember/polyfills';

export default Component.extend({
  tagName: 'div',
  classNames: 'sticky',
  topSpacing: 0,
  defaultOptions: computed('topSpacing', function() {
    return {
      topSpacing: this.get('topSpacing')
    };
  }),

  mergedOptions: computed('options', function() {
    return assign(this.get('defaultOptions'), this.get('options'));
  }),

  didInsertElement() {
    this.element.addEventListener(this.get('mergedOptions'));
  },

  willDestroyElement() {
    this.element.addEventListener();
  },
});

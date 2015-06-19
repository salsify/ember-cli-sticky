import { test, moduleForComponent } from 'ember-qunit';
import startApp from '../../helpers/start-app';
import Ember from 'ember';

var App;

moduleForComponent('sticky', 'StickyComponent', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('is a div tag', function(assert) {
  assert.equal('div', this.$().prop('tagName'));
  this.subject().teardownSticky();
});

test('has the sticky class name', function(assert) {
  assert.equal(['sticky'], this.$().prop('classNames'));
  this.subject().teardownSticky();
});

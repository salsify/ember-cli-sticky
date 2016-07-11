import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sticky-container', 'Integration | Component | sticky container', {
  integration: true
});

test('it applies jquery-sticky to its content', function(assert) {
  this.render(hbs`
    Precontent
    {{#sticky-container}}Sticky Content{{/sticky-container}}
    Postcontent
  `);

  assert.equal(this.$('.sticky').text().trim(), 'Sticky Content');
});

test('it honors the given jquery-sticky options', function(assert) {
  this.set('options', { wrapperClassName: 'test-wrapper-class' });

  this.render(hbs`
    {{#sticky-container options=options}}Sticky Content{{/sticky-container}}
  `);

  assert.equal(this.$('.test-wrapper-class').text().trim(), 'Sticky Content');
});

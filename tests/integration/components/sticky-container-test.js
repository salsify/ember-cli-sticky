import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | sticky container', function(hooks) {
  setupRenderingTest(hooks);

  test('it applies jquery-sticky to its content', async function(assert) {
    await this.render(hbs`
      Precontent
      {{#sticky-container}}Sticky Content{{/sticky-container}}
      Postcontent
    `);

    assert.equal(find('.sticky').textContent.trim(), 'Sticky Content');
  });

  test('it honors the given jquery-sticky options', async function(assert) {
    this.set('options', { wrapperClassName: 'test-wrapper-class' });

    await this.render(hbs`
      {{#sticky-container options=options}}Sticky Content{{/sticky-container}}
    `);

    assert.equal(find('.test-wrapper-class').textContent.trim(), 'Sticky Content');
  });

});

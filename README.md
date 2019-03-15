# ember-cli-sticky [![Build Status](https://travis-ci.org/salsify/ember-cli-sticky.svg?branch=master)](https://travis-ci.org/salsify/ember-cli-sticky)

Ember addon to integrate jQuery plugin [Sticky.js](http://stickyjs.com/).


* `ember install ember-cli-sticky`

* Ember.js v2.18 or above
* Ember CLI v2.13 or above

* `ember server`
* Visit your app at http://localhost:4200.

## Usage

See [Sticky.js options](https://github.com/garand/sticky#options)

```hbs
{{!  ./templates/index.hbs }}

{{#sticky-container options=myStickyOptions}}
    <nav ... />
{{/sticky-container}}
```



```js
// ./controllers/index.js

import Ember from 'ember';

export default Ember.Controller.extend({
  myStickyOptions: {
    topSpacing: 30 //px, default: 0
  },
});
```

Installation
------------------------------------------------------------------------------

* `ember test`
* `ember test --server`


Usage
------------------------------------------------------------------------------

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).

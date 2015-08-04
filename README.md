# Ember-cli-sticky

Ember addon to integrate jQuery plugin [Sticky.js](http://stickyjs.com/).

## Installation

* `ember install ember-cli-sticky`

## Running

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

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).

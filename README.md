# Ember-cli-sticky

Ember addon to integrate jQuery plugin [Sticky.js](http://stickyjs.com/).

[View Demo](https://brandonhilkert.github.io/ember-cli-sticky)

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

## Update GitHub Pages

From a clean master branch:

```sh
ember github-pages:commit --environment=gh-pages
```

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).

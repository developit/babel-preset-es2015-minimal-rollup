# babel-preset-es2015-minimal-rollup

[![npm](https://img.shields.io/npm/v/babel-preset-es2015-minimal-rollup.svg)](http://npm.im/babel-preset-es2015-minimal-rollup)
[![travis](https://travis-ci.org/developit/babel-preset-es2015-minimal-rollup.svg?branch=master)](https://travis-ci.org/developit/babel-preset-es2015-minimal-rollup)


> Babel es2015 preset in loose mode without frills, made for Rollup.


## Installation

```sh
$ npm i -S babel-preset-es2015 babel-preset-es2015-minimal-rollup
```


## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "presets": ["es2015-minimal-rollup"]
}
```

### Via CLI

```sh
$ babel script.js --presets es2015-minimal-rollup
```

### Via Node API

```javascript
require('babel-core').transform('code', {
  presets: ['es2015-minimal-rollup']
});
```

# [guid](https://github.com/jsmini/guid/)

[![](https://img.shields.io/badge/Powered%20by-jslib%20base-brightgreen.svg)](https://github.com/yanhaijing/jslib-base)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/jsmini/guid/blob/master/LICENSE)
[![CI](https://github.com/jsmini/guid/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/jsmini/guid/actions/workflows/ci.yml)
[![npm](https://img.shields.io/badge/npm-0.8.0-orange.svg)](https://www.npmjs.com/package/@jsmini/guid)
[![NPM downloads](http://img.shields.io/npm/dm/@jsmini/guid.svg?style=flat-square)](http://www.npmtrends.com/@jsmini/guid)
[![Percentage of issues still open](http://isitmaintained.com/badge/open/jsmini/guid.svg)](http://isitmaintained.com/project/jsmini/guid 'Percentage of issues still open')

Simple guid generator for JS. Support IE6

简单好用的JS全局ID生成工具，原生兼容IE6

English | [简体中文](./README-zh_CN.md)

## Environment Support

unit test ensure it supports the following environments.

| IE/Edge | Chrome | Firefox | Safari | Opera | IOS | Android | Node  |
| ------- | ------ | ------- | ------ | ----- | --- | ------- | ----- |
| 6+      | 23+    | 4+      | 6+     | 10+   | 5+  | 2.3+    | 0.10+ |

## Directory

```
.
├── demo
├── dist  # production code
├── doc   # document
├── src   # source code
├── test  # unit test
├── CHANGELOG.md
└── TODO.md
```

## Usage

npm installation

```bash
$ npm install --save @jsmini/guid
```

Node.js

```js
var guid = require('@jsmini/guid').guid;

guid();
```

webpack

```js
import { guid } from '@jsmini/guid';

guid();
```

Require.js

```js
requirejs(
  ['node_modules/@jsmini/guid/dist/index.aio.js'],
  function (jsmini_guid) {
    var guid = jsmini_guid.guid;

    guid();
  },
);
```

Browser

```html
<script src="node_modules/@jsmini/guid/dist/index.aio.js"></script>

<script>
  var guid = jsmini_guid.guid;

  guid();
</script>
```

## Document

[API](https://github.com/jsmini/guid/blob/master/doc/api.md)

## Contributing Guide ![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

when initialize, install dependencies

```bash
$ npm install
```

builds your code for production to `build` folder

```bash
$ npm run build
```

run unit test. notice: borwser enviroment need to test manually. test file is in `test/browser`

```bash
$ npm test
```

change the version in package.json and README.md, add your description in CHANGELOG.md, and then release it happily.

```bash
$ npm run release
```

publish the new package to npm

```bash
$ npm publish --access=public
```

Maybe you should change relative information in the follow files

- README.md
- package.json
- config/rollup.js
- test/browser/index.html

## CHANGELOG

[CHANGELOG.md](https://github.com/jsmini/guid/blob/master/CHANGELOG.md)

## TODO

[TODO.md](https://github.com/jsmini/guid/blob/master/TODO.md)

## who is using

[![npm](https://img.shields.io/npm/v/atlas-sdk-core.svg)](https://npmjs.org/package/atlas-sdk-core)
[![downloads](https://img.shields.io/npm/dm/atlas-sdk-core.svg)](https://www.npmjs.com/package/atlas-sdk-core)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/zalando-incubator/atlas-js-core/master/LICENSE)
[![Build Status](https://travis-ci.org/zalando-incubator/atlas-js-core.svg?branch=master)](https://travis-ci.org/zalando-incubator/atlas-js-core)
[![David](https://img.shields.io/david/strongloop/express.svg)](https://david-dm.org/zalando-incubator/atlas-js-core.svg)
[![codecov](https://codecov.io/gh/zalando-incubator/atlas-js-core/branch/master/graph/badge.svg)](https://codecov.io/gh/zalando-incubator/atlas-js-core)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)

# Atlas JavaScript SDK Core

This SDK covers the functionality provided by team Atlas' (aka Distributed Commerce) APIs, namely, Checkout, Guest Checkout, and Catalog APIs.

Those APIs, and in turn this SDK, provide our partners a more streamlined access the Zalando shopping platform to enable our customers to purchase wherever they are.

The purpose of this project is to provide low-level calls to API backend and response models for Zalando Checkout, Guest Checkout, and Catalog APIs in order to allow easily integrate and run Zalando Сheckout in minutes using your own UI solution.

If you want to access the APIs directly we recommend that you take a look at their [documentation](https://zalando-incubator.github.io/checkoutapi-docs/).

We use Promises a lot :)

## Installation

```sh
npm install --save atlas-sdk-core es6-promise
```

On install we're transpiling the code for your convenience. You have access to two files under a `lib/` folder, one for using in node and another for browser usages.


## Warning

Because we are using Promises you must bring your own ES6 Promise compatible polyfill, e.g. [es6-promise](https://github.com/jakearchibald/es6-promise).

## Configuration and Usage

You need to configure Atlas JavaScript SDK Core first and use configured instance variable to interact with AtlasSDK.

In order to configure AtlasSDK manually provide an object with 2 mandatory parameters __client_id__ and __sales_channel__:

```javascript
import AtlasSDK from 'atlas-sdk-core';

AtlasSDK.configure({
  client_id: 'CLIENT_ID',
  sales_channel: 'SALES_CHANNEL',
  is_sandbox: true
}).then((sdk) => {
  // sdk instance is ready to use

  sdk.getArticle('AD112B0F6-A11').then((article) => {
    console.log(`Article name: ${article.name}`);
  });
}).catch((error) => {
  console.error(`${error}`);
});
```

Since we are using __Promises__ you can benefit from __await/async__:
```javascript
import AtlasSDK from 'atlas-sdk-core';

const sdk = await AtlasSDK.configure({
  client_id: 'CLIENT_ID',
  sales_channel: 'SALES_CHANNEL'
});
const article = await sdk.getArticle('AD112B0F6-A11');
console.log(`Article name: ${article.name}`);
```

## Local Development

If you want to contribute, please, read our [Contributing](CONTRIBUTING.md) guidelines first.

In order to start SDK development simply run
```bash
npm run tdd
```

Check existing codebase tests for test examples.

## AtlasSDK Documentation

[AtlasSDK Reference Documentation](https://zalando-incubator.github.io/atlas-js-core/) is generated automatically during the production build.

## Contact

For any inquiry, please contact Team Atlas via team-atlas@zalando.de

## LICENSE

The MIT License (MIT) Copyright © 2016 Zalando SE, https://tech.zalando.com

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the “Software”), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

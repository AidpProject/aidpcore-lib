Aidpcore Library
=======

A pure and powerful JavaScript Aidpcoin library.

## Principles

Aidpcoin is a powerful new peer-to-peer platform for the next generation of financial technology. The decentralized nature of the Aidpcoin network allows for highly resilient Aidpcoin infrastructure, and the developer community needs reliable, open-source tools to implement Aidpcoin apps and services.

## Get Started

```
npm install aidpcore-lib
```

```
bower install aidpcore-lib
```

## Examples

* [Generate a random address](https://github.com/AidpProject/aidpcore-lib/blob/master/docs/examples.md#generate-a-random-address)
* [Generate a address from a SHA256 hash](https://github.com/AidpProject/aidpcore-lib/blob/master/docs/examples.md#generate-a-address-from-a-sha256-hash)
* [Import an address via WIF](https://github.com/AidpProject/aidpcore-lib/blob/master/docs/examples.md#import-an-address-via-wif)
* [Create a Transaction](https://github.com/AidpProject/aidpcore-lib/blob/master/docs/examples.md#create-a-transaction)
* [Sign a Aidpcoin message](https://github.com/AidpProject/aidpcore-lib/blob/master/docs/examples.md#sign-a-aidpcoin-message)
* [Verify a Aidpcoin message](https://github.com/AidpProject/aidpcore-lib/blob/master/docs/examples.md#verify-a-aidpcoin-message)
* [Create an OP RETURN transaction](https://github.com/AidpProject/aidpcore-lib/blob/master/docs/examples.md#create-an-op-return-transaction)
* [Create a 2-of-3 multisig P2SH address](https://github.com/AidpProject/aidpcore-lib/blob/master/docs/examples.md#create-a-2-of-3-multisig-p2sh-address)
* [Spend from a 2-of-2 multisig P2SH address](https://github.com/AidpProject/aidpcore-lib/blob/master/docs/examples.md#spend-from-a-2-of-2-multisig-p2sh-address)


## Security

We're using aidpcore in production, but please use common sense when doing anything related to finances! We take no responsibility for your implementation decisions.

## Contributing

Please send pull requests for bug fixes, code optimization, and ideas for improvement. For more information on how to contribute, please refer to our [CONTRIBUTING](https://github.com/AidpProject/aidpcore-lib/blob/master/CONTRIBUTING.md) file.

## Building the Browser Bundle !!Unsupported as no block header decode functions purely in JS!!

To build a aidpcore-lib full bundle for the browser:

```sh
gulp browser
```

This will generate files named `aidpcore-lib.js` and `aidpcore-lib.min.js`.

## Development & Tests

```sh
git clone https://github.com/AidpProject/aidpcore-lib
cd aidpcore-lib
npm install
```

Run the node tests(browser tests will fail because there are no pure js libs for x16r or x16rV2:

```sh
gulp test:node
```

You can also run just the Node.js tests with `gulp test:node`, just the browser tests with `gulp test:browser`
or create a test coverage report (you can open `coverage/lcov-report/index.html` to visualize it) with `gulp coverage`.

## License

Code released under [the MIT license](https://github.com/AidpProject/aidpcore-lib/blob/master/LICENSE).

Copyright 2018-2019 UnderDarkSkies

Copyright 2013-2017 BitPay, Inc. 

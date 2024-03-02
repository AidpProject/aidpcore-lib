'use strict';

var aidpcore = module.exports;

// module information
aidpcore.version = 'v' + require('./package.json').version;
aidpcore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of aidpcore-lib found. ' +
      'Please make sure to require aidpcore-lib and check that submodules do' +
      ' not also include their own aidpcore-lib dependency.';
    throw new Error(message);
  }
};
aidpcore.versionGuard(global._aidpcore);
global._aidpcore = aidpcore.version;

// crypto
aidpcore.crypto = {};
aidpcore.crypto.BN = require('./lib/crypto/bn');
aidpcore.crypto.ECDSA = require('./lib/crypto/ecdsa');
aidpcore.crypto.Hash = require('./lib/crypto/hash');
aidpcore.crypto.Random = require('./lib/crypto/random');
aidpcore.crypto.Point = require('./lib/crypto/point');
aidpcore.crypto.Signature = require('./lib/crypto/signature');

// encoding
aidpcore.encoding = {};
aidpcore.encoding.Base58 = require('./lib/encoding/base58');
aidpcore.encoding.Base58Check = require('./lib/encoding/base58check');
aidpcore.encoding.BufferReader = require('./lib/encoding/bufferreader');
aidpcore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
aidpcore.encoding.Varint = require('./lib/encoding/varint');

// utilities
aidpcore.util = {};
aidpcore.util.buffer = require('./lib/util/buffer');
aidpcore.util.js = require('./lib/util/js');
aidpcore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
aidpcore.errors = require('./lib/errors');

// main aidpcoin library
aidpcore.Address = require('./lib/address');
aidpcore.Block = require('./lib/block');
aidpcore.MerkleBlock = require('./lib/block/merkleblock');
aidpcore.BlockHeader = require('./lib/block/blockheader');
aidpcore.HDPrivateKey = require('./lib/hdprivatekey.js');
aidpcore.HDPublicKey = require('./lib/hdpublickey.js');
aidpcore.Networks = require('./lib/networks');
aidpcore.Opcode = require('./lib/opcode');
aidpcore.PrivateKey = require('./lib/privatekey');
aidpcore.PublicKey = require('./lib/publickey');
aidpcore.Script = require('./lib/script');
aidpcore.Transaction = require('./lib/transaction');
aidpcore.URI = require('./lib/uri');
aidpcore.Unit = require('./lib/unit');

// dependencies, subject to change
aidpcore.deps = {};
aidpcore.deps.bnjs = require('bn.js');
aidpcore.deps.bs58 = require('bs58');
aidpcore.deps.Buffer = Buffer;
aidpcore.deps.elliptic = require('elliptic');
aidpcore.deps.nodeX16r = require('node-x16r');
aidpcore.deps.nodeX16rV2 = require('node-x16rv2');
aidpcore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
aidpcore.Transaction.sighash = require('./lib/transaction/sighash');

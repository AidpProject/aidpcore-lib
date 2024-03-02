'use strict';

var should = require('chai').should();
var aidpcore = require('../');

describe('#versionGuard', function() {
  it('global._aidpcore should be defined', function() {
    should.equal(global._aidpcore, aidpcore.version);
  });

  it('throw an error if version is already defined', function() {
    (function() {
      aidpcore.versionGuard('version');
    }).should.throw('More than one instance of aidpcore');
  });
});

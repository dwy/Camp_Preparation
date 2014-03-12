'use strict';

var camp = require('../lib/Camp_Preparation.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['awesome'] = {
  setUp: function(done) {
    done();
  },
  'no args': function(test) {
    test.expect(1);
    test.equal(camp.awesome(), 'awesome', 'should be awesome.');
    test.done();
  },
  'version': function(test) {
    test.expect(1);
    test.equal("0.0.0.0.1", camp.VERSION);
    test.done();
  }
};

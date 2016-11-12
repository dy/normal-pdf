const assert = require('assert')
const n = require('./')

assert.equal(Math.sqrt(Math.PI*2)*n(0), 1);
assert.equal(n(100), 0);

assert.equal(n(1, 1, 0), 1);
assert.equal(n(0, 0, 0), 1);
assert.equal(n(1, 0, 0), 0);

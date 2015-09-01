var assert = require('assert');

// Test regular arrays first
// var array = [0,1,2,3];

// Then test simulated arrays
var array = require('./fakeArray.js');
array.push(0);
array.push(1);
array.push(2);
array.push(3);

assert.equal(array.length, 4, 'length should be 4, but it is ' + array.length);
assert.equal(array.pop(), 3, 'pop should return 3, but it doesn\'t');
assert.equal(array.length, 3, 'length should now be 3, but it is ' + array.length);
assert.equal(array.push(4), 4, 'push should return the new length');
assert.equal(array.length, 4, 'length should now be 4, but it\'s ' + array.length);
assert.equal(array[3], 4, 'push should put the new value at the end of the array');
assert.equal(array.join(), '0,1,2,4', 'join should return "0,1,2,4" but it returns "' + array.join() + '"');
assert.equal(array.join('|'), '0|1|2|4', 'join should use a delimiter if one if provided')

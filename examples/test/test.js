var fakeArray = require('../fakeArray.js');
var assert = require('assert');
var chai = require('chai');
var expect = chai.expect;

var reset = function() {
  fakeArray[0] = 1;
  fakeArray[1] = 2;
  fakeArray[2] = 3;
  fakeArray.length = 3;
};

// with Node's assert

describe('My fake array object', function() {
  describe('The pop method', function() {

    before(reset);

    it('should return the final element', function() {
      assert.equal(fakeArray.pop(), 3);
    });
    it('should reduce the length of the array', function() {
      assert.equal(fakeArray.length, 2);
    });
  });
  describe('The push method', function() {

    before(reset);

    it('should return the new length of the array', function() {
      assert.equal(fakeArray.push(4), 4);
    });
    it('should increase the length of the array', function() {
      assert.equal(fakeArray.length, 4);
    });
    it('should make the given argument the final value', function() {
      assert.equal(fakeArray[3], 4);
    });
  });

  describe('The join method', function() {

    before(reset);

    it('should return a string of values separated by commas', function() {
      assert.equal(fakeArray.join(), '1,2,3');
    });
    it('should use a delimiter character if one is given', function() {
      assert.equal(fakeArray.join('|'), '1|2|3');
    });
  });
});

// with chai's expect

// describe('My fake array object', function() {
//   describe('The pop method', function() {
// 
//     before(reset);
// 
//     it('should return the final element', function() {
//       expect(fakeArray.pop()).to.equal(3);
//     });
//     it('should reduce the length of the array', function() {
//       expect(fakeArray.length).to.equal(2);
//     });
//   });
//   describe('The push method', function() {
// 
//     before(reset);
// 
//     it('should return the new length of the array', function() {
//       expect(fakeArray.push(4)).to.equal(4);
//     });
//     it('should increase the length of the array', function() {
//       expect(fakeArray.length).to.equal(4);
//     });
//     it('should make the given argument the final value', function() {
//       expect(fakeArray[3]).to.equal(4);
//     });
//   });
// 
//   describe('The join method', function() {
// 
//     before(reset);
// 
//     it('should return a string of values separated by commas', function() {
//       expect(fakeArray.join()).to.equal('1,2,3');
//     });
//     it('should use a delimiter character if one is given', function() {
//       expect(fakeArray.join('|')).to.equal('1|2|3');
//     });
//   });
// });

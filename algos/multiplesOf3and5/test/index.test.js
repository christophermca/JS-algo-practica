const mocha = require('mocha');
const expect = require('chai').expect;
const findMultiples3and5 = require('../index.js')

describe('Find Multiples of 3 and 5', () => {
  it('should return sum of values of 3 and 5', () => {
    expect(findMultiples(10)).to.be.equal(23);
  });

  it('should return sum of values of 3 and 5', () => {
    expect(findMultiples(1000)).to.be.equal(233168);
  });
});

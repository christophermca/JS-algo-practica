'use strict';
require('mocha');
const expect = require('chai').expect;
const GenerateHaystack = require('../bin/generateHaystack.js')


describe.only('GenerateHaystack', () => {
  describe('renders haystack', () => {
    it('works', async () => {
      const genHaystack = new GenerateHaystack(2)

      return expect(genHaystack).to.have.keys('needle', 'rl')
    });
  });
});

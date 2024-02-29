'use strict';
const { describe, it } = require('mocha');
const expect = require('chai').expect;
const GenerateHaystack = require('../bin/generateHaystack.js')

describe.only('GenerateHaystack', () => {
  describe('generateHaystack', () => {
    it('works', async () => {
      const generateHaystack = new GenerateHaystack(2)

      return expect(generateHaystack).to.have.keys('needle', 'rl')
    });

    describe('renders haystack', () => {
      it('works', async () => {
        const generateHaystack = new GenerateHaystack(2)
        const haystack = await generateHaystack.initialize()

        expect(haystack).to.equal(2)

      });
    });
  });
});

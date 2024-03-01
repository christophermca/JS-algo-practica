'use strict';
const { describe, it } = require('mocha');
const expect = require('chai').expect;
const GenerateHaystack = require('../bin/generateHaystack.js')

describe('GenerateHaystack', () => {
  describe('generateHaystack', () => {
    it('initializes Haystack ', async () => {
      const Haystack = new GenerateHaystack(2)

      expect(Haystack).to.have.property('rl')
      expect(Haystack).to.have.property('needle')
      expect(Haystack).to.be.instanceof(GenerateHaystack)
    });

    describe('renders haystack', () => {
      it('works', async () => {
        const generateHaystack = new GenerateHaystack(2)
        const stime = await generateHaystack.initialize()

        expect(stime.length).to.greaterThan(0)

      });
    });
  });
});

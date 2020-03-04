'use strict';
const mocha = require('mocha');
const expect = require('chai').expect;
const gsd = require('../utils/generateSockData');
const sortingSocks = require('../index.js')

function sortPile(numOfSocks, numOfColors) {
  describe('sortingSocks', () => {
    let data, log;
    beforeEach(function (done) {
      // auto-generated randomized sock data
      this.timeout(100000);
      setTimeout(done, 10000);
      const socks = gsd(numOfSocks, numOfColors);
      log = socks.log;
      data = socks.data;
    })

    it('should include at least one each color sock.', () => {
      expect(data).to.include('red');
      expect(data).to.include('green');
      expect(data).to.include('blue');
    });

    it('should log the total of requested socks', () => {
      expect(log.red + log.green + log.blue).to.equal(numOfSocks);
    });
  }).timeout(1000000);
}

describe('when requesting 12 socks with 3 colors', () =>
  sortPile(12, 3)
)

describe('when requesting 12 socks with 3 colors', () =>
  sortPile(100000, 3)
)

describe('stress test', () => {
  describe('when requesting 30000000 socks', () =>
    sortPile(10000000, 3)
  )

  describe('when requesting 300000000 socks', () =>
    sortPile(100000000, 3)
  )
})


'use strict';
const mocha = require('mocha');
const expect = require('chai').expect;
const genSockPile = require('../utils/generateSockData');

describe('when requesting 12 socks with 3 colors', () => {
  const numOfSocks = 13
  const numOfColors = 3
  const {data, log} = genSockPile(numOfSocks, numOfColors);

  it('should include at least one each color sock.', () => {
    expect(data).to.include('red');
    expect(data).to.include('green');
    expect(data).to.include('blue');
  });

  it('should log the total of requested socks', () => {
    expect(log.red + log.green + log.blue).to.equal(numOfSocks);
  });
});


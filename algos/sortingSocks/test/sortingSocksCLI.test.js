'use strict';
const mocha = require('mocha');
const expect = require('chai').expect;
const sortingSocks = require('../index.js');

describe('Sorting Socks', () => {
  describe.only('Call from cli', () => {
   expect(sortingSocks(['red','red','blue'])).to.resolve(['cswr'])

  })
})


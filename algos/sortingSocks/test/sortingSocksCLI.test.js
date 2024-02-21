'use strict';
require('mocha');

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)
const expect = chai.expect

const sortingSocks = require('../index.js');


describe('Sorting Socks', () => {
  describe('Call from cli', () => {
    expect(sortingSocks({ data: ['red', 'red', 'blue'] })).to.eventually.equal(['green'])

  })
})


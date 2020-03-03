'use strict';
const mocha = require('mocha');
const assert = require('assert').strict;
const gsd = require('../utils/generateSockData');
const sortingSocks = require('../index.js')

describe('sortingSocks', () => {
  let data;
  beforeEach(() => {
    data = gsd(12, 3);
  })

  it('should pass', () => assert.deepEqual(data, ))
});

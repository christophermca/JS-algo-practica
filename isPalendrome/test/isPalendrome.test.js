'use strict';
const mocha = require('mocha');
const assert = require('assert').strict;
const isPalendrome = require('../index.js')

describe('isPalendrome', () => {
  describe('expects to be passed a string', () => {
    it('throws err if arguments are invalid', async () => {
      await assert.rejects(isPalendrome(), {
        name: 'TypeError',
        message: 'Palendrome expects strings to be passed an array of strings'
      })

      await assert.rejects(isPalendrome([]), {
        name: 'TypeError',
        message: 'Palendrome expects strings to be passed an array of strings'
      })
    });

    it('should resolve and return palendrome obj', async () => {
      await isPalendrome('racecar', 'bad', 'poop').then(result => {
        assert.deepEqual(
          {
            racecar: ['rac', 'e', 'car',{palendrome: true}],
            bad: ['b', 'a', 'd', {palendrome: false}],
            poop: ['po', 'op', {palendrome: true}],
          },
          result
        );
      });
    });
  });
});

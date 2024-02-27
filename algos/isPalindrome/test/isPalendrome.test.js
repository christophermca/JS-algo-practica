const assert = require('assert').strict;
const isPalindrome = require('../index.js')

describe('isPalindrome', () => {
  describe('expects to be passed a string', () => {
    it('throws err if arguments are invalid', async () => {
      await assert.rejects(isPalindrome(), {
        name: 'TypeError',
        message: 'palindrome expects strings to be passed an array of strings'
      })

      await assert.rejects(isPalindrome([]), {
        name: 'TypeError',
        message: 'palindrome expects strings to be passed an array of strings'
      })
    });

    it('should resolve and return palindrome obj', async () => {
      await isPalindrome('racecar', 'bad', 'poop').then(result => {
        assert.deepEqual(
          {
            racecar: ['rac', 'e', 'car', { palindrome: true }],
            bad: ['b', 'a', 'd', { palindrome: false }],
            poop: ['po', 'op', { palindrome: true }],
          },
          result
        );
      });
    });
  });
});

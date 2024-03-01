const GenerateSockPile = require('./sortingSocks/bin/generateSockData');
const GenerateHaystack = require('./findNeedle/bin/generateHaystack');
const { findChar, linearSearch, binarySearch } = require('./findNeedle');
const sortingSocks = require('./sortingSocks');
const isPalindrome = require('./isPalindrome');

module.exports = { GenerateSockPile, GenerateHaystack, isPalindrome, sortingSocks, findChar, linearSearch, binarySearch };

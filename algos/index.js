const generateSockPile = require('./sortingSocks/bin/generateSockData');
const GenerateHaystack = require('./findNeedle/bin/generateHaystack');
const sortingSocks = require('./sortingSocks');
const isPalindrome = require('./isPalindrome');

module.exports = { isPalindrome, sortingSocks, GenerateHaystack, generateSockPile };

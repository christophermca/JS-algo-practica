const generateSockPile = require('./sortingSocks/bin/generateSockData');
const generateHaystack = require('./findNeedle/bin/generateHaystack');
const sortingSocks = require('./sortingSocks');
const isPalindrome = require('./isPalindrome');

module.exports = { isPalindrome, sortingSocks, generateHaystack, generateSockPile };

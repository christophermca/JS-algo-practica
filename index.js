const genSockData = require('./algos/sortingSocks/bin/generateSockData');
const GenHaystack = require('./algos/findNeedle/bin/generateHaystack');
const sortingSocks = require('./algos/sortingSocks');
const isPalindrome = require('./algos/isPalindrome');
const { findChar, binarySearch } = require('./algos/findNeedle')

const palindrome = isPalindrome('racecar', 'poop', 'dog');
const { data } = new genSockData(24, 3);
const socks = sortingSocks({ data });

const needle = 2;
const haystack = new GenHaystack(needle);
const foundInHaystack = findChar(needle, haystack);
const findInHaystack2 = binarySearch(needle, haystack);

Promise.all([palindrome, socks, foundInHaystack, findInHaystack2]).then(console.log);

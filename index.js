require('newrelic');

const genSockData = require('./algos/sortingSocks/utils/generateSockData');
const genHaystack = require('./algos/findNeedle/utils/generateHaystack');
const sortingSocks = require('./algos/sortingSocks');
const isPalindrome = require('./algos/isPalindrome');
const { default: findNeedle, linearSearch, binarySearch } = require('./findNeedle')

const palindrome = isPalindrome('racecar', 'poop', 'dog');
const { data } = genSockData(24, 3);
const socks = sortingSocks({ data });

const needle = 2;
const haystack = genHaystack(needle);
const foundInHaystack = findNeedle(needle, haystack);
const findInHaystack2 = binarySearch(needle, haystack);
return { isPalindrome }

// Promise.all([palindrome, socks, foundInHaystack, findInHaystack2]).then(console.log);

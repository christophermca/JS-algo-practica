const genSockData = require('./sortingSocks/utils/generateSockData');
const genHaystack = require('./findNeedle/utils/generateHaystack');
const sortingSocks = require('./sortingSocks');
const isPalindrome = require('./isPalindrome');
const {default: findNeedle, linearSearch, binarySearch} = require('./findNeedle')

const palindrome = isPalindrome('racecar', 'poop', 'dog');
const {data} = genSockData(24, 3);
const socks = sortingSocks({ data });

const needle = 2;
const haystack = genHaystack(needle);
const foundInHaystack =  findNeedle(needle,haystack );
const findInHaystack2 = binarySearch(needle, haystack);

Promise.all([palindrome, socks, foundInHaystack, findInHaystack2]).then(console.log);

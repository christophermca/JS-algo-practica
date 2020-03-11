const gsd = require('./sortingSocks/utils/generateSockData');
const genHaystack = require('./findNeedle/utils/generateHaystack');
const sortingSocks = require('./sortingSocks');
const isPalindrome = require('./isPalindrome');
const {default: findNeedle, linearSearch} = require('./findNeedle')
const palindrome = isPalindrome('racecar', 'poop', 'dog');
const {data} = gsd(24, 3);
const socks = sortingSocks({ data });

const needle = 2;
const foundInHaystack = genHaystack(needle).then(haystack => {
  debugger
  findNeedle(haystack, needle)
})

Promise.all([palindrome, socks, foundInHaystack]).then(result => console.log(result));

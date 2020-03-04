const gsd = require('./sortingSocks/utils/generateSockData');
const sortingSocks = require('./sortingSocks');
const isPalindrome = require('./isPalindrome');

const palindrome = isPalindrome('racecar', 'poop', 'dog');
const {data} = gsd(24, 3);
const socks = sortingSocks({ data });

Promise.all([palindrome, socks]).then(result => console.log(result));

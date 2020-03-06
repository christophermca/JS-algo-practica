const gsd = require('./sortingSocks/utils/generateSockData');
const sortingSocks = require('./sortingSocks');
const isPalindrome = require('./isPalindrome');
const findChar = require('./findChar');
const palindrome = isPalindrome('racecar', 'poop', 'dog');
const {data} = gsd(24, 3);
const socks = sortingSocks({ data });

findChar('100100101010001001011000101001010001001011011001010011011101001a010101001011010101010010110110101010010101001010001010100010001111110010101101110111111111011011011101011010110110','a')
//Promise.all([palindrome, socks]).then(result => console.log(result));

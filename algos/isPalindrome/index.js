/*
 * isPalindrome
 *
 * Notes:
 * * Palindrome: a word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
 * Description:
 * * Method to verify if string is a palindrome
*/

function _checkStringEquality(first, last) {
  const temp = last.split("").reverse().join("");
  return first === temp;
}

function _handleEvenLenghStrings(stg) {
  first = last = stg
  last = stg
  isPalindrome = _checkStringEquality(first, last);
  return [
    first.slice(0, stg.length/2),
    last.slice(stg.length/2, stg.length),
    { palindrome: isPalindrome }
  ];
}

function _handleOddLengthStrings(stg) {
  const medianIndex = Math.floor(stg.length/2);
  first = stg.slice(0, medianIndex,);
  median = stg[medianIndex];
  last = stg.slice(medianIndex + 1, stg.length);
  isPalindrome = _checkStringEquality(first, last);
  return [first, median, last, {palindrome: isPalindrome}];
}

async function isPalindrome(...strings) {
  //get args from command line removes node and filename args
  let err;
  try {
    if(!strings || typeof strings[0] !== 'string') {
      let err = new TypeError('palindrome expects strings to be passed an array of strings');
      throw err;
    }
    if(err) throw err;
    const result = await strings.reduce((acc, stg) => {
      let first, last, isPalindrome;
      if (stg.length % 2 == 0) {
        acc[stg] = _handleEvenLenghStrings(stg)
      } else {
        acc[stg] = _handleOddLengthStrings(stg)
      }
      return acc;
    }, {});
    return Promise.resolve(result);
  } catch(err) {
    return Promise.reject(err)
  }
}

/*
 * if method is called directly ie(tty, command prompt) take process args as arguments
 * otherwise expect args to be passed in declaration
 */

if(require.main === module) {
    // normalize arguments from commandline to match API specs
    isPalindrome(process.argv.slice(2)[0])
      .then(result => {
        console.log(result)
      })
      .catch(err => console.log(err))
}

module.exports = isPalindrome;

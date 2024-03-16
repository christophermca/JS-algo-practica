const newrelic = require('newrelic');
const { performance } = require('node:perf_hooks');

function _quickFindNeedle(needle, haystack) {
  const arr = haystack.split('')

  console.log(arr[0], needle, arr[1])
  const p = arr[0].concat(needle, arr[1])
  console.log(haystack === p)
}

function linearSearch(haystack, key) {
  performance.mark('linearSearch-start')
  const arr = haystack.split('')
  let i;
  let foundNeedle
  try {
    for (i = 0; i < arr.length; i++) {
      if (arr[i] == key) {
        foundNeedle = i
        return foundNeedle
      }
    }
  }
  catch (err) {
    newrelic.noticeError(err)
  } finally {
    console.log(`:::End::: Search for needle: ${key}`);
    performance.measure('linearSearch', 'linearSearch-start', performance.now())
    if (foundNeedle) { console.log(`:::::Log::::: Needle found at ${foundNeedle}`) }
  }
}

function binarySearch(string, key) {
  let low = 0;
  let high = string.length - 1;
  let mid = (low + high) / 2;

  function sortString(a, b) {
    if (a > b) return 1
    if (a < b) return -1
    if (a === b) return 0
  }

  console.log('---string', string);
  //string.sort(sortString);

}

async function findChar({ data: haystack, needle: key } = args) {
  return linearSearch(haystack, key)
}

module.exports = { findChar, binarySearch, linearSearch };

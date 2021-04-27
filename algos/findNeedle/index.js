function linearSearch(string, key) {
  const arr = string.split('');
  let i;
  try {
    for (i = 0; i < arr.length; i++) {
      if (arr[i] == key){
        return `found at ${i}`
      }
    }
  }
  catch(err) {
      return i = -1
    } finally {
      console.log(`Searching for key: ${arr[i]}`);
    }
}

function binarySearch(string, key) {
  let low = 0;
  let high = string.length - 1 ;
  let mid = (low + high)/ 2;

  function sortString(a, b) {
    if(a > b) return 1
    if(a < b) return -1
    if(a === b) return 0
  }

  console.log('---string', string);
  //string.sort(sortString);

}

async function findChar(key, haystack) {
  const string = await haystack;
  return linearSearch(string, key)
}

module.exports = {default: findChar, binarySearch, linearSearch};

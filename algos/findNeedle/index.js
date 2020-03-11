function linearSearch(string, key) {
  const arr = string.split('');
  let i;
  try {
    for(i = 0; i < arr.length; i++) {
      console.log(arr[i], key);
      if (arr[i] == key){
        debugger
        console.log(`found at index: ${i}`);
        console.log(`max length ${arr.length}`);
        return arr[i];
      }
    }
  }
  catch(err ) {
      return i = -1
    } finally {
      console.log(`Searching for key: ${arr[i]}`);
    }
}

function binarySearch(string, key) {
  let low = 0;
  let high = string.length - 1 ;
  let mid = (low + high)/ 2;

}

function findChar(string, key) {
      Promise.resolve(linearSearch(string, key));
}

module.exports = {default: findChar, binarySearch, linearSearch};

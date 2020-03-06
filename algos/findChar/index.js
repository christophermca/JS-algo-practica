
function linearSearch(string, key) {
  const arr = string.split('');
  console.log(arr);
  let i;
  try {
    for(i = 0; i < arr.length; i++) {
      if (arr[i] === key){
        return i
      }
    }
  }
  catch(err ) {
      return i = -1
    } finally {
      console.log(`found at index: ${i}`);
      console.log(`Searching for key: ${arr[i]}`);
    }
}

function binarySearch(string, key) {
  let low = 0;
  let high = string.length - 1 ;
  let mid = (low + high)/ 2;

}

function findChar(string, key) {
  console.log( linearSearch(...arguments))
}

module.exports = findChar;

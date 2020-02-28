/*
 * fold on center of palendrome
 * rac|e|car // fold on the 'e'
*/
function check(first, last) {
  const temp = last.split("").reverse().join("");
  console.log(first, temp)
  return first === temp;
}
function findFold() {
  //get args from command line removes node and filename args
  const strings = process.argv.slice(2);
  const result = strings.reduce((acc, stg) => {

    let first, last, isPalendrome;
    if (stg.length % 2 == 0) {
      first = stg.slice(0, stg.length/2);
      last = stg.slice(stg.length/2, stg.length);
    } else {
      const medianIndex = Math.floor(stg.length/2);
      first = stg.slice(0, medianIndex + 1);
      last = stg.slice(medianIndex, stg.length);
    }
    isPalendrome = check(first, last);
    acc[stg] = [first, last, {palendrome: isPalendrome}];
    return acc;
  }, {});
  console.log(result);
}

findFold()

const { pow, round, random } = Math;
const rand1 = getRandomNumber();
const rand2 = getRandomNumber();
const randLength = pow(rand1, rand2);
const randomBit = () => round(random());
function getRandomNumber() {
  return round(random() * 10)
}

function _buildSection(length) {
  return new Promise((resolve) => {
    result = "";
    while(result.length < length) {
      result += randomBit();
    }
    return resolve(result);
  })
}
function hideNeedle(needle, haystack) {
  // pick random location in haystack to hide needle
  let lo = 0;
  let hi = haystack.length -1;
  let needlePos = Math.floor(Math.random() * (hi - lo) + lo);

  //hide needle
  let left = haystack.substring(lo, needlePos);
  let right = haystack.substring(needlePos, haystack.length);
  return left + needle + right;
}

function generateHaystack(needle) {
  const quarter = randLength / 4;
  return Promise.all([_buildSection(quarter*1), _buildSection(quarter*2), _buildSection(quarter*3), _buildSection(quarter*5)]).then(results => {
    const haystack = results.join('');
    if(needle) {
      return hideNeedle(needle, haystack);
    }
  })
}


if(require.main === module) {
    generateHaystack()
      .then(haystack => {
        return haystack;
        //console.log({end:result});
        })
      .catch(err => console.log(err))
}
module.exports = generateHaystack, hideNeedle;


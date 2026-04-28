// const newrelic = require('newrelic');
const { pow, round, random } = Math;

function getRandomNumber() {
  return round(random() * 10)
}

function _buildSection(length) {
  function randomBit() { return round(random()) }
  const x = new Promise((resolve) => {
    let result = "";
    while (result.length < length) {
      result += randomBit();
    }
    return resolve(result);
  })
  return x
}

function hideNeedle(needle, haystack) {
  // pick random location in haystack to hide needle
  let lo = 0;
  let hi = haystack.length - 1;
  let needlePos = Math.floor(Math.random() * (hi - lo) + lo);

  //hide needle
  let left = haystack.substring(lo, needlePos);
  let right = haystack.substring(needlePos, haystack.length);
  return left + needle + right;
}

async function buildHaystack(rl) {
  return Promise.all([
    _buildSection(rl * 1),
    _buildSection(rl * 2),
    _buildSection(rl * 3),
    _buildSection(rl * 4)
  ]).then(arr => {
    const h = arr.join('')
    return h
  })
}

class GenerateHaystack {
  constructor(needle, rl) {
    this.needle = needle || null;
    this.rl = rl || GenerateHaystack.generateRandomLength() / 4;
    this.initialize();
  }

  static generateRandomLength() {
    const rand1 = getRandomNumber();
    const rand2 = getRandomNumber();

    return pow(rand1, rand2);
  }

  async initialize() {
    try {
      this.haystack = await buildHaystack(this.rl);
      if (this.needle) {
          hideNeedle(this.needle, this.haystack)
      } else {
        return this.haystack
      }
    } catch (err) {
      console.log(err)
      // newrelic.logError('Error in init %s', err)
    } finally {
      // newrelic.recordCustomEvent('GenerateHaystack', { location: 'client', needle: this.needle, haystack: this.haystack })
    }


  }

}

if (require.main === module) {
  new GenerateHaystack()
    .then(haystack => {
      return haystack;
    })
    .catch(err => console.log(err))
}
module.exports = GenerateHaystack;


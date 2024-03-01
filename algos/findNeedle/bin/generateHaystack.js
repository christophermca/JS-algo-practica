// const newrelic = require('newrelic');
const { pow, round, random } = Math;

function getRandomNumber() {
  return round(random() * 10)
}

function _buildSection(length) {
  function randomBit() { round(random()) }
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
  return await Promise.all([
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
  constructor(needle) {
    this.needle = needle || null;
    this.rl = GenerateHaystack.generateRandomLength() / 4;
  }
  static generateRandomLength() {
    const rand1 = getRandomNumber();
    const rand2 = getRandomNumber();

    return pow(rand1, rand2);
  }

  async initialize() {
    try {
      this.haystack = await buildHaystack(this.rl);

    } catch (err) {
      console.log('__wwww', err)
    }

    if (this.needle) {
      // newrelic.recordCustomEvent('GenerateHaystack', { needle: this.needle, haystack: this.haystack })

      try {
        return hideNeedle(this.needle, this.haystack)
      } catch (err) {
        // newrelic.instrument("error", err)
      }
    } else {
      return this.haystack
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


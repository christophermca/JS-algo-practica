async function sortingSocks(socks) {
  // if (!socks) { return Promise.resolve("you don't have socks") }

  const result = await socks.reduce((acc, sock) => {
    if (typeof acc[sock] !== 'number') {
      acc[sock] = 0;
    }
    acc[sock] = ++acc[sock]
    return acc
  }, {});

  const output = Object.entries(result).reduce((collection, [color, count = 0]) => {
    if (!collection[color]) {
      collection[color] = count
    }

    // return collection
    // if (count / 2 == 0) {
    const pairsCount = count / 2;
    return collection[color] = pairsCount == 0 ? pairsCount : count;
    // }
    // return `you have ${count} ${color} ${(count > 1) ? 'socks' : 'sock'}`
  }, { total: socks.length })

  return Promise.resolve(output);
}

module.exports = sortingSocks;

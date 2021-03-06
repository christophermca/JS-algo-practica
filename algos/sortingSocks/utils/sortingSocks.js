async function sortingSocks(socks) {
  if(!socks){ return Promise.resolve("you don't have socks") }

  const result = await socks.reduce((acc, sock) => {
    if(typeof acc[sock] !== 'number') {
      acc[sock] = 0;
    }
    acc[sock] = ++acc[sock]
    return acc
  }, {});

  const output = Object.entries(result).map(([color, count]) => {
    if(count / 2 == 0) {
      const pairsCount = count/2;
      return `you have ${pairsCount} ${(pairsCount > 1) ? 'pairs' : 'pair'} of ${color} socks`
    }
    return `you have ${count} ${color} ${(count > 1) ? 'socks' : 'sock'}`
  })

  return Promise.resolve(output);
}

module.exports = sortingSocks;

const fs = require('fs');
const path = require('path');

async function sortingSocks(socks) {
  if(!socks){
    return Promise.resolve("you don't have socks")
  }

  const result = await socks.reduce((acc, sock) => {
    if(typeof acc[sock] !== 'number')
      acc[sock] = 0;

      acc[sock] = ++acc[sock]
      return acc
    }, {});
  return Promise.resolve(result);
}

function main(...arguments) {
  if(require.main === module) {
    const args = process.argv.slice(2);
    const firstArg = args[0]
    switch(firstArg) {
      case '-p':
        break;
      default:
        sortingSocks(args)
          .then(result => {
            const socks = (result.length > 1) ? " socks": " sock"
            console.log(result + socks)
          })
          .catch(err => console.log(err));
    }
  } else {
    return sortingSocks(...arguments)
          .then(result =>
            Object.entries(result).map(([color, count]) => {
              if(count / 2 == 0) {
                const pairsCount = count/2;
                return `you have ${pairsCount} ${(pairsCount > 1) ? 'pairs' : 'pair'} of ${color} socks`
              }
              return `you have ${count} ${color} ${(count > 1) ? 'socks' : 'sock'}`
            })
          )
          .catch(err => console.log(err));
  }
}

module.exports = main;

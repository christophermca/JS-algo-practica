'use strict';
const data = [], log = {};
function generateSockPile(amount = 0, colors = 1) {
  while(data.length < amount) {
    const rand = Math.round((Math.random() * colors));
    let sock;
    switch(rand) {
      case 1:
        sock = 'red'
        break;
      case 2:
        sock = 'green'
        break;
      case 3:
        sock = 'blue'
    }

    if(sock) {
      _updateLog(sock);
      data.push(sock);
    }
  }
  return {log, data};
}

function _updateLog(socks) {
  if(typeof log[socks] !== 'number') {
    log[socks] = 0;
  }
  ++log[socks];
}

module.exports = generateSockPile;

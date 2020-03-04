function delta(amount = 0, colors = 1) {
  let data = [];
  const log = {};

  function _updateLog(socks) {
    if(typeof log[socks] !== 'number') {
      log[socks] = 0;
    }

    ++log[socks];
  }

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

module.exports = delta;

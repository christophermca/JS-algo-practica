const delta1 = function (amount = 0, colors = 1) {
  let data = [];
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
      data.push(sock);
    }
  }
  return data;
}

module.exports = delta1

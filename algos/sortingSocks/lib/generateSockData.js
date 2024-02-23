class GenerateSockPile {
  constructor(amount, colors) {
    console.log({ amount, colors })
    this.colors = colors;
    this.amount = amount;
    this.initialize()
  }

  initialize() {
    this.data = []
    this.log = {}
    this._build();
  }

  _updateLog(socks) {
    if (typeof this.log[socks] !== 'number') {
      this.log[socks] = 0;
    }
    ++this.log[socks];
  }

  _build() {
    console.log('smile', { data: this.data, log: this.log })

    while (this.data.length < this.amount) {
      const rand = Math.round((Math.random() * this.colors));
      let sock;
      switch (rand) {
        case 1:
          sock = 'red'
          break;
        case 2:
          sock = 'green'
          break;
        case 3:
          sock = 'blue'
      }

      if (sock) {
        this._updateLog(sock);
        this.data.push(sock);
      }
    }
    return { log: this.log, data: this.data };
  }
}


module.exports = GenerateSockPile;

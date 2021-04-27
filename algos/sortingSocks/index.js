const fs = require('fs');
const path = require('path');
const sortingSocks = require('./utils/sortingSocks.js')

async function main({ data }) {
  return sortingSocks(data)
        .then(result => result)
        .catch(err => console.log(err));
}

if(require.main === module) {
  const args = process.argv.slice(2);
  const firstArg = args[0]
  switch(firstArg) {
    case '-p':
      break;
    default:
      return sortingSocks(args)
        .then(result => { console.log(result) })
        .catch(err => console.log(err));
  }
}

module.exports = main;

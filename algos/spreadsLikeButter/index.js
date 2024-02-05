const x = {
  extended: {
    time: '0022',
    mark: {
      tested: false,
      make: 'upload'
    },
    three: {
      fortyTwo: [3, 3, 3, 1, 0],
      ap3: {
        test: 3
      },
      number: 18
    },
    name: 'crystle',
  },
  1: 123,
  2: 'abc',
  3: { 'p': { ab: [123, 'test'] } },
}
debugger
console.log({ ...x })
console.log(JSON.stringify(x))

function findMultiples3and5(limit) {
  let i = 1;
  const result = []

  while(i < limit) {
    if(i % 3 == 0 || i % 5 == 0) {
      result.push(i);
    }
    i++;
  }
  return result.reduce((acc, num) => acc += num, 0);

}

module.exports = findMultiples3and5;

var hammingDistance = function (x, y) {
  let result = x ^ y
  let count = 0
  result = result.toString(2)
  for (const i of result) {
    if (i * 1 === 1) {
      count++
    }
  }
  return count
}
console.log(hammingDistance(1, 4))

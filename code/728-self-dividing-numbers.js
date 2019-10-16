var selfDividingNumbers = function (left, right) {
  const result = []
  while (left <= right) {
    let len = String(left).length
    let flag = left
    while (len > 0) {
      const num = flag % 10
      if (num === 0) break
      if (left % num !== 0) break
      flag = Math.floor(flag / 10)
      len--
    }
    if (len === 0) result.push(left)
    left++
  }
  return result
}
console.log(selfDividingNumbers(4, 22))

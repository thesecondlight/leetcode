var maxprofit = function (prices) {
  let min = Number.MAX_SAFE_INTEGER; let max = 0
  for (const i of prices) {
    min = Math.min(min, i)
    max = Math.max(max, i - min)
  }
  return max
}
console.log(maxprofit([7, 1, 5, 3, 6, 4]))
console.log(maxprofit([7, 6, 4, 3, 1]))

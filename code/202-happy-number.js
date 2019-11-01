var isHappy = function (n) {
  const set = new Set()
  let sum
  n = n + ''
  while (sum !== 1) {
    sum = 0
    for (let i = 0; i < n.length; i++) {
      sum += n[i] * n[i]
    }
    n = sum + ''
    if (set.has(sum)) return false
    set.add(sum)
  }
  return true
}
console.log(isHappy(20))

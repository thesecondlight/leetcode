var climbStairs = function (n) {
  if (n === 0 || n === 1) {
    return 1
  } else if (n === 2) {
    return 2
  }
  let n1 = 1; let n2 = 2; let sum
  for (let i = 3; i <= n; i++) {
    sum = n1 + n2
    n1 = n2
    n2 = sum
  }
  return sum
}
console.log(climbStairs(3))

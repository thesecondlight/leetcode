var tn = function (n) {
  if (n === 0) return 0
  let t1 = 0; let t2 = 1; let t3 = 1; let temp = 1
  for (let i = 3; i <= n; i++) {
    temp = t1 + t2 + t3
    t1 = t2
    t2 = t3
    t3 = temp
  }
  return temp
}
console.log(tn(4))
console.log(tn(2))
console.log(tn(0))

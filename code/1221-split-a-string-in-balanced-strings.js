var balancedStringSplit = function (s) {
  let cnt = 0
  let count = 0

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'R') {
      cnt++
    } else {
      cnt--
    }
    if (cnt === 0) count++
  }
  return count
}
console.log(balancedStringSplit('RLRRLLRLRL'))

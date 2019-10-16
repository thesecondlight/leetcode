var numJewIsInStones = function (J, S) {
  let count = 0
  for (const i in J) {
    for (const j in S) {
      if (S[j] === J[i]) {
        count++
      }
    }
  }
  return count
}
console.log(numJewIsInStones('aA', 'aAAkkkk'))

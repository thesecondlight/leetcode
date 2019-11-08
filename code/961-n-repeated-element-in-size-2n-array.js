var repeatedNTimes = function (A) {
  const arr = []
  for (let i = 0; i < A.length; i++) {
    if (arr.indexOf(A[i]) === -1) {
      arr.push(A[i])
    } else {
      return A[i]
    }
  }
}
console.log(repeatedNTimes([1, 2, 3, 3]))

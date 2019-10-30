var uniqueOccurences = function (arr) {
  const brr = {}
  const crr = {}
  let flag = true
  for (let i = 0; i < arr.length; i++) {
    if (!brr[arr[i]]) {
      brr[arr[i]] = 1
    } else {
      brr[arr[i]] = brr[arr[i]] + 1
    }
  }
  for (const i in brr) {
    if (!crr[brr[i]]) {
      crr[brr[i]] = true
    } else {
      flag = false
      crr[brr[i]] = false
    }
  }
  return flag
}
console.log(uniqueOccurences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]))
console.log(uniqueOccurences([1, 2]))

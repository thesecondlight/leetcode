var pivotIndex = function (nums) {
  if (nums.length === 0) {
    return -1
  }
  let flag; let sum1 = 0; let sum2 = 0
  for (let i = 0; i < nums.length; i++) {
    flag = i
    for (let j = 0; j < i; j++) {
      sum1 += nums[j]
    }
    for (let k = i + 1; k < nums.length; k++) {
      sum2 += nums[k]
    }
    if (sum1 !== sum2) {
      sum1 = 0
      sum2 = 0
      if (i === nums.length - 1) return -1
    } else return flag
  }
}
console.log(pivotIndex([]))

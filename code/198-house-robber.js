var rob = function (nums) {
  let sum = 0; let temp = 0
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      sum += nums[i]
      sum = Math.max(sum, temp)
    } else {
      temp += nums[i]
      temp = Math.max(sum, temp)
    }
  }
  return temp > sum ? temp : sum
}
console.log(rob([1, 2, 3, 1]))
console.log(rob([2, 7, 9, 3, 1]))
console.log(rob([2, 1, 1, 2]))

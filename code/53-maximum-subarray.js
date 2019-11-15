var maxSubArray = function (nums) {
  if (nums.length === 1) return nums[0]
  let sum = 0
  let temp = nums[0]
  for (const i of nums) {
    if (sum > 0) {
      sum += i
    } else {
      sum = i
    }
    temp = Math.max(temp, sum)
  }
  return temp
}
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
console.log(maxSubArray([-2, 1]))
console.log(maxSubArray([-1]))

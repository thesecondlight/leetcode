var majorityElement = function (nums) {
  let count = 0
  let arr = nums[0]
  for (const i of nums) {
    if (i === arr) count++
    else count--
    if (count === 0) {
      arr = i
      count = 1
    }
  }
  return arr
}
console.log(majorityElement([3, 2, 3]))

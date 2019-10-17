// 未解决 推进去数组里面只有一个数？
var dominantIndex = function (nums) {
  if (nums.length < 2) {
    return nums.length-1
  }

  let maxIndex
  let max = -1
  let max1 = -1

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max1) {
      if (nums[i] > max) {
        maxIndex = i

        max1 = max
        max = nums[i]
      } else {
        max1 = nums[i]
      }
    }
  }
  return max/max1>=2?maxIndex:-1
}
console.log(dominantIndex([1, 0, 1, 199])) 
console.log(dominantIndex([1,1,1,1]))
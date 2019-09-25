const twoSum = function (nums, target) {
  const arr = []
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        arr.push(i)
        arr.push(j)
        return arr
      }
    }
  }
}
const arr = [2, 9, 6, 11]
const sum = twoSum(arr, 8)
console.log(sum)

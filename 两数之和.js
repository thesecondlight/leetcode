/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const obj = new Map()
  const array = []

  for (const i in nums) {
    obj.set(nums[i], i)
  }
  for (const j in nums) {
    const result = target - nums[j]
    if (obj.has(result) && obj.get(result) !== j) {
      array.push(j, obj.get(result))
      return array
    }
  }
}
console.log(twoSum([1,3, 3], 6))

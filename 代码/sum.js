/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const obj = {}
  nums.map(function (key, value) {
    obj[key] = value
  })
  const b = []
  for (const i in obj) {
    const result = target - i
    const one = obj[i]
    if (obj.hasOwnProperty(result)) {
      const two = obj[result]
      delete (obj[result])
      b.push(one, two)
    }
  }
  return b
}
const arr = [3, 3]
const oop = twoSum(arr, 6)
console.log(oop)

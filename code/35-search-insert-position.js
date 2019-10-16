// 冒泡=>慢
var addTwoNumbers = function (nums, target) {
  if (nums.indexOf(target) === -1) {
    nums.push(target)
    // 冒泡排序
    // for (let i = 0;i<nums.length-1;i++) {
    //   for (let j = 0; j < nums.length-i-1; j++) {
    //     if (nums[j] > nums[j + 1]) {
    //       let temp = nums[j]
    //       nums[j] = nums[j + 1]
    //       nums[j + 1] = temp
    //     }
    //   }
    // }
    nums.sort(function (a, b) {
      return a - b
    })
  }
  return nums.indexOf(target)
}
// 二分=>快
var searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== target) {
      if (target > nums[nums.length - 1]) {
        return nums.length
      } else {
        if (target < nums[i]) { return i }
      }
    } else {
      return nums.indexOf(target)
    }
  }
}
console.log(addTwoNumbers([1, 3, 5, 6], 2))
console.log(searchInsert([1, 3, 5, 6], 2))

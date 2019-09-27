const findMedianSortedArrays = function (nums1, nums2) {
  const newArr = nums1.concat(nums2)
  function sortNum (a, b) {
    return a + b
  }
  const newArrsort = newArr.sort(sortNum)
  if (newArrsort.length % 2 === 0) {
    const num1 = newArrsort.length / 2
    const median = (newArrsort[num1 - 1] + newArrsort[num1]) / 2
    return median
  } else if (newArrsort.length % 2) {
    const num1 = newArrsort.length / 2
    const median = newArrsort[num1 - 0.5]
    return median
  }
}

const nums1 = [1, 12]
const nums2 = [3, 4, 7]
const res = findMedianSortedArrays(nums1, nums2)
console.log(res)

var findMedianSortedArrays = function (nums1, nums2) {
  const c = nums1.concat(nums2)
  let d = 0; let result = 0; let d1 = 0; let d2 = 0
  c.sort(function (a, b) {
    return a - b
  })
  if (c.length % 2 === 0) {
    d1 = c.length / 2 - 1
    d2 = c.length / 2
    result = (c[d1] + c[d2]) / 2
  } else {
    d = c.length / 2 - 0.5
    result = c[d]
  }
  return result
}
console.log(findMedianSortedArrays([1, 2], [4]))

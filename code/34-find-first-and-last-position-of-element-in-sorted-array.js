var searchRange = function (nums, target) {
  const result = [-1, -1]
  const len = nums.length
  if (len === 0) return result

  let start = 0; let end = len - 1
  while (start < end) { // 左
    const mid = start + Math.floor((end - start) / 2)
    if (target <= nums[mid]) end = mid
    else start = mid + 1
  }
  if (nums[start] !== target) return [-1, -1]
  result[0] = start
  start = 0
  end = len - 1
  while (start < end) { // 右
    const mid = start + Math.ceil((end - start) / 2)
    if (target > nums[mid]) start = mid + 1
    else if (target === nums[mid]) start = mid
    else if (target < nums[mid]) end = mid - 1
  }
  if (nums[start] !== target) return [-1, -1]
  else result[1] = start

  return result
}
console.log(searchRange([7, 7, 8, 8, 8, 10, 18, 18], 18))

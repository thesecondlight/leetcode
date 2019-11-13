//二分查找
function binarySearch (arr, target) {
  let start = 0
  let end = arr.length - 1
  while (start <= end) {
    const mid = parseInt(start + (end - start) / 2)
    if (target === arr[mid]) {
      return mid
    } else if (target > arr[mid]) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
  return -1
}
console.log(binarySearch([4, 5, 7, 8], 5))

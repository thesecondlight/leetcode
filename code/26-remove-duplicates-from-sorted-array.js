var removeDuplicates = function (nums) {
  let n = 0
  for (const i in nums) {
    // console.log("n:",n,nums[i],nums[n]);

    if (nums[i] !== nums[n]) {
      n++
      nums[n] = nums[i]
    }
  }
  return n + 1
}
console.log(removeDuplicates([1, 1, 2, 9]))

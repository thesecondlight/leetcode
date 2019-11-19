var canPartitionKSubsets = function (nums, k) {
  let sum = 0
  for (const i of nums) {
    sum += i
  }
  const flag = sum / k
  if (sum % k !== 0) return false
  nums.sort((a, b) => b - a)
  if (nums[0] > flag) return false

  function dfs (nums, flag, exist) {
    if (flag === 0 && exist === nums.length) return true
    if (flag === 0) return dfs(nums, sum / k, exist)

    let temp = false
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === '.') continue
      if (nums[i] > flag) continue
      if (nums[i] === nums[i - 1]) continue

      const val = nums[i]
      nums[i] = '.'
      temp = temp || dfs(nums, flag - val, exist + 1)
      nums[i] = val
    }
    return temp
  }
  return dfs(nums, flag, 0)
}
console.log(canPartitionKSubsets([4, 3, 2, 3, 5, 2, 1], 4))

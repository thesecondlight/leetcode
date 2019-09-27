    if (nums.indexOf(target) === -1) {
        nums.push(target)
        for (let i = 0;i<nums.length-1;i++) {
          for (let j = 0; j < nums.length-i-1; j++) {
            if (nums[j] > nums[j + 1]) {
              let temp = nums[j]
              nums[j] = nums[j + 1]
              nums[j + 1] = temp
            }
          }
        }
    }
  return nums.indexOf(target)
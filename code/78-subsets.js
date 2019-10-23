var subsets = function (nums) {
  const nr = [[]]
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0, len = nr.length; j < len; j++) {
      nr.push(nr[j].concat([nums[i]]))
    }
  }
  return nr
}
console.log(subsets([1, 2, 3]))

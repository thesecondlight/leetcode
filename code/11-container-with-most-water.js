var maxArea = function (height) {
  let maxN = 0
  for (let i = 0; i < height.length - 1; i++) {
    for (let j = i + 1; j < height.length; j++) {
      const min = height[j] > height[i] ? height[i] : height[j]
      const temp = (j - i) * min
      if (temp > maxN) {
        maxN = temp
      }
    }
  }
  return maxN
}
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))

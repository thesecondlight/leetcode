var lengthOfLongestSubstring = function (s) {
  let count = 0
  const obj = new Map()
  for (const i in s) {
    obj.set(s[i], i)
  }
  for (const i in s) {
    if (obj[i] != 0) {
      count++
      obj[i] = '0'
    }
  }
  console.log(s)
  return count
}
console.log(lengthOfLongestSubstring('abhhhh'))

var lengthOfLongestSubstring = function (s) {
  let count = 0
  const array = []
  let i = 0
  while (i < s.length) {
    if (array.indexOf(s[i]) === -1) {
      array.push(s[i])
    } else {
      array.shift()
      continue
    }
    count = Math.max(count, array.length)
    i++
  }
  console.log(s)
  return count
}
console.log(lengthOfLongestSubstring('abhazhh'))

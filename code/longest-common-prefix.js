var longestCommonPrefix = function (strs) {
  const b = []
  for (const i of strs) {
    b.push(i).toString()
  }
  return b
}
console.log(longestCommonPrefix(['flower', 'flow', 'flight']))

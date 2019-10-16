var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return ''
  else if (strs.length === 1) return strs[0]
  else {
    const firStrs = strs[0]
    let result = ''
    for (let i = 0; i < firStrs.length; i++) {
      for (let j = 1; j < strs.length; j++) {
        if (firStrs[i] !== strs[j][i]) { return result }
      }
      result += firStrs[i]
    }
    return result
  }
}
console.log(longestCommonPrefix(['ssaflower', 'ssbflow', 'sflight']))

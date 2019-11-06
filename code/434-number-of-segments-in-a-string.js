var countSegments = function (s) {
  s += ' '
  let count = 0
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] !== s[i + 1] && s[i + 1] === ' ') {
      count++
    }
  }

  return count
}
console.log(countSegments('Hello, my name is cheng Jiang'))

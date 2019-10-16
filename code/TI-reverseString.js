var reverseString = function (s) {
  for (let i = 0; i < s.length / 2; i++) {
    var temp = s[i]
    s[i] = s[s.length - i - 1]
    s[s.length - i - 1] = temp
  }
  return s
}
console.log(reverseString(['H', 'e', 'l', 'l', 'o', '!']))

// 检测没限制诶
var encode = function (longUrl) {
  let res = 'https://'
  for (let i = 0; i < longUrl.length; i++) {
    const code = longUrl.charCodeAt(i)
    if (longUrl[i] !== '/') {
      res += String.fromCharCode(code - 12)
    } else {
      res += longUrl[i]
    }
  }
  return res
}
var decode = function (shortUrl) {
  let res = ''
  for (let i = 8; i < shortUrl.length; i++) {
    const code = shortUrl.charCodeAt(i)
    if (shortUrl[i] !== '/') {
      res += String.fromCharCode(code + 12)
    } else {
      res += shortUrl[i]
    }
  }
  return res
}
console.log(encode('https://leetcode.com/problems/design-tinyurl'))
console.log(decode('https://\hhdg.//`YYhWcXY"Wca/dfcV`Yag/XYg][b!h]bmif`'))

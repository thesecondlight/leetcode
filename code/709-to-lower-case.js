var toLowerCase = function (str) {
  let res = ''
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i)
    if (code <= 90 && code >= 65) {
      res += String.fromCharCode(code + 32)
    } else {
      res += str[i]
    }
  }
  return res
}
console.log(toLowerCase('HellO'))

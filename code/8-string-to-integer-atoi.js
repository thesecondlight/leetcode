// 条件未满足
var myAtoi = function (str) {
  if (!str) {
    return 0
  }
  const reg = new RegExp(/^[+|-]?\d+/g)
  str = str.trim()
  if (!reg.test(str)) {
    return 0
  }
  const num = str.match(reg)[0]

  const newnum = Number(num)
  if (newnum > Math.pow(2, 31) - 1) {
    return Math.pow(2, 31) - 1
  } else if (newnum < Math.pow(-2, 31)) {
    return Math.pow(-2, 31)
  }
  return num
}
console.log(myAtoi('+34'))
console.log(myAtoi('words and 456'))
console.log(myAtoi('456 with words'))
console.log(myAtoi('+'))
console.log(myAtoi('+-123'))
// 提交了11次hhh

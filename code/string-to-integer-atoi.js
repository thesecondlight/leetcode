// 条件未满足
var myAtoi = function (str) {
  const p = new RegExp(/[a-z]/i)
  const num = str.trim().split(' ')

  for (let i = 0; i < num.length; i++) {
    if (num[i] === '' || p.test(num[i])) {
      num.splice(i, 1)
      i = i - 1
    }
  }

  const newnum = Number(num)
  if (newnum > Math.pow(2, 31) - 1) {
    return Math.pow(2, 31) - 1
  } else if (newnum < Math.pow(-2, 31)) {
    return Math.pow(-2, 31)
  }
  return num
}
console.log(myAtoi('+34'))

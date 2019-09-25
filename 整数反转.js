/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  if (x < 0) {
    x = -x.toString().slice(1).split('').reverse().join('')
  } else {
    x = x.toString().split('').reverse().join('')
  }
  if (Math.pow(-2, 31) < Number(x) && Number(x) < (Math.pow(2, 31) - 1)) {
    return x
  } else {
    return 0
  }
}
console.log(reverse(-123))

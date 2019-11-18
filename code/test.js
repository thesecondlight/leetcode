
function tt (num) {
  const regStr = /^1(3|4|5|6|7|8|9)\d{9}$/
  if (regStr.test(num)) {
    return true
  } else {
    return false
  }
}
console.log(tt(17805426701))
console.log(tt(12))

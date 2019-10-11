var mySqrt = function (x) {
  let temp = x
  while (temp * temp > x) {
    const next = (temp + x / temp) / 2
    if (next === temp) {
      break
    } else {
      temp = next
    }
  }
  return Math.floor(temp)
}
console.log(mySqrt(10))

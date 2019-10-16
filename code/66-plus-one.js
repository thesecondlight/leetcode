var plusOne = function (digits) {
  const len = digits.length - 1
  digits[len]++
  for (let i = 0; i < digits.length; i++) {
    if (digits[len - i] === 10) {
      digits[len - i] = 0
      if (len - i === 0) {
        digits.unshift(1)
        return digits
      }
      digits[len - i - 1]++
    }
  }
  return digits
}
console.log(plusOne([9, 9]))

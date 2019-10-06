var plusOne = function (digits) {
  const p = digits.length - 1
  digits[p]++// 最后一位+1
  for (const i in digits) {
    if ((digits[p - i]) === 10) { // 如果进位
      digits[p - i] = 0// 归零
      if (p - i === 0) { // 如果当前位已经是0了
        digits.unshift(1)// 前面加个1
        return digits
      }
      digits[p - i - 1]++
    }
  }
  return digits
}

console.log(plusOne([0, 9, 9]))

var addDigits = function (num) {
  num = num + ''
  let count = 0
  for (let i = 0; i < num.length; i++) {
    count += Number(num[i])
  }
  return count > 9 ? addDigits(count) : count
  // return (num-1)%9+1      对于数值大的，这个更快
}
console.log(addDigits(38))

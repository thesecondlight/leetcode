var letterCombinations = function (digits) {
  const arr = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  }
  const len = digits.length
  let t = arr[digits[len - 1]] || []
  for (let i = len - 2; i >= 0; i--) {
    const d = arr[digits[i]]
    const t1 = []
    for (const dVal of d) {
      for (const tVal of t) {
        t1.push(dVal + tVal)
      }
    }
    t = t1
  }
  return t
}
console.log(letterCombinations('234'))

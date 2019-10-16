var game = function (guess, answer) {
  let count = 0
  for (const i in guess) {
    if (guess[i] === answer[i]) count++
  }
  return count
}
console.log(game([2, 3, 0], [1, 2, 3]))

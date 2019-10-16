var combine = function (n, k) {
  const arr = []
  const temp = []
  function ppush (data) {
    if (temp.length === k) {
      arr.push(temp.map(item => item))
    } else if (temp.length < k) {
      for (let i = data; i <= n; i++) {
        temp.push(i)
        ppush(i + 1)
        temp.pop()
      }
    }
  }
  ppush(1)
  return arr
}
console.log(combine(4, 2))

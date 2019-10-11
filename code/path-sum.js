var hasPathSum = function (root, sum) {
  if (!root) return false
  const newArr = [root]
  while (newArr.length > 0) {
    const temp = newArr.pop()
    if (!temp.left && !temp.right && temp.val === sum) {
      return true
    }
    if (temp.right) {
      temp.right.val += temp.val
      newArr.push(temp.right)
    }
    if (temp.left) {
      temp.left.val += temp.val
      newArr.push(temp.left)
    }
  }
  return false
}
console.log(hasPathSum([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1], 22))

var inorderTraversal = function (root) {
  const arr = []
  mid(root, arr)
  return arr
}
const mid = function (root, arr) {
  if (root) {
    mid(root.left, arr)
    arr.push(root.val)
    mid(root.right, arr)
  }
}
inorderTraversal()

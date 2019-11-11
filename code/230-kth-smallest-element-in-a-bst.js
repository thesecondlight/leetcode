var kthSmallest = function (root, k) {
  const arr = []
  mid(root)
  function mid (root) {
    if (!root) return
    if (root) {
      mid(root.left)
      arr.push(root.val)
      mid(root.right)
    }
  }
  return arr[k - 1]
}
kthSmallest()

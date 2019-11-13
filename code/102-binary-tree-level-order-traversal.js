// 中序
var levelOrder = function (root) {
  if (root == null) {
    return []
  }
  const arr = []; const queue = [root]
  while (queue.length) {
    let size = queue.length
    const level = []
    while (size--) {
      const node = queue.shift()
      level.push(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    arr.push(level)
  }
  return arr
}
levelOrder()

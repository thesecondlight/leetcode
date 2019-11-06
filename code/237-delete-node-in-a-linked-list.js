var deleteNode = function (node) {
  node.val = node.next.val
  node.next = node.next.next
  // 或者深拷贝  Object.assign(node, node.next);
}
// 只删除即可，不用考虑链表输入
deleteNode('a')

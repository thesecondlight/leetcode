var isSymmetric = function (root) {
  if (!root) {
    return true
  }
  return isSame(root.left, root.right)
}
function isSame (l, r) {
  if (l === null) {
    return r == null
  }
  if (r === null) {
    return l === null
  }
  if (l.val !== r.val) {
    return false
  }
  return isSame(l.left, r.right) && isSame(l.right, r.left)
}
isSymmetric()
//中序
var isSymmetric = function(root){
    if(root==null)
}
function mid(root,arr){

}

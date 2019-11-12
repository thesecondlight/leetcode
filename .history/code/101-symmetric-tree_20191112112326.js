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
    if(root==null){
        return true
    }
    let arr = []
    mid(arr,root,1)
}
function mid(arr,root,k){
    if(root.left!=null){
        mid(arr,n.left,k+1)
    }
    arr.push(root.val+','+k)
    if(root.right!=null)
}

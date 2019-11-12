//中序
var isSymmetric = function(root){
    if(root==null){
        return true
    }
    let arr = []
    mid(arr,root,1)
    let i=0,j=arr.length-1;
    while(i<j){
        if(arr[i]!=arr[j]){
            return false
        }
        i++
        j--
    }
}
function mid(arr,root,k){
    if(root.left!=null){
        mid(arr,root.left,k+1)
    }
    arr.push(root.val+','+k)
    if(root.right!=null){
        mid(arr,root.right,k+1)
    }
}
// var isSymmetric = function (root) {
//   if (!root) {
//     return true
//   }
//   return isSame(root.left, root.right)
// }
// function isSame (l, r) {
//   if (l === null) {
//     return r == null
//   }
//   if (r === null) {
//     return l === null
//   }
//   if (l.val !== r.val) {
//     return false
//   }
//   return isSame(l.left, r.right) && isSame(l.right, r.left)
// }
// isSymmetric()

s//中序
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
    if(root.right!=null){
        mid(arr,n.right,k+1)
    }
}

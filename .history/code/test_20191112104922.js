function a(){
  arr=[3,2,4,1,4,2,3]
  for(let i = 0;i<arr.length;i++){
    for(let j=arr.length-1;j>=0;j--){
        console.log(arr[i],arr[j])
         if(arr[i]!==arr[j]){
             return false
         }
    }
}
return true
}
console.log(a)
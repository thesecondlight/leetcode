function a(){
  arr=[3,2,4,1,4,2,3]
  for(let i = 0;i<arr.length;i++){
      console.log("i,j",arr[i],arr[arr.length-i-1])
      if(arr[i]!==arr[arr.length-i-1]){
          return false
    }
}
return true
}
console.log(a())
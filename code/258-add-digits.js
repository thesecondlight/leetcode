var addDigits = function(num){
    num=num+''
    let count=0
    for(let i=0;i<num.length;i++){
        count+=Number(num[i])
    }
    return count>9?addDigits(count):count
    //一步解决 但是用时多 return (num-1)%9+1
}
console.log(addDigits(38))
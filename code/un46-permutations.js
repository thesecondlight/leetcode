var permute = function(nums){
    let arr=[]
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            arr.push([nums[i],nums[j]])
        }
    }
    return arr
};
console.log(permute(1,2,3))
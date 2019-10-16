var numJewIsInStones = function (J,S) {
    let count=0;
    for(let i in J){
        for(let j in S)
         if(S[j]===J[i]){
             count++;
         }
     }
     return count
}
console.log(numJewIsInStones("aA","aAAkkkk"))

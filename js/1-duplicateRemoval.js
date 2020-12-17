let arr = [1, 4, 3, 3, 3,];
let newArr = [];
function splice_Remove(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        arr.splice(j, 1);
        j--;
      }
    }
  }
  return arr;
}
function indexOf_Remove(arr) {
  for (let i in arr) {
    if (newArr.indexOf(arr[i]) == -1) {
      newArr.push(arr[i])
    }
  }
  return newArr;
}

console.log(splice_Remove(arr), indexOf_Remove(arr));//[1,4,3] [1,4,3]
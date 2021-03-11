const CustomError = require("../extensions/custom-error");

module.exports =
    function transform(arr) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let arrNew = [];
  if (!Array.isArray(arr)){
    throw new Error ('Error');
  }
  for (let i = 0; i <arr.length; i++){
    if (arr[i] === "--discard-next"){
      if (i===arr.length-1){
        continue;
      }
      i+=2;
      continue;
    }else if (arr[i] === "--discard-prev"){
      if (i===0){
        continue;
      }
      arrNew.pop();
      continue;
    }else if (arr[i] === "--double-next"){
      if (i===arr.length-1){
        continue;
      }
      arrNew.push(arr[i+1]);
      continue;
    }else if (arr[i] === "--double-prev"){
      if (i===0 || arr[i-2] === "--discard-next"){
        continue;
      }
      arrNew.push(arr[i-1]);
      continue;
    }else {
      arrNew.push(arr[i]);
    }
  }
  return arrNew;
};

// console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]));
// console.log("XXX   1, 2, 3, 4, 5");
// console.log(transform([1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5]));
// console.log("XXX   [1, 2, 3, 1337, 1337, 1337, 4, 5]");
// console.log(transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5]));
// console.log("XXX   [1, 2, 3, 4, 5]");
// console.log(transform([1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5]));
// console.log("XXX   [1, 2, 3, 1337, 4, 5]");
// console.log(transform([ 3.14, NaN, 1.233, 'GHI']));
// console.log("XXX   [3.14, NaN, 1.233, 'GHI']");

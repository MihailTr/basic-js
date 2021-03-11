const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let count = 0;
  for (let m of matrix){
    for (let s of m){
      if (s === '^^'){
        count++;
      }
    }
  }
  return count;
};

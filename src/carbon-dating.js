const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if ((typeof sampleActivity)!="string"){
    return false;
  }
  if (!parseInt(sampleActivity)){
    return false;
  }
  let num = parseFloat(sampleActivity);
  if (num >= 0 && num<=15){
    let k = 0.693/HALF_LIFE_PERIOD;
    let t = Math.log(MODERN_ACTIVITY/num)/k;
    return Math.ceil(t);
  }else {
    return false;
  }
};

// function qwer(x){
//   let k = 0.693/HALF_LIFE_PERIOD;
//   let t = Math.log(MODERN_ACTIVITY/x)/k;
//   return Math.ceil(t);
// }
// console.log(qwer(1))


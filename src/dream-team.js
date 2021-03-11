const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let team = [];
  if (!Array.isArray(members)){
    return false;
  }
  for (let str of members){
    if (typeof str == 'string'){
      team.push(str.trim()[0].toUpperCase());
    }
  }
  return team.sort().join('');
};

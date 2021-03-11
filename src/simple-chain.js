const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    return this.chain.length;
  },
  addLink(value) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if (typeof Number(value) == 'number'){
      this.chain.push(value);
    }
    return this;
  },
  removeLink(position) {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if ((typeof Number(position)) == 'number'){
      this.chain.splice(0,position);
    }
    return [];
  },
  reverseChain() {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
    this.chain.reverse();
  },
  finishChain() {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
    return this.chain.join('~~')
  }
};

module.exports = chainMaker;

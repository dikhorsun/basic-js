const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  chain: [],
  getLength() {
   return this.chain.length
   
  },
  addLink(value) {
   this.chain.push(`( ${value} )`);
   return this;
  },
  removeLink(position) {
      if(position && Number.isInteger(position)&&position<=this.chain.length-1 && position>0){
          this.chain.splice(position-1, 1)
      } else{
          this.chain = []
          throw new Error("You can't remove incorrect link!")
      }
      return this
  },
  reverseChain() {
    this.chain.reverse();
    return this
  },
  finishChain() {
   let finishArr = this.chain;
   this.chain = [];
   return finishArr.join("~~")
  }
};

module.exports = {
  chainMaker
};

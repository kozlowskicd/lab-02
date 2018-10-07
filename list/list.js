'use strict';

class List {

  constructor() {
    this.length = 0;
    this.data = {};
  }

  /**
   * Add item to the end of the list
   * @param item
   */
  push(arr) {
    // Add an item to the end
    this.returnData[this.length] = arr;
    this.length++;
    return returnData;
  }

  /**
   * // Remove an item from the end of the list and return it's value
   * @returns {*}
   */
  pop() {
    let returnValue = this.data[this.length];
    delete this.data[this.length];
    this.length--;
    return returnValue;
  }

  shift(arr) {
    const firstValue = this.arr[0];
    delete this.arr[0];
    this.length--;
    return firstValue;
  }
  unshift(inputArray, ...arr) {
    const unshiftItems = arr;
    const unshiftAmount = arr.length;
    for (let i = 0; i < unshiftAmount; i++) {
     }
    
} 
  splice(index, amount, value) {
  }

module.exports = List;

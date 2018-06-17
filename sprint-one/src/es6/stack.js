class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }
  
  size() {
    return Object.keys(this.storage).length;
  }

  push(value) { 
    this.storage[Object.keys(this.storage).length] = value;
  }

  pop() {
    let nextOut = Math.max(...(Object.keys(this.storage)));
    let nextValueOut = this.storage[nextOut];
    delete this.storage[nextOut];
    return nextValueOut;
  }

}

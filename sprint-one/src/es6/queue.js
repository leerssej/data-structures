class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  size() {
    return Object.keys(this.storage).length;
  }

  enqueue(value) {
    let nextIn = Math.max(-1, ...(Object.keys(this.storage))) + 1;
    this.storage[nextIn] = value;
  }

  dequeue() {
    let nextOut = Math.min(...(Object.keys(this.storage)));
    let nextValueOut = this.storage[nextOut];
    delete this.storage[nextOut];
    return nextValueOut;
  }

}

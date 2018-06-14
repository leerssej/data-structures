var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};

  return someInstance;

};

var queueMethods = {
  size: function() {
    return Object.keys(this.storage).length;
  },

  enqueue: function(value) {
    let nextIn = Math.max(-1, ...(Object.keys(this.storage))) + 1;
    this.storage[nextIn] = value;
  },

  dequeue: function() {},

};

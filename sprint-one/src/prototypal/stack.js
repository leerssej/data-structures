var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};

  return someInstance;

};

var stackMethods = {
  size: function() {
    return Object.keys(this.storage).length;
  },

  push: function(value) {
    this.storage[Object.keys(this.storage).length] = value;
  },

  pop: function() {
    let nextOut = Math.max(...(Object.keys(this.storage)));
    let nextValueOut = this.storage[nextOut];
    delete this.storage[nextOut];
    return nextValueOut;
  },

};

var extend = function (obj, methods) {
  for (var key in methods) {
    obj[key] = methods[key];
  }
};

var Stack = function(value) {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storage: {},
  };

  extend(someInstance, stackMethods);
  
  return someInstance;


};

var stackMethods = {

  push: function(value) {
    this.storage[Object.keys(this.storage).length] = value;
  },

  pop: function() {
    let nextOut = Math.max(...(Object.keys(this.storage)));
    let nextValueOut = this.storage[nextOut];
    delete this.storage[nextOut];
    return nextValueOut;
  },

  size: function() {
    return Object.keys(this.storage).length;
  },

};

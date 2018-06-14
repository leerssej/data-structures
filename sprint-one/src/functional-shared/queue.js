var extend = function (obj, methods) {
  for (var key in methods) {
    obj[key] = methods[key];
  }
};

var Queue = function() {
  var someInstance = {
    storage: {},
  };
    
  extend(someInstance, queueMethods);

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

  dequeue: function() {
  },
};

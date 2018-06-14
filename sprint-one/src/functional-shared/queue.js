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
  },

  enqueue: function(value) {
  },

  dequeue: function() {
  },
};

var extend = function (obj, methods) {
  for (var key in methods) {
    obj[key] = methods[key];
  }
};

var Stack = function() {
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
  },
  pop: function() {
  },
  size: function() {
  },

};

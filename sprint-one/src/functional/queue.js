var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.enqueue = function(value) {
    let nextIn = Math.max(-1, ...(Object.keys(storage))) + 1;
    storage[nextIn] = value;
  };

  someInstance.dequeue = function() {
    let nextOut = Math.min(...(Object.keys(storage)));
    let nextValueOut = storage[nextOut];
    delete storage[nextOut];
    return nextValueOut;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};

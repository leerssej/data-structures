var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    console.log(...Object.keys(storage));
    let nextIn = Math.max(-1, ...(Object.keys(storage))) + 1;
    storage[nextIn] = value;
    console.log(storage);
  };

  someInstance.dequeue = function() {
    console.log(...Object.keys(storage));
    let nextOut = Math.min(...(Object.keys(storage)));
    console.log(nextOut);
    let nextValueOut = storage[nextOut];
    console.log('storageBefore: ', storage, nextValueOut);
    delete storage[nextOut];
    console.log('storageAfter: ', storage);
    return nextValueOut;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};

// let queue = Queue();
// console.log(queue.enqueue("cow"));
// console.log(queue.enqueue("cat"));
// console.log(queue.enqueue("buffalo"));
// console.log(queue.size());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
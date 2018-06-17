var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};
   
BinarySearchTree.prototype.insert = function(targetVal) {
  var nodeVal = this.value;
  if (nodeVal < targetVal) {
    if (this.right === null || this.right === targetVal) {
      this.right = new BinarySearchTree(targetVal);
    } else {
      this.right.insert(targetVal);
    }
  } else if (nodeVal > targetVal) {
    if (this.left === null || this.left === targetVal) {
      this.left = new BinarySearchTree(targetVal);
    } else {
      this.left.insert(targetVal);
    }
  }
};

BinarySearchTree.prototype.contains = function(targetVal) {
  var nodeVal = this.value;
  if (nodeVal === targetVal) { 
    return true;
  }  
  if (nodeVal < targetVal) {
    if (this.right === null) {
      return false;
    } else {
      return this.right.contains(targetVal);
    }
  } else if (nodeVal > targetVal) {
    if (this.left === null) {
      return false;
    } else {
      return this.left.contains(targetVal);
    }
  }
  //method, which accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(cb);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(cb);
  }
  //method, which accepts a callback and executes it on every value contained in the tree.
};  



/*
 * Complexity: What is the time complexity of the above functions?
 *
 * contains: O(log n);
 * insert: O(log n);
 * depthFirstLog: O(n); 
 *
 */

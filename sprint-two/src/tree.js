var Tree = function(value) {
  this.value = value;
  this.children = [];
};

Tree.prototype.addChild = function(value) {
  this.children.push(new Tree(value));
};

Tree.prototype.contains = function(target) {
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


// class Tree {
//   constructor(value) {
//   newTree.value = value;

//   // your code here
//   newTree.children = null;  // fix me
//   }

//   addChild(value) {};
//   contains(target) {};

// }

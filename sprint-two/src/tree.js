var Tree = function(value) {
  this.value = value;
  this.children = [];
};

Tree.prototype.addChild = function(value) {
  this.children.push(new Tree(value));
};

Tree.prototype.contains = function(target) {
  // this.children.forEach(element => {
  //   if (element.value === target) {
  //     return true;
  //   } else {
  //     return element.contains(target);
  //   }
  // })
  var truthy = false;
  var helper = function (array) {
    for (var x = 0; x < array.length; x++) {
      if (array[x].value === target) {
        return truthy = true;
      }
      if (array[x].children.length > -1) {
        helper(array[x].children);
      }
    }
  };
  helper(this.children);
  return truthy;
};



/*
 * Complexity: What is the time complexity of the above functions?
 * addChild: O(1)
 * contains: O(n)
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

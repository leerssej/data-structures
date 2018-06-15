var Tree = function(value) {
  this.value = value;
  this.children = [];
};

Tree.prototype.addChild = function(value) {
  this.children.push(new Tree(value));
};

Tree.prototype.contains = function(target) {
  // store result outside internal recursive engine
  let found = false;
  // recursive helper function
  const childChecker = (childrenArr) => {
    // iterate through array
    childrenArr.forEach(element => {
      // base case: check to see that target is in array
      // if found there, return true
      if (element.value === target) {
        return found = true;
      }
      // recursive case: check to see if there are children
      if (element.children.length > -1) {
        // if children dig into that list
        childChecker(element.children);
      }
    });
  };
  childChecker(this.children);
  return found;

  // // es6 without Annotations
  // var found = false;
  // const childChecker = (childrenArr) => {
  //   childrenArr.forEach((element) => {
  //     if (element.value === target) {
  //       return found = true;
  //     }
  //     if (element.children.length > -1) {
  //       childChecker(element.children);
  //     }
  //   })
  // };
  // childChecker(this.children);
  // return found;

  // // original
  // var truthy = false;
  // var helper = function (array) {
  //   for (var x = 0; x < array.length; x++) {
  //     if (array[x].value === target) {
  //       return truthy = true;
  //     }
  //     if (array[x].children.length > -1) {
  //       helper(array[x].children);
  //     }
  //   }
  // };
  // helper(this.children);
  // return truthy;
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

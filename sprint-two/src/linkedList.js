class Node {
  constructor(value) {

    this.value = value;
    this.next = null;

  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(value) {
    var node = new Node(value);
    // assign next value to node
    if (this.tail !== null && this.tail !== value) {
      this.tail.next = node;
    // assign tail value if not already
    }
    this.tail = node;
    
    // check to see if head is empty
    if (this.head === null) {
      this.head = node;
    }
  }

  removeHead() {
    if (this.head === null) {
      return;
    }
    var result = this.head.value;
    if (this.head === this.tail) {
      delete this.head;
      this.head = null;
      delete this.tail;
      this.tail = null;
      return result;
    }
    this.head = this.head.next;
    return result;
  }

  contains(target) {
    if (this.head === null) {
      return false;
    }
    if (this.head === this.tail) {
      if (this.head.value === target) {
        return true; 
      } else {
        return false;
      }
    }

    var checkNextNode = function(node) {
      // base case
      if (node.value === target) {
        return true;
      } else if (node.next === null) {
        return false;
      // recursive
      } else {        
        return checkNextNode(node.next);
      }
    };

    return checkNextNode(this.head);
  } // closes contains

} // closes LinkedList


/*
 * Complexity: What is the time complexity of the above functions?
 * contains: linear
 * removeHead: constant
 * addToTail: constant
 */



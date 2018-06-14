class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(value) {
    var node = new Node(value);
    // assign next value to node
    if (tail !== null) {
      this.tail.next = node;
    // assign tail value if not already
    }
    this.tail = node;
    
    // check to see if head is empty
    if (head === null) {
      this.head = node;
    }
  }

  removeHead() {
  }

  contains(target) {
  }
}

class Node {
  constructor(value) {

    this.val = value;
    this.next = null;

  }
}

/*
 * Complexity: What is the time complexity of the above functions?
 */



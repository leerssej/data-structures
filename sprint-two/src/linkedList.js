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
    if (this.tail !== null) {
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
  }

  contains(target) {
  }
}


/*
 * Complexity: What is the time complexity of the above functions?
 */



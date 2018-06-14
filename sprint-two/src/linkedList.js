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
  }
}


/*
 * Complexity: What is the time complexity of the above functions?
 */



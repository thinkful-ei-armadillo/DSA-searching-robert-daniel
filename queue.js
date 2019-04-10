'use strict';

class _Node {
  constructor(value) {
    this.value = value,
    this.next = null,
    this.prev = null;    
  }
}

class Queue {
  // set head and tail for linked list
  constructor() {
    this.first = null;
    this.last = null;
  }

  // adding method to add to the back of the linked list
  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
      this.last.prev = node;
    }

    //set new node as the tail, this.last of the queue
    this.last = node;
  }

  // removing method to delete from the end of the linked list
  dequeue() {

    // if theres is nothing in the queue, we have nothing to remove or return
    if (this.first === null) {
      return;
    }
    // set the first node as now being the next node, as the last node will be removed.
    const node = this.first;
    this.first = node.prev;

    // if at last, set the node before the last as the new last by setting current this.last as null
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}

module.exports = Queue;
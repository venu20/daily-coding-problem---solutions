class Node{
  constructor(data ) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.root = null;
  }

  insertFirst(item) {
    if(!this.root) {
      this.root = new Node(item);
    } else {
    const temp = new Node(item);
    temp.next = this.root;
    this.root = temp;
    }
  }

  insertLast(item) {
    if (!this.root) {
      this.root = new Node(item);
    } else {
      const temp = this.root;
      while(temp.next) {
        temp = temp.next;
      }
      temp.next = new Node(item);
    }

  }

  getFirst(item) {
    const temp = this.root;
    if(temp && temp.data){
      return temp.data;
    }
    return null;
  }

  getLast(item) {
    const temp = this.root;
    while(temp.next) {
      temp = temp.next;
    }
    return temp.data;
  }

  size() {
    let count = 1;
    const temp = this.root;
    while(temp.next){
      count++;
      temp = temp.next;
    }
    return count;
  }
}

const ll = new LinkedList();
ll.insertLast(5);
ll.insertLast(8);
ll.insertLast(80);
ll.insertLast(81);
ll.insertLast(82);

console.log("Tree", ll.root);
console.log("Total Nodes %d", ll.size());
console.log("First Item", ll.getFirst());
console.log("Last Item", ll.getLast());
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
    if(!this.root) {
      this.root = new Node(item);
    }
    const temp = this.root;
    while(temp.next) {
      temp = this.root.next;
    }
    temp.next = new Node(item);
    this.root = temp;
  }

  getFirst(item) {

  }

  getLast(item) {

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

// ll.insertLast(8);
// ll.insertLast(8);
// ll.insertLast(8);
// ll.insertLast(8);

console.log(ll.root);
console.log(ll.size())
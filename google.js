class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  addItem(x) {
    const newNode = new Node(x);
   if(!this.head){
     this.head = newNode;
   }
   let tail = this.head.next;
   if(!tail){
     tail = newNode;
   }

   this.head.next = tail
  }
}

const ll = new LinkedList();
ll.addItem('50');
ll.addItem('500');
ll.addItem('510');
ll.addItem('530');
ll.addItem('550');



console.log(ll);

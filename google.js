class Node{
  constructor(val){
    this.value = val || null;
    this.next = null;
  }
}
class LinkedList{
  constructor(){
    this.head = new Node();
  }
  addItem(x){
   if(!this.head.value){
     this.head.value = x;
   } else {
     this.head.next = new Node();
     this.head.next.value = x;
   }
   }
}

const ll = new LinkedList();
ll.addItem('50');
ll.addItem('500');

console.log(ll);

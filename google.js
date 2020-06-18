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
    if(this.head.value){
      this.head = this.head.next;
    } else {
      this.head.value = x;
      this.head.next = new Node(); 
    }
    console.log(this.head);
   }
}

const ll = new LinkedList();
ll.addItem('50');
ll.addItem('500');

console.log(ll);
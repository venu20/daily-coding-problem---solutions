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
    console.log(this.head);
  //  if(this.head.value){
  //    this.head = this.head.next;
  //    this.addItem(x);
  //  }else {
  //    this.head.value = x;
  //  }
   }
}

const ll = new LinkedList();
ll.addItem('50');
ll.addItem('500');

console.log(ll);
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    isEmpty() {
      return !this.head;
    }
  
    print() {
      if (this.isEmpty()) return 'List is empty.';
      let output = [];
      let ptr = this.head;
      while (ptr) {
        output.push(ptr.value);
        ptr = ptr.next;
      }
      return output;
    }
  
    insert(val, pos) {
      let node = new Node(val);
      // Insertion in Empty List
      if (this.isEmpty()) {
        this.head = node;
        return;
      }
      // Insertion at Head
      if (pos === 1) {
        node.next = this.head;
        this.head = node;
      } else {
        let ptr = this.head;
        // Insert at any Position
        console.log({ pos });
      }
    }
  }
  
  const list = new LinkedList();
  console.log(list.isEmpty());
  list.insert(10);
  list.insert(5, 1);
  list.insert(3, 1);
  list.insert(20, 2);
  
  console.log(list.print());
  
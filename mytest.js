class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  isEmpty() {
    return !this.length;
  }

  size() {
    return this.length;
  }

  print() {
    if (this.isEmpty()) return "List is empty.";
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
    } else if (pos === 0) {
      // Insertion at Head
      node.next = this.head;
      this.head = node;
    } else {
      // Insert at any Position
      let ptr = this.head;
      if (pos < this.length) {
        for (let i = 0; i < pos - 1; i++) {
          ptr = ptr.next;
        }
        node.next = ptr.next;
        ptr.next = node;
      } else {
        // Insert at last
        while (ptr.next) {
          ptr = ptr.next;
        }
        ptr.next = node;
      }
    }
    this.length++;
  }

  removeWithInd(pos) {
    let removedElem;
    if (pos === 0) {
      removedElem = this.head;
      this.head = this.head.next;
    } else if (pos > this.length) {
      return "Not a valid index";
    } else {
      let shrink = pos === this.length ? 2 : 1;
      let ptr = this.head;
      for (let i = 0; i < pos - shrink; i++) {
        ptr = ptr.next;
      }
      removedElem = ptr.next;
      ptr.next = shrink === 2 ? null : ptr.next.next;
    }
    this.length--;
    return removedElem.value;
  }

  removeFromEndPos(pos) {
    let ptr = this.head
    if(pos = this.length) {
        ptr = ptr.next
    } else {
        for(let i = 0; i < this.length - pos - 1; i++) {
            ptr = ptr.next
        }
        ptr.next = ptr.next.next
    }
    this.length--
  }

  reverseList() {
    let left = null
    let ptr = this.head
    while(ptr) {
        console.log(ptr.value)
        let temp = ptr.next
        ptr.next = left
        left = ptr
        ptr = temp
    }
    this.head = left
  }

  getMidElem() {

  }
}

const list = new LinkedList();
console.log(list.isEmpty());
list.insert(10);
console.log(list.size());
list.insert(5, 0);
console.log(list.size());
list.insert(3, 0);
list.insert(4, 1);
list.insert(20, 20);

console.log(list.print());
console.log("size: ", list.size());


// console.log("Removed value: ", list.removeWithInd(5))
// console.log("Removed value: ", list.removeWithInd(0))
// console.log(list.remove(0))

// console.log(list.print());
// console.log(list.size());

// console.log(list.removeFromEndPos(2))

// console.log(list.print());
// console.log(list.size());

list.reverseList()

console.log(list.print());
console.log(list.size());

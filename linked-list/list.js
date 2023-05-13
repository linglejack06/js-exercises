class Node {
  constructor (val = null, next = null) {
    this.val = val;
    this.next = next;
  }
}
class List {
  constructor() {
    this.listHead = null;
    this.listTail = null;
    this.count = 0;
  }
  append(value) {
    if (this.listHead === null) {
      this.listHead = new Node(value);
    } else {
      let tmp = this.listHead;
      while(tmp.next !== null) {
        tmp = tmp.next
      }
      let newNode = new Node(value)
      tmp.next = newNode;
      this.listTail = newNode;
    }
    this.count += 1;
  }
  prepend(value) {
    let newHead = new Node(value);
    newHead.next = this.listHead;
    this.listHead = newHead;
    this.count += 1;
  }
  insertAt(value, index) {
    let prevNode = this.at(index - 1);
    let nextNode = this.at(index);
    let newNode = new Node(value);
    newNode.next = nextNode;
    prevNode.next = newNode;
    this.count += 1;
  }
  size() {
    return this.count;
  }
  head() {
    return this.listHead;
  }
  tail() {
    return this.listTail;
  }
  // zero indexed like array, 2 returns third value
  at(i) {
    if (i > this.count) return 'Value exceeds list length';
    let tmp = this.listHead;
    for (let j = 0; j < i; j++) {
      tmp = tmp.next;
    }
    return tmp;
  }
  pop() {
    // - 2 because zero indexed and for loop runs up to current value due to structure
    let newTail = this.at(this.count - 2);
    newTail.next = null;
    this.listTail = newTail;
    this.count -= 1;
  }
  removeAt(index) {
    if(this.count - 1 === index) {
      this.pop();
      return;
    } else if (index >= this.count) {
      return 'Index exceeds length of list';
    }
    let prevNode = this.at(index - 1);
    let nextNode = this.at(index + 1);
    prevNode.next = nextNode;
    this.count -= 1;
  }
  contains(value) {
    let tmp = this.listHead;
    while(tmp !== null) {
      if(tmp.val == value) return true;
      tmp = tmp.next;
    }
    return false;
  }
  find(value) {
    let index = 0;
    let tmp = this.listHead;
    while(tmp !== null) {
      if(tmp.val === value) return index;
      tmp = tmp.next;
      index++;
    }
  }
  toString() {
    let tmp = this.listHead;
    let sentence = ''
    while(tmp !== null) {
      sentence += `( ${tmp.val} ) -> `;
      tmp = tmp.next;
    }
    sentence += 'null';
    return sentence;
  }
}
let list = new List();
list.append('hi');
list.append('hello');
list.append('hey');
list.append('bye');
list.prepend('new');
list.insertAt('hiiiii', 1);
list.removeAt(list.size() - 1);
console.log(list.toString());

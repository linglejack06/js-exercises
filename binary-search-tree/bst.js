class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
function buildTree(arr, start, end) {
  // sets specific pointer to null
  if (start > end) return null;
  let mid = parseInt((start + end) / 2)
  let parentNode = new Node(arr[mid]);
  // each side recursively called with left and right halves of array
  parentNode.left = buildTree(arr, start, mid - 1);
  parentNode.right = buildTree(arr, mid + 1, end);
  return parentNode;
}
function removeDuplicates(arr) {
  let filteredArr = arr.filter((n, index) => {
    return arr.indexOf(n) === index;
  })
  return filteredArr;
}
class Tree {
  constructor(arr) {
    let sortedArr = this.sortAndRemove(arr)
    this.root = buildTree(sortedArr, 0, sortedArr.length - 1);
  }
  sortAndRemove(arr) {
    let filteredArr = removeDuplicates(arr);
    return filteredArr.sort((a, b) => a - b); // returns true or false to place before or after
  }
  prettyPrint(node = this.root, prefix = '', isLeft = true) {
    if (node === null) {
       return;
    }
    if (node.right !== null) {
      this.prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  }
  insert(value) {
    this.root = this.insertRec(this.root, value);
  }
  insertRec(root = this.root, value) {
    if(root === null) {
      root = new Node(value);
      return root;
    }
    if (value < root.value) {
      root.left = this.insertRec(root.left, value);
    } else if(value > root.value) {
      root.right = this.insertRec(root.right, value);
    }
    return root;
  }
  delete(value) {
    this.root = this.deleteRec(this.root, value);
  }
  deleteRec(root = this.root, value) {
    if (root === null) return root;
    if (value < root.value) {
      root.left = this.deleteRec(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteRec(root.right, value);
    } else { //value is root value
      if (root.left == null) {
        return root.right;
      } else if(root.right == null) {
        return root.left;
      }
      root.value = this.minValue(root.right);
      root.right = this.deleteRec(root.right, root.value);
    }
    return root;
  }
  minValue(root) {
    let min = root.value;
    while(root.left != null) {
      min = root.left.value;
      root = root.left
    }
    return min;
  }
  find(value, root = this.root) {
    if(root === null) return null;
    if (root.value !== value) {
      if (value < root.value) {
        return this.find(value, root.left);
      } else if (value > root.value) {
        return this.find(value, root.right);
      }
    }
    return root;
  }
  levelOrder(cb) {
    let q = [this.root];
    let root = this.root;
    while(q.length) {
      let size = q.length
      for (let i = 0; i < size; i++) {
        root = q.shift();
        if (root.left !== null) q.push(root.left);
        if(root.right !== null) q.push(root.right);
        cb(root);
      }
    }
  }
  preorder(parentNode = this.root, cb) {
    if (parentNode === null) return;
    cb(parentNode.value);
    this.preorder(parentNode.left, cb);
    this.preorder(parentNode.right, cb);
  }
  inorder(parentNode = this.root, cb = null, arr = []) {
    if(parentNode === null) return;
    this.inorder(parentNode.left, cb, arr);
    if (cb) {
      cb(parentNode.value)
    }
    arr.push(parentNode.value);
    this.inorder(parentNode.right, cb, arr);
    return arr;
  }
  postorder(parentNode = this.root, cb) {
    if(parentNode === null) return;
    this.postorder(parentNode.left, cb);
    this.postorder(parentNode.right, cb);
    cb(parentNode.value)
  }
  height(node = this.node) {
   if (node === null) return 0;
   let leftHeight = this.height(node.left);
   let rightHeight = this.height(node.right);
   if (leftHeight > rightHeight) {
    return leftHeight + 1;
   } else {
    return rightHeight + 1;
   }
  }
  depth(node, root = this.root) {
    let depth = 0;
    while (node !== root) {
      if(node.value < root.value) {
        root = root.left;
        depth += 1;
      } else {
        root = root.right;
        depth += 1
      }
    }
    return depth
  }
  rebalance() {
    let newArr = this.inorder()
    console.log(newArr);
    this.root = buildTree(newArr, 0, newArr.length - 1)
  }
  isBalanced(node = this.root) {
    if(node === null) return true;
    let leftHeight = this.height(node.left);
    let rightHeight = this.height(node.right);
    let heightDiff = Math.abs(leftHeight - rightHeight);
    if (heightDiff <= 1 && this.isBalanced(node.left) == true && this.isBalanced(node.right) == true) {
      return true;
    } 
    return false;
  }
}
let tree = new Tree([1,2,3,4,5,6,7]);
tree.insert(8);
tree.insert(9);
tree.insert(10);
tree.prettyPrint()
console.log(tree.isBalanced());

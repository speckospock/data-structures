var BinarySearchTree = function(value) {
  this.value = value;
};

BinarySearchTree.prototype.left; //at some point, this will be a binarySearchTree

BinarySearchTree.prototype.right;

BinarySearchTree.prototype.insert = function(value) {
  //depthFirstLog will NOT be used. For now >.>
  //compare tree to value
  if (this.value < value) {
  //iff tree < value:
    //check if there's a right child
    if (this.right) {
      //if so: call tree.right.insert(value)
      this.right.insert(value);
    } else {
      //if not: tree.right = BST(value)
      this.right = new BinarySearchTree(value);
    }
  } else if (this.value > value) {
  //else iff tree > value:
    //check if there's a left child
    if (this.left) {
      //if so: call tree.left.insert(value)
      this.left.insert(value);
    } else {
      //if not: tree.left = BST(value)
      this.left = new BinarySearchTree(value);
    }  
  }
};

BinarySearchTree.prototype.contains = function() {};

BinarySearchTree.prototype.depthFirstLog = function (callback) {
  //apply callback to top node (this?)
  //for the left child, apply depthFirstLog(callback)
  //for the right child, apply depthFirstLog(callback)
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

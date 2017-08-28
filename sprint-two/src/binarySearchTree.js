var BinarySearchTree = function(value) {
  this.value = value;
  this.left;
  this.right;
  this.parent = null;
};

BinarySearchTree.prototype.children = function() {
  var output = [];

  !!this.left && output.push(this.left);
  !!this.right && output.push(this.right);

  return output;
};

//BinarySearchTree.prototype.numChilds
BinarySearchTree.prototype.size = function() { //a function which calls depthFirstLog to count each child
  var _count = 0;
  this.depthFirstLog(function() {
    _count++;
  });
  return _count;
};
//BinarySearchTree.prototype.height = function {returns log(numChilds)}

BinarySearchTree.prototype.insert = function(value) {
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
      this.right.parent = this;
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
      this.left.parent = this;
    }
  }
};

BinarySearchTree.prototype.contains = function(target) {
  //Returns true if this.value is target, else recursively calls contains on each child
  return this.value === target || this.children().reduce((wasFound, child) => {
    return wasFound || child.contains(target);
  }, false);
};

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  //apply callback to top node
  callback(this.value);

  //apply callback to each child node
  this.children().forEach((child) => {
    child.depthFirstLog(callback);
  });
};

BinarySearchTree.prototype.traverseDepthFirst = function(callback) {
  //apply callback to top node (this?)
  callback(this);

  //apply callback to each child node
  this.children().forEach((child) => {
    child.traverseDepthFirst(callback);
  });
};

BinarySearchTree.prototype.terminalNodes = function() {
  var output = [];
  this.traverseDepthFirst(function(node) {
    //debugger;
    if (!node.children().length) {
      output.push(node);
    }
  });
  return output;
};

BinarySearchTree.prototype.isUnbalanced = function() {
  var optimalNumber = Math.ceil(this.size() / 2);
  return (this.terminalNodes().length !== optimalNumber);
};

/*
 * Complexity: What is the time complexity of the above functions?
  Constructor function -> O(1), because it just creates and returns an object which delegates to the prototype
  Insert function -> O(log n), because it splits the tree in half each step, complexity depends only on the height of the tree
  Contains function -> O(log n), for the same reason as insert
  depthFirstLog function -> Overall: O(n)*O(callback), because we traverse every node, and perform O(callback) operation at each step.
 */

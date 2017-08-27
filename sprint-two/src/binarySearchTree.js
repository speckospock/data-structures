var BinarySearchTree = function(value) {
  this.value = value;
};

BinarySearchTree.prototype.left; //at some point, this will be a binarySearchTree

BinarySearchTree.prototype.right;

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

BinarySearchTree.prototype.contains = function(target) {
  //if this.value is target:
  if (this.value === target) {
    //return true;
    return true;
  } else {
  //else:
    //if left:
    if (this.left) {
      //call contains on left, if true return true
      if (this.left.contains(target)) {
        return true;
      }
    }
    //if right:
    if (this.right) {
      //call contains on right, if true return true
      if (this.right.contains(target)) {
        return true;
      }
    }
  }
  //outside of this return false
  return false;
};

BinarySearchTree.prototype.depthFirstLog = function (callback) {
  //apply callback to top node (this?)
  callback(this.value);
  //for the left child, apply depthFirstLog(callback)
  if (this.left) {
    this.depthFirstLog.call(this.left, callback);
  }
  //for the right child, apply depthFirstLog(callback)
  if (this.right) {
    this.depthFirstLog.call(this.right, callback);
  }
};

BinarySearchTree.prototype.traverseDepthFirst = function (callback) {
  //apply callback to top node (this?)
  callback(this);
  //for the left child, apply depthFirstLog(callback)
  if (this.left) {
    this.traverseDepthFirst.call(this.left, callback);
  }
  //for the right child, apply traverseDepthFirst(callback)
  if (this.right) {
    this.traverseDepthFirst.call(this.right, callback);
  }
};

BinarySearchTree.prototype.terminalNodes = function () {
  var output = [];
  this.traverseDepthFirst(function(node) {
    //debugger;
    if (!(node.left || node.right)) {
      output.push(node);
    }
  });
  return output;
};

BinarySearchTree.prototype.isUnbalanced = function () {
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

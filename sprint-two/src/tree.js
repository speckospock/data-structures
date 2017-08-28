var Tree = function(value) {
  var newTree = {};
  newTree.value = value || null;
  newTree.children = [];
  newTree.parent = null;

  // extend newTree with treeMethods
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {

  // create a tree with value of value
  var newChild = Tree(value);
  // add parent property to newChild
  newChild.parent = this;
  // push the new tree to tree.children
  this.children.push(newChild);
  //
};

treeMethods.contains = function(target) {
  // returns true if target is current tree's value
  // recursively calls itself on each child tree if not
  return (this.value === target) || !!this.children.reduce((found, child) => {
    return (child.contains(target) || found);
  }, false);
};

//treeMethods is depth-first
treeMethods.traverse = function(callback) {
  // call cb on this
  callback(this);
  // iterate through children and call cb
  this.children.forEach((child) => child.traverse(callback));
};

treeMethods.siblings = function() {
  //if the tree has a parent, return all children except this tree.
  //Potentially need to bind this value
  if (this.parent) {
    var thisValue = this.value;
    return this.parent.children.filter((sibling) => (sibling.value !== thisValue));
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 // Tree is O(n), due to extend being O(n)
 // addChild is O(1), only requiring two operations
 // contains is O(n), as worst case is traversing every node
 // traverse is O(n), for the same reason as contains
 */

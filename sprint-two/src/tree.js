var Tree = function(value) {
  var newTree = {};
  newTree.value = value || null;

  // your code here
  newTree.children = [];  // fix me

  // extend newTree with treeMethods
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // create a tree with value of value
  var newChild = Tree(value);
  // push the new tree to tree.children
  this.children.push(newChild);
};

treeMethods.contains = function(target) {
  // check if target is current tree's value
  if (this.value === target) {
  // if so, return true.
    return true;
  } else {
    // else, iterate through current tree's children
    for (let i = 0; i < this.children.length; i++) {
      // if child contains value return true
      if (this.children[i].contains(target)) {
        return true;
      }
    }
  }
  // return false
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 // Tree is O(n), due to extend being O(n)
 // addChild is O(1), only requiring two operations
 // contains is O(n), as worst case is traversing every node
 */

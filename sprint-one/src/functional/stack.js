var Stack = function() {
  var someInstance = {};

  // Create a number which represents size of stack, initially 0;
  var count = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    // add a new value to stack storage under key of stack size;
    // increment number of items in stack;
  };

  someInstance.pop = function() {
    // iff stack size > 0, do this:
      // decrement number of items in stack;
      // grab element of stack storage whose key is stack size;
      // return grabbed element;
    // else, do nothing
  };

  someInstance.size = function() {
    // return number of items in stack
    return count;
  };

  return someInstance;
};

var Stack = function() {
  var someInstance = {};

  // Create a number which represents size of stack, initially 0;
  var count = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    // add a new value to stack storage under key of stack size;
    storage[count] = value;
    // increment number of items in stack;
    count++;
  };

  someInstance.pop = function() {
    // iff stack size > 0, do this:
    if (count > 0) {
      // decrement number of items in stack;
      count--;
      // grab element of stack storage whose key is stack size;
      return storage[count];
      // return grabbed element;
    // else, do nothing
    }
  };

  someInstance.size = function() {
    // return number of items in stack
    return count;
  };

  return someInstance;
};

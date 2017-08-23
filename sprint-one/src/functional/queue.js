var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Create a number to represent highest value for key (end of queue)
  // Create a number to represent lowest value for key (front of queue)


  // Implement the methods below

  someInstance.enqueue = function(value) {
    // decrement lowest value for key;
    // Store val in storage at position of lowest value;
  };

  someInstance.dequeue = function() {
    // grab value at highest value for key;
    // decrement highest value;
    // return grabbed value;
  };

  someInstance.size = function() {
    // return highest value for key - lowest value for key;
  };

  return someInstance;
};

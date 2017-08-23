var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Create a number to represent highest value for key (end of queue)
  var highest = 0;
  // Create a number to represent lowest value for key (front of queue)
  var lowest = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    // decrement lowest value for key;
    lowest--;
    // Store val in storage at position of lowest value;
    storage[lowest] = value;
  };

  someInstance.dequeue = function() {
    // decrement highest value;
    // return grab value at highest value for key;
  };

  someInstance.size = function() {
    // return highest value for key - lowest value for key;
    return highest - lowest;
  };

  return someInstance;
};

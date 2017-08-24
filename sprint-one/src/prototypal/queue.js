var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // create an object with Object.create to represent queue
  var newQ = Object.create(queueMethods);
  // return queue
  return newQ;
};

var queueMethods = {
  // Create a storage obj (empty)
  'storage': {},
  // Create a highest property, 0
  'highest': 0,
  // Create a lowest prop, 0
  'lowest': 0,
  // Create a size function
  'size': function () {
    // Return highest-lowest
    return this.highest - this.lowest;
  },
  // Create enqueue function with param value
    // Decrement lowest
    // Set storage[lowest] to value
  // Create dequeue function, no parameters
    // iff highest > lowest, do:
      // decrement highest
      // return storage[highest]
};

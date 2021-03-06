var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // create object to represent queue;
  var queue = {};
  // create property of queue: object to store values;
  queue.storage = {};
  // create property of queue: highest key in storage;
  queue.highest = 0;
  // create property of queue: lowest key in storage;
  queue.lowest = 0;
  // extend queue with queueMethods;
  _.extend(queue, queueMethods);
  // return queue;
  return queue;
};

var queueMethods = {
  // create a method 'size'
  'size': function() {
    // return highest value - lowest value key in storage;
    return this.highest - this.lowest;
  },
  // create a method 'enqueue' with parameter 'value'
  'enqueue': function(value) {
    // decrement lowest
    this.lowest--;
    // add value at key lowest to storage;
    this.storage[this.lowest] = value;
  },
  // create a method 'dequeue'
  'dequeue': function() {
    // iff highest > lowest, do:
    if (this.highest > this.lowest) {
      // decrement highest
      this.highest--;
      // return value at highest storage key
      return this.storage[this.highest];
    }
  }
};

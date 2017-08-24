var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // Add a count property to the instance stack
  this.count = 0;
  // Add a storage property to the instance stack
  this.storage = {};
};

// Add a size method to stack proto
Stack.prototype.size = function () {
  // Return this stack's count
  return this.count;
};
// Add a push method to stack proto with param value
Stack.prototype.push = function (value) {
  // Set this stack's storage[count] to value
  this.storage[this.count] = value;
  // Increment this stack's count
  this.count++;
};
// Add a pop method to stack proto
Stack.prototype.pop = function () {
  // iff this stack's count > 0:
  if (this.count > 0) {
    // decrement count
    this.count--;
    // return value at this stack's storage[count]
    return this.storage[this.count];
  }
};

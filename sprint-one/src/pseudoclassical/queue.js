var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //
};

//Add things to the prototype here
//Add a storage property to queue prototype
Queue.prototype.storage = {};
//Add a highest property to queue prototype
Queue.prototype.highest = 0;
//Add a lowest property to queue prototype
Queue.prototype.lowest = 0;
//Add a size method to queue prototype
Queue.prototype.size = function () {
  //return the highest - lowest
  return this.highest - this.lowest;
};
//Add an enqueue method to queue prototype
//Add an dequeue method to queue prototype

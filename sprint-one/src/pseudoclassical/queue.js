var Queue = function() {};

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
Queue.prototype.enqueue = function(value) {
  //decrement lowest
  this.lowest--;
  //set queue storage[lowest] to value
  this.storage[this.lowest] = value;
};
//Add an dequeue method to queue prototype
Queue.prototype.dequeue = function() {
  //iff highest > lowest:
  if (this.highest > this.lowest) {
    //decrement highest
    this.highest--;
    //return queue storage[highest]
    return this.storage[this.highest];
  }
};

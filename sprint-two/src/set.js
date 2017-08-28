var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  set._length = 0;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  //debugger;
  //to handle any kind of object, we stringify the item to create the key
  var key = JSON.stringify(item);
  //if we're not modifying a value, increment length
  !this._storage[key] && this._length++;
  // assign value at set storage at key item to true
  this._storage[key] = item;
};

setPrototype.contains = function(item) {
  // return set storage at key item or false
  var key = JSON.stringify(item);

  return (this._storage[key] === item) || false;
};

setPrototype.remove = function(item) {
  var key = JSON.stringify(item);
  //if there is something to remove, decrement length
  this._storage[key] && this._length--;
  // assign value at set storage at key item to false
  delete this._storage[key];
};


/*
 * Complexity: What is the time complexity of the above functions?
   // All three methods only require object key lookups, so are O(1)
   // Constructor complexity depends on the size of the prototype, so runs at O(n)
 */

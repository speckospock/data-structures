var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  // assign value at set storage at key item to true
  this._storage[item] = true;
};

setPrototype.contains = function(item) {
  // return set storage at key item or false
  return this._storage[item] || false;
};

setPrototype.remove = function(item) {
  // assign value at set storage at key item to false
  this._storage[item] = false;
};

/*
 * Complexity: What is the time complexity of the above functions?
   // All three methods only require object key lookups, so are O(1)
   // Constructor complexity depends on the size of the prototype, so runs at O(n)
 */

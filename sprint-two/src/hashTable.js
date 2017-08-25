

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  // set hash function to = memoized getIndex... by:
    // _.memoize(getIndex...)
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // if this._storage[index] is undefined:
    // set it to {k:v}
  // else
    // _.extend this._storage[index] with {k:v}
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // return this._storage[index][k]
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // if this._storage[index][k] not undefined
    // delete this._storage[index][k]
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

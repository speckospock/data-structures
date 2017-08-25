

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  // set hash function to = memoized getIndex... by
  // _.memoize(getIndex...)
  this._newHash = _.memoize(getIndexBelowMaxForKey);
};

HashTable.prototype.insert = function(k, v) {
  var index = this._newHash(k, this._limit);
  var newObj = {};
  newObj[k] = v;
  // if this._storage[index] is undefined:
  if (this._storage.get(index) === undefined) {
    // set it to {k:v}
    this._storage.set(index, newObj);
  } else {
  // else
    // _.extend this._storage[index] with {k:v}
    _.extend(this._storage.get(index), newObj);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = this._newHash(k, this._limit);
  // return this._storage[index][k]
  return this._storage.get(index)[k];
};

HashTable.prototype.remove = function(k) {
  var index = this._newHash(k, this._limit);
  // if this._storage[index][k] not undefined
  if (this._storage.get(index) !== undefined) {
    // delete this._storage[index][k]
    delete this._storage.get(index)[k];
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

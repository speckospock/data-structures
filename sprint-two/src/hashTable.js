

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = this.getIndexBelowMaxForKey(k, this._limit);
  //
  // if this._storage[index] is undefined:
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, []);
  }
  // iterate over bucket

    // if bucket[i][0] is key
      // set bucket[i][1] to value
    // else push into bucket [k,v]
};

HashTable.prototype.retrieve = function(k) {
  var index = this.getIndexBelowMaxForKey(k, this._limit);
  // iterate over bucket
    // if bucket[i][0] === k
      // return bucket[i][1]

};

HashTable.prototype.remove = function(k) {
  var index = this.getIndexBelowMaxForKey(k, this._limit);
  // if this._storage[index][k] not undefined
  if (this._storage.get(index) !== undefined) {
    var toDelete;
    // iterate over bucket
      // if bucket[i][0] = k
        // toDelete = i
    // if toDelete is defined
      // delete bucket[i]
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

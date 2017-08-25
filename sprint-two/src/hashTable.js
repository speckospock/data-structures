var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //debugger;
  // if this._storage[index] is undefined:
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, []);
    this._storage.get(index).push([k, v]);
  } else {
    // iterate over bucket
    for (let i = 0; i < this._storage.get(index).length; i++) {
      // if bucket[i][0] is key
      if (this._storage.get(index)[i][0] === k) {
        // set bucket[i][1] to value
        this._storage.get(index)[i][1] = v;
      } else {
      // else push into bucket [k,v]
        this._storage.get(index).push([k, v]);
      }
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // iterate over bucket
  for (let i = 0; i < this._storage.get(index).length; i++) {
    // if bucket[i][0] === k
    if (this._storage.get(index)[i][0] === k) {
      // return bucket[i][1]
      return this._storage.get(index)[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // if this._storage[index][k] not undefined
  if (this._storage.get(index) !== undefined) {
    var toDelete;
    // iterate over bucket
    for (let i = 0; i < this._storage.get(index).length; i++) {
      // if bucket[i][0] = k
      if (this._storage.get(index)[i][0] === k) {
        // toDelete = i
        toDelete = i;
      }
    }
    // if toDelete is defined
    if (toDelete !== undefined) {
      // delete bucket[i]
      this._storage.get(index).splice(toDelete, 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 // All functions above have complexity O(1) wrt their inputs.
 // However, with respect to the size of each bucket, they run at O(n).
 */

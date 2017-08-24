var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  //we're using Object.create(...)

  //create new obj using Object.create(stackMethods)
  var newStack = Object.create(stackMethods);
  //return object
  return newStack;
};

var stackMethods = {
  //create a count property, set it to zero
  'count': 0,
  //create a storage property, set it to an empty object
  'storage': {},
  //create a size property, set it to a function with no parameters
  'size': function() {
    //return the stack storage object's size
    return this.count;
  },
  //create a push property, set it to a function with parameter value
  'push': function(value) {
    //add value to storage at key size
    this.storage[this.count] = value;
    //increment size
    this.count++;
  }
  //create a pop property, set it to a function with no parameters
    //iff stack size > 0
      //decrement count
      //return the value at stack storage[count]
};

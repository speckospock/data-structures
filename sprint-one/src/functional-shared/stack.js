var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //create a new object to be our stack
  var newStack = {};
  //create a storage object that is a property of stack
  newStack.storage = {};
  //create a number to represent size of the stack storage object
  newStack.count = 0;
  //extend stack with stackMethods
  _.extend(newStack, stackMethods);
  //return the stack
  return newStack;
};

var stackMethods = {
  //create a push function with key 'push' with parameter value
  'push' : function(value){
    //add value to stack storage
    this.storage[this.count] = value;
    //increment stack size
    this.count++;
  },
  //create a pop function with no parameters with key 'pop'
    //decrement stack size
    //return value at stack storage[size]
  //create a size function with key 'size'
  'size' : function(){
    //return size (created at line 7)
    return this.count;
  }
};

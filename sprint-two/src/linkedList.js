var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  //list.size = 0;

  list.addToTail = function(value) { //value is the node to add
    //creating a new node from value
    var newNode = new Node(value);
    //iff tail isn't null:
    if (list.tail) {
      //set tail.next to value
      list.tail.next = newNode;
    }
    //set tail to value
    list.tail = newNode;
    //if there's no head, set head to tail
    if (!list.head) {
      list.head = list.tail;
    }
  };

  list.removeHead = function() {
    //check to see if there is a head
    if (list.head) {
      //set old head to head (for reference)
      var oldHead = list.head;
      //set head to head.next
      list.head = list.head.next || null;

      //delete old head from existence?
      //set old head.next to null
      oldHead.next = null;
      return oldHead.value;
    }
    //return the head?
  };

  list.contains = function(target) {
    //while true:
    var current = list.head;
    while (true) {
      //current = current || head
      //if current.value is target, return true
      if (current.value === target) {
        return true;
      }
      //elif current.next is null, break
      if (!current.next) {
        break;
      } else {
        current = current.next;
      }
    }
    //return false
    return false;
  };

  list.forEachNode = function(callback) {
    //debugger;
    // start with callback head's value
    var current = list.head;
    callback(current.value);
    // while current node's next prop isn't null:
    while (current.next) {
      // callback on next node's value
      current = current.next;
      callback(current.value);
    }
  };
  return list;
};

var Node = function(value) {
  var node = {};
  node.value = value;
  node.next = null;
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 // Node is O(1) wrt input value
 // linkedList is also O(1) since it has no inputs
 // addToTail also O(1), since all operations in it are O(1)
 // removeHead also O(1) for same reason
 // contains is O(1) wrt input, but inner loop is O(n) wrt the size of the linked list
 // forEachNode is O(1)*O(callback) wrt its inputs, but O(n)*0(callback)
 */

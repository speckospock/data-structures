var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) { //value is the node to add
    //creating a new node from value
    var newNode = new Node(value);
    //iff tail isn't null:
    if (list.tail !== null) {
      //set tail.next to value
      list.tail.next = newNode;
    }
    //set tail to value
    list.tail = newNode;
  };

  list.removeHead = function() {
    //set old head to head (for reference)
    //set head to head.next
    //delete old head from existence?
    //set old head.next to null
  };

  list.contains = function(target) {
    //while true:
      //current = current || head
      //if current.value is target, return true
      //elif current.next is null, break
    //return false
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
 */

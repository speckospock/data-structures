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
    //if there's no head, set head to tail
    if (list.head === null){
      list.head = list.tail;
    }
  };

  list.removeHead = function() {
    debugger;
    //check to see if there is a head
    if (list.head !== null) {
      //set old head to head (for reference)
      var oldHead = list.head;
      //set head to head.next
      list.head = list.head.next;

      //delete old head from existence?
      //set old head.next to null
      oldHead.next = null;
    }
    //return the head?
    return list.head;
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


// Instantiate a new graph
var Graph = function() {
};

//(each node is an array)
//add a property to the prototype to hold node array, initialize to []
Graph.prototype.nodes = [];
//add an 'edges' property to hold edges array
Graph.prototype.edges = [];

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(value) {
  //add an empty array to node array[value]
  this.nodes[value] = true;
  this.edges[value] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(value) {
  //is now constant time!!!!!!! woop woop
  //return this.nodes[value] !== undefined
  return this.nodes[value] !== undefined;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(value) {
  //iterate over edges[value]
  debugger;
  for (let i = 0; i < this.edges[value].length; i++) {
    //iterate over those, and removeEdge (value, them)
    this.removeEdge(value, this.edges[value][i]);
  }
  //set nodes[value] to undefined;
  this.nodes[value] = undefined;
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //return edges[fromNode][toNode] !== undefined
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //set edges[fromNode][toNode] = true
  //set edges[toNode][fromNode] = true
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  //set edges[fromNode][toNode] = undefined
  this.edges[fromNode][toNode] = undefined;
  //set edges[toNode][fromNode] = undefined
  this.edges[toNode][fromNode] = undefined;
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  //for each in node array,
    //cb(that node)
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

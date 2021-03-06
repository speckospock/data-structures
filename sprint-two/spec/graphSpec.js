describe('graph', function() {
  var graph;

  beforeEach(function() {
    graph = new Graph();
  });

  it('should have methods named "addNode", "contains", "removeNode", "addEdge", "hasEdge", "removeEdge" and "forEachNode"', function() {
    expect(graph.addNode).to.be.a('function');
    expect(graph.contains).to.be.a('function');
    expect(graph.removeNode).to.be.a('function');
    expect(graph.hasEdge).to.be.a('function');
    expect(graph.addEdge).to.be.a('function');
    expect(graph.removeEdge).to.be.a('function');
    expect(graph.forEachNode).to.be.a('function');
  });

  it('should store values as nodes that were inserted', function() {
    graph.addNode(1);
    expect(graph.contains(1)).to.equal(true);
  });

  it('should remove nodes that were inserted', function() {
    graph.addNode(2);
    expect(graph.contains(2)).to.equal(true);
    graph.removeNode(2);
    expect(graph.contains(2)).to.equal(false);
  });

  it('should create edges between two nodes', function() {
    graph.addNode(2);
    graph.addNode(1);
    graph.addNode(3);
    graph.addEdge(3, 2);
    expect(graph.hasEdge(3, 2)).to.equal(true);
    expect(graph.hasEdge(3, 1)).to.equal(false);
  });

  it('should list all of a node\'s edges', function() {
    graph.addNode(4);
    graph.addNode(5);
    graph.addNode(347);
    graph.addNode(66);
    graph.addEdge(5, 4);
    graph.addEdge(5, 347);
    graph.addEdge(5, 66);
    expect(graph.getEdges(5)).to.eql([4, 66, 347]);
  });

  it('should list all unique edges within the graph', function() {
    graph.addNode(4);
    graph.addNode(5);
    graph.addNode(347);
    graph.addNode(66);
    graph.addEdge(5, 4);
    graph.addEdge(5, 347);
    graph.addEdge(5, 66);
    graph.addEdge(4, 347);
    graph.addEdge(66, 347);
    expect(graph.getUniqueEdges()).to.eql([[4, 5], [4, 347], [5, 66], [5, 347], [66, 347]]);
  });

  it('should remove edges between nodes', function() {
    graph.addNode(4);
    graph.addNode(5);
    graph.addEdge(5, 4);
    expect(graph.hasEdge(4, 5)).to.equal(true);
    graph.removeEdge(5, 4);
    expect(graph.hasEdge(4, 5)).to.equal(false);
  });

  it('should remove edges between nodes when a node is removed', function() {
    graph.addNode(4);
    graph.addNode(5);
    graph.addEdge(5, 4);
    expect(graph.hasEdge(4, 5)).to.equal(true);
    graph.removeNode(5);
    expect(graph.hasEdge(4, 5)).to.equal(false);
  });

  it('should execute a callback on each node in the graph', function() {
    var connectToFive = function(item) {
      graph.addEdge(item, 5);
    };
    graph.addNode(5);
    graph.addNode(2);
    graph.addNode(1);
    graph.addNode(3);
    graph.forEachNode(connectToFive);
    expect(graph.hasEdge(2, 5)).to.equal(true);
    expect(graph.hasEdge(1, 5)).to.equal(true);
    expect(graph.hasEdge(3, 5)).to.equal(true);
    expect(graph.hasEdge(5, 5)).to.equal(true);
  });

  it('should allow a graph with no edges', function() {
    graph.addNode(5);
    graph.addNode(2);
    graph.addNode(1);
    expect(graph.contains(5)).to.be.true;
    expect(graph.contains(2)).to.be.true;
    expect(graph.contains(1)).to.be.true;
    expect(graph.hasEdge(1, 2)).to.be.false;
    expect(graph.hasEdge(5, 1)).to.be.false;
    expect(graph.hasEdge(2, 5)).to.be.false;
  });

  it('should only have symmetrical edges', function() {
    graph.addNode(5);
    graph.addNode(2);
    graph.addNode(1);
    graph.addEdge(1, 2);
    graph.addEdge(1, 5);
    graph.addEdge(2, 5);
    expect(graph.hasEdge(2, 1)).to.be.true;
    expect(graph.hasEdge(5, 1)).to.be.true;
    expect(graph.hasEdge(5, 2)).to.be.true;
  });

});

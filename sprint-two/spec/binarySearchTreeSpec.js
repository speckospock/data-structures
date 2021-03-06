describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = new BinarySearchTree(5); //to use pseduoclassical
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a('function');
    expect(binarySearchTree.contains).to.be.a('function');
    expect(binarySearchTree.depthFirstLog).to.be.a('function');
  });

  it('should insert values at the correct location in the tree', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
    //debugger;
  });

  it('should return the parent of a tree', () => {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    expect(binarySearchTree.parent).to.equal.null;
    expect(binarySearchTree.left.parent.value).to.equal(5);
  });

  it('should return the children of a tree as an array', () => {
    binarySearchTree.insert(2);
    binarySearchTree.insert(8);
    var childrenValues = binarySearchTree.children().map((child) => child.value);
    expect(childrenValues).to.eql([2, 8]);
  });

  it('should return the correct number of terminal nodes in the tree', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.terminalNodes().length).to.eql(2);
  });

  it('should determine when a tree is unbalanced', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.isUnbalanced()).to.be.true;

    var balancedTree = new BinarySearchTree(6);
    balancedTree.insert(3);
    balancedTree.insert(7);
    balancedTree.insert(2);
    balancedTree.insert(5);
    // debugger;
    expect(balancedTree.isUnbalanced()).to.be.false;
  });

  it('should have a working "contains" method', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function() {
    var array = [];
    var func = function(value) {
      array.push(value);
    };
    // binarySearchTree.insert(5) ??
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([5, 2, 3]);
  });

  it('should tell us how many nodes are in the tree', function() {
    //expect the initial value to be 1,
    expect(binarySearchTree.size()).to.equal(1);
    //do stuff, and change expectation
    binarySearchTree.insert(3);
    expect(binarySearchTree.size()).to.equal(2);
    binarySearchTree.insert(8);
    binarySearchTree.insert(57);
    expect(binarySearchTree.size()).to.equal(4);
  });
});

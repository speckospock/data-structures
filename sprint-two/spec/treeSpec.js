describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.hasOwnProperty('value')).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function() {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  it('should apply a callback function to each node in the tree', function () {
    var nodes = [];
    tree.value = 1;
    tree.addChild(2);
    tree.addChild(3);
    tree.addChild(4);
    tree.children[1].addChild(5);
    tree.forEachNode(function (element) {
      nodes.push(element.value);
    });
    expect(nodes).to.eql([1, 2, 3, 5, 4]);
  });

  it('should return the parent of a node', function () {
    tree.value = 1;
    tree.addChild(2);
    tree.addChild(3);
    tree.addChild(4);
    tree.children[1].addChild(5);
    expect(tree.parent).to.equal(null);
    expect(tree.children[2].parent.value).to.equal(1);
    expect(tree.children[1].children[0].parent.value).to.equal(3);
  });

  it('should return the siblings (all the parent\'s children) of a node', function () {
    tree.value = 1;
    tree.addChild(2);
    tree.addChild(3);
    tree.addChild(4);
    tree.children[1].addChild(5);
    expect(tree.children[0].siblings.map((el) => el.value)).to.eql([3, 4]);
    expect(tree.children[1].siblings.map((el) => el.value)).to.eql([2, 4]);
    expect(tree.children[2].siblings.map((el) => el.value)).to.eql([2, 3]);
    expect(tree.siblings).to.eql([]);
  });

});

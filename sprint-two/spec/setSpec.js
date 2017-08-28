describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.be.true;
    expect(set.contains('Susan Sarandon')).to.be.true;
  });

  it('should return whether a value is contained in a set', function() {
    set.add('Peter Dinklage');
    expect(set.contains('Peter Dinklage')).to.be.true;
    set.add('George Michael');
    expect(set.contains('George Michael')).to.be.true;
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.be.false;
  });

  it('should not allow duplicate values to be added to a set', function() {
    set.add('Peter Dinklage');
    set.add('Peter Dinklage');
    set.remove('Peter Dinklage');
    expect(set.contains('Peter Dinklage')).to.be.false;
  });

  //implement set size test
  it('should return the number of members within the set', () => {
    set.add('Peter Dinklage');
    set.add('John Stamos');
    set.add('Billy Bob Thornton');
    set.add('Vin Diesel');
    expect(set._length).to.equal(4);
    set.remove('Billy Bob Thornton');
    expect(set._length).to.equal(3);
  });

  //make set support any type of element?
});

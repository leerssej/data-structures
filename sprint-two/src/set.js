var Set = function() {
  this._storage = [];
};

Set.prototype.add = function(item) {
  if (!this.contains(item)) {
    return this._storage.push(item);
  }
};

Set.prototype.contains = function(item) {
  return this._storage.includes(item);
};

Set.prototype.remove = function(item) {
  var index = this._storage.indexOf(item);
  this._storage.splice(index, 1);
};

/*
 * Complexity: What is the time complexity of the above functions?
 * add: O(1)
 * contains: O(n)
 * remove: O(n)
 */
